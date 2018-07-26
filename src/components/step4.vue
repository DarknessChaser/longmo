<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.province}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.city}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.store}}</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.carBrand}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carModel}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carYears}}</div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="showPayment">{{footerData.carFilmModel}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="showPayment">{{footerData.carFilmProperty}}</div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="priceNumber">
        <flexbox-item>
          <div class="priceNumberLeft">价格</div>
        </flexbox-item>
        <flexbox-item>
          <div class="priceNumberMiddle">{{price}}</div>
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
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Selector, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'step4',
    components: {
      Selector,
      Flexbox,
      FlexboxItem
    },
    data: function () {
      return {
        price: '',
        footerData: JSON.parse(this.$route.query.footerData)
      }
    },
    methods: {
      getPrice: function () {
        let url = '/api/' + this.$store.state.token + '/selectPrice/' + this.footerData.carBrand + '/' + this.footerData.carModel + '/' + this.footerData.carYears + '/' + this.footerData.carFilmModel + '/' + this.footerData.carFilmProperty
        this.$http.get(url).then(response => {
          if (response.body === {}) {
            this.price = '暂无价格'
          } else {
            this.price = response.body.actual_price
          }
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      payment: function () {
        this.$router.push({path: 'payReady'})
      }
    },
    mounted: function () {
      this.getPrice()
    }
  }
</script>

<style scoped>
  .main {
    height: 55%;
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
    margin-top: 10%;
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
