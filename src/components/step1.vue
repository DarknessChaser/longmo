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
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep" :disabled="address == [] || footerData.store == ''">下一步
      </x-button>
      <x-button type="primary" text="测试" action-type="button" @click.native="getTest">
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, XAddress, ChinaAddressV4Data, Selector} from 'vux'

  export default {
    name: 'step1',
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
        footerData: {
          selectStep: 1,
          province: '',
          city: '',
          district: '',
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
      getTest: function () {
        let url = '/api/4e89a35ce2e7e4d6d9c4f88be967f251/selectStore/' + this.footerData.province + '/' + this.footerData.city
        this.$http.get(url).then(response => {
          // get body data
          console.log(response.body)
        }, response => {
          // error callback
        })
      },
      onAddressChange: function (ids, names) {
        this.footerData.province = names[0]
        this.footerData.city = names[1]
        this.footerData.district = names[2]
      },
      nextStep: function () {
        this.footerData.selectStep = 2
        this.$router.push({path: 'step2', query: {footerData: JSON.stringify(this.footerData)}})
      }
    },
    mounted: function () {
      console.log(123)
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
