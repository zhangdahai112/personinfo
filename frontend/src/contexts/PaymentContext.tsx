"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export interface PaymentOrder {
  id: string
  userId: string
  serviceType: "基础查询" | "全面查询" | "复杂查询" | "咨询服务"
  amount: number
  urgencyLevel: "普通" | "加急" | "特急"
  urgencyFee: number
  totalAmount: number
  status: "待支付" | "支付中" | "已支付" | "支付失败" | "已取消"
  paymentMethod?: "alipay" | "wechat"
  createdAt: string
  paidAt?: string
  description: string
  queryDetails?: unknown
}

interface PaymentContextType {
  currentOrder: PaymentOrder | null
  orderHistory: PaymentOrder[]
  createOrder: (orderData: Partial<PaymentOrder>) => PaymentOrder
  updateOrderStatus: (orderId: string, status: PaymentOrder['status'], paymentMethod?: string) => void
  getOrderById: (orderId: string) => PaymentOrder | undefined
  processPayment: (orderId: string, paymentMethod: 'alipay' | 'wechat') => Promise<boolean>
  generatePaymentQR: (orderId: string, paymentMethod: 'alipay' | 'wechat') => string
  calculateServicePrice: (serviceType: PaymentOrder['serviceType'], urgencyLevel: PaymentOrder['urgencyLevel']) => { baseAmount: number; urgencyFee: number; totalAmount: number }
  queryPaymentStatus: (orderId: string) => Promise<PaymentOrder['status']>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [currentOrder, setCurrentOrder] = useState<PaymentOrder | null>(null)
  const [orderHistory, setOrderHistory] = useState<PaymentOrder[]>([])

  const createOrder = (orderData: Partial<PaymentOrder>): PaymentOrder => {
    const baseAmounts = {
      "基础查询": 5000,
      "全面查询": 12000,
      "复杂查询": 20000,
      "咨询服务": 200
    }

    const urgencyMultipliers = {
      "普通": 0,
      "加急": 0.3,
      "特急": 0.5
    }

    const baseAmount = baseAmounts[orderData.serviceType || "基础查询"]
    const urgencyMultiplier = urgencyMultipliers[orderData.urgencyLevel || "普通"]
    const urgencyFee = baseAmount * urgencyMultiplier
    const totalAmount = baseAmount + urgencyFee

    const newOrder: PaymentOrder = {
      id: `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: orderData.userId || "",
      serviceType: orderData.serviceType || "基础查询",
      amount: baseAmount,
      urgencyLevel: orderData.urgencyLevel || "普通",
      urgencyFee,
      totalAmount,
      status: "待支付",
      createdAt: new Date().toISOString(),
      description: orderData.description || "",
      queryDetails: orderData.queryDetails
    }

    setCurrentOrder(newOrder)
    setOrderHistory(prev => [newOrder, ...prev])
    return newOrder
  }

  const updateOrderStatus = (orderId: string, status: PaymentOrder['status'], paymentMethod?: string) => {
    setOrderHistory(prev => prev.map(order => {
      if (order.id === orderId) {
        const updatedOrder = {
          ...order,
          status,
          paymentMethod: paymentMethod as "alipay" | "wechat" | undefined,
          paidAt: status === "已支付" ? new Date().toISOString() : order.paidAt
        }
        if (order.id === currentOrder?.id) {
          setCurrentOrder(updatedOrder)
        }
        return updatedOrder
      }
      return order
    }))
  }

  const getOrderById = (orderId: string): PaymentOrder | undefined => {
    return orderHistory.find(order => order.id === orderId)
  }

  const processPayment = async (orderId: string, paymentMethod: 'alipay' | 'wechat'): Promise<boolean> => {
    try {
      updateOrderStatus(orderId, "支付中", paymentMethod)

      // 模拟生成支付二维码和跳转
      const order = getOrderById(orderId)
      if (!order) return false

      // 生成支付链接
      const paymentUrl = paymentMethod === 'alipay'
        ? `alipay://pay?orderNo=${orderId}&amount=${order.totalAmount}`
        : `weixin://wxpay/bizpayurl?pr=wx${Date.now()}`

      console.log(`支付链接生成: ${paymentUrl}`)

      // 模拟支付API调用
      await new Promise(resolve => setTimeout(resolve, 3000))

      // 模拟85%成功率
      const isSuccess = Math.random() > 0.15

      if (isSuccess) {
        updateOrderStatus(orderId, "已支付", paymentMethod)
        return true
      } else {
        updateOrderStatus(orderId, "支付失败", paymentMethod)
        return false
      }
    } catch (error) {
      console.error('Payment processing error:', error)
      updateOrderStatus(orderId, "支付失败", paymentMethod)
      return false
    }
  }

  const generatePaymentQR = (orderId: string, paymentMethod: 'alipay' | 'wechat'): string => {
    const order = getOrderById(orderId)
    if (!order) return ''

    const paymentData = paymentMethod === 'alipay'
      ? `alipay://pay?orderNo=${orderId}&amount=${order.totalAmount}`
      : `weixin://wxpay/bizpayurl?pr=wx${Date.now()}`

    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentData)}`
  }

  const calculateServicePrice = (serviceType: PaymentOrder['serviceType'], urgencyLevel: PaymentOrder['urgencyLevel']) => {
    const baseAmounts = {
      "基础查询": 5000,
      "全面查询": 12000,
      "复杂查询": 20000,
      "咨询服务": 200
    }

    const urgencyMultipliers = {
      "普通": 0,
      "加急": 0.3,
      "特急": 0.5
    }

    const baseAmount = baseAmounts[serviceType]
    const urgencyMultiplier = urgencyMultipliers[urgencyLevel]
    const urgencyFee = baseAmount * urgencyMultiplier
    const totalAmount = baseAmount + urgencyFee

    return { baseAmount, urgencyFee, totalAmount }
  }

  const queryPaymentStatus = async (orderId: string): Promise<PaymentOrder['status']> => {
    // 模拟查询支付状态
    const order = getOrderById(orderId)
    if (!order) return "已取消"

    // 模拟API查询延迟
    await new Promise(resolve => setTimeout(resolve, 500))

    // 如果订单状态是支付中，有70%几率变为已支付
    if (order.status === "支付中") {
      const isPaid = Math.random() > 0.3
      if (isPaid) {
        updateOrderStatus(orderId, "已支付")
        return "已支付"
      }
    }

    return order.status
  }

  return (
    <PaymentContext.Provider value={{
      currentOrder,
      orderHistory,
      createOrder,
      updateOrderStatus,
      getOrderById,
      processPayment,
      generatePaymentQR,
      calculateServicePrice,
      queryPaymentStatus
    }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}
