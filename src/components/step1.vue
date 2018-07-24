<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>Step1.选择门店</span>
      </div>
      <group>
        <x-address title="地址：" v-model="address" :list="addressData"
                   placeholder="请选择地址" @on-shadow-change="onAddressChange"></x-address>
      </group>
      <group>
        <selector title="门店：" v-model="footerData.store" :options="storeData" placeholder="请选择门店"
                  direction="rtl"></selector>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep">下一步
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, XAddress, ChinaAddressV4Data, Selector} from 'vux'

  export default {
    name: 'step1',
    props: ['poptest'],
    components: {
      Group,
      XAddress,
      ChinaAddressV4Data,
      Selector
    },
    data: function () {
      return {
        address: [],
        province: '',
        city: '',
        district: '',
        addressData: ChinaAddressV4Data,
        storeData: [{key: 'test1', value: '测试门店1'}, {key: 'test2', value: '测试门店2'}],
        footerData: this.$store.state.footerData
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
      nextStep: function () {
        this.footerData.selectStep = 2
        this.$router.push({path: 'step2', query: {footerData: JSON.stringify(this.footerData)}})
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 60%;
    padding: 0 5%;
  }

  .step {
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
