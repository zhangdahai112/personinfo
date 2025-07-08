<template>
    <el-card class="card-container">
        <div class="baoxian-item">
            <label class="account-name" for="" >{{ account.name }}</label>
            <el-button @click="$emit('del', { index: index })" class="delete-button" style="float: right;" type="danger"
                icon="el-icon-delete" circle plain size="small"></el-button>
            <div class="baoxian-detail-item" v-if="account.left">
                <br>
                <label for="">{{ account.leftLabel }}：</label>
                <span>{{ account.left }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.licai">
                <br>
                <label for=""> {{ account.licaiLabel }}：</label>
                <span>{{ account.licai }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.huabei">
                <br>
                <label for="">{{ account.huabeiLabel }}：</label>
                <span>{{ account.huabei }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.kuaidi">
                <br>
                <label for="">{{ account.kuaidiLabel }}：</label>
                <span>{{ account.kuaidi }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.baoxian">
                <br>
                <label for=""> {{ account.baoxianLabel }}：</label>
                <span>{{ account.baoxian }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.zhuanzhang">
                <br>
                <label for="">{{ account.zhuanzhangLabel }}：</label>
                <span>{{ account.zhuanzhang }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.yibao">
                <br>
                <label for="">{{ account.yibaoLabel }}：</label>
                <span>{{ account.yibao }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.yanglao">
                <br>
                <label for="">{{ account.yanglaoLabel }}：</label>
                <br>
                <span>{{ account.yanglao }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.weilidai">
                <br>
                <label for="">{{ account.weilidaiLabel }}：</label>
                <br>
                <span>{{ account.weilidai }}</span>
            </div>
            <div class="baoxian-detail-item" v-if="account.jiaoyi">
                <br>
                <label for="">{{ account.jiaoyiLabel }}：</label>
                <span>{{ account.jiaoyi }}</span>
            </div>
            <br>
        </div>
    </el-card>
</template>
<script>
module.exports = {
    data() {
        return {
            // account: {
            //     name: "支付宝",
            //     leftLabel: "余额",
            //     left: "1.23元",
            //     licaiLabel: "基金、券商理财",
            //     licai: "无购买记录",
            //     huabeiLabel: "花呗借款",
            //     huabei: "无欠款",
            //     kuaidiLabel: "快递",
            //     kuaidi: "无未收快递",
            //     baoxianLabel: "保险",
            //     baoxian: "账户安全险(支付宝赠送)，未达到理赔条件",
            //     zhuanzhangLabel: "转账",
            //     zhuanzhang: "无预约转账记录",
            //     yibaoLabel: "医保",
            //     yibao: "28,695.32元，可一次性继承提取",
            //     yanglaoLabel: "养老金、住房公积金、抚恤金等",
            //     yanglao: "可继承领取，具体金额需完成代办委托协议后核实",
            //     weilidaiLabel: "微粒贷借款(可能产生逾期费用)",
            //     weilidai: "欠款3,862.28元，逾期34天，可微信快速还款",
            //     jiaoyiLabel: "交易中订单",
            //     jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
            // }
        }
    },
    props: {
        account: {

        },
        index: null
    }
}
</script>

<style scoped>
.card-container {
  position: relative;
  .account-name {
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
  }
  .delete-button-container {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
