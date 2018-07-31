<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>选择门店</span>
      </div>
      <group>
        <x-address title="地址：" v-model="address" :list="addressData"
                   placeholder="请选择地址" @on-shadow-change="onAddressChange" @on-hide="getStoreData"></x-address>
      </group>
      <group>
        <selector title="门店：" v-model="footerData.store" :options="storeData" placeholder="请选择门店"
                  direction="rtl"></selector>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep" :disabled="address == [] || footerData.store == ''">下一步
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
        storeData: [],
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
      getStoreData: function () {
        let url = '/api/' + this.$store.state.token + '/selectStore/' + this.address[0] + '/' + this.address[1]
        this.$http.get(url).then(response => {
          this.storeData = response.body.map(item => item.address)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
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
