"use client"

import { Database, Fingerprint, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 chinese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 成功案例展示 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              用户见证
            </h3>
            <p className="text-gray-600">
              真实用户的成功故事，见证我们的专业服务
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "通过诸葛查查，我找到了祖父在银行的一笔存款，金额达到了15万元。整个过程非常专业，让我很放心。",
                name: "李女士",
                location: "北京",
                amount: "15万元"
              },
              {
                quote: "我父亲生前在多个城市工作过，通过这个平台帮我找到了他遗留的保险金，解决了家庭的经济困难。",
                name: "王先生",
                location: "上海",
                amount: "8万元"
              },
              {
                quote: "没想到我爷爷在老家还有一处房产，通过专业的查询服务，我们成功办理了继承手续。",
                name: "张女士",
                location: "广州",
                amount: "房产一处"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">找回金额</div>
                    <div className="font-semibold text-red-600">{testimonial.amount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 央企科技赋能遗产查询 */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                央企科技赋能遗产查询
              </h3>
              <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-lg text-blue-100">
                太平金融运用先进技术与专业流程，确保遗产查询的全面性与合法性
              </p>
            </div>

            {/* 三大特点 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">大数据筛查</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  接入台法数据库，全面筛查可能存在的<br/>金融资产、房产等信息
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Fingerprint className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">身份核验</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  严格的身份核验流程，确保查询与继承<br/>的合法性
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">隐私保护</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  严格保护客户隐私，所有查询过程加密<br/>处理
                </p>
              </div>
            </div>

            {/* 专业遗产查询流程 */}
            <div className="bg-blue-800/30 rounded-xl p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-center mb-8">专业遗产查询流程</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { step: '1', title: '初步咨询' },
                  { step: '2', title: '授权委托' },
                  { step: '3', title: '资产查询' },
                  { step: '4', title: '结果反馈' },
                  { step: '5', title: '过户协助' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-blue-900">{item.step}</span>
                      </div>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                    {index < 4 && (
                      <ArrowRight className="w-6 h-6 mx-4 text-blue-300 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              您也有可能拥有遗失的财产
            </h3>
            <p className="text-lg mb-6 opacity-90">
              据统计，每6个中国人中就有1个拥有未知的遗失财产。不要让属于您的财产永远沉睡。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  立即开始查询
                </button>
              </Link>
              <Link href="/search">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  了解更多信息
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
