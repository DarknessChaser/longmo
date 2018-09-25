<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>选择车辆</span>
      </div>
      <group>
        <selector title="品牌：" v-model="footerData.carBrand" :options="carBrandData" placeholder="请选择品牌" direction="rtl" @on-change="getCarModelData"></selector>
      </group>
      <group>
        <selector title="车型：" v-model="footerData.carModel" :options="carModelData" placeholder="请选择车型" direction="rtl" @on-change="getCarYearsData"></selector>
      </group>
      <group>
        <selector title="年份：" v-model="footerData.carYears" :options="carYearsData" placeholder="请选择年份" direction="rtl"></selector>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep"
                :disabled="footerData.carBrand == '' || footerData.carModel == ''||footerData.carYears == ''">下一步
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, Selector} from 'vux'

  export default {
    name: 'step2',
    components: {
      Group,
      Selector
    },
    data: function () {
      return {
        carBrandData: [],
        carModelData: [],
        carYearsData: [],
        footerData: JSON.parse(this.$route.query.footerData)
      }
    },
    methods: {
      getCarBrandData: function () {
        let url = '/api/' + this.$store.state.token + '/selectBrand'
        this.$http.get(url).then(response => {
          this.carBrandData = response.body.map(item => item.name)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      getCarModelData: function () {
        let url = '/api/' + this.$store.state.token + '/selectModel/' + this.footerData.carBrand
        this.$http.get(url).then(response => {
          this.carModelData = response.body.map(item => item.name)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      getCarYearsData: function () {
        let url = '/api/' + this.$store.state.token + '/selectStyle/' + this.footerData.carModel
        this.$http.get(url).then(response => {
          this.carYearsData = response.body.map(item => item.name)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      nextStep: function () {
        this.footerData.selectStep = 3
        this.$router.push({path: 'step3', query: {footerData: JSON.stringify(this.footerData)}})
      }
    },
    mounted: function () {
      this.getCarBrandData()
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
