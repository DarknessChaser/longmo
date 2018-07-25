<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>Step3.选择车膜</span>
      </div>
      <group>
        <selector title="型号：" v-model="footerData.carFilmModel" :options="carFilmModelData" placeholder="请选择型号" direction="rtl" @on-change="getCarFilmPropertyData"></selector>
      </group>
      <group>
        <selector title="属性：" v-model="footerData.carFilmProperty" :options="carFilmPropertyData" placeholder="请选择属性" direction="rtl"></selector>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep"
                :disabled="footerData.carFilmModel == '' || footerData.carFilmProperty == ''">下一步
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, Selector} from 'vux'

  export default {
    name: 'step3',
    components: {
      Group,
      Selector
    },
    data: function () {
      return {
        carFilmModelData: [],
        carFilmPropertyData: [],
        footerData: JSON.parse(this.$route.query.footerData)
      }
    },
    methods: {
      getCarFilmModelData: function () {
        let url = '/api/' + this.$store.state.token + '/selectMotype/'
        this.$http.get(url).then(response => {
          this.carFilmModelData = response.body.map(item => item.type_name)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      getCarFilmPropertyData: function () {
        let url = '/api/' + this.$store.state.token + '/selectMoattr/'
        this.$http.get(url).then(response => {
          this.carFilmPropertyData = response.body.map(item => item.attr_name)
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      nextStep: function () {
        this.footerData.selectStep = 4
        this.$router.push({path: 'step4', query: {footerData: JSON.stringify(this.footerData)}})
      }
    },
    mounted: function () {
      this.getCarFilmModelData()
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
