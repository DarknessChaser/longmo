<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <img src="../img/paymentsuccess.png"/>
      <p class="orderAlert">您的保换计划ID号为 {{planId}}</p>
    </div>
    <div class="touchBtn">
      <x-button class="btn" type="primary" text="点击保存" action-type="button" :data-clipboard-text="planId"></x-button>
    </div>
  </div>
</template>

<script>
  import {Group} from 'vux'
  import Clipboard from 'clipboard'

  export default {
    name: 'paySuccess',
    components: {
      Group
    },
    data: function () {
      return {
        prepayId: JSON.parse(this.$route.query.prepay_id),
        planId: ''
      }
    },
    methods: {
      getPlanId: function () {
        let url = '/api/' + this.$store.state.token + '/selectplanid'
        let postData = {}
        postData.prepay_id = this.prepayId
        this.$http.post(url, postData).then(response => {
          if (response.body.code === 1) {
            this.planId = response.body.plan_id
          } else if (response.body.code === 0) {
            this.$vux.alert.show({
              title: response.body.msg
            })
          }
        }, response => {
          console.log(response)
          this.$vux.alert.show({
            title: '网络拥堵请稍候……'
          })
        })
      }
    },
    mounted () {
      let vm = this
      const clipboard = new Clipboard('.btn')
      clipboard.on('success', function (e) {
        e.clearSelection()
        vm.$vux.alert.show({
          title: '复制成功！',
          buttonText: '确认',
          onHide () {
            console.log('此处应当有页面跳转')
          }
        })
      })

      clipboard.on('error', function () {
        vm.$vux.alert.show({
          title: '您的浏览器不支持一键复制，请手动选择后复制！',
          buttonText: '确认'
        })
      })

      this.getPlanId()
    }
  }
</script>

<style scoped>
  .main {
    height: 60%;
    text-align: center;
  }

  .orderAlert {
    margin-top: 16%;
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
