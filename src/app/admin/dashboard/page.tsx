'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  // Sample data
  const stats = [
    { label: 'Total Products', value: '48', icon: '📦', change: '+12%' },
    { label: 'Total Orders', value: '156', icon: '🛒', change: '+23%' },
    { label: 'Total Customers', value: '89', icon: '👥', change: '+8%' },
    { label: 'Revenue', value: 'Rs. 2.4M', icon: '💰', change: '+18%' },
  ]

  const recentOrders = [
    { id: '#001', customer: 'Ahmed Khan', amount: 'Rs. 85,000', status: 'Pending' },
    { id: '#002', customer: 'Fatima Ali', amount: 'Rs. 12,000', status: 'Delivered' },
    { id: '#003', customer: 'Usman Malik', amount: 'Rs. 45,000', status: 'Processing' },
    { id: '#004', customer: 'Sara Ahmed', amount: 'Rs. 8,000', status: 'Delivered' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <button
              onClick={() => router.push('/admin')}
              className="px-6 py-2 bg-red-500/20 border-2 border-red-500 rounded-lg text-red-300 hover:bg-red-500/30 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-300 transition-all transform hover:scale-105">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/70 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <span className="text-4xl">{stat.icon}</span>
              </div>
              <div className="mt-4">
                <span className="text-green-400 text-sm">{stat.change}</span>
                <span className="text-white/50 text-sm ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['overview', 'products', 'orders', 'customers', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 text-white/70">Order ID</th>
                      <th className="text-left py-4 text-white/70">Customer</th>
                      <th className="text-left py-4 text-white/70">Amount</th>
                      <th className="text-left py-4 text-white/70">Status</th>
                      <th className="text-left py-4 text-white/70">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-white/10">
                        <td className="py-4 text-white font-semibold">{order.id}</td>
                        <td className="py-4 text-white">{order.customer}</td>
                        <td className="py-4 text-yellow-300 font-bold">{order.amount}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered' ? 'bg-green-500/20 text-green-300' :
                            order.status === 'Processing' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <button className="text-white/50 hover:text-yellow-300 transition-colors">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Product Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Add New Product</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Product Name" className="w-full px-4 py-2 bg-white/10 rounded-lg text-white" />
                    <input type="text" placeholder="Price" className="w-full px-4 py-2 bg-white/10 rounded-lg text-white" />
                    <input type="text" placeholder="Category" className="w-full px-4 py-2 bg-white/10 rounded-lg text-white" />
                    <button className="px-6 py-2 bg-green-500 rounded-lg text-white">Add Product</button>
                  </form>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
                  <p className="text-white/70">Total Products: 48</p>
                  <p className="text-white/70">Active Products: 45</p>
                  <p className="text-white/70">Out of Stock: 3</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">All Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 text-white/70">Order ID</th>
                      <th className="text-left py-4 text-white/70">Customer</th>
                      <th className="text-left py-4 text-white/70">Amount</th>
                      <th className="text-left py-4 text-white/70">Status</th>
                      <th className="text-left py-4 text-white/70">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-white/10">
                        <td className="py-4 text-white">{order.id}</td>
                        <td className="py-4 text-white">{order.customer}</td>
                        <td className="py-4 text-yellow-300">{order.amount}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered' ? 'bg-green-500/20 text-green-300' :
                            order.status === 'Processing' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-white/70">2024-01-15</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Customer Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-bold">Ahmed Khan</p>
                  <p className="text-white/70">Total Orders: 5</p>
                  <p className="text-white/70">Total Spent: Rs. 125,000</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-bold">Fatima Ali</p>
                  <p className="text-white/70">Total Orders: 3</p>
                  <p className="text-white/70">Total Spent: Rs. 45,000</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-bold">Usman Malik</p>
                  <p className="text-white/70">Total Orders: 2</p>
                  <p className="text-white/70">Total Spent: Rs. 53,000</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Dashboard Settings</h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">General Settings</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-white">Enable email notifications</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-white">Auto-update inventory</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-white">Show out of stock products</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}