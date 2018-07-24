<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.province}}xx省</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.city}}xx市</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.store}}xx门店</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.carBrand}}xx品牌</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carModel}}xx型</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carYears}}xx款</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.carFilmModel}}xx型号</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carFilmProperty}}xx属性</div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="priceNumber">
        <flexbox-item>
          <div class="priceNumberLeft">价格</div>
        </flexbox-item>
        <flexbox-item>
          <div class="priceNumberMiddle">xxx</div>
        </flexbox-item>
        <flexbox-item>
          <div class="priceNumberRight">元</div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="去付款" action-type="button" @click.native="payment">去付款
      </x-button>
    </div>
    <my-footer :footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Selector, Flexbox, FlexboxItem, AlertModule} from 'vux'

  export default {
    name: 'step4',
    components: {
      Selector,
      Flexbox,
      FlexboxItem
    },
    data: function () {
      return {
        footerData: this.$store.state.footerData
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      payment: function () {
        AlertModule.show({
          content: '支付成功啦',
          onHide () {
            this.$router.push({path: 'payReady'})
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 60%;
    padding: 0 5%;
  }

  .touchBtn {
    padding: 0 5%;
  }

  /*.nextBtn > button {
    background-color: #120907;
    border-radius: 0.25rem;
    color: #ffffff;
  }*/

  .showPayment {
    background-color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10%;
  }

  .priceNumber {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #101010;
    margin-top: 25%;
  }

  .priceNumberLeft {
    text-align: right;
    padding-right: 1rem;
  }

  .priceNumberMiddle {
    text-align: center;
    color: #dd222f;
    background-color: #ffffff;
    border-radius: 6px;
  }

  .priceNumberRight {
    text-align: left;
    padding-left: 1rem;
  }
</style>
