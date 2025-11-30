"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Clock, DollarSign, FileText } from "lucide-react"

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState<string>('基础查询')
  const [urgencyLevel, setUrgencyLevel] = useState<string>('普通')

  const services = [
    {
      type: '基础查询',
      basePrice: 5000,
      description: '单一银行账户查询',
      features: ['银行存款查询', '基础账户信息', '1-2个工作日完成']
    },
    {
      type: '全面查询',
      basePrice: 12000,
      description: '多银行 + 保险 + 证券',
      features: ['所有银行查询', '保险理赔信息', '证券账户查询', '3-5个工作日完成']
    },
    {
      type: '复杂查询',
      basePrice: 20000,
      description: '全面查询 + 房产 + 车辆',
      features: ['包含全面查询所有项目', '房产信息查询', '车辆登记信息', '公积金查询', '5-7个工作日完成']
    },
    {
      type: '咨询服务',
      basePrice: 200,
      description: '法律咨询服务',
      features: ['专业律师咨询', '法律建议', '文件指导', '当日回复']
    }
  ]

  const urgencyOptions = [
    { level: '普通', multiplier: 0, description: '标准处理时间' },
    { level: '加急', multiplier: 0.3, description: '时间缩短30%，费用增加30%' },
    { level: '特急', multiplier: 0.5, description: '时间缩短50%，费用增加50%' }
  ]

  const calculatePrice = () => {
    const service = services.find(s => s.type === selectedService)
    const urgency = urgencyOptions.find(u => u.level === urgencyLevel)

    if (!service || !urgency) return { basePrice: 0, urgencyFee: 0, totalPrice: 0 }

    const basePrice = service.basePrice
    const urgencyFee = Math.round(basePrice * urgency.multiplier)
    const totalPrice = basePrice + urgencyFee

    return { basePrice, urgencyFee, totalPrice }
  }

  const { basePrice, urgencyFee, totalPrice } = calculatePrice()

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">服务费用查询</h1>
            <p className="text-xl text-gray-600">透明的收费标准，专业的服务保障</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 服务选择 */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-red-600" />
                    选择服务类型
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.type}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedService === service.type
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setSelectedService(service.type)}
                      >
                        <h3 className="font-semibold text-lg mb-2">{service.type}</h3>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="text-2xl font-bold text-red-600 mb-3">
                          ¥{(service.basePrice / 100).toFixed(2)}
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 紧急程度选择 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-red-600" />
                    选择紧急程度
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {urgencyOptions.map((option) => (
                      <div
                        key={option.level}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          urgencyLevel === option.level
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setUrgencyLevel(option.level)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{option.level}</h4>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                          {option.multiplier > 0 && (
                            <div className="text-red-600 font-semibold">
                              +{(option.multiplier * 100).toFixed(0)}%
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 费用计算 */}
            <div>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-red-600" />
                    费用计算
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">选择的服务</h4>
                      <p className="text-sm text-gray-600">{selectedService}</p>
                      <p className="text-sm text-gray-500">紧急程度：{urgencyLevel}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>基础费用：</span>
                        <span>¥{(basePrice / 100).toFixed(2)}</span>
                      </div>

                      {urgencyFee > 0 && (
                        <div className="flex justify-between">
                          <span>加急费用：</span>
                          <span>¥{(urgencyFee / 100).toFixed(2)}</span>
                        </div>
                      )}

                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>总计：</span>
                          <span className="text-red-600">¥{(totalPrice / 100).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="chinese" className="w-full">
                      开始查询
                    </Button>

                    <div className="text-xs text-gray-500 space-y-1">
                      <p>• 费用包含所有查询和报告费用</p>
                      <p>• 如查询无结果，退还80%费用</p>
                      <p>• 支持支付宝、微信支付</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 费用说明 */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                费用说明
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">收费标准</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 基础查询：单一银行账户查询，适合简单需求</li>
                    <li>• 全面查询：多维度财产查询，覆盖面更广</li>
                    <li>• 复杂查询：包含房产车辆等完整财产信息</li>
                    <li>• 咨询服务：专业法律建议和文件指导</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">服务保障</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 专业律师团队，合法合规查询</li>
                    <li>• 严格保护客户隐私和信息安全</li>
                    <li>• 查询结果真实有效，可作为法律依据</li>
                    <li>• 提供详细的查询报告和说明</li>
                  </ul>
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
