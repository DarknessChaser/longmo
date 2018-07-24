<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>Step2.选择车辆</span>
      </div>
      <group>
        <selector title="品牌：" v-model="footerData.carBrand" :options="carBrandData" placeholder="请选择品牌" direction="rtl"></selector>
      </group>
      <group>
        <selector title="车型：" v-model="footerData.carModel" :options="carModelData" placeholder="请选择车型" direction="rtl"></selector>
      </group>
      <group>
        <selector title="年份：" v-model="footerData.carYears" :options="carYearsData" placeholder="请选择年份" direction="rtl"></selector>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep">下一步
      </x-button>
    </div>{{this.$router.query}}
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
        carBrandData: [{key: 'test1', value: '测试品牌1'}, {key: 'test2', value: '测试品牌2'}],
        carModelData: [{key: 'test1', value: '测试车型1'}, {key: 'test2', value: '测试车型2'}],
        carYearsData: [{key: 'test1', value: '测试年份1'}, {key: 'test2', value: '测试年份2'}],
        footerData: this.$store.state.footerData
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      nextStep: function () {
        this.footerData.selectStep = 3
        this.$router.push({path: 'step3'})
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
