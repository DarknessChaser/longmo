<template>
  <div class="longmo">
    <div class="payTop">
      <p class="orderNumber">保换订单-20180703123456987</p>
      <p class="payNumber">￥99.00</p>
    </div>
    <group>
      <cell title="收款方" value="xx公司" disabled></cell>
    </group>
    <group class="payBtn">
      <x-button type="primary" text="立即支付" action-type="button"></x-button>
    </group>
  </div>
</template>

<script>
  import {Group, Cell} from 'vux'

  export default {
    name: 'payReady',
    components: {
      Group,
      Cell
    },
    beforeCreate: function () {
      let body = document.getElementsByTagName('body')[0]
      body.style.background = 'none'
      body.style.backgroundColor = '#FBF9FE'
    }
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
    font-size: 3.5rem;
    color: #242424;
    margin-bottom: 2rem;
  }

  .payBtn {
    padding: 5%;
  }
</style>
