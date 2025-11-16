import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileCheck, Database, Eye, UserCheck, Scale, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  const protectionMeasures = [
    {
      icon: Lock,
      title: "数据加密存储",
      description: "采用银行级AES-256加密技术保护用户数据",
      details: [
        "所有敏感信息采用高强度加密",
        "数据传输过程全程加密",
        "密钥管理严格分离",
        "定期更新加密算法"
      ]
    },
    {
      icon: Database,
      title: "安全数据中心",
      description: "数据存储在符合国家标准的安全数据中心",
      details: [
        "物理安全24小时监控",
        "多重身份验证访问",
        "灾备系统保障数据安全",
        "符合等保三级标准"
      ]
    },
    {
      icon: UserCheck,
      title: "权限分级管理",
      description: "严格的数据访问权限控制机制",
      details: [
        "最小权限原则",
        "操作日志全程记录",
        "定期权限审计",
        "异常行为实时监控"
      ]
    },
    {
      icon: FileCheck,
      title: "合规性保障",
      description: "严格遵守《个人信息保护法》等法律法规",
      details: [
        "数据处理合法合规",
        "用户知情同意机制",
        "数据最小化原则",
        "定期合规性审核"
      ]
    }
  ]

  const legalBasis = [
    {
      law: "《中华人民共和国个人信息保护法》",
      description: "全面规范个人信息处理活动，保护个人信息权益",
      keyPoints: [
        "个人信息处理的合法性基础",
        "个人信息主体的权利保障",
        "个人信息处理者的义务",
        "法律责任与处罚措施"
      ]
    },
    {
      law: "《中华人民共和国网络安全法》",
      description: "保障网络安全，维护网络空间主权和国家安全",
      keyPoints: [
        "网络运行安全要求",
        "网络信息安全保护",
        "关键信息基础设施保护",
        "网络安全监测预警"
      ]
    },
    {
      law: "《中华人民共和国数据安全法》",
      description: "规范数据处理活动，保障数据安全",
      keyPoints: [
        "数据分类分级保护",
        "数据安全管理制度",
        "数据跨境传输规范",
        "数据安全应急处置"
      ]
    }
  ]

  const userRights = [
    {
      right: "知情权",
      description: "您有权知晓我们如何收集、使用您的个人信息"
    },
    {
      right: "决定权",
      description: "您有权决定是否同意我们处理您的个人信息"
    },
    {
      right: "查阅权",
      description: "您有权查阅我们收集的您的个人信息"
    },
    {
      right: "更正权",
      description: "您有权要求我们更正不准确的个人信息"
    },
    {
      right: "删除权",
      description: "在特定情况下，您有权要求我们删除您的个人信息"
    },
    {
      right: "携带权",
      description: "您有权将个人信息转移至其他个人信息处理者"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
          {/* 中国传统法律文化装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            {/* 法律天平装饰 */}
            <div className="absolute top-20 right-20">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                  <path d="M100 20 L100 180" stroke="#8B5CF6" strokeWidth="3"/>
                  <path d="M100 50 L60 70 L60 90 L80 90 L60 90" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                  <path d="M100 50 L140 70 L140 90 L120 90 L140 90" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                  <ellipse cx="70" cy="90" rx="25" ry="8" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                  <ellipse cx="130" cy="90" rx="25" ry="8" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                  <circle cx="100" cy="170" r="15" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                </g>
              </svg>
            </div>

            {/* 中国传统法律印章 */}
            <div className="absolute bottom-32 left-16">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="100" height="100" rx="10" stroke="#DC2626" strokeWidth="3" fill="none" opacity="0.2"/>
                <rect x="20" y="20" width="80" height="80" rx="5" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.3"/>
                <circle cx="60" cy="60" r="25" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.4"/>
                <text x="60" y="68" textAnchor="middle" fontSize="20" fill="#DC2626" opacity="0.5" fontWeight="bold">法</text>
              </svg>
            </div>

            {/* 祥云图案 */}
            <div className="absolute top-32 left-1/3 opacity-20">
              <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 40C25 25 40 15 55 15C70 15 85 25 85 40C85 25 100 15 115 15C130 15 145 25 145 40C145 55 130 65 115 65C100 65 85 55 85 40C85 55 70 65 55 65C40 65 25 55 25 40Z"
                      fill="url(#privacyGradient1)" fillOpacity="0.4"/>
                <defs>
                  <linearGradient id="privacyGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="chinese-gradient bg-clip-text text-transparent">隐私保护</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                我们严格依据《个人信息保护法》等中国法律法规，
                采用多重技术和管理措施，全方位保护您的个人信息安全。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center border-purple-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    法律合规
                  </h3>
                  <p className="text-sm text-gray-600">
                    严格遵守中国相关法律法规
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    技术保障
                  </h3>
                  <p className="text-sm text-gray-600">
                    银行级加密技术保护数据安全
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    透明公开
                  </h3>
                  <p className="text-sm text-gray-600">
                    数据处理过程完全透明可查
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 保护措施 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                技术保护措施
              </h2>
              <p className="text-xl text-gray-600">
                多层次的技术安全防护体系
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {protectionMeasures.map((measure, index) => {
                const IconComponent = measure.icon
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-purple-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    <CardHeader className="bg-purple-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900">
                            {measure.title}
                          </CardTitle>
                          <p className="text-gray-600 mt-2">{measure.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        {measure.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 法律依据 */}
        <section className="py-20 bg-gray-50 relative">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-32">
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" rx="10" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                <text x="150" y="110" textAnchor="middle" fontSize="24" fill="#3B82F6" fontWeight="bold">法律条文</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                法律依据
              </h2>
              <p className="text-xl text-gray-600">
                严格遵循中国法律法规框架
              </p>
            </div>

            <div className="space-y-8">
              {legalBasis.map((legal, index) => (
                <Card key={index} className="border-2 border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {legal.law}
                        </CardTitle>
                        <p className="text-gray-600 mt-2">{legal.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {legal.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {point}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 用户权利 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                您的权利
              </h2>
              <p className="text-xl text-gray-600">
                根据《个人信息保护法》，您享有以下权利
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-green-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <CardHeader className="bg-green-50 text-center">
                    <CardTitle className="text-lg text-green-800">
                      {right.right}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 text-center text-sm">
                      {right.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                隐私问题联系
              </h2>
              <p className="text-xl text-gray-600">
                如有任何隐私相关问题，请随时联系我们
              </p>
            </div>

            <Card className="border-2 border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-red-500"></div>
              <CardHeader className="bg-amber-50">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    隐私保护专员联系方式
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <strong className="text-gray-900">邮箱：</strong>
                    <span className="text-blue-600">privacy@zhugechacha.com</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">电话：</strong>
                    <span className="text-blue-600">400-888-0000（转隐私保护部）</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">地址：</strong>
                    <span className="text-gray-700">北京市朝阳区XXX路XXX号</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    我们承诺在收到您的隐私相关咨询后，将在3个工作日内给予回复
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
          {/* 装饰性法律元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M50 15 L50 85 M15 50 L85 50" stroke="white" strokeWidth="1"/>
                <text x="50" y="55" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">法</text>
              </svg>
            </div>
            <div className="absolute bottom-10 right-10">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="60" height="60" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                <text x="40" y="45" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">保</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              信任我们，保护您的隐私
            </h2>
            <p className="text-xl text-white/90 mb-8">
              我们承诺以最高标准保护您的个人信息，让您安心使用我们的服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full">
                查看完整隐私政策
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full">
                联系隐私专员
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
