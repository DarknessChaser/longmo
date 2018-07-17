<template>
  <footer class="pageFooter">
    <p v-if="footerData&&footerData.myStep>3">xx型号/xx属性</p>
    <p v-if="footerData&&footerData.myStep>2">xx品牌/xx车型/xx年份</p>
    <p v-if="footerData&&footerData.myStep>1">xx省/xx市/xx门店</p>
    <p>本次活动最终解释权归测试公司所有</p>
  </footer>
</template>

<script>
  export default {
    props: ['footerData'],
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
