// WhatsApp Management Page
'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, RefreshCw, Plus, Code, Trash2 } from 'react-feather';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface Session {
  sessionId: string;
  status: string;
  qr?: string | null;
}

export default function WhatsAppManagementPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [newSessionId, setNewSessionId] = useState('');
  const [notificationSession, setNotificationSession] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchSessions();
  }, []);

  async function fetchSessions() {
    setLoading(true);
    const res = await fetch('/api/whatsapp/session/listAll');
    const data = await res.json();
    setSessions(data);
    setLoading(false);
  }

  async function handleStartSession() {
    if (!newSessionId) return;
    await fetch(`/api/whatsapp/session/start/${newSessionId}`, { method: 'POST' });
    setNewSessionId('');
    fetchSessions();
  }

  async function handleAction(sessionId: string, action: string) {
    await fetch(`/api/whatsapp/session/${action}/${sessionId}`, { method: 'POST' });
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
    await fetch('/api/whatsapp/session/listAll', { method: 'DELETE' });
    fetchSessions();
  }

  async function handleBulkRestart() {
    await fetch('/api/whatsapp/session/listAll', { method: 'PATCH' });
    fetchSessions();
  }

  const filteredSessions = sessions.filter(session => {
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
                <Button className="bg-blue-red-gradient hover:opacity-90" onClick={handleStartSession}>
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
                      <td className="p-4 align-middle font-medium">{session.sessionId}</td>
                      <td className="p-4 align-middle">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            session.status === 'connected'
                              ? 'bg-green-500/10 text-green-500'
                              : session.status === 'pending'
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
                          <Button variant="ghost" size="icon" onClick={() => handleAction(session.sessionId, 'qr')}>
                            <Code className="h-4 w-4" />
                            <span className="sr-only">QR Code</span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleAction(session.sessionId, 'restart')}>
                            <RefreshCw className="h-4 w-4" />
                            <span className="sr-only">Restart</span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleAction(session.sessionId, 'terminate')}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Terminate</span>
                          </Button>
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
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleBulkRestart}>
                  Restart All
                </Button>
                <Button variant="destructive" size="sm" onClick={handleBulkTerminate}>
                  Terminate All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
