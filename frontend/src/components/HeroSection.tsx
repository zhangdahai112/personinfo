"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
      {/* 中国传统装饰背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-red-400 to-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-amber-400 to-red-400 rounded-full blur-3xl"></div>

        {/* 祥云图案 */}
        <div className="absolute top-20 left-1/4 opacity-30">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30C20 20 30 10 40 10C50 10 60 20 60 30C60 20 70 10 80 10C90 10 100 20 100 30C100 40 90 50 80 50C70 50 60 40 60 30C60 40 50 50 40 50C30 50 20 40 20 30Z"
                  fill="url(#gradient1)" fillOpacity="0.6"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-32 right-1/3 opacity-30">
          <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 25C15 18 22 12 30 12C38 12 45 18 45 25C45 18 52 12 60 12C68 12 75 18 75 25C75 32 68 38 60 38C52 38 45 32 45 25C45 32 38 38 30 38C22 38 15 32 15 25Z"
                  fill="url(#gradient2)" fillOpacity="0.5"/>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 中国古典建筑剪影装饰 */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 L100 70 L150 60 L200 65 L250 55 L300 60 L400 50 L500 55 L600 45 L700 50 L800 40 L900 45 L1000 35 L1100 40 L1200 30 L1200 128 L0 128 Z"
                fill="url(#gradient3)" fillOpacity="0.8"/>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              {/* 中国传统印章装饰 */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-red-300 shadow-lg">
                  诸
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-amber-300 shadow-lg">
                  葛
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-red-300 shadow-lg">
                  查
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-amber-300 shadow-lg">
                  查
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                查找遗失的
                <span className="block bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                  个人遗产
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                基于中国法律框架，为您提供专业的个人遗产第三方查询服务。
                通过AI智能搜索和法律咨询，帮助您找回可能属于您或您祖先的遗失财产。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/questionnaire">
                <Button size="lg" variant="chinese" className="text-lg px-8 py-4 rounded-full">
                  开始查询
                </Button>
              </Link>
              <Link href="/search">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-red-200 hover:border-red-300">
                  了解流程
                </Button>
              </Link>
            </div>

            <div className="text-sm text-gray-500">
              <p>依据《个人信息保护法》全方位保护您的隐私</p>
            </div>
          </div>

          {/* 右侧遗产范围展示区域 */}
          <div className="relative slide-up">
            <div className="relative">
              {/* 主要展示图片和内容 */}
              <div className="bg-white/95 backdrop-blur-sm border-2 border-red-100 shadow-2xl relative overflow-hidden rounded-3xl">
                {/* 中国传统边框装饰 */}
                <div className="absolute top-0 left-0 w-full h-3 chinese-gradient"></div>
                <div className="absolute bottom-0 left-0 w-full h-3 chinese-gradient"></div>

                <div className="p-8">
                  {/* 吸引眼球的遗产类型可视化 */}
                  <div className="relative mb-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">可查询遗产范围</h3>
                      <p className="text-gray-600">全方位覆盖各类财产形态</p>
                    </div>

                    {/* 遗产类型图标网格 */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {/* 银行存款 */}
                      <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M2 8h20" stroke="white" strokeWidth="2"/>
                            <path d="M6 12h4" stroke="white" strokeWidth="1"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-green-800">银行存款</div>
                      </div>

                      {/* 证券基金 */}
                      <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12l3-3 4 4 8-8" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M18 8l3 3-3 3" stroke="white" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-blue-800">证券基金</div>
                      </div>

                      {/* 保险产品 */}
                      <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-purple-800">保险产品</div>
                      </div>

                      {/* 不动产 */}
                      <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21h18" stroke="white" strokeWidth="2"/>
                            <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M19 21V11l-6-4" stroke="white" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-amber-800">不动产</div>
                      </div>

                      {/* 车辆 */}
                      <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M15 17a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M5 17H3v-6l2-5h9l4 5v6h-2" stroke="white" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-red-800">车辆</div>
                      </div>

                      {/* 知识产权 */}
                      <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-indigo-800">知识产权</div>
                      </div>
                    </div>

                    {/* 详细说明 */}
                    <div className="bg-gradient-to-r from-red-50 to-amber-50 p-4 rounded-xl border border-red-100">
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">包括但不限于</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">银行存款</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">证券基金</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">保险产品</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">私募股权</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">不动产</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">车辆</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">网络积分</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">虚拟物品</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">知识产权</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">其他财产</span>
                        </div>
                      </div>
                    </div>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="text-2xl font-bold text-red-600">10,000+</div>
                        <div className="text-sm text-gray-600">已查询案例</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-2xl font-bold text-amber-600">95%</div>
                        <div className="text-sm text-gray-600">成功找回率</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 浮动装饰元素 - 中国风 */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* 中国传统图案装饰 */}
              <div className="absolute top-1/2 -left-8 w-16 h-16 opacity-30">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.5"/>
                  <path d="M32 8 L32 56 M8 32 L56 32" stroke="#DC2626" strokeWidth="1" opacity="0.5"/>
                  <circle cx="32" cy="32" r="8" fill="#F59E0B" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 合作伙伴标识 */}
        <div className="mt-20 pt-12 border-t border-red-100">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">受到信赖的专业机构</p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-500 font-medium">法律保障</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-500 font-medium">公证服务</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-500 font-medium">专业团队</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
