<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main" v-show="selectStep==1">
      <div class="step">
        <span>Step1.选择门店</span>
      </div>
      <group>
        <x-address title="地址：" v-model="address" :list="addressData"
                   placeholder="请选择地址" @on-shadow-change="onAddressChange"></x-address>
      </group>
      <group>
        <selector title="门店：" v-model="store" :options="storeData" placeholder="请选择门店" direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
    </div>
    <div class="main" v-show="selectStep==2">
      <div class="step">
        <span>Step2.选择车辆</span>
      </div>
      <group>
        <selector title="品牌：" v-model="footerData.carBrand" :options="carBrandData" placeholder="请选择品牌" direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
      <group>
        <selector title="车型：" v-model="footerData.carModel" :options="carModelData" placeholder="请选择车型" direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
      <group>
        <selector title="年份：" v-model="footerData.carYears" :options="carYearsData" placeholder="请选择年份" direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
    </div>
    <div class="main" v-show="selectStep==3">
      <div class="step">
        <span>Step3.选择车膜</span>
      </div>
      <group>
        <selector title="型号：" v-model="footerData.carFilmModel" :options="carFilmModelData" placeholder="请选择型号"
                  direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
      <group>
        <selector title="属性：" v-model="footerData.carFilmProperty" :options="carFilmPropertyData" placeholder="请选择属性"
                  direction="rtl"
                  @on-change="onStoreChange"></selector>
      </group>
    </div>
    <div class="main" v-show="selectStep==4">
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{province}}xx省</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{city}}xx市</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{store}}xx门店</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{province}}xx品牌</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{city}}xx型</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{store}}xx款</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{province}}xx型号</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{city}}xx属性</div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="priceNumber">
        <flexbox-item>
          <div class="priceNumberLeft">价格</div>
        </flexbox-item>
        <flexbox-item>
          <div class="priceNumberMiddle">xxx</div>
        </flexbox-item>
        <flexbox-item>
          <div class="priceNumberRight">元</div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button v-show="selectStep<4" type="primary" text="下一步" action-type="button" @click.native="nextStep">下一步
      </x-button>
      <x-button v-show="selectStep==4" type="primary" text="去付款" action-type="button" @click.native="payment">去付款
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, Cell, XAddress, ChinaAddressV4Data, Selector, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'step',
    components: {
      Group,
      Cell,
      XAddress,
      ChinaAddressV4Data,
      Selector,
      Flexbox,
      FlexboxItem
    },
    data: function () {
      return {
        selectStep: 1,
        address: [],
        province: '',
        city: '',
        district: '',
        addressData: ChinaAddressV4Data,
        store: '',
        storeData: [{key: 'test1', value: '测试门店1'}, {key: 'test2', value: '测试门店2'}],
        carBrand: '',
        carBrandData: [{key: 'test1', value: '测试品牌1'}, {key: 'test2', value: '测试品牌2'}],
        carModel: '',
        carModelData: [{key: 'test1', value: '测试车型1'}, {key: 'test2', value: '测试车型2'}],
        carYears: '',
        carYearsData: [{key: 'test1', value: '测试年份1'}, {key: 'test2', value: '测试年份2'}],
        carFilmModel: '',
        carFilmModelData: [{key: 'test1', value: '测试年份1'}, {key: 'test2', value: '测试年份2'}],
        carFilmProperty: '',
        carFilmPropertyData: [{key: 'test1', value: '测试年份1'}, {key: 'test2', value: '测试年份2'}],
        footerData: {
          selectStep: 1,
          province: '',
          city: '',
          store: '',
          carBrand: '',
          carModel: '',
          carYears: '',
          carFilmProperty: '',
          carFilmModel: ''
        }
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      onAddressChange: function (ids, names) {
        this.footerData.selectStep = this.selectStep
        this.footerData.province = names[0]
        this.footerData.city = names[1]
        this.footerData.district = names[2]
      },
      onStoreChange: function () {
        this.footerData.store = this.store
      },
      nextStep: function () {
        this.selectStep += 1
        if (this.selectStep !== 4) {
          this.footerData.selectStep = this.selectStep
        } else {
          this.footerData.selectStep = 0
        }
      },
      payment: function () {
        this.$vux.alert.show({
          title: '此处应当有支付成功信息',
          content: '成功啦',
          onHide () {
            console.log('此处应当有页面跳转')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 55%;
    padding: 0 5%;
  }

  .step {
  font-size: 1.5rem;
  color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }

  /*.nextBtn > button {
    background-color: #120907;
    border-radius: 0.25rem;
    color: #ffffff;
  }*/

  .showPayment {
    background-color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10%;
  }

  .priceNumber {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #101010;
    margin-top: 25%;
  }

  .priceNumberLeft {
    text-align: right;
    padding-right: 1rem;
  }

  .priceNumberMiddle {
    text-align: center;
    color: #dd222f;
    background-color: #ffffff;
    border-radius: 6px;
  }

  .priceNumberRight {
    text-align: left;
    padding-left: 1rem;
  }
</style>
