<template>
  <div class="longmo">
    <div class="payTop">
      <p class="orderNumber">保换订单-20180703123456987</p>
      <p class="payNumber">￥99.00</p>
    </div>
    <group>
      
    </group>
  </div>
</template>

<script>
  export default {
    beforeCreate: function () {
      let body = document.getElementsByTagName('body')[0]
      body.style.background = 'none'
      body.style.backgroundColor = 'f4f4f4'
    },
    name: 'payReady'
  }
</script>

<style scoped>
  .payTop {
    text-align: center;
  }

  .orderNumber {
    font-size: 1.5rem;
    line-height: 36px;
    color: #242424;
    margin-top: 2rem;
  }

  .payNumber {
    font-size: 5rem;
    color: #242424;
    margin-bottom: 2rem;
  }
</style>
