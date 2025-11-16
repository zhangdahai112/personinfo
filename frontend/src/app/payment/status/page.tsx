"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePayment, type PaymentOrder } from "@/contexts/PaymentContext"
import { Search, CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react"

function PaymentStatusContent() {
  const { getOrderById, queryPaymentStatus } = usePayment()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [orderId, setOrderId] = useState(searchParams.get('orderId') || '')
  const [order, setOrder] = useState<PaymentOrder | null>(null)
  const [isQuerying, setIsQuerying] = useState(false)
  const [error, setError] = useState('')

  const handleQuery = useCallback(async (queryOrderId?: string) => {
    const targetOrderId = queryOrderId || orderId
    if (!targetOrderId.trim()) {
      setError('请输入订单号')
      return
    }

    setIsQuerying(true)
    setError('')

    try {
      const foundOrder = getOrderById(targetOrderId)
      if (!foundOrder) {
        setError('未找到该订单')
        setOrder(null)
        return
      }

      // 查询最新支付状态
      const latestStatus = await queryPaymentStatus(targetOrderId)
      setOrder({ ...foundOrder, status: latestStatus })
    } catch (error) {
      setError('查询失败，请重试')
    } finally {
      setIsQuerying(false)
    }
  }, [orderId, getOrderById, queryPaymentStatus])

  useEffect(() => {
    const urlOrderId = searchParams.get('orderId')
    if (urlOrderId) {
      handleQuery(urlOrderId)
    }
  }, [searchParams]) // eslint-disable-line react-hooks/exhaustive-deps

  const getStatusIcon = (status: string) => {
    switch (status) {
      case '已支付':
        return <CheckCircle className="w-8 h-8 text-green-500" />
      case '支付中':
        return <Clock className="w-8 h-8 text-blue-500 animate-spin" />
      case '支付失败':
        return <XCircle className="w-8 h-8 text-red-500" />
      case '已取消':
        return <AlertCircle className="w-8 h-8 text-gray-500" />
      default:
        return <Clock className="w-8 h-8 text-yellow-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已支付':
        return 'text-green-600'
      case '支付中':
        return 'text-blue-600'
      case '支付失败':
        return 'text-red-600'
      case '已取消':
        return 'text-gray-600'
      default:
        return 'text-yellow-600'
    }
  }

  const formatPrice = (price: number) => {
    return `¥${(price / 100).toFixed(2)}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN')
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">支付状态查询</h1>
            <p className="text-gray-600">输入订单号查询支付状态</p>
          </div>

          {/* 查询输入 */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>订单查询</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder="请输入订单号"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleQuery()}
                  disabled={isQuerying}
                  variant="chinese"
                  className="min-w-[100px]"
                >
                  {isQuerying ? (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      查询中
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Search className="w-4 h-4 mr-2" />
                      查询
                    </div>
                  )}
                </Button>
              </div>
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </CardContent>
          </Card>

          {/* 查询结果 */}
          {order && (
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  {getStatusIcon(order.status)}
                  <h2 className={`text-2xl font-semibold mt-4 ${getStatusColor(order.status)}`}>
                    {order.status}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">订单号：</span>
                      <span className="font-medium">{order.id}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">支付方式：</span>
                      <span className="font-medium">
                        {order.paymentMethod === 'alipay' ? '支付宝' :
                         order.paymentMethod === 'wechat' ? '微信支付' : '未选择'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">服务类型：</span>
                      <span className="font-medium">{order.serviceType}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">紧急程度：</span>
                      <span className="font-medium">{order.urgencyLevel}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>基础费用：</span>
                        <span>{formatPrice(order.amount)}</span>
                      </div>
                      {order.urgencyFee > 0 && (
                        <div className="flex justify-between">
                          <span>加急费用：</span>
                          <span>{formatPrice(order.urgencyFee)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>总计：</span>
                        <span className="text-red-600">{formatPrice(order.totalAmount)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4 text-sm text-gray-600">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span>创建时间：</span>
                        <div>{formatDate(order.createdAt)}</div>
                      </div>
                      {order.paidAt && (
                        <div>
                          <span>支付时间：</span>
                          <div>{formatDate(order.paidAt)}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {order.description && (
                    <div className="border-t pt-4">
                      <span className="text-gray-600">订单描述：</span>
                      <p className="mt-1">{order.description}</p>
                    </div>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="mt-6 space-y-3">
                  {order.status === '待支付' && (
                    <Button
                      variant="chinese"
                      className="w-full"
                      onClick={() => router.push(`/payment?orderId=${order.id}`)}
                    >
                      立即支付
                    </Button>
                  )}

                  {order.status === '支付中' && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleQuery()}
                      disabled={isQuerying}
                    >
                      刷新状态
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push('/dashboard')}
                  >
                    返回仪表板
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 帮助信息 */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">Q: 支付后多久能看到状态更新？</h4>
                  <p className="text-gray-600">A: 通常在2-5分钟内系统会自动更新支付状态。</p>
                </div>
                <div>
                  <h4 className="font-semibold">Q: 支付失败怎么办？</h4>
                  <p className="text-gray-600">A: 可以重新选择支付方式进行支付，或联系客服处理。</p>
                </div>
                <div>
                  <h4 className="font-semibold">Q: 如何获取发票？</h4>
                  <p className="text-gray-600">A: 支付成功后可在个人中心申请开具发票。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    }>
      <PaymentStatusContent />
    </Suspense>
  )
}
