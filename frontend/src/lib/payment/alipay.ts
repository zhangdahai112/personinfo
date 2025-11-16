import { v4 as uuidv4 } from 'uuid'

export interface AlipayOrderParams {
    outTradeNo: string
    totalAmount: number
    subject: string
    body?: string
}

export interface AlipayResponse {
    code: string
    msg: string
    outTradeNo?: string
    payUrl?: string
    qrCode?: string
}

export class AlipayService {
    private appId: string
    private gatewayUrl: string

    constructor() {
        this.appId = process.env.NEXT_PUBLIC_ALIPAY_APP_ID || '2021000000000000'
        this.gatewayUrl = 'https://openapi.alipaydev.com/gateway.do'
    }

    async createOrder(params: AlipayOrderParams): Promise<AlipayResponse> {
        try {
            // 模拟支付宝订单创建
            const payUrl = `${this.gatewayUrl}?app_id=${this.appId}&out_trade_no=${params.outTradeNo}&total_amount=${(params.totalAmount / 100).toFixed(2)}`

            return {
                code: '10000',
                msg: 'Success',
                outTradeNo: params.outTradeNo,
                payUrl,
                qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(payUrl)}`
            }
        } catch (error) {
            return {
                code: '40004',
                msg: '创建订单失败'
            }
        }
    }

    async queryOrder(outTradeNo: string): Promise<AlipayResponse> {
        // 模拟查询结果
        const isSuccess = Math.random() > 0.3

        if (isSuccess) {
            return {
                code: '10000',
                msg: 'Success',
                outTradeNo
            }
        } else {
            return {
                code: '40004',
                msg: '订单未支付'
            }
        }
    }
}
