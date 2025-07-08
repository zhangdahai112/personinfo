<template>
    <el-card>
        <div style="display: flex;">
            <div class="baoxian-item">
                <div class="baoxian-detail-item" v-if="phone.left">
                    <br>
                    <label for="">{{ phone.leftLabel }}：</label>
                    <br>
                    <span>{{ phone.left }}</span>

                </div>

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
            // phone: {

            //     leftLabel: "证件尾号441X名下的电话卡总共有2张，其中",
            //     left: "中国移动2张",

            // }
        }
    },
    props: {
        phone: {

        },
        index: null
    }
}
</script>

<style>

</style>
