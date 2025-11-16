"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useUser } from "@/contexts/UserContext"
import { usePayment } from "@/contexts/PaymentContext"
import { ArrowLeft, ArrowRight, Upload, FileText, User, Calendar, Phone, MapPin, CreditCard } from "lucide-react"
import Link from "next/link"

interface QueryFormData {
  // 被查询人信息
  targetName: string
  targetIdCard: string
  targetBirthDate: string
  targetDeathDate: string
  targetLastAddress: string

  // 查询范围
  queryTypes: string[]
  specificBanks: string
  timeRange: string

  // 申请人信息
  relationship: string
  relationshipProof: string

  // 其他信息
  additionalInfo: string
  urgencyLevel: "普通" | "加急" | "特急"

  // 文件上传
  uploadedFiles: string[]
}

export default function NewQueryPage() {
  const { user } = useUser()
  const { createOrder } = usePayment()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<QueryFormData>({
    targetName: "",
    targetIdCard: "",
    targetBirthDate: "",
    targetDeathDate: "",
    targetLastAddress: "",
    queryTypes: [],
    specificBanks: "",
    timeRange: "",
    relationship: "",
    relationshipProof: "",
    additionalInfo: "",
    urgencyLevel: "普通",
    uploadedFiles: []
  })

  const steps = [
    { number: 1, title: "被查询人信息", description: "填写需要查询的人员基本信息" },
    { number: 2, title: "查询范围", description: "选择要查询的财产类型和范围" },
    { number: 3, title: "申请人信息", description: "填写申请人与被查询人的关系" },
    { number: 4, title: "补充说明", description: "提供额外信息和上传相关文件" },
    { number: 5, title: "确认提交", description: "核对信息并提交查询申请" }
  ]

  const queryTypeOptions = [
    { id: "bank", label: "银行存款", description: "各大银行的储蓄账户" },
    { id: "securities", label: "证券账户", description: "股票、基金等投资账户" },
    { id: "insurance", label: "保险理赔", description: "人寿保险、意外险等" },
    { id: "property", label: "房产信息", description: "不动产登记信息" },
    { id: "vehicle", label: "车辆信息", description: "机动车登记信息" },
    { id: "provident", label: "公积金", description: "住房公积金账户" }
  ]

  const handleInputChange = (field: keyof QueryFormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleQueryTypeChange = (typeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      queryTypes: checked
        ? [...prev.queryTypes, typeId]
        : prev.queryTypes.filter(id => id !== typeId)
    }))
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      // 确定服务类型
      let serviceType: "基础查询" | "全面查询" | "复杂查询" | "咨询服务" = "基础查询"

      const selectedTypes = formData.queryTypes
      if (selectedTypes.length > 3 || selectedTypes.includes('property') || selectedTypes.includes('vehicle')) {
        serviceType = "复杂查询"
      } else if (selectedTypes.length > 1) {
        serviceType = "全面查询"
      }

      // 创建订单
      const order = createOrder({
        userId: user?.id || '',
        serviceType,
        urgencyLevel: formData.urgencyLevel,
        description: `查询${formData.targetName}的${selectedTypes.join('、')}信息`,
        queryDetails: formData
      })

      alert("查询申请已提交！请前往支付页面完成付款。")
      router.push("/payment")
    } catch (error) {
      alert("提交失败，请重试")
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="targetName" className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-red-600" />
                  被查询人姓名 *
                </Label>
                <Input
                  id="targetName"
                  placeholder="请输入被查询人的真实姓名"
                  value={formData.targetName}
                  onChange={(e) => handleInputChange("targetName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetIdCard">身份证号码 *</Label>
                <Input
                  id="targetIdCard"
                  placeholder="请输入18位身份证号码"
                  value={formData.targetIdCard}
                  onChange={(e) => handleInputChange("targetIdCard", e.target.value)}
                  maxLength={18}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetBirthDate" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-red-600" />
                  出生日期
                </Label>
                <Input
                  id="targetBirthDate"
                  type="date"
                  value={formData.targetBirthDate}
                  onChange={(e) => handleInputChange("targetBirthDate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetDeathDate">去世日期（如适用）</Label>
                <Input
                  id="targetDeathDate"
                  type="date"
                  value={formData.targetDeathDate}
                  onChange={(e) => handleInputChange("targetDeathDate", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetLastAddress" className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-600" />
                最后居住地址
              </Label>
              <Input
                id="targetLastAddress"
                placeholder="请输入被查询人最后居住的详细地址"
                value={formData.targetLastAddress}
                onChange={(e) => handleInputChange("targetLastAddress", e.target.value)}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">请选择要查询的财产类型：</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {queryTypeOptions.map((option) => (
                  <div key={option.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.queryTypes.includes(option.id)}
                        onChange={(e) => handleQueryTypeChange(option.id, e.target.checked)}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specificBanks">指定银行（可选）</Label>
              <Input
                id="specificBanks"
                placeholder="如有特定银行需要查询，请填写，如：工商银行、建设银行"
                value={formData.specificBanks}
                onChange={(e) => handleInputChange("specificBanks", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeRange">查询时间范围</Label>
              <select
                id="timeRange"
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                value={formData.timeRange}
                onChange={(e) => handleInputChange("timeRange", e.target.value)}
              >
                <option value="">请选择查询时间范围</option>
                <option value="recent1year">近1年</option>
                <option value="recent3years">近3年</option>
                <option value="recent5years">近5年</option>
                <option value="recent10years">近10年</option>
                <option value="all">全部历史记录</option>
              </select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="relationship">与被查询人的关系 *</Label>
              <select
                id="relationship"
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                value={formData.relationship}
                onChange={(e) => handleInputChange("relationship", e.target.value)}
                required
              >
                <option value="">请选择关系</option>
                <option value="spouse">配偶</option>
                <option value="child">子女</option>
                <option value="parent">父母</option>
                <option value="sibling">兄弟姐妹</option>
                <option value="grandchild">孙子女/外孙子女</option>
                <option value="other">其他法定继承人</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationshipProof">关系证明材料说明</Label>
              <Textarea
                id="relationshipProof"
                placeholder="请说明您拥有的关系证明材料，如：户口本、结婚证、出生证明等"
                value={formData.relationshipProof}
                onChange={(e) => handleInputChange("relationshipProof", e.target.value)}
                rows={4}
              />
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">所需证明材料：</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• 申请人身份证明</li>
                <li>• 被查询人死亡证明（如适用）</li>
                <li>• 亲属关系证明（户口本、结婚证等）</li>
                <li>• 委托书及公证书</li>
                <li>• 其他相关法律文件</li>
              </ul>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">补充说明</Label>
              <Textarea
                id="additionalInfo"
                placeholder="请提供任何有助于查询的额外信息，如：已知的银行信息、特殊情况说明等"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label>紧急程度</Label>
              <div className="flex space-x-4">
                {["普通", "加急", "特急"].map((level) => (
                  <label key={level} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="urgencyLevel"
                      value={level}
                      checked={formData.urgencyLevel === level}
                      onChange={(e) => handleInputChange("urgencyLevel", e.target.value as "普通" | "加急" | "特急")}
                    />
                    <span className={level === "特急" ? "text-red-600 font-medium" : ""}>{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Upload className="w-4 h-4 mr-2 text-red-600" />
                文件上传
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">点击上传或拖拽文件到此处</p>
                <p className="text-sm text-gray-500">支持PDF、JPG、PNG格式，单个文件不超过10MB</p>
                <Button variant="outline" className="mt-4">
                  选择文件
                </Button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">费用说明：</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• 基础查询：5,000元（单一银行账户）</p>
                <p>• 全面查询：12,000元（多银行 + 保险 + 证券）</p>
                <p>• 加急服务：在基础费用上增加30%</p>
                <p>• 特急服务：在基础费用上增加50%</p>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">查询申请确认</h3>

              <div className="space-y-4">
                <div>
                  <strong>被查询人：</strong>{formData.targetName} ({formData.targetIdCard})
                </div>
                <div>
                  <strong>查询类型：</strong>
                  {formData.queryTypes.map(type =>
                    queryTypeOptions.find(opt => opt.id === type)?.label
                  ).join("、")}
                </div>
                <div>
                  <strong>申请人关系：</strong>{formData.relationship}
                </div>
                <div>
                  <strong>紧急程度：</strong>{formData.urgencyLevel}
                </div>
                {formData.additionalInfo && (
                  <div>
                    <strong>补充说明：</strong>{formData.additionalInfo}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">下一步流程：</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>1. 提交申请后，我们将在1-3个工作日内联系您</li>
                <li>2. 专业律师将与您确认详细信息和所需材料</li>
                <li>3. 签订正式委托协议并进行公证</li>
                <li>4. 开始查询流程，预计7-15个工作日完成</li>
                <li>5. 提供详细的查询结果报告</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (!user) {
    router.push("/auth")
    return null
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回仪表板
            </Link>
          </div>

          {/* 步骤指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number
                      ? "chinese-gradient text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className={`w-24 h-1 mx-2 ${
                      currentStep > step.number ? "bg-red-500" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-600">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>

          {/* 表单内容 */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              上一步
            </Button>

            {currentStep < 5 ? (
              <Button
                variant="chinese"
                onClick={handleNext}
                className="flex items-center"
              >
                下一步
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                variant="chinese"
                onClick={handleSubmit}
                className="flex items-center"
              >
                <FileText className="w-4 h-4 mr-2" />
                提交申请
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
