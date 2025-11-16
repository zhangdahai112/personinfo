"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useUser } from "@/contexts/UserContext"
import { Plus, Search, FileText, Clock, CheckCircle, AlertCircle, Calendar, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

interface QueryRecord {
  id: string
  type: "咨询" | "查询"
  title: string
  status: "进行中" | "已完成" | "待审核"
  createdAt: string
  description: string
}

export default function DashboardPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [queryRecords, setQueryRecords] = useState<QueryRecord[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth")
      return
    }

    // 模拟查询记录
    if (user) {
      setQueryRecords([
        {
          id: "1",
          type: "咨询",
          title: "遗产查询流程咨询",
          status: "已完成",
          createdAt: "2024-12-17",
          description: "咨询关于父亲遗产查询的相关流程和所需材料"
        },
        {
          id: "2",
          type: "查询",
          title: "李XX银行存款查询",
          status: "进行中",
          createdAt: "2024-12-18",
          description: "查询父亲在各大银行的存款账户信息"
        }
      ])
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 chinese-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-xl">诸</span>
          </div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "已完成":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "进行中":
        return <Clock className="w-5 h-5 text-amber-500" />
      case "待审核":
        return <AlertCircle className="w-5 h-5 text-blue-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已完成":
        return "text-green-600 bg-green-100"
      case "进行中":
        return "text-amber-600 bg-amber-100"
      case "待审核":
        return "text-blue-600 bg-blue-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 用户欢迎区域 */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* 装饰背景 */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none"/>
                    <text x="50" y="58" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">查</text>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <h1 className="text-3xl font-bold mb-2">欢迎回来，{user.name}</h1>
                <p className="text-white/90 mb-6">
                  您已注册 {Math.ceil((Date.now() - new Date(user.registeredAt).getTime()) / (1000 * 60 * 60 * 24))} 天
                  ，感谢您对诸葛查查的信任
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard/new-query">
                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                      <Plus className="w-5 h-5 mr-2" />
                      开始新的查询
                    </Button>
                  </Link>
                  <Link href="/consultation">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      咨询服务
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 快速操作 */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Link href="/dashboard/new-query">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-red-100 hover:border-red-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">遗产查询</h3>
                  <p className="text-sm text-gray-600">开始新的遗产查询服务</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/consultation">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-blue-100 hover:border-blue-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">在线咨询</h3>
                  <p className="text-sm text-gray-600">免费咨询相关问题</p>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-green-100 hover:border-green-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">电话咨询</h3>
                <p className="text-sm text-gray-600">400-888-0000</p>
              </CardContent>
            </Card>

            <Link href="/community">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-purple-100 hover:border-purple-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">社区论坛</h3>
                  <p className="text-sm text-gray-600">交流经验与案例</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* 我的查询记录 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">我的查询记录</h2>
              <Link href="/dashboard/new-query">
                <Button variant="chinese">
                  <Plus className="w-4 h-4 mr-2" />
                  新建查询
                </Button>
              </Link>
            </div>

            {queryRecords.length > 0 ? (
              <div className="space-y-4">
                {queryRecords.map((record) => (
                  <Card key={record.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                              {record.status}
                            </span>
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                              {record.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {record.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {record.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            创建时间：{record.createdAt}
                          </div>
                        </div>
                        <div className="ml-4 flex items-center space-x-2">
                          {getStatusIcon(record.status)}
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    暂无查询记录
                  </h3>
                  <p className="text-gray-600 mb-6">
                    开始您的第一次遗产查询服务
                  </p>
                  <Link href="/dashboard/new-query">
                    <Button variant="chinese" size="lg">
                      <Plus className="w-5 h-5 mr-2" />
                      开始查询
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 服务统计 */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {queryRecords.filter(r => r.type === "查询").length}
                </div>
                <p className="text-red-800">查询服务</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {queryRecords.filter(r => r.type === "咨询").length}
                </div>
                <p className="text-blue-800">咨询服务</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {queryRecords.filter(r => r.status === "已完成").length}
                </div>
                <p className="text-green-800">已完成</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
