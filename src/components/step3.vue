<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>Step3.选择车膜</span>
      </div>
      <group>
        <selector title="型号：" v-model="footerData.carFilmModel" :options="carFilmModelData" placeholder="请选择型号" direction="rtl"></selector>
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
        carFilmModelData: [{key: 'test1', value: '测试型号1'}, {key: 'test2', value: '测试型号2'}],
        carFilmPropertyData: [{key: 'test1', value: '测试属性1'}, {key: 'test2', value: '测试属性2'}],
        footerData: JSON.parse(this.$route.query.footerData)
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      nextStep: function () {
        this.footerData.selectStep = 4
        this.$router.push({path: 'step4', query: {footerData: JSON.stringify(this.footerData)}})
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
