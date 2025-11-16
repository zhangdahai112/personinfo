export interface WechatOrderParams {
    outTradeNo: string
    totalAmount: number
    subject: string
}

export interface WechatResponse {
    code: string
    msg: string
    outTradeNo?: string
    codeUrl?: string
    qrCode?: string
}

export class WechatPayService {
    async createOrder(params: WechatOrderParams): Promise<WechatResponse> {
        try {
            const codeUrl = `weixin://wxpay/bizpayurl?pr=wx${Date.now()}`

            return {
                code: 'SUCCESS',
                msg: 'OK',
                outTradeNo: params.outTradeNo,
                codeUrl,
                qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(codeUrl)}`
            }
        } catch (error) {
            return {
                code: 'FAIL',
                msg: '创建订单失败'
            }
        }
    }

    async queryOrder(outTradeNo: string): Promise<WechatResponse> {
        const isSuccess = Math.random() > 0.3

        return {
            code: isSuccess ? 'SUCCESS' : 'USERPAYING',
            msg: isSuccess ? 'OK' : '用户支付中',
            outTradeNo
        }
    }
}
