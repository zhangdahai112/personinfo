<template>
    <el-card class="card-container">
        <div style="display: flex;">
            <div class="baoxian-item">
                <label for="" class="account-name">{{ account.name }} &nbsp; {{ account.number }} 个</label>

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
                    <span>{{ account.yanglao }}</span>
                </div>
                <div class="baoxian-detail-item" v-if="account.weilidai">
                    <br>
                    <label for="">{{ account.weilidaiLabel }}：</label>
                    <span>{{ account.weilidai }}</span>
                </div>
                <div class="baoxian-detail-item" v-if="account.jiaoyi">
                    <br>
                    <label for="">{{ account.jiaoyiLabel }}：</label>
                    <br>
                    <span>{{ account.jiaoyi }}</span>
                </div>
                <br>
            </div>

          <div class="delete-button-container">
            <el-button @click="$emit('del', { index: index })" class="delete-button" type="danger"
                       icon="el-icon-delete" circle plain size="small"></el-button>
          </div>
        </div>
    </el-card>
</template>
<script>
module.exports = {
    data() {
        return {
            // account: {
            //     name: "京东平台账号1",
            //     number: "1个",
            //     jiaoyiLabel: "交易中订单",
            //     jiaoyiLabel: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
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
