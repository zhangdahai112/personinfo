"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Search, FileCheck, Users, MessageSquare, Shield, Lock } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "咨询服务",
      description: "专业的遗产查询咨询，包括微信咨询和电话咨询",
      features: [
        "微信在线咨询",
        "专业电话咨询",
        "简易咨询免费",
        "7×24小时服务"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Search,
      title: "查询服务",
      description: "全流程专业查询服务，从委托协议到结果报告",
      features: [
        "委托协议签订",
        "证件材料收集",
        "AI智能搜索",
        "法律咨询支持",
        "查询结果报告"
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      isPaid: true
    },
    {
      icon: Users,
      title: "社区论坛",
      description: "用户交流平台，分享经验和讨论相关话题",
      features: [
        "经验分享",
        "案例讨论",
        "专家解答",
        "社区互助"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Shield,
      title: "隐私保护",
      description: "严格依据《个人信息保护法》，全方位保护用户信息",
      features: [
        "信息加密存储",
        "法律合规保护",
        "数据安全传输",
        "隐私权利保障"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            专业服务体系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于中国法律框架，提供全方位的个人遗产查询服务，保障您的合法权益
          </p>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${service.borderColor} border-2`}
              >
                <CardHeader className={`${service.bgColor} pb-4`}>
                  <div className={`w-12 h-12 ${service.color} mb-4`}>
                    <IconComponent className="w-full h-full" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                    {service.isPaid && (
                      <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        收费服务
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className={`w-full ${service.borderColor} ${service.color} hover:${service.bgColor}`}
                  >
                    了解详情
                  </Button>
                </CardContent>

                {/* 装饰元素 */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${service.bgColor} rounded-full -mr-10 -mt-10 opacity-50`}></div>
              </Card>
            )
          })}
        </div>

        {/* 查询流程说明 */}
        <div className="mt-20 p-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">查询服务详细流程</h3>
            <p className="text-gray-600">专业、透明、可信赖的服务流程</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "签订协议", description: "委托协议签订并进行公证" },
              { step: "2", title: "提供材料", description: "提供相关证件和素材" },
              { step: "3", title: "AI搜索", description: "智能系统进行全面查询" },
              { step: "4", title: "法律咨询", description: "专业律师提供法律建议" },
              { step: "5", title: "出具报告", description: "提供详细查询结果报告" }
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 chinese-gradient rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-gradient-to-r from-red-300 to-amber-300 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
