"use client"

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    services: [
      { name: "咨询服务", href: "#consultation" },
      { name: "查询服务", href: "#search" },
      { name: "社区论坛", href: "#community" },
      { name: "成功案例", href: "#cases" }
    ],
    support: [
      { name: "帮助中心", href: "#help" },
      { name: "服务条款", href: "#terms" },
      { name: "隐私政策", href: "#privacy" },
      { name: "联系我们", href: "#contact" }
    ],
    legal: [
      { name: "《个人信息保护法》", href: "#pipl" },
      { name: "《继承法》", href: "#inheritance-law" },
      { name: "《民法典》", href: "#civil-code" },
      { name: "法律条文", href: "#legal-texts" }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容区域 */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* 品牌信息 */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 chinese-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">诸</span>
                </div>
                <div className="text-xl font-bold">诸葛查查</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                专业的中国个人遗产第三方查询服务平台，基于中国法律框架，为您提供安全、可靠的遗产查询服务。
              </p>

              {/* 联系信息 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">微信咨询：zhugechacha</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">咨询热线：400-888-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">邮箱：service@zhugechacha.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">地址：北京市朝阳区</span>
                </div>
              </div>
            </div>

            {/* 服务链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">服务项目</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 支持链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">客户支持</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 法律依据 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">法律依据</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 法律声明区域 */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">重要法律声明</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>• 本服务严格遵循《中华人民共和国个人信息保护法》，保护用户隐私权益</p>
              <p>• 查询服务基于《中华人民共和国民法典》继承编相关条款执行</p>
              <p>• 所有查询结果需经过法律程序验证，确保合法合规</p>
              <p>• 用户信息采用银行级加密技术保护，确保数据安全</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 诸葛查查. 保留所有权利. |
              <span className="ml-2">京ICP备xxxxxxxx号-1</span>
            </div>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#terms" className="hover:text-white transition-colors">服务条款</a>
              <a href="#privacy" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>

        {/* 监管信息 */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-xs text-gray-500">
            <p>本平台受中国银保监会、司法部等相关部门监管</p>
            <p className="mt-1">查询服务由具有相应资质的律师事务所和公证机构提供技术支持</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
