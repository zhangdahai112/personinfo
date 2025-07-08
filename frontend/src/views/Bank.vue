<template>
    <el-card class="card-container">
        <div style="display: flex;">
            <div class="baoxian-item">
                <label class="bank-name" for="">{{ bank.name }}</label>

                <div class="baoxian-detail-item">
                    <br>
                    <label for="">{{ bank.debtLabel }}：</label>
                    <br>
                    <span>{{ bank.debt }}</span>
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
            // bank: {
            //     name: "上海银行信用卡",
            //     debtLabel: "欠款(可能产生逾期费用)",
            //     debt: "34.88元，还款时间12月4日。支持支付宝快速还款",
            // }
        }
    },
    props: {
        bank: {

        },
        index: null
    }
}
</script>

<style scoped>
.card-container {
  position: relative;
  .bank-name {
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
