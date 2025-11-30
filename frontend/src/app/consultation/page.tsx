import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, CheckCircle } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 chinese-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                专业咨询服务
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                我们提供专业的遗产查询咨询服务，包括微信在线咨询和电话咨询。简易咨询完全免费。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-green-50">
                  <MessageCircle className="w-16 h-16 text-green-600 mb-4" />
                  <CardTitle className="text-2xl">微信在线咨询</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-green-600 mb-4">简易咨询免费</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      7×24小时在线服务
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      专业律师团队支持
                    </li>
                  </ul>
                  <Button variant="chinese" className="w-full" size="lg">
                    立即咨询
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-blue-50">
                  <Phone className="w-16 h-16 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">专业电话咨询</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-blue-600 mb-4">200元/30分钟</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      资深律师直接对话
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      详细案例分析
                    </li>
                  </ul>
                  <Button variant="chinese" className="w-full" size="lg">
                    立即咨询
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
