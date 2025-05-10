
import { ArrowUpRight, TrendingUp, Users, DollarSign, ShoppingCart } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back to your GENFITY admin dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats Cards */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-bold">$24,389</h3>
                <span className="text-xs font-medium text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-brand-blue" />
            </div>
          </div>
          <div className="h-2 w-full bg-blue-red-gradient"></div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Products</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-bold">128</h3>
                <span className="text-xs font-medium text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +4.2%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-brand-red" />
            </div>
          </div>
          <div className="h-2 w-full bg-blue-red-gradient"></div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Active Users</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-bold">2,543</h3>
                <span className="text-xs font-medium text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.1%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-brand-blue" />
            </div>
          </div>
          <div className="h-2 w-full bg-blue-red-gradient"></div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-bold">3.6%</h3>
                <span className="text-xs font-medium text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +1.2%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
              <ArrowUpRight className="h-6 w-6 text-brand-red" />
            </div>
          </div>
          <div className="h-2 w-full bg-blue-red-gradient"></div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Chart Card */}
        <div className="glass-card rounded-xl p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Revenue Overview</h3>
            <select className="bg-transparent border border-white/20 rounded-md text-sm p-1">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 w-full bg-gradient-to-r from-brand-blue/5 to-brand-red/5 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Revenue Chart Placeholder</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/10">
                <div className="h-8 w-8 rounded-full bg-blue-red-gradient flex items-center justify-center text-white text-xs font-bold">
                  {i}
                </div>
                <div>
                  <p className="text-sm font-medium">New product added</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-center text-brand-blue hover:underline">
            View All Activities
          </button>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold">Recent Transactions</h3>
        </div>
        <div className="p-0">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="border-b border-white/10">
                <tr className="hover:bg-white/5">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Customer</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Amount</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[
                  { id: "#1234", customer: "John Doe", amount: "$120.00", status: "Completed", date: "2023-05-10" },
                  { id: "#1235", customer: "Jane Smith", amount: "$200.50", status: "Pending", date: "2023-05-09" },
                  {
                    id: "#1236",
                    customer: "Robert Johnson",
                    amount: "$75.20",
                    status: "Completed",
                    date: "2023-05-08",
                  },
                  { id: "#1237", customer: "Emily Davis", amount: "$340.00", status: "Failed", date: "2023-05-07" },
                ].map((transaction) => (
                  <tr key={transaction.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 align-middle font-medium">{transaction.id}</td>
                    <td className="p-4 align-middle">{transaction.customer}</td>
                    <td className="p-4 align-middle">{transaction.amount}</td>
                    <td className="p-4 align-middle">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === "Completed"
                            ? "bg-green-500/10 text-green-500"
                            : transaction.status === "Pending"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4 align-middle">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
