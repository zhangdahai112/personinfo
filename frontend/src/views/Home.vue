<template>
  <div class="container page-component__scroll">
    <el-card>
      <div slot="header" class="clearfix">
        <h1>互联网资产信息-初筛情况</h1>
      </div>
      <div style="display: flex;">
        <div style="display: inline-block;">
          <img src="../../public/1a.jpg" style="width: 200px; height: 220px;">
        </div>
        <div style="display: inline-block;padding-left: 30px;">
          <span class="title" style="display: inline-block; font-size:20px;">客户：</span>
          <el-input v-model="customer" width="100px" style="display: inline-block;margin-top: 10px;"
            placeholder="熊册"></el-input>
        </div>
      </div>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="24">
          <div class="section-header">
            <div v-if="insurances.length" class="bg-purple-dark">{{ '保险（' + insurances.length +
            '个）：' }}</div>
            <div v-else class="bg-purple-dark">保险</div>
            <el-button @click="addItem('insurance', insurances)" class="add-button" type="primary" size="small">添加</el-button>
          </div>
          <div class="grid-content">
            <Insurance v-for="(i, $index) in insurances" :insurance="i" @del="del('insurance', $event)" :index="$index"
              class="grid-content-item">
            </Insurance>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="section-header">

          <div v-if="banks.length" style="line-height: 36px;" class="bg-purple-dark">{{ '银行（' + banks.length +
            '个）：' }}</div>
          <div v-else style="line-height: 36px;" class="bg-purple-dark">银行</div>

          <el-button @click="addItem('bank', banks)" class="add-button" type="primary">添加</el-button>
          </div>
          <div class="grid-content">
            <Bank v-for="(i, $index) in banks" :bank="i" @del="del('bank', $event)" :index="$index"
              class="grid-content-item"></Bank>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="section-header">

          <div v-if="accounts.length" style="line-height: 36px;" class="bg-purple-dark">{{ '互联网账号（' + accounts.length +
            '个）：' }}</div>
          <div v-else style="line-height: 36px;" class="bg-purple-dark">互联网账号：</div>

          <el-button @click="addItem('account', accounts)" class="add-button" type="primary">添加</el-button>
          </div>
          <div class="grid-content">
            <Account v-for="(i, $index) in accounts" :account="i" @del="del('account', $event)" :index="$index"
              class="grid-content-item">
            </Account>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="section-header">

          <div v-if="phones.length" style="line-height: 36px;" class="bg-purple-dark">{{ '手机（' + phones.length +
            '个）：' }}</div>
          <div v-else style="line-height: 36px;" class="bg-purple-dark">手机：</div>

          <el-button @click="addItem('phone', phones)" class="add-button" type="primary">添加</el-button>
          </div>
          <div class="grid-content ">
            <Phone v-for="(i, $index) in phones" :phone="i" @del="del('phone', $event)" :index="$index"
              class="grid-content-item"></Phone>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="section-header">

          <div v-if="noAccounts.length" style="line-height: 36px;" class="bg-purple-dark">{{ '其他 无资产账号（' +
            noAccounts.length +
            '个）：' }}</div>
          <div v-else style="line-height: 36px;" class="bg-purple-dark">其他 无资产账号：</div>
          <el-button @click="addItem('noAccount', noAccounts)" class="add-button" type="primary">添加</el-button>
          </div>
          <div class="grid-content">
            <NoAccount v-for="(i, $index) in noAccounts" :account="i" @del="del('noAccount', $event)" :index="$index"
              class="grid-content-item">
            </NoAccount>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" @click="sumbit">提交</el-button>
      </el-row>
    </el-card>
    <el-drawer :title="'添加' + title" :visible.sync="dialogFormVisible" :direction="'rtl'" :before-close="handleClose"
      size="80%" style="overflow-y: scroll;">
      <div>
        <el-form ref="form" :inline="true" :model="form" label-width="100px" v-if="config.type == 'insurance'"
          label-position="left" style="padding:40px;">
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
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </div>
        </el-form>

        <el-form ref="form" :inline="true" :model="form" label-width="220px" v-if="config.type == 'account'"
          label-position="left" style="padding:40px;height: 500px;">
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
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </div>
        </el-form>

        <el-form ref="form" :inline="true" :model="form" label-width="100px" v-if="config.type == 'phone'"
          label-position="left" style="padding:40px;">
          <el-form-item label="运营商">
            <el-input v-model="form.leftLabel"></el-input>
          </el-form-item>
          <el-form-item label="详情">
            <el-input v-model="form.left"></el-input>
          </el-form-item>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </div>
        </el-form>

        <el-form ref="form" :inline="true" :model="form" label-width="100px" v-if="config.type == 'bank'"
          label-position="left" style="padding:40px;">
          <el-form-item label="银行名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="资产情况">
            <el-input v-model="form.debt"></el-input>
          </el-form-item>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </div>
        </el-form>
        <el-form ref="form" :inline="true" :model="form" label-width="100px" v-if="config.type == 'noAccount'"
          label-position="left" style="padding:40px;">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input type="number" v-model="form.number" min="1" max="100"></el-input>
          </el-form-item>
          <el-form-item label="交易中订单">
            <el-input v-model="form.jiaoyi"></el-input>
          </el-form-item>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </div>
        </el-form>

      </div>
    </el-drawer>
    <!-- <AddItemDialog ref="addDialog" /> -->
    <el-backtop target=".page-component__scroll"></el-backtop>
  </div>
