import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileCheck, Search, Users, Scale, FileText, Clock, Shield, DollarSign } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const searchSteps = [
    {
      step: "1",
      icon: FileCheck,
      title: "签订委托协议",
      description: "委托协议签订并进行公证",
      details: [
        "签订正式委托查询协议",
        "明确查询范围和目标",
        "协议公证确保法律效力",
        "保障双方权益"
      ],
      timeframe: "1-2个工作日"
    },
    {
      step: "2",
      icon: FileText,
      title: "提供证件和素材",
      description: "提供相关证件和素材",
      details: [
        "被查询人身份证明材料",
        "死亡证明或失踪证明",
        "亲属关系证明文件",
        "查询人身份证明"
      ],
      timeframe: "准备时间视情况而定"
    },
    {
      step: "3",
      icon: Search,
      title: "AI智能搜索查询",
      description: "智能系统进行全面查询",
      details: [
        "银行存款账户查询",
        "证券投资账户搜索",
        "保险理赔金查找",
        "其他金融资产搜索"
      ],
      timeframe: "3-7个工作日"
    },
    {
      step: "4",
      icon: Scale,
      title: "相关法律咨询",
      description: "专业律师提供法律建议",
      details: [
        "继承权法律分析",
        "财产归属确认",
        "继承程序指导",
        "纠纷解决方案"
      ],
      timeframe: "随查询进程进行"
    },
    {
      step: "5",
      icon: FileText,
      title: "出具查询结果报告",
      description: "提供详细查询结果报告",
      details: [
        "完整的查询结果清单",
        "法律意见书",
        "后续操作指引",
        "相关证明文件"
      ],
      timeframe: "1-2个工作日"
    }
  ]

  const serviceFeatures = [
    {
      icon: Shield,
      title: "法律保障",
      description: "严格依据中国法律法规，确保查询过程合法合规"
    },
    {
      icon: Users,
      title: "专业团队",
      description: "资深律师和金融专家组成的专业团队提供服务"
    },
    {
      icon: Clock,
      title: "高效快速",
      description: "整个查询流程通常在10-15个工作日内完成"
    },
    {
      icon: DollarSign,
      title: "透明收费",
      description: "明确的收费标准，无隐形费用，按查询复杂度收费"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-white to-amber-50 chinese-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                专业<span className="chinese-gradient bg-clip-text text-transparent">查询服务</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                全流程专业查询服务，从委托协议签订到结果报告出具，
                通过AI智能搜索和专业法律支持，帮您找回遗失的个人财产。
              </p>
            </div>

            {/* 服务特色 */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {serviceFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="text-center border-red-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 详细流程 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                五步查询流程
              </h2>
              <p className="text-xl text-gray-600">
                专业、透明、可信赖的服务流程，让您的查询过程更加安心
              </p>
            </div>

            <div className="space-y-12">
              {searchSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2">
                      <Card className="h-full border-2 border-red-100 hover:shadow-xl transition-all duration-300">
                        <CardHeader className="bg-gradient-to-r from-red-50 to-amber-50">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 chinese-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {step.step}
                            </div>
                            <div>
                              <CardTitle className="text-2xl text-gray-900">
                                {step.title}
                              </CardTitle>
                              <p className="text-gray-600 mt-2">{step.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="mb-4">
                            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                              预计时间：{step.timeframe}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="lg:w-1/2 text-center">
                      <div className="w-32 h-32 chinese-gradient rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 收费说明 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                收费标准
              </h2>
              <p className="text-xl text-gray-600">
                透明合理的收费体系，按查询复杂度和范围确定
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-green-50 text-center">
                  <CardTitle className="text-xl">基础查询</CardTitle>
                  <div className="text-3xl font-bold text-green-600">5,000元</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-sm">
                    <li>• 单一银行账户查询</li>
                    <li>• 基础法律咨询</li>
                    <li>• 查询报告出具</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 transform scale-105">
                <CardHeader className="bg-red-50 text-center">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">推荐</div>
                  <CardTitle className="text-xl">全面查询</CardTitle>
                  <div className="text-3xl font-bold text-red-600">12,000元</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-sm">
                    <li>• 多银行账户查询</li>
                    <li>• 保险理赔查询</li>
                    <li>• 证券账户查询</li>
                    <li>• 全程法律支持</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-purple-50 text-center">
                  <CardTitle className="text-xl">复杂查询</CardTitle>
                  <div className="text-3xl font-bold text-purple-600">面议</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-sm">
                    <li>• 跨境资产查询</li>
                    <li>• 房产信息查询</li>
                    <li>• 复杂继承纠纷</li>
                    <li>• 定制化服务</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-amber-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              开始您的专业查询服务
            </h2>
            <p className="text-xl text-white/90 mb-8">
              专业团队为您提供全方位的遗产查询服务，让遗失的财产重新回到您的身边
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full">
                  立即开始查询
                </Button>
              </Link>
              <Link href="/consultation">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full">
                  咨询服务详情
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
