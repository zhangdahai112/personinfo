import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Heart, Eye, Clock, Star, TrendingUp, HelpCircle, Scale } from "lucide-react"

export default function CommunityPage() {
  const forumSections = [
    {
      icon: MessageSquare,
      title: "经验分享",
      description: "分享您的查询经验和成功案例",
      topics: 156,
      posts: 1024,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: HelpCircle,
      title: "问题求助",
      description: "遇到问题？向社区求助获得帮助",
      topics: 89,
      posts: 542,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Scale,
      title: "法律咨询",
      description: "专业律师在线解答法律问题",
      topics: 78,
      posts: 432,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Users,
      title: "案例讨论",
      description: "讨论典型案例和解决方案",
      topics: 134,
      posts: 756,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ]

  const hotTopics = [
    {
      title: "成功找回祖父遗留的银行存款15万元",
      author: "李女士",
      replies: 23,
      views: 1245,
      time: "2小时前",
      isHot: true,
      category: "成功案例"
    },
    {
      title: "关于跨省查询银行账户的经验分享",
      author: "王先生",
      replies: 18,
      views: 890,
      time: "5小时前",
      isHot: true,
      category: "经验分享"
    },
    {
      title: "保险理赔查询需要注意哪些事项？",
      author: "张女士",
      replies: 15,
      views: 672,
      time: "1天前",
      isHot: false,
      category: "法律咨询"
    },
    {
      title: "父亲去世后如何查询其名下的股票账户？",
      author: "陈先生",
      replies: 31,
      views: 1567,
      time: "2天前",
      isHot: true,
      category: "问题求助"
    },
    {
      title: "公证处办理继承公证的详细流程",
      author: "专家律师",
      replies: 42,
      views: 2134,
      time: "3天前",
      isHot: true,
      category: "专业指导"
    }
  ]

  const communityStats = [
    { label: "注册用户", value: "50,000+", icon: Users },
    { label: "讨论话题", value: "2,500+", icon: MessageSquare },
    { label: "成功案例", value: "800+", icon: Star },
    { label: "专家解答", value: "1,200+", icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
          {/* 中国传统社区文化装饰背景 */}
          <div className="absolute inset-0 opacity-15">
            {/* 传统圆桌图案 */}
            <div className="absolute top-16 right-16">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#10B981" strokeWidth="3" fill="none" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.4"/>
                <circle cx="100" cy="100" r="40" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.5"/>
                <g opacity="0.6">
                  <circle cx="100" cy="60" r="8" fill="#10B981"/>
                  <circle cx="140" cy="100" r="8" fill="#10B981"/>
                  <circle cx="100" cy="140" r="8" fill="#10B981"/>
                  <circle cx="60" cy="100" r="8" fill="#10B981"/>
                </g>
              </svg>
            </div>

            {/* 中国传统聚会场景 */}
            <div className="absolute bottom-20 left-20">
              <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="60" width="110" height="40" rx="20" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.3"/>
                <circle cx="40" cy="40" r="15" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.4"/>
                <circle cx="75" cy="40" r="15" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.4"/>
                <circle cx="110" cy="40" r="15" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.4"/>
                <text x="75" y="85" textAnchor="middle" fontSize="12" fill="#3B82F6" opacity="0.6" fontWeight="bold">交流</text>
              </svg>
            </div>

            {/* 祥云装饰 */}
            <div className="absolute top-32 left-1/4 opacity-20">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 30C20 20 30 10 40 10C50 10 60 20 60 30C60 20 70 10 80 10C90 10 100 20 100 30C100 40 90 50 80 50C70 50 60 40 60 30C60 40 50 50 40 50C30 50 20 40 20 30Z"
                      fill="url(#communityGradient1)" fillOpacity="0.5"/>
                <defs>
                  <linearGradient id="communityGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 文字装饰 */}
            <div className="absolute bottom-32 right-1/3 opacity-20">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="2" fill="none"/>
                <text x="50" y="58" textAnchor="middle" fontSize="20" fill="#10B981" fontWeight="bold">论</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="chinese-gradient bg-clip-text text-transparent">社区论坛</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                连接有相同需求的用户，分享经验、讨论案例、互相帮助。
                在这里，您可以找到最真实的用户体验和最专业的解答。
              </p>
            </div>

            {/* 社区统计 - 增强版 */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {communityStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center border-green-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 论坛板块 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                论坛板块
              </h2>
              <p className="text-xl text-gray-600">
                根据不同需求分类的讨论区域
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {forumSections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${section.borderColor} border-2 relative overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${
                      section.color.includes('blue') ? 'from-blue-500 to-green-500' :
                      section.color.includes('green') ? 'from-green-500 to-blue-500' :
                      section.color.includes('purple') ? 'from-purple-500 to-blue-500' :
                      'from-red-500 to-amber-500'
                    }`}></div>

                    <CardHeader className={`${section.bgColor} pb-4`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${
                          section.color.includes('blue') ? 'from-blue-500 to-blue-700' :
                          section.color.includes('green') ? 'from-green-500 to-green-700' :
                          section.color.includes('purple') ? 'from-purple-500 to-purple-700' :
                          'from-red-500 to-red-700'
                        } rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-gray-900 mb-2">
                            {section.title}
                          </CardTitle>
                          <p className="text-gray-600">{section.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${section.color}`}>{section.topics}</div>
                            <div className="text-xs text-gray-500">话题</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${section.color}`}>{section.posts}</div>
                            <div className="text-xs text-gray-500">回复</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="chinese" className="w-full group-hover:scale-105 transition-transform duration-300">
                        进入讨论
                      </Button>
                    </CardContent>

                    {/* 装饰性元素 */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 热门话题 - 增强版 */}
        <section className="py-20 bg-gray-50 relative">
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20">
              <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="160" height="110" rx="10" stroke="#10B981" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="8" fill="#10B981"/>
                <circle cx="100" cy="50" r="8" fill="#10B981"/>
                <circle cx="150" cy="50" r="8" fill="#10B981"/>
                <text x="100" y="90" textAnchor="middle" fontSize="16" fill="#10B981" fontWeight="bold">热门话题</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                热门话题
              </h2>
              <p className="text-xl text-gray-600">
                最受关注的讨论话题
              </p>
            </div>

            <div className="space-y-4">
              {hotTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-green-500 hover:border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          {topic.isHot && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">热门</span>
                          )}
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{topic.category}</span>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors group-hover:text-red-600">
                            {topic.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">{topic.author.charAt(0)}</span>
                            </div>
                            <span>作者：{topic.author}</span>
                          </span>
                          <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1 text-green-500" />
                            {topic.replies} 回复
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1 text-blue-500" />
                            {topic.views} 浏览
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-amber-500" />
                            {topic.time}
                          </span>
                        </div>
                      </div>

                      {/* 热度指示器 */}
                      <div className="ml-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            topic.isHot ? 'bg-red-100' : 'bg-gray-100'
                          }`}>
                            <TrendingUp className={`w-6 h-6 ${
                              topic.isHot ? 'text-red-500' : 'text-gray-400'
                            }`} />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            {topic.isHot ? '火热' : '普通'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="hover:border-green-500 hover:text-green-600">
                查看更多话题
              </Button>
            </div>
          </div>
        </section>

        {/* 社区规则 - 中国风设计 */}
        <section className="py-20 bg-white relative">
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="120" height="120" rx="15" stroke="#DC2626" strokeWidth="3" fill="none"/>
                <circle cx="75" cy="75" r="40" stroke="#DC2626" strokeWidth="2" fill="none"/>
                <text x="75" y="82" textAnchor="middle" fontSize="18" fill="#DC2626" fontWeight="bold">规</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                社区行为准则
              </h2>
              <p className="text-xl text-gray-600">
                维护良好的社区环境，让每个人都能获得帮助
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-lg text-green-800 flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    鼓励行为
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-green-500 mr-2" />
                      分享真实的经验和案例
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-green-500 mr-2" />
                      提供专业的建议和帮助
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-green-500 mr-2" />
                      尊重他人隐私和观点
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-green-500 mr-2" />
                      积极参与讨论和交流
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-green-500 mr-2" />
                      感谢帮助过您的用户
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 border-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-amber-500"></div>
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-red-800 flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    禁止行为
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-4 h-4 text-red-500 mr-2">⚠</span>
                      发布虚假信息和谣言
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 text-red-500 mr-2">⚠</span>
                      恶意攻击或侮辱他人
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 text-red-500 mr-2">⚠</span>
                      泄露他人个人信息
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 text-red-500 mr-2">⚠</span>
                      发布广告和垃圾信息
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 text-red-500 mr-2">⚠</span>
                      违反法律法规的内容
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
          {/* 装饰元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="3" fill="none"/>
                <text x="50" y="58" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">社</text>
              </svg>
            </div>
            <div className="absolute bottom-10 right-10">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="2" fill="none"/>
                <text x="60" y="68" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">区</text>
              </svg>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              加入我们的社区
            </h2>
            <p className="text-xl text-white/90 mb-8">
              与数万用户一起交流经验，分享成功案例，获得专业帮助
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full">
                立即注册
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full">
                游客浏览
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
