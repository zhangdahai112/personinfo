<template>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="100px" v-if="config.type == 'insurance'">
            <el-form-item label="保险名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="保单号">
                <el-input v-model="form.serviceNo"></el-input>
            </el-form-item>
            <el-form-item label="承包公司">
                <el-input v-model="form.company"></el-input>
            </el-form-item>
            <el-form-item label="服务电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="投保时间">
                <el-input v-model="form.time"></el-input>
            </el-form-item>
            <el-form-item label="投保人">
                <el-input v-model="form.toubao"></el-input>
            </el-form-item>
            <el-form-item label="被保人">
                <el-input v-model="form.beibao"></el-input>
            </el-form-item>
            <el-form-item label="身故受益人">
                <el-input v-model="form.shouyi"></el-input>
            </el-form-item>
            <el-form-item label="账户总价值">
                <el-input v-model="form.value"></el-input>
            </el-form-item>
            <el-form-item label="已交保费">
                <el-input v-model="form.insurance"></el-input>
            </el-form-item>
        </el-form>

        <el-form ref="form" :model="form" label-width="220px" v-if="config.type == 'account'">
            <el-form-item label="互联网账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="余额">
                <el-input v-model="form.left"></el-input>
            </el-form-item>
            <el-form-item label="基金、券商理财">
                <el-input v-model="form.licai"></el-input>
            </el-form-item>
            <el-form-item label="花呗借款">
                <el-input v-model="form.huabei"></el-input>
            </el-form-item>
            <el-form-item label="快递">
                <el-input v-model="form.baoxian"></el-input>
            </el-form-item>
            <el-form-item label="保险">
                <el-input v-model="form.toubao"></el-input>
            </el-form-item>
            <el-form-item label="转账">
                <el-input v-model="form.zhuanzhang"></el-input>
            </el-form-item>
            <el-form-item label="医保">
                <el-input v-model="form.yibao"></el-input>
            </el-form-item>
            <el-form-item label="养老金、住房公积金、抚恤金等">
                <el-input v-model="form.yanglao"></el-input>
            </el-form-item>
            <el-form-item label="微粒贷借款(可能产生逾期费用)">
                <el-input v-model="form.weilidai"></el-input>
            </el-form-item>
            <el-form-item label="交易中订单">
                <el-input v-model="form.jiaoyi"></el-input>
            </el-form-item>
        </el-form>

        <el-form ref="form" :model="form" label-width="100px" v-if="config.type == 'phone'">
            <el-form-item label="运营商">
                <el-input v-model="form.leftLabel"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <el-input v-model="form.left"></el-input>
            </el-form-item>

        </el-form>

        <el-form ref="form" :model="form" label-width="100px" v-if="config.type == 'bank'">
            <el-form-item label="银行名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="资产情况">
                <el-input v-model="form.debt"></el-input>
            </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="100px" v-if="config.type == 'noAccount'">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input type="number" v-model="form.number" min="1" max="100"></el-input>
            </el-form-item>
            <el-form-item label="交易中订单">
                <el-input v-model="form.jiaoyi"></el-input>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            config: {},
            title: "",
            dialogFormVisible: false
        }
    },

    watch: {
        config(newConfig, oldConfig) {

            switch (newConfig.type) {
                case 'insurance':
                    this.title = '保险'
                    break;
                case 'account':
                    this.title = '互联网账号'
                    break;
                case 'bank':
                    this.title = '银行'
                    break;
                case 'noAccount':
                    this.title = '其他 无资产账号'
                    break;
                case 'phone':
                    this.title = '手机'
                    break;
            }
        }

    },
    methods: {
        submit() {
            this.config.data.push(this.form);
            this.close();
        },
        show(config) {
            this.dialogFormVisible = true;
            this.config = config;
            if (this.config.type == 'insurance') {
                this.form = {
                    name: null,
                    serviceNoLabel: "保单号",
                    serviceNo: null,
                    companyLabel: "承包公司",
                    company: null,
                    phoneLabel: "服务电话",
                    phone: null,
                    timeLabel: "投保时间",
                    time: null,
                    toubaoLabel: "投保人",
                    toubao: null,
                    beibaoLabel: "被保人",
                    beibao: null,
                    shouyiLabel: "身故受益人",
                    shouyi: null,
                    valueLable: "账户总价值",
                    value: null,
                    insuranceLable: "已交保费",
                    insurance: null,
                }
            } else if (this.config.type == 'bank') {
                this.form = {
                    name: null,
                    debtLabel: "欠款(可能产生逾期费用)",
                    debt: null,
                }
            } else if (this.config.type == 'account') {
                this.form = {
                    name: null,
                    leftLabel: "余额",
                    left: null,
                    licaiLabel: "基金、券商理财",
                    licai: null,
                    huabeiLabel: "花呗借款",
                    huabei: null,
                    kuaidiLabel: "快递",
                    kuaidi: null,
                    baoxianLabel: "保险",
                    baoxian: null,
                    zhuanzhangLabel: "转账",
                    zhuanzhang: null,
                    yibaoLabel: "医保",
                    yibao: null,
                    yanglaoLabel: "养老金、住房公积金、抚恤金等",
                    yanglao: null,
                    weilidaiLabel: "微粒贷借款(可能产生逾期费用)",
                    weilidai: null,
                    jiaoyiLabel: "交易中订单",
                    jiaoyi: null,
                }
            } else if (this.config.type == 'noAccount') {
                this.form = {
                    name: null,
                    jiaoyiLabel: "交易中订单",
                    jiaoyi: null,
                }
            } else if (this.config.type == 'phone') {
                this.form = {
                    name: null,
                    leftLabel: null,
                    left: null,
                }
            }
        },
        close() {
            this.dialogFormVisible = false;
        }
    }
};
</script>