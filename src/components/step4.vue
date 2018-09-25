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
      </flexbox>
      <flexbox>
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
      <x-button type="primary" text="去付款" action-type="button" @click.native="payment" :disabled="price=='暂无价格'||price==''">
        去付款
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
          this.price = response.body.price
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      },
      payment: function () {
        let url = '/api/' + this.$store.state.token + '/xiaDan/'
        let vm = this
        let postData = {}
        postData.store_name = this.footerData.store
        postData.brand_name = this.footerData.carBrand
        postData.model_name = this.footerData.carModel
        postData.style_name = this.footerData.carYears
        postData.type_name = this.footerData.carFilmModel
        postData.attr_name = this.footerData.carFilmProperty
        postData.goods_price = this.price
        postData = JSON.stringify(postData)

        /* eslint-disable */
        let jsApiParameters = {}

        let onBridgeReady = function () {
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', jsApiParameters,
            function (res) {
              if (res.err_msg === 'get_brand_wcpay_request:ok') {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                vm.$vux.alert.show({
                  title: '支付成功!'
                })
                vm.$router.push({path: 'paySuccess', query: {prepay_id: JSON.stringify(jsApiParameters.package.toString().split('=')[1])}})
              }
            })
        }

        let callPay = function () {
          if (typeof WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
            }
          } else {
            onBridgeReady()
          }
        }

        this.$http.post(url, postData).then(response => {
          if (response.body === []) {
            this.price = '暂无价格'
          } else {
            jsApiParameters = response.body
            callPay()
          }
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
        /* eslint-enable */
      }
    },
    mounted: function () {
      this.getPrice()
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
    font-size: 1.25rem;
    text-align: center;
    margin-top: 0.5rem;
  }

  .priceNumber {
    font-size: 1.25rem;
    line-height: 1.5rem;
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
