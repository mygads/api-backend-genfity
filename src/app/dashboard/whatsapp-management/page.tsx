// WhatsApp Management Page
'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, RefreshCw, Plus, Code, Trash2, Settings, Activity, CheckCircle, AlertCircle, Star, MessageSquare, Clock } from 'react-feather';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    // Gunakan endpoint admin agar dashboard admin bisa membuat session tanpa limit
    await fetch(`/api/whatsapp/session/admin/start/${newSessionId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'admin' }) // Ganti dengan userId admin yang valid jika ada auth
    });
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
    await fetch('/api/whatsapp/session/admin/terminateAll', { method: 'POST' });
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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          WhatsApp Session Management
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create, monitor, and manage WhatsApp API sessions for seamless communication
        </p>
      </div>

      {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Sessions</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{sessions.length}</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Connected</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {sessions.filter(s => s.status === 'session_connected').length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Disconnected</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {sessions.filter(s => s.status === 'session_not_connected' || s.status === 'terminated').length}
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>        {/* Main Management Card */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardHeader className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Session Management</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">Create and manage WhatsApp API sessions</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="New Session ID"
                  value={newSessionId}
                  onChange={e => setNewSessionId(e.target.value)}
                  className="w-40 border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white shadow-lg" 
                  onClick={handleStartSession}
                >
                  <Plus className="h-4 w-4 mr-2" /> 
                  New Session
                </Button>
              </div>
            </div>
          </CardHeader>          <CardContent className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <Input
                  type="search"
                  placeholder="Search sessions by ID..."
                  className="pl-10 border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[180px] border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <SelectItem value="all" className="text-gray-900 dark:text-gray-100">All Statuses</SelectItem>
                    <SelectItem value="session_connected" className="text-gray-900 dark:text-gray-100">Connected</SelectItem>
                    <SelectItem value="session_not_connected" className="text-gray-900 dark:text-gray-100">Disconnected</SelectItem>
                    <SelectItem value="pending" className="text-gray-900 dark:text-gray-100">Pending</SelectItem>
                    <SelectItem value="started" className="text-gray-900 dark:text-gray-100">Started</SelectItem>
                    <SelectItem value="starting" className="text-gray-900 dark:text-gray-100">Starting</SelectItem>
                    <SelectItem value="terminated" className="text-gray-900 dark:text-gray-100">Terminated</SelectItem>
                    <SelectItem value="error" className="text-gray-900 dark:text-gray-100">Error</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="shrink-0 border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-white dark:bg-gray-700" 
                  onClick={fetchSessions}
                  disabled={loading}
                >
                  <RefreshCw className={`h-4 w-4 text-gray-600 dark:text-gray-400 ${loading ? 'animate-spin' : ''}`} />
                  <span className="sr-only">Refresh</span>
                </Button>
              </div>
            </div>            {/* Sessions Table */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50/80 dark:bg-gray-700/80">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Session ID</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead><tbody className="divide-y divide-gray-100 dark:divide-gray-700">{filteredSessions.map((session) => (
                    <tr key={session.sessionId} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{session.sessionId}</span>
                          {rootSessionId && session.sessionId === rootSessionId && (
                            <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                              <Star className="w-3 h-3 mr-1" />
                              Primary
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          className={
                            session.status === 'session_connected'
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700'
                              : session.status === 'session_not_connected'
                              ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700'
                              : session.status === 'started'
                              ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'
                              : session.status === 'terminated'
                              ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700'
                              : 'bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                          }
                        >
                          {session.status === 'session_connected' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {session.status === 'session_not_connected' && <Clock className="w-3 h-3 mr-1" />}
                          {session.status === 'terminated' && <AlertCircle className="w-3 h-3 mr-1" />}
                          {session.status || 'Unknown'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600 dark:text-gray-400">WhatsApp API</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewQr(session.sessionId)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            <Code className="h-4 w-4 mr-1" />
                            QR
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRestart(session.sessionId)}
                            className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                          >
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Restart
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleTerminate(session.sessionId)}
                            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Terminate
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}</tbody>
                </table>
                {filteredSessions.length === 0 && (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No sessions found</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">Create a new session to get started</p>
                  </div>
                )}
              </div>
            </div>            {/* Footer Stats */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing <strong>{filteredSessions.length}</strong> of <strong>{sessions.length}</strong> sessions
              </div>
              <div className="flex items-center gap-2">
                {notificationSession && (
                  <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                    Notifications: {notificationSession}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>        {/* QR Code Modal */}
        <Dialog open={showQrModal} onOpenChange={setShowQrModal}>
          <DialogContent className="max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-center text-gray-900 dark:text-gray-100">QR Code for Session</DialogTitle>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-mono">{qrSessionId}</p>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4">
              {qrImage ? (
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <Image
                    src={qrImage}
                    alt="QR Code"
                    width={256}
                    height={256}
                    className="w-64 h-64 border rounded"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-center">
                    <RefreshCw className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2 animate-spin" />
                    <p className="text-gray-500 dark:text-gray-400">Loading QR Code...</p>
                  </div>
                </div>
              )}              <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs">
                Scan this QR code with your WhatsApp mobile app to connect this session.
              </p>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
}
