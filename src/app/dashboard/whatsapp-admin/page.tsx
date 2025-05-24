"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CreditCard, 
  Edit, 
  Trash2, 
  Search,
  RefreshCw,
  Activity,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Download,
  Filter,
  Calendar,
  FileSpreadsheet,
  Power,
  MoreVertical,
  ArrowUpDown,
  Check,
  X
} from "lucide-react";

interface Transaction {
  id: string;
  userId: string;
  packageId: string;
  duration: string;
  price: number;
  status: string;
  createdAt: string;
  user?: { name: string };
  package?: { name: string };
}

interface Service {
  id: string;
  userId: string;
  packageId: string;
  expiredAt: string;
  createdAt: string;
  user?: { name: string };
  package?: { name: string };
}

export default function WhatsAppAdminPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [editingService, setEditingService] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [bulkAction, setBulkAction] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "amount" | "user">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [autoRefresh, setAutoRefresh] = useState(false);

  useEffect(() => {
    fetchTransactions();
    fetchServices();
  }, []);
  // Auto refresh functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRefresh) {
      interval = setInterval(() => {
        fetchTransactions();
        fetchServices();
      }, 30000); // Refresh every 30 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh]);

  async function fetchTransactions() {
    setLoading(true);
    try {
      const res = await fetch("/api/whatsapp/management/transaction");
      const data = await res.json();
      setTransactions(data.data || []);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  }
  
  async function fetchServices() {
    try {
      const res = await fetch("/api/whatsapp/management/service/all");
      const data = await res.json();
      setServices(data.data || []);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  }

  async function handleEditService(id: string, expiredAt: string) {
    try {
      const res = await fetch(`/api/whatsapp/management/service/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expiredAt }),
      });
      const data = await res.json();
      if (data.success) {
        fetchServices();
        setEditingService(null);
      } else {
        alert("Error updating service");
      }
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Error updating service");
    }
  }
  async function handleDeleteService(id: string) {
    if (!window.confirm("Are you sure you want to delete this subscription?")) return;
    
    try {
      const res = await fetch(`/api/whatsapp/management/service/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        fetchServices();
      } else {
        alert("Error deleting service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Error deleting service");
    }
  }

  // Enhanced filter and sort functions
  const handleSort = (field: "date" | "amount" | "user") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  // Bulk actions for services
  const handleBulkAction = async () => {
    if (!bulkAction || selectedServices.length === 0) return;
    
    try {
      if (bulkAction === "delete") {
        if (!window.confirm(`Are you sure you want to delete ${selectedServices.length} selected services?`)) return;
        
        await Promise.all(
          selectedServices.map(id => 
            fetch(`/api/whatsapp/management/service/${id}`, { method: "DELETE" })
          )
        );
      } else if (bulkAction === "extend") {
        const days = prompt("Extend expiry by how many days?");
        if (!days || isNaN(Number(days))) return;
        
        await Promise.all(
          selectedServices.map(async id => {
            const service = services.find(s => s.id === id);
            if (service) {
              const newExpiry = new Date(service.expiredAt);
              newExpiry.setDate(newExpiry.getDate() + Number(days));
              await fetch(`/api/whatsapp/management/service/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ expiredAt: newExpiry.toISOString() }),
              });
            }
          })
        );
      }
      
      setSelectedServices([]);
      setBulkAction("");
      fetchServices();
    } catch (error) {
      console.error("Bulk action error:", error);
      alert("Error performing bulk action");
    }
  };

  // Service activation from transaction
  const activateService = async (transactionId: string) => {
    try {
      const res = await fetch("/api/whatsapp/management/service/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionId }),
      });
      
      const data = await res.json();
      if (data.success) {
        fetchServices();
        fetchTransactions();
        alert("Service activated successfully!");
      } else {
        alert("Error activating service: " + data.error);
      }
    } catch (error) {
      console.error("Error activating service:", error);
      alert("Error activating service");
    }
  };

  // Export functions
  const exportTransactions = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "ID,User ID,Package,Duration,Amount,Status,Date\n" +
      filteredTransactions.map(t => 
        `${t.id},${t.userId},${t.package?.name},${t.duration},${t.price},${t.status},${t.createdAt}`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `transactions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportServices = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "ID,User ID,Package,Expiry Date,Status\n" +
      filteredServices.map(s => 
        `${s.id},${s.userId},${s.package?.name},${s.expiredAt},${isExpired(s.expiredAt) ? 'Expired' : isExpiringSoon(s.expiredAt) ? 'Expiring Soon' : 'Active'}`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `services_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredTransactions = transactions
    .filter(trx => {
      const matchesSearch = trx.userId.includes(search) || 
                           trx.package?.name?.toLowerCase().includes(search.toLowerCase()) ||
                           trx.id.includes(search) ||
                           trx.user?.name?.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || trx.status === statusFilter;
      
      // Date filtering
      let matchesDate = true;
      if (dateFilter !== "all") {
        const trxDate = new Date(trx.createdAt);
        const now = new Date();
        switch (dateFilter) {
          case "today":
            matchesDate = trxDate.toDateString() === now.toDateString();
            break;
          case "week":
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            matchesDate = trxDate >= weekAgo;
            break;
          case "month":
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            matchesDate = trxDate >= monthAgo;
            break;
        }
      }
      
      return matchesSearch && matchesStatus && matchesDate;
    })
    .sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "amount":
          aValue = a.price;
          bValue = b.price;
          break;
        case "user":
          aValue = a.user?.name || a.userId;
          bValue = b.user?.name || b.userId;
          break;
        default:
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
      }
      
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const filteredServices = services.filter(svc => {
    const matchesSearch = svc.userId.includes(search) || 
                         svc.package?.name?.toLowerCase().includes(search.toLowerCase()) ||
                         svc.id.includes(search);
    return matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'failed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'failed': return <AlertCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (expiredAt: string) => {
    const expiry = new Date(expiredAt);
    const now = new Date();
    const diffDays = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  const isExpired = (expiredAt: string) => {
    return new Date(expiredAt) < new Date();
  };

  // Stats calculations
  const totalRevenue = transactions
    .filter(t => t.status === 'paid')
    .reduce((sum, t) => sum + t.price, 0);
  
  const activeServices = services.filter(s => !isExpired(s.expiredAt)).length;
  const expiringSoon = services.filter(s => isExpiringSoon(s.expiredAt)).length;  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          WhatsApp Service Administration
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Monitor transactions, manage active subscriptions, and oversee WhatsApp API service operations
        </p>
      </div>{/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(totalRevenue)}</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Services</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{activeServices}</p>
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
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Transactions</p>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{transactions.length}</p>
                </div>
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Expiring Soon</p>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{expiringSoon}</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>        {/* Enhanced Search and Filter Bar */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <Input
                  placeholder="Search by user ID, name, package name, or transaction ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              
              {/* Filters and Actions */}
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {/* Status Filter */}
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                  
                  {/* Date Filter */}
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                  </select>
                  
                  {/* Sort Options */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSort("date")}
                    className="flex items-center gap-1"
                  >
                    <Calendar className="w-4 h-4" />
                    Date
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSort("amount")}
                    className="flex items-center gap-1"
                  >
                    <DollarSign className="w-4 h-4" />
                    Amount
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  {/* Auto Refresh Toggle */}
                  <Button
                    variant={autoRefresh ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAutoRefresh(!autoRefresh)}
                    className="flex items-center gap-1"
                  >
                    <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
                    Auto Refresh
                  </Button>
                  
                  {/* Export Buttons */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={exportTransactions}
                    className="flex items-center gap-1"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                  
                  {/* Manual Refresh */}
                  <Button 
                    onClick={() => {
                      fetchTransactions();
                      fetchServices();
                    }}
                    disabled={loading}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>        {/* Enhanced Transactions Table */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Transaction History</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    All WhatsApp API service transactions ({filteredTransactions.length} total)
                  </CardDescription>
                </div>
              </div>              <div className="flex items-center gap-2">
                <Badge className="text-sm border">
                  {sortBy} {sortOrder === "asc" ? "↑" : "↓"}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportTransactions}
                  className="flex items-center gap-1"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/80 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort("date")}
                        className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Transaction
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort("user")}
                        className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        User
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort("amount")}
                        className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Amount
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredTransactions.map((trx) => (
                    <tr key={trx.id} className="hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono text-gray-900 dark:text-gray-100">
                          {trx.id.slice(0, 8)}...
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {trx.user?.name || "Unknown User"}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            ID: {trx.userId.slice(0, 8)}...
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{trx.package?.name}</div>
                      </td>                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className="text-xs border">
                          {trx.duration}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(trx.price)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={`flex items-center gap-1 w-fit ${getStatusColor(trx.status)}`}>
                          {getStatusIcon(trx.status)}
                          {trx.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {formatDate(trx.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {trx.status === 'paid' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => activateService(trx.id)}
                              className="text-green-600 hover:text-green-700 border-green-300 hover:border-green-400"
                            >
                              <Power className="w-3 h-3 mr-1" />
                              Activate
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTransactions.length === 0 && (
                <div className="text-center py-12">
                  <CreditCard className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>        {/* Enhanced Active Services Table */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Active Subscriptions</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Manage customer WhatsApp API subscriptions ({filteredServices.length} total)
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedServices.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      {selectedServices.length} selected
                    </Badge>
                    <select
                      value={bulkAction}
                      onChange={(e) => setBulkAction(e.target.value)}
                      className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700"
                    >
                      <option value="">Bulk Actions</option>
                      <option value="delete">Delete Selected</option>
                      <option value="extend">Extend Expiry</option>
                    </select>
                    <Button
                      size="sm"
                      onClick={handleBulkAction}
                      disabled={!bulkAction}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Apply
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedServices([])}
                    >
                      Clear
                    </Button>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportServices}
                  className="flex items-center gap-1"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/80 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        checked={selectedServices.length === filteredServices.length && filteredServices.length > 0}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedServices(filteredServices.map(s => s.id));
                          } else {
                            setSelectedServices([]);
                          }
                        }}
                        className="rounded border-gray-300 dark:border-gray-600"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredServices.map((svc) => (
                    <tr key={svc.id} className="hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(svc.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedServices([...selectedServices, svc.id]);
                            } else {
                              setSelectedServices(selectedServices.filter(id => id !== svc.id));
                            }
                          }}
                          className="rounded border-gray-300 dark:border-gray-600"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono text-gray-900 dark:text-gray-100">
                          {svc.id.slice(0, 8)}...
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {svc.user?.name || "Unknown User"}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            ID: {svc.userId.slice(0, 8)}...
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{svc.package?.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingService === svc.id ? (
                          <input
                            type="date"
                            defaultValue={svc.expiredAt?.slice(0, 10) || ""}
                            onBlur={(e) => handleEditService(svc.id, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleEditService(svc.id, e.currentTarget.value);
                              }
                              if (e.key === 'Escape') {
                                setEditingService(null);
                              }
                            }}
                            className="border border-blue-300 dark:border-blue-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            autoFocus
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-900 dark:text-gray-100">{formatDate(svc.expiredAt)}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingService(svc.id)}
                              className="p-1 h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {isExpired(svc.expiredAt) ? (
                          <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Expired
                          </Badge>
                        ) : isExpiringSoon(svc.expiredAt) ? (
                          <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border-orange-200 dark:border-orange-800">
                            <Clock className="w-3 h-3 mr-1" />
                            Expiring Soon
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Active
                          </Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteService(svc.id)}
                            className="h-8 bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No active services found</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    Try adjusting your search criteria or check if services need to be activated
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
