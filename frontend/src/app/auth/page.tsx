"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useUser } from "@/contexts/UserContext"
import { UserCheck, Phone, User, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    verificationCode: ""
  })
  const [step, setStep] = useState(1) // 1: 输入信息, 2: 验证码
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useUser()
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendVerificationCode = async () => {
    if (!formData.phone || formData.phone.length !== 11) {
      alert("请输入有效的手机号")
      return
    }

    setIsLoading(true)
    // 模拟发送验证码
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setStep(2)
    alert("验证码已发送到您的手机，请查收")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      await sendVerificationCode()
      return
    }

    if (!formData.verificationCode) {
      alert("请输入验证码")
      return
    }

    setIsLoading(true)
    try {
      await login(formData.phone, formData.name)
      router.push("/dashboard")
    } catch (error) {
      alert("登录失败，请重试")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-amber-50 relative overflow-hidden">
      {/* 中国传统装饰背景 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="75" r="60" stroke="#DC2626" strokeWidth="3" fill="none"/>
            <circle cx="75" cy="75" r="40" stroke="#DC2626" strokeWidth="2" fill="none"/>
            <text x="75" y="82" textAnchor="middle" fontSize="20" fill="#DC2626" fontWeight="bold">诸</text>
          </svg>
        </div>

        <div className="absolute bottom-20 right-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="100" rx="10" stroke="#F59E0B" strokeWidth="3" fill="none"/>
            <text x="60" y="68" textAnchor="middle" fontSize="18" fill="#F59E0B" fontWeight="bold">葛</text>
          </svg>
        </div>

        {/* 祥云图案 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100C50 75 75 50 100 50C125 50 150 75 150 100C150 75 175 50 200 50C225 50 250 75 250 100C250 125 225 150 200 150C175 150 150 125 150 100C150 125 125 150 100 150C75 150 50 125 50 100Z"
                  fill="url(#authGradient)" fillOpacity="0.3"/>
            <defs>
              <linearGradient id="authGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* 返回首页链接 */}
          <div className="mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>

          <Card className="border-2 border-red-100 shadow-xl relative overflow-hidden">
            {/* 装饰性边框 */}
            <div className="absolute top-0 left-0 w-full h-2 chinese-gradient"></div>

            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 chinese-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isLogin ? "登录账户" : "注册账户"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {step === 1
                  ? "请输入您的信息开始查询服务"
                  : "请输入收到的验证码完成验证"
                }
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-red-600" />
                        真实姓名
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="请输入您的真实姓名"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-red-600" />
                        手机号码
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="请输入11位手机号码"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={11}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="verificationCode" className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-red-600" />
                      验证码
                    </Label>
                    <Input
                      id="verificationCode"
                      name="verificationCode"
                      type="text"
                      placeholder="请输入6位验证码"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                      maxLength={6}
                      required
                      className="border-red-200 focus:border-red-500 text-center text-xl tracking-widest"
                    />
                    <p className="text-sm text-gray-500 text-center">
                      验证码已发送至 {formData.phone}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="chinese"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "处理中..."
                    : step === 1
                      ? "获取验证码"
                      : "完成验证"
                  }
                </Button>

                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => setStep(1)}
                  >
                    返回上一步
                  </Button>
                )}
              </form>

              {/* 法律声明 */}
              <div className="text-xs text-gray-500 text-center space-y-2 pt-4 border-t border-red-100">
                <p>注册即表示您同意我们的服务条款和隐私政策</p>
                <p className="text-red-600">
                  • 严格遵守《个人信息保护法》
                </p>
                <p>• 所有查询服务基于合法授权</p>
              </div>
            </CardContent>
          </Card>

          {/* 安全提示 */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">安全承诺</p>
                <p>我们采用银行级加密技术保护您的个人信息，严格遵守相关法律法规，确保您的隐私安全。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
