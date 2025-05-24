"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Package, DollarSign, Users } from "lucide-react";

interface WhatsAppPackage {
  id: string;
  name: string;
  description?: string;
  priceMonth: number;
  priceYear: number;
  maxSession: number;
  createdAt: string;
  updatedAt: string;
}

interface PackageForm {
  name: string;
  description: string;
  priceMonth: string;
  priceYear: string;
  maxSession: string;
}

export default function WhatsAppPackagesPage() {
  const [packages, setPackages] = useState<WhatsAppPackage[]>([]);
  const [form, setForm] = useState<PackageForm>({ 
    name: "", 
    description: "", 
    priceMonth: "", 
    priceYear: "", 
    maxSession: "" 
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  async function fetchPackages() {
    setLoading(true);
    try {
      const res = await fetch("/api/whatsapp/management/packages");
      const data = await res.json();
      setPackages(data.data || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    
    try {
      const method = editing ? "PATCH" : "POST";
      const url = editing ? `/api/whatsapp/management/packages/${editing}` : "/api/whatsapp/management/packages";
      
      const payload = {
        name: form.name,
        description: form.description,
        priceMonth: parseInt(form.priceMonth),
        priceYear: parseInt(form.priceYear),
        maxSession: parseInt(form.maxSession)
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await res.json();
      if (result.success) {
        resetForm();
        fetchPackages();
      } else {
        alert("Error: " + (result.error || "Failed to save package"));
      }
    } catch (error) {
      console.error("Error saving package:", error);
      alert("Error saving package");
    } finally {
      setSaving(false);
    }
  }

  function resetForm() {
    setForm({ name: "", description: "", priceMonth: "", priceYear: "", maxSession: "" });
    setEditing(null);
  }

  async function handleEdit(pkg: WhatsAppPackage) {
    setForm({
      name: pkg.name,
      description: pkg.description || "",
      priceMonth: pkg.priceMonth.toString(),
      priceYear: pkg.priceYear.toString(),
      maxSession: pkg.maxSession.toString(),
    });
    setEditing(pkg.id);
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this package?")) return;
    
    try {
      const res = await fetch(`/api/whatsapp/management/packages/${id}`, { method: "DELETE" });
      const result = await res.json();
      if (result.success) {
        fetchPackages();
      } else {
        alert("Error deleting package");
      }
    } catch (error) {
      console.error("Error deleting package:", error);
      alert("Error deleting package");
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          WhatsApp API Packages
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Manage subscription packages for WhatsApp API service
        </p>
      </div>

      {/* Package Form */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              {editing ? <Edit className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <Plus className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            </div>
            <div>
              <CardTitle className="text-xl text-gray-800 dark:text-gray-200">
                {editing ? "Edit Package" : "Create New Package"}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {editing ? "Update package details" : "Add a new WhatsApp API subscription package"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Package Name</label>
                <Input
                  placeholder="e.g., Basic Plan"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Sessions</label>
                <Input
                  placeholder="e.g., 5"
                  type="number"
                  min="1"
                  value={form.maxSession}
                  onChange={e => setForm(f => ({ ...f, maxSession: e.target.value }))}
                  className="border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <Input
                placeholder="Package description (optional)"
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className="border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly Price (IDR)</label>
                <Input
                  placeholder="e.g., 100000"
                  type="number"
                  min="0"
                  value={form.priceMonth}
                  onChange={e => setForm(f => ({ ...f, priceMonth: e.target.value }))}
                  className="border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Yearly Price (IDR)</label>
                <Input
                  placeholder="e.g., 1000000"
                  type="number"
                  min="0"
                  value={form.priceYear}
                  onChange={e => setForm(f => ({ ...f, priceYear: e.target.value }))}
                  className="border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white shadow-lg px-6"
                disabled={saving}
              >
                {saving ? "Saving..." : editing ? "Update Package" : "Create Package"}
              </Button>
              {editing && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  className="border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Packages List */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg dark:shadow-gray-900/20">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <Package className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Available Packages</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {packages.length} package(s) configured
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Package className="h-8 w-8 mx-auto mb-2 animate-pulse" />
              Loading packages...
            </div>
          ) : packages.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Package className="h-12 w-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
              <p className="font-medium">No packages found</p>
              <p className="text-sm">Create your first package above to get started</p>
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50/80 dark:bg-gray-700/80">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Package</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pricing</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sessions</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {packages.map((pkg, index) => (
                      <tr key={pkg.id} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{pkg.name}</div>
                            {pkg.description && (
                              <div className="text-sm text-gray-500 dark:text-gray-400">{pkg.description}</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                              <span className="text-sm text-gray-900 dark:text-gray-100">
                                {formatCurrency(pkg.priceMonth)}/month
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-sm text-gray-900 dark:text-gray-100">
                                {formatCurrency(pkg.priceYear)}/year
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700 flex items-center gap-1 w-fit">
                            <Users className="h-3 w-3" />
                            {pkg.maxSession} sessions
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {new Date(pkg.createdAt).toLocaleDateString('id-ID')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(pkg)}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDelete(pkg.id)}
                              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