</template>

<script>

import Insurance from './Insurance.vue';
import Bank from './Bank.vue';
import Account from './Account.vue';
import Phone from './Phone.vue';
import NoAccount from './NoAccount.vue';
import { get, post } from '../util/HttpUtil';
import UserRepository from '../util/UserRepository'
import AddItemDialog from '../components/AddItemDialog'
export default {
  name: 'Home',
  components: {
    Insurance,
    Bank,
    Account,
    Phone,
    NoAccount
  },
  data() {
    return {
      title: "",
      form: {},
      config: {},
      dialogFormVisible: false,
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入客户', trigger: 'blur' }
        ],
      },
      customer: null,
      insurances: [{
        name: "智富人生A",
        serviceNoLabel: "保单号",
        serviceNo: "P021300005288063",
        companyLabel: "承包公司",
        company: "中国平安人寿保险股份有限公司",
        phoneLabel: "服务电话",
        phone: "95511",
        timeLabel: "投保时间",
        time: "2006.04.11，已保障17年227天",
        toubaoLabel: "投保人",
        toubao: "熊册",
        beibaoLabel: "被保人",
        beibao: "熊思与",
        shouyiLabel: "身故受益人",
        shouyi: "徐晓芳",
        valueLable: "账户总价值",
        value: "120,390.04元",
      },
      {
        name: "康瑞重疾",
        serviceNoLabel: "保单号",
        serviceNo: "中国平安人寿保险股份有限公司",
        companyLabel: "承包公司",
        company: "中国平安人寿保险股份有限公司",
        phoneLabel: "服务电话",
        phone: "95511",
        timeLabel: "投保时间",
        time: "2006.04.11，已保障17年227天",
        toubaoLabel: "投保人",
        toubao: "熊册",
        beibaoLabel: "被保人",
        beibao: "熊思与",
        shouyiLabel: "身故受益人",
        shouyi: "徐晓芳",
        insuranceLable: "已交保费",
        insurance: "14715元"
      }
      ],
      banks: [
        {
          name: "上海银行信用卡",
          debtLabel: "欠款(可能产生逾期费用)",
          debt: "34.88元，还款时间12月4日。支持支付宝快速还款",

        }
      ],
      accounts: [
        {
          name: "支付宝",
          leftLabel: "余额",
          left: "1.23元",
          licaiLabel: "基金、券商理财",
          licai: "无购买记录",
          huabeiLabel: "花呗借款",
          huabei: "无欠款",
          kuaidiLabel: "快递",
          kuaidi: "无未收快递",
          baoxianLabel: "保险",
          baoxian: "账户安全险(支付宝赠送)，未达到理赔条件",
          zhuanzhangLabel: "转账",
          zhuanzhang: "无预约转账记录",
          yibaoLabel: "医保",
          yibao: "28,695.32元，可一次性继承提取",
          yanglaoLabel: "养老金、住房公积金、抚恤金等",
          yanglao: "可继承领取，具体金额需完成代办委托协议后核实",
          // weilidaiLabel: "微粒贷借款(可能产生逾期费用)",
          // weilidai: "欠款3,862.28元，逾期34天，可微信快速还款",
          // jiaoyiLabel: "交易中订单",
          // jiaoyiLabel: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "微信",
          leftLabel: "余额",
          left: "5.69元",
          licaiLabel: "基金、券商理财",
          licai: "无购买记录",
          weilidaiLabel: "微粒贷借款(可能产生逾期费用)",
          weilidai: "欠款3,862.28元，逾期34天，可微信快速还款",
        },
        {
          name: "拼多多",
          leftLabel: "余额",
          left: "3.98元",
          jiaoyiLabel: "交易中订单",
          jiaoyiLabel: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        }
        ,
        {
          name: "抖音",
          leftLabel: "余额",
          left: "无账户余额，无欠款",
          jiaoyiLabel: "交易中订单",
          jiaoyiLabel: "东方甄选洛川苹果1箱，运送中预计3日内收货，价值42.9元",
        }

      ],
      phones: [
        {

          leftLabel: "证件尾号441X名下的电话卡总共有2张，其中",
          left: "中国移动2张",

        }
      ],

      noAccounts: [
        {
          name: "京东",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "叮咚买菜",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "百度平台",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "美团平台",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "快手平台",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "闲鱼账号",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyiLabel: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "淘宝账号",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
        {
          name: "钉钉账号",
          number: "1",
          jiaoyiLabel: "交易中订单",
          jiaoyi: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
        },
      ]
    }
  },
  mounted() {
    this.init();
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
    handleClose(done) {
      let that = this;
      that.close();
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
    },
    del(type, event) {
      switch (type) {
        case 'insurance':
          this.insurances.splice(event.index, 1)
          break;
        case 'account':
          this.accounts.splice(event.index, 1)
          break;
        case 'bank':
          this.banks.splice(event.index, 1)
          break;
        case 'noAccount':
          this.noAccounts.splice(event.index, 1)
          break;
        case 'phone':
          this.phones.splice(event.index, 1)
          break;
      }
    },
    submit() {

      this.config.data.push(this.form);
      this.form = {};
      this.close();
    },
    checkInsurance() {
      var obj = {
        name: "智富人生A",
        serviceNoLabel: "保单号",
        serviceNo: "P021300005288063",
        companyLabel: "承包公司",
        company: "中国平安人寿保险股份有限公司",
        phoneLabel: "服务电话",
        phone: "95511",
        timeLabel: "投保时间",
        time: "2006.04.11，已保障17年227天",
        toubaoLabel: "投保人",
        toubao: "熊册",
        beibaoLabel: "被保人",
        beibao: "熊思与",
        shouyiLabel: "身故受益人",
        shouyi: "徐晓芳",
        valueLable: "账户总价值",
        value: "120,390.04元",
        insuranceLable: "已交保费",
        insurance: "120,390.04元",
      };

      var labels = {
        name: "名称",
        serviceNoLabel: "保单号标签",
        serviceNo: "保单号",
        companyLabel: "承包公司标签",
        company: "承包公司",
        phoneLabel: "服务电话标签",
        phone: "服务电话",
        timeLabel: "投保时间标签",
        time: "投保时间",
        toubaoLabel: "投保人标签",
        toubao: "投保人",
        beibaoLabel: "被保人标签",
        beibao: "被保人",
        shouyiLabel: "身故受益人标签",
        shouyi: "身故受益人",
        valueLable: "账户总价值标签",
        value: "账户总价值",
        insuranceLable: "已交保费标签",
        insurance: "已交保费",
      };

      for (var key in obj) {
        if (!obj[key]) {
          this.$message.error(labels[key] + "不能为空！");
        }
      }
    },
    sumbit() {
      if (!this.customer) {
        this.$message.error("客户名字不能为空！");
        return;
      }
      let user = this.getUser();
      post("/info/save", user).then(res => {
        if (res.success) {
          this.$message.success("添加成功!");
          UserRepository.storeUser(res.data);
          const query = JSON.parse(JSON.stringify(this.$route.query))
          query.id = res.data.id
          this.$router.push({ path: this.$route.path, query })
        }
      })

    },
    getUser() {
      return {
        id: this.$route.query.id,
        customer: this.customer,
        info: {
          "accounts": this.accounts,
          "noAccounts": this.noAccounts,
          "insurances": this.insurances,
          "phones": this.phones,
          "banks": this.banks
        }
      }
    },
    async init() {
      if (this.$route.query.id) {
        let user = UserRepository.getUser(this.$route.query.id);
        if (!user) {
          user = await get("/info/getById?id=" + this.$route.query.id);
          user = user.data;
        }
        Object.assign(this, user.info);
        this.customer = user.customer;
      }
    },
    addItem(type, items) {
      let config = {

      }

      let data = []
      switch (type) {
        case 'insurance':
          config = {
            name: "智富人生A",
            serviceNoLabel: "保单号",
            serviceNo: "P021300005288063",
            companyLabel: "承包公司",
            company: "中国平安人寿保险股份有限公司",
            phoneLabel: "服务电话",
            phone: "95511",
            timeLabel: "投保时间",
            time: "2006.04.11，已保障17年227天",
            toubaoLabel: "投保人",
            toubao: "熊册",
            beibaoLabel: "被保人",
            beibao: "熊思与",
            shouyiLabel: "身故受益人",
            shouyi: "徐晓芳",
            valueLable: "账户总价值",
            value: "120,390.04元",
            insuranceLable: "已交保费",
            insurance: "120,390.04元",
          }
          data = this.insurances;
          break;
        case 'account':
          config = {
            name: "智富人生A",
            serviceNoLabel: "保单号",
            serviceNo: "P021300005288063",
            companyLabel: "承包公司",
            company: "中国平安人寿保险股份有限公司",
            phoneLabel: "服务电话",
            phone: "95511",
            timeLabel: "投保时间",
            time: "2006.04.11，已保障17年227天",
            toubaoLabel: "投保人",
            toubao: "熊册",
            beibaoLabel: "被保人",
            beibao: "熊思与",
            shouyiLabel: "身故受益人",
            shouyi: "徐晓芳",
            valueLable: "账户总价值",
            value: "120,390.04元",
            insuranceLable: "已交保费",
            insurance: "120,390.04元",
          }
          data = this.accounts;
          break;
        case 'bank':
          config = {
            name: "上海银行信用卡",
            debtLabel: "欠款(可能产生逾期费用)",
            debt: "34.88元，还款时间12月4日。支持支付宝快速还款",
          }
          data = this.banks;
          break;
        case 'noAccount':
          config = {
            name: "京东平台账号1",
            number: "1个",
            jiaoyiLabel: "交易中订单",
            jiaoyiLabel: "无交易中订单，无虚拟购物卡等剩余资产，无欠款",
          }
          data = this.noAccounts;
          break;
        case 'phone':
          config = {
            leftLabel: "证件尾号441X名下的电话卡总共有2张，其中",
            left: "中国移动2张",
          }
          data = this.phones;
          break;
      }

      // this.$refs.addDialog.show({ type: type, config: config, data: data });

      this.show({ type: type, config: config, data: data });
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  padding: 0px;
  margin: 0px;
}

.section-header {
  display: flex;
  align-items: center;

  button {
    width: 40px;
    height: 26px;
    padding: 0;
  }
}

.el-drawer__body {
  height: 0;
  overflow: auto !important;
}


.container .bg-purple-dark[data-v-fae5bece] {
  font-size: 23px;
  font-weight: 500;
  padding: 10px;
  border-radius: 3px;
}

.container {
  // width: 100vw;
  height: 100%;
  overflow: scroll;
  font-size: 16px;

  .baoxian-item>label {
    font-size: 40px;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

  }





  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    // background: #c8d7eb;
    font-size: 30px;
    font-weight: 500;
    padding: 10px;
    border-radius: 3px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    padding-top: 20px;
    border-radius: 4px;
    white-space: nowrap;
    display: inline-block;
    scrollbar-width: none;
    overflow-x: scroll;
    width: 100vw;

    .grid-content-item {

      display: inline-block;
      margin: 10px;
      min-height: 533px;
      width: 285px !important;
      white-space: initial;
    }
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .baoxian-item {
    margin-top: 30px;
    min-width: 300px;

  }

  .box-card {
    overflow: scroll;

    .title {
      font-size: 22px;
      display: block;
      margin-top: 10px;
    }

    .title-detail {
      font-size: 22px;
      display: block;
      margin-top: 20px;
    }
  }
}
</style>
