"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { API_ENDPOINTS, buildApiUrl } from "@/lib/api-config"

export default function QuestionnairePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showSummary, setShowSummary] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(true)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    relationship: '',
    specificNeeds: '',
    contactTime: ''
  })

  // Load existing data on mount
  useEffect(() => {
    const loadExistingData = async () => {
      const userId = localStorage.getItem('userId')
      
      if (userId) {
        try {
          const response = await fetch(buildApiUrl(API_ENDPOINTS.GET_BY_ID, { id: userId }))
          const result = await response.json()
          
          if (result.success && result.data) {
            // Load existing answers and contact info
            if (result.data.answers) {
              setAnswers(result.data.answers)
            }
            if (result.data.contactInfo) {
              setContactInfo(result.data.contactInfo)
            }
            // If user has submitted, show results
            if (result.data.contactInfo && result.data.contactInfo.name) {
              setShowResults(true)
            }
          }
        } catch (error) {
          console.error('加载数据错误:', error)
        }
      }
      
      setLoading(false)
    }

    loadExistingData()
  }, [])

  const questions = [
    {
      id: 'relationship',
      type: 'select',
      question: '您与逝者的关系是什么？',
      help: '这将帮助我们确定您的继承权利和所需证明材料',
      options: ['配偶', '子女', '父母', '兄弟姐妹', '其他亲属', '非亲属'],
      required: true,
    },
    {
      id: 'living_together',
      type: 'select',
      question: '您是否与逝者长期共同生活（如同住超过3年）？',
      help: '共同生活情况有助于判断您对逝者财务状况的了解程度',
      options: ['是，共同生活超过5年', '是，3-5年', '否，仅偶尔探望', '否，长期异地'],
      required: true,
    },
    {
      id: 'financial_knowledge',
      type: 'select',
      question: '您对逝者的财务状况（如银行账户、投资、债务等）了解多少？',
      help: '了解程度将影响查询的重点和方向',
      options: [
        '完全不了解',
        '仅知道少量信息（如某张银行卡）',
        '了解大部分，但不确定是否有遗漏',
        '非常清楚（有详细清单）',
      ],
      required: true,
    },
    {
      id: 'evidence_possession',
      type: 'select',
      question: '您目前是否掌握任何与遗产相关的线索（如房产证、银行卡、保险单、合同等）？',
      help: '现有线索将帮助我们制定更精准的查询策略',
      options: ['无任何线索', '有少量纸质/电子凭证（但不完整）', '有较多线索，但不确定是否齐全'],
      required: true,
    },
    {
      id: 'estate_type',
      type: 'multiselect',
      question: '遗产类型可能包括哪些？（可多选）',
      help: '请选择所有可能适用的遗产类型',
      options: [
        '房产',
        '存款',
        '股票基金',
        '车辆',
        '保险',
        '债权债务',
        '虚拟财产',
        '其他财产（如股权、收藏品等）',
        '不清楚',
      ],
      required: true,
    },
    {
      id: 'phone_access',
      type: 'select',
      question: '您是否持有逝者的手机？是否知晓开机密码/支付密码？',
      help: '手机中可能包含重要的财务信息和线索',
      options: ['无手机', '有手机，但不知道密码', '有手机，知道密码但未查看过内容', '有手机且已初步查看'],
      required: true,
    },
    {
      id: 'death_certificate',
      type: 'select',
      question: '您是否已办理逝者的死亡证明？',
      help: '死亡证明是办理遗产相关手续的必要文件',
      options: ['未办理', '已办理（纸质版）', '已办理（电子版）', '不清楚办理流程'],
      required: true,
    },
    {
      id: 'relationship_proof',
      type: 'select',
      question: '您是否能便捷获取与逝者的亲属关系证明（如户口本、结婚证、出生证等）？',
      help: '亲属关系证明是继承权确认的重要依据',
      options: ['无法提供', '能提供，但需要跨部门办理（如派出所、民政局）', '能提供，材料齐全'],
      required: true,
    },
    {
      id: 'time_availability',
      type: 'select',
      question: '您目前是否有充足的时间和精力自主处理遗产相关事务（如跑部门、整理材料、协调继承人等）？',
      help: '时间和精力情况将影响我们为您推荐的服务方案',
      options: [
        '无时间（需工作/照顾家庭）',
        '有时间，但不确定能否应对复杂流程',
        '有时间且有信心自主处理',
      ],
      required: true,
    },
    {
      id: 'process_knowledge',
      type: 'select',
      question: '您是否了解遗产处理可能涉及的部门（如不动产登记中心、银行、公证处等）？是否接触过相关流程？',
      help: '流程了解程度将帮助我们提供更有针对性的指导',
      options: ['完全不了解', '听说过，但不清楚具体流程', '了解部分流程，但觉得很复杂'],
      required: true,
    },
    {
      id: 'heirs_count',
      type: 'select',
      question: '除您之外，是否还有其他法定继承人？',
      help: '继承人数量会影响财产分配和继承流程的复杂度',
      options: ['无其他继承人', '1-2人', '3-5人', '5人以上'],
      required: true,
    },
    {
      id: 'heirs_agreement',
      type: 'select',
      question: '所有继承人是否对遗产分配达成一致意见？',
      help: '继承人之间的协调情况会影响遗产处理的顺利程度',
      options: ['达成一致', '部分一致，存在小分歧', '分歧较大', '不确定'],
      required: true,
    },
    {
      id: 'urgency',
      type: 'select',
      question: '您希望在多长时间内完成遗产处理？',
      help: '时间要求会影响我们为您制定的服务方案',
      options: ['1个月内', '3个月内', '半年内', '1年内', '没有明确时限'],
      required: true,
    },
  ]

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: any) => {
    const question = questions[currentQuestion]
    if (question.type === 'multiselect') {
      const currentAnswers = answers[question.id] || []
      if (currentAnswers.includes(value)) {
        setAnswers({
          ...answers,
          [question.id]: currentAnswers.filter((v: string) => v !== value)
        })
      } else {
        setAnswers({
          ...answers,
          [question.id]: [...currentAnswers, value]
        })
      }
    } else {
      setAnswers({
        ...answers,
        [question.id]: value
      })
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowSummary(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    // Validate contact info
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.relationship || !contactInfo.specificNeeds || !contactInfo.contactTime) {
      alert('请填写完整的个人信息')
      return
    }

    try {
      // Get or generate userId
      let userId = localStorage.getItem('userId')
      if (!userId) {
        userId = generateUUID()
        localStorage.setItem('userId', userId)
      }

      // Prepare data matching backend User model
      const submitData = {
        id: userId,
        answers: answers,
        contactInfo: contactInfo
      }

      const response = await fetch(API_ENDPOINTS.SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setShowResults(true)
      } else {
        alert('提交失败，请稍后重试')
      }
    } catch (error) {
      console.error('提交错误:', error)
      alert('提交失败，请稍后重试')
    }
  }

  // Generate UUID function
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  const questionMap: Record<string, string> = {
    relationship: '您与逗者的关系',
    living_together: '共同生活情况',
    financial_knowledge: '财务状况了解程度',
    evidence_possession: '线索掌握情况',
    estate_type: '遗产类型',
    phone_access: '手机掌握情况',
    death_certificate: '死亡证明',
    relationship_proof: '关系证明',
    time_availability: '时间精力',
    process_knowledge: '流程了解',
    heirs_count: '其他继承人',
    heirs_agreement: '继承人关系',
    urgency: '处理时限',
  }

  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id]
  const canProceed = currentQ.type === 'multiselect' 
    ? currentAnswer && currentAnswer.length > 0 
    : currentAnswer !== undefined

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="bg-green-50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">提交成功</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-center text-gray-600 mb-6">
                感谢您完成问卷！我们的专业团队将根据您提供的信息为您制定个性化的遗产查询方案。
              </p>
              <p className="text-center text-gray-600 mb-8">
                我们会在1-2个工作日内与您联系，请保持电话畅通。
              </p>
              
              {/* Display submitted info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">您的提交信息</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">姓名：</span>{contactInfo.name}</p>
                  <p><span className="font-medium">电话：</span>{contactInfo.phone}</p>
                  <p><span className="font-medium">关系：</span>{contactInfo.relationship}</p>
                  <p><span className="font-medium">希望联系时间：</span>{contactInfo.contactTime}</p>
                  <p><span className="font-medium">用户ID：</span>{localStorage.getItem('userId')}</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Link href="/">
                  <Button className="bg-red-600 hover:bg-red-700">
                    返回首页
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  onClick={() => {
                    if (confirm('确定要重新填写问卷吗？当前数据将被清除。')) {
                      localStorage.removeItem('userId')
                      window.location.reload()
                    }
                  }}
                >
                  重新填写
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setShowSummary(false)} className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回问答
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">回答总结</h1>
            <p className="text-gray-600">请确认您的回答并填写联系信息</p>
          </div>

          {/* 回答总结 */}
          <Card className="mb-8">
            <CardHeader className="bg-blue-50">
              <CardTitle>您的回答总结</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {Object.keys(answers).map((questionId) => {
                  const questionText = questionMap[questionId]
                  if (!questionText) return null

                  let displayValue = ''
                  const answer = answers[questionId]

                  if (Array.isArray(answer)) {
                    displayValue = answer.length > 0 ? answer.join('、') : '无'
                  } else {
                    displayValue = answer || '无'
                  }

                  return (
                    <div key={questionId} className="border-b border-gray-100 pb-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">{questionText}</div>
                      <div className="text-gray-900">{displayValue}</div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* 联系信息表单 */}
          <Card>
            <CardHeader className="bg-red-50">
              <CardTitle>联系深度合作</CardTitle>
              <p className="text-sm text-gray-600 mt-2">请填写以下信息，我们将尽快与您联系</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    姓名 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    placeholder="请输入您的姓名"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    联系电话 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    placeholder="请输入您的电话号码"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="relationship" className="text-sm font-medium text-gray-700">
                    与逗者关系 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="relationship"
                    value={contactInfo.relationship}
                    onChange={(e) => setContactInfo({...contactInfo, relationship: e.target.value})}
                    placeholder="例：配偶、子女、父母等"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="specificNeeds" className="text-sm font-medium text-gray-700">
                    具体需求描述 <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="specificNeeds"
                    value={contactInfo.specificNeeds}
                    onChange={(e) => setContactInfo({...contactInfo, specificNeeds: e.target.value})}
                    placeholder="请详细描述您的需求，例如：配偷dfg"
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contactTime" className="text-sm font-medium text-gray-700">
                    希望联系时间 <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="contactTime"
                    value={contactInfo.contactTime}
                    onChange={(e) => setContactInfo({...contactInfo, contactTime: e.target.value})}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">请选择</option>
                    <option value="上午8-12点">上午8-12点</option>
                    <option value="下午14-18点">下午14-18点</option>
                    <option value="晚上18-21点">晚上18-21点</option>
                    <option value="周末任意时间">周末任意时间</option>
                  </select>
                </div>

                <div className="pt-4">
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowSummary(false)}
                      className="flex-1"
                    >
                      取消
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-red-600 hover:bg-red-700"
                    >
                      提交全部信息
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 温馨提示 */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>注意：</strong>您的个人信息将被严格保密，仅用于为您提供专业的遗产查询服务。
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回主页
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">遗产查询引导问答</h1>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 text-center">
            进度 {currentQuestion + 1}/{questions.length} ({Math.round(progress)}%)
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            <p className="text-sm text-gray-600 mt-2">{currentQ.help}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = currentQ.type === 'multiselect'
                  ? currentAnswer?.includes(option)
                  : currentAnswer === option

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isSelected && (
                        <Check className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            上一题
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-red-600 hover:bg-red-700"
          >
            {currentQuestion === questions.length - 1 ? '完成' : '下一题'}
            {currentQuestion < questions.length - 1 && (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </Button>
        </div>

        {/* Tips */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">温馨提示</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• 您的回答将自动保存，无需担心数据丢失</li>
            <li>• 所有信息将严格保密，仅用于为您提供专业建议</li>
            <li>• 完成问答后，您将获得个性化的遗产处理方案</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
