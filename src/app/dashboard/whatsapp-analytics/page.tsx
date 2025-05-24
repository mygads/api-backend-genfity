"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  DollarSign,
  Activity,
  Clock,
  Zap,
  RefreshCw,
  Calendar,
  Filter
} from "lucide-react";

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  totalMessages: number;
  totalRevenue: number;
  monthlyGrowth: number;
  weeklyMessages: number;
  averageSessionDuration: number;
  topPackages: Array<{
    name: string;
    users: number;
    revenue: number;
  }>;
  revenueByMonth: Array<{
    month: string;
    revenue: number;
  }>;
  userActivity: Array<{
    date: string;
    activeUsers: number;
  }>;
}

export default function WhatsAppAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalUsers: 0,
    activeUsers: 0,
    totalMessages: 0,
    totalRevenue: 0,
    monthlyGrowth: 0,
    weeklyMessages: 0,
    averageSessionDuration: 0,
    topPackages: [],
    revenueByMonth: [],
    userActivity: []
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30d");

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  async function fetchAnalytics() {
    setLoading(true);
    try {
      // Mock data for demonstration - replace with actual API calls
      const mockData: AnalyticsData = {
        totalUsers: 1547,
        activeUsers: 892,
        totalMessages: 125634,
        totalRevenue: 45670000,
        monthlyGrowth: 12.5,
        weeklyMessages: 8942,
        averageSessionDuration: 24.3,
        topPackages: [
          { name: "Premium Plan", users: 456, revenue: 22800000 },
          { name: "Business Plan", users: 289, revenue: 17340000 },
          { name: "Starter Plan", users: 147, revenue: 5530000 }
        ],
        revenueByMonth: [
          { month: "Jan", revenue: 3200000 },
          { month: "Feb", revenue: 3800000 },
          { month: "Mar", revenue: 4200000 },
          { month: "Apr", revenue: 4850000 },
          { month: "May", revenue: 5200000 },
          { month: "Jun", revenue: 4900000 }
        ],
        userActivity: [
          { date: "Mon", activeUsers: 156 },
          { date: "Tue", activeUsers: 189 },
          { date: "Wed", activeUsers: 234 },
          { date: "Thu", activeUsers: 198 },
          { date: "Fri", activeUsers: 267 },
          { date: "Sat", activeUsers: 145 },
          { date: "Sun", activeUsers: 123 }
        ]
      };
      
      setAnalytics(mockData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            WhatsApp Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Comprehensive insights into WhatsApp API service performance and user engagement
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 3 months</option>
            <option value="1y">Last year</option>
          </select>
          <Button
            onClick={fetchAnalytics}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{formatNumber(analytics.totalUsers)}</p>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +{analytics.monthlyGrowth}% this month
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{formatNumber(analytics.activeUsers)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {((analytics.activeUsers / analytics.totalUsers) * 100).toFixed(1)}% engagement
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Messages</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{formatNumber(analytics.totalMessages)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formatNumber(analytics.weeklyMessages)} this week
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(analytics.totalRevenue)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Avg: {analytics.averageSessionDuration}h session
                </p>
              </div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Revenue Trends</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Monthly revenue performance</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {analytics.revenueByMonth.map((item, index) => (
                <div key={item.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.month}</span>
                  <div className="flex items-center gap-3 flex-1 mx-4">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(item.revenue / Math.max(...analytics.revenueByMonth.map(r => r.revenue))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 min-w-0">
                      {formatCurrency(item.revenue)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Activity Chart */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-100">User Activity</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Daily active users this week</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {analytics.userActivity.map((item, index) => (
                <div key={item.date} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">{item.date}</span>
                  <div className="flex items-center gap-3 flex-1 mx-4">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(item.activeUsers / Math.max(...analytics.userActivity.map(u => u.activeUsers))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 min-w-0">
                      {formatNumber(item.activeUsers)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Packages */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Top Performing Packages</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">Most popular WhatsApp API packages</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {analytics.topPackages.map((pkg, index) => (
              <div key={pkg.name} className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{pkg.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatNumber(pkg.users)} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-gray-100">{formatCurrency(pkg.revenue)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
