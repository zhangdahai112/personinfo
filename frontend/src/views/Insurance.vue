<template>
    <el-card class="card-container">
        <div style="display: flex;">
            <div class="baoxian-item">
                <label class="insurance-name" for="">{{ insurance.name }}</label>

                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ insurance.serviceNoLabel }}：</label>
                    <span>{{ insurance.serviceNo }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for=""> {{ insurance.companyLabel }}：</label>
                    <span>{{ insurance.company }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ insurance.phoneLabel }}：</label>
                    <span>{{ insurance.phone }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ insurance.timeLabel }}：</label>
                    <span>{{ insurance.time }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for=""> {{ insurance.toubaoLabel }}：</label>
                    <span>{{ insurance.toubao }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ insurance.beibaoLabel }}：</label>
                    <span>{{ insurance.beibao }}</span>
                </div>
                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ insurance.shouyiLabel }}：</label>
                    <span>{{ insurance.shouyi }}</span>
                </div>
                <div class="baoxian-detail-item" v-if="insurance.value">
                    <br>
                    <label for="">{{ insurance.valueLable }}：</label>
                    <span>{{ insurance.value }}</span>
                </div>
                <div class="baoxian-detail-item" v-if="insurance.insurance">
                    <br>
                    <label for="">{{ insurance.insuranceLable }}：</label>
                    <span>{{ insurance.insurance }}</span>
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
            // insurance: {
            //     name: "智富人生A",
            //     serviceNoLabel: "保单号",
            //     serviceNo: "P021300005288063",
            //     companyLabel: "承包公司",
            //     company: "中国平安人寿保险股份有限公司",
            //     phoneLabel: "服务电话",
            //     phone: "95511",
            //     timeLabel: "投保时间",
            //     time: "2006.04.11，已保障17年227天",
            //     toubaoLabel: "投保人",
            //     toubao: "熊册",
            //     beibaoLabel: "被保人",
            //     beibao: "熊思与",
            //     shouyiLabel: "身故受益人",
            //     shouyi: "徐晓芳",
            //     valueLable: "账户总价值",
            //     value: "120,390.04元",
            //     insuranceLable: "已交保费",
            //     insurance: "120,390.04元",
            // }
        }
    },
    props: {
        insurance: {

        },
        index: null
    }
}
</script>

<style scoped>
.card-container {
  position: relative;
  .insurance-name {
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
