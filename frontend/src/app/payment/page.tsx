"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePayment } from "@/contexts/PaymentContext"
import { CreditCard, Smartphone } from "lucide-react"

export default function PaymentPage() {
  const { currentOrder, processPayment } = usePayment()
  const [selectedMethod, setSelectedMethod] = useState<'alipay' | 'wechat'>('alipay')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    if (!currentOrder) return

    setIsProcessing(true)
    const success = await processPayment(currentOrder.id, selectedMethod)
    setIsProcessing(false)

    if (success) {
      alert('支付成功！')
    } else {
      alert('支付失败，请重试')
    }
  }

  if (!currentOrder) {
    return <div>未找到订单信息</div>
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>支付订单</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">订单信息</h3>
                  <p>服务类型：{currentOrder.serviceType}</p>
                  <p>紧急程度：{currentOrder.urgencyLevel}</p>
                  <p>总金额：¥{(currentOrder.totalAmount / 100).toFixed(2)}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">选择支付方式</h3>
                  <div className="space-y-3">
                    <div
                      className={`border p-4 rounded cursor-pointer ${selectedMethod === 'alipay' ? 'border-blue-500' : ''}`}
                      onClick={() => setSelectedMethod('alipay')}
                    >
                      <div className="flex items-center">
                        <CreditCard className="w-6 h-6 mr-3" />
                        <span>支付宝</span>
                      </div>
                    </div>
                    <div
                      className={`border p-4 rounded cursor-pointer ${selectedMethod === 'wechat' ? 'border-green-500' : ''}`}
                      onClick={() => setSelectedMethod('wechat')}
                    >
                      <div className="flex items-center">
                        <Smartphone className="w-6 h-6 mr-3" />
                        <span>微信支付</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full"
                  variant="chinese"
                >
                  {isProcessing ? '支付中...' : `立即支付 ¥${(currentOrder.totalAmount / 100).toFixed(2)}`}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
