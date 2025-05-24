// WhatsApp Management Page
'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, RefreshCw, Plus, Code, Trash2 } from 'react-feather';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';

interface Session {
  sessionId: string;
  status?: string | null;
  message?: string | null;
  qr?: string | null;
}

export default function WhatsAppManagementPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [newSessionId, setNewSessionId] = useState('');
  const [notificationSession, setNotificationSession] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [rootSessionId, setRootSessionId] = useState<string | null>(null);
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [qrSessionId, setQrSessionId] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    // Ambil session utama dari .env (dari public env agar bisa diakses FE)
    setRootSessionId(process.env.NEXT_PUBLIC_WHATSAPP_SESSION_ID || null);
    fetchSessions();
  }, []);

  async function fetchSessions() {
    setLoading(true);
    const res = await fetch('/api/whatsapp/session/listAll');
    const data = await res.json();
    // Perbaiki: jika data.sessions ada, gunakan data.sessions, jika tidak, fallback ke data
    setSessions(Array.isArray(data.sessions) ? data.sessions : Array.isArray(data) ? data : []);
    setLoading(false);
  }

  async function handleStartSession() {
    if (!newSessionId) return;
    await fetch(`/api/whatsapp/session/start/${newSessionId}`, { method: 'POST' });
    setNewSessionId('');
    fetchSessions();
  }

  async function handleRestart(sessionId: string) {
    await fetch(`/api/whatsapp/session/restart/${sessionId}`, { method: 'POST' });
    fetchSessions();
  }

  async function handleTerminate(sessionId: string) {
    await fetch(`/api/whatsapp/session/terminate/${sessionId}`, { method: 'POST' });
    fetchSessions();
  }

  async function handleViewQr(sessionId: string) {
    setQrImage(null);
    setQrSessionId(sessionId);
    setShowQrModal(true);
    const res = await fetch(`/api/whatsapp/session/qr/${sessionId}`, { method: 'POST' });
    const data = await res.json();
    if (data.qrImage) setQrImage(data.qrImage);
    fetchSessions();
  }

  async function handleSetNotification(sessionId: string) {
    await fetch('/api/whatsapp/session/setNotification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    });
    setNotificationSession(sessionId);
  }

  async function handleBulkTerminate() {
    await fetch('/api/whatsapp/session/terminateAll', { method: 'POST' });
    fetchSessions();
  }

  const filteredSessions = sessions.map(session => ({
    ...session,
    status: session.message || session.status || ''
  })).filter(session => {
    return (
      session.sessionId.includes(search) &&
      (statusFilter === 'all' || session.status === statusFilter)
    );
  });

  return (
      <div className="p-6 space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">WhatsApp Sessions</h1>
          <p className="text-muted-foreground">Manage your WhatsApp API sessions</p>
        </div>
        <Card className="glass-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>All currently active WhatsApp sessions</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="New Session ID"
                  value={newSessionId}
                  onChange={e => setNewSessionId(e.target.value)}
                  className="w-40"
                />
                <Button className="bg-white text-black hover:opacity-90" onClick={handleStartSession}>
                  <Plus className="h-4 w-4 mr-2" /> New Session
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search sessions..."
                  className="pl-8 bg-background/50"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background/50">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="connected">Connected</SelectItem>
                  <SelectItem value="disconnected">Disconnected</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="started">Started</SelectItem>
                  <SelectItem value="starting">Starting</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="shrink-0" onClick={fetchSessions}>
                <RefreshCw className="h-4 w-4" />
                <span className="sr-only">Refresh</span>
              </Button>
            </div>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="border-b border-white/10">
                  <tr className="hover:bg-white/5">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Session ID</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.map((session) => (
                    <tr key={session.sessionId} className="border-b border-white/10 hover:bg-white/5">
                        <td className="p-4 align-middle font-medium">
                          {session.sessionId}
                          {rootSessionId && session.sessionId === rootSessionId && (
                            <>
                              <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-blue-600 text-white">Primary</span>
                            </>
                          )}
                        </td>
                      <td className="p-4 align-middle">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            session.status === 'session_connected'
                              ? 'bg-green-500/10 text-green-500'
                              : session.status === 'session_not_connected'
                              ? 'bg-yellow-500/10 text-yellow-500'
                              : session.status === 'started'
                              ? 'bg-blue-500/10 text-blue-500'
                              : session.status === 'terminated'
                              ? 'bg-red-500/10 text-red-500'
                              : 'bg-gray-500/10 text-gray-500'
                          }`}
                        >
                          {session.status}
                        </span>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex gap-2 bg-white/10 dark:bg-black/10 rounded-lg p-1 shadow transition-all duration-300">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleViewQr(session.sessionId)}
                              tabIndex={0}
                              className="group relative transition-all duration-200"
                            >
                              <span className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 z-0"></span>
                              <Code className="h-4 w-4 relative z-10 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                              <span className="sr-only">QR Code</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRestart(session.sessionId)}
                              tabIndex={0}
                              className="group relative transition-all duration-200"
                            >
                              <span className="absolute inset-0 rounded-full bg-yellow-100 dark:bg-yellow-900 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 z-0"></span>
                              <RefreshCw className="h-4 w-4 relative z-10 text-black dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-300 group-hover:rotate-90 group-hover:scale-110 transition-transform duration-200" />
                              <span className="sr-only">Restart</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleTerminate(session.sessionId)}
                              tabIndex={0}
                              className="group relative transition-all duration-200"
                            >
                              <span className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 z-0"></span>
                              <Trash2 className="h-4 w-4 relative z-10 text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300 group-hover:scale-110 transition-transform duration-200" />
                              <span className="sr-only">Terminate</span>
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredSessions.length}</strong> of <strong>{sessions.length}</strong> sessions
              </div>
              {/* <div className="flex items-center gap-2">
                <Button variant="destructive" size="sm" onClick={handleBulkTerminate}>
                  Terminate All
                </Button>
              </div> */}
            </div>
            {/* Tampilkan QR Modal jika ada */}
            <Dialog open={showQrModal} onOpenChange={setShowQrModal}>
              <DialogContent className="flex flex-col items-center">
                <DialogHeader>
                  <DialogTitle>QR Code for session <b>{qrSessionId}</b></DialogTitle>
                </DialogHeader>
                {qrImage ? (
                  <Image
                    src={qrImage}
                    alt="QR Code"
                    width={256}
                    height={256}
                    className="w-64 h-64 border rounded bg-white"
                  />
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center">Loading QR...</div>
                )}
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
  );
}
