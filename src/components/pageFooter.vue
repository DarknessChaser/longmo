<template>
  <footer class="pageFooter">
    <p v-if="footerData&&footerData.selectStep>2">
      <span v-if="footerData.carFilmModel">{{footerData.carFilmModel}}型号</span>
      <span v-if="footerData.carFilmProperty">/{{footerData.carFilmProperty}}属性</span>
    </p>
    <p v-if="footerData&&footerData.selectStep>1">
      <span v-if="footerData.carBrand">{{footerData.carBrand}}品牌</span>
      <span v-if="footerData.carModel">/{{footerData.carModel}}车型</span>
      <span v-if="footerData.carYears">/{{footerData.carYears}}年份</span>
    </p>
    <p v-if="footerData&&footerData.selectStep>0">
      <span v-if="footerData.province">{{footerData.province}}</span>
      <span v-if="footerData.city">/{{footerData.city}}</span>
      <span v-if="footerData.district">/{{footerData.district}}</span>
      <span v-if="footerData.store">/{{footerData.store}}</span>
    </p>
    <p>本次活动最终解释权归测试公司所有</p>
  </footer>
</template>

<script>
  export default {
    props: {
      footerData: {
        default: {selectStep: 0}
      }
    },
    name: 'pageFooter'
  }
</script>

<style scoped>
  .pageFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
