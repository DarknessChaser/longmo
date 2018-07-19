<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <img src="../img/paymentsuccess.png"/>
      <p class="orderAlert">您的保换计划ID号为 xxxxxxxx</p>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="点击保存" action-type="button">点击保存</x-button>
    </div>
  </div>
</template>

<script>
  import {Group} from 'vux'

  export default {
    name: 'paySuccess',
    components: {
      Group
    }
  }
</script>

<style scoped>
  .main {
    height: 50%;
    text-align: center;
  }
  .orderAlert{
    margin-top: 16%;
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
