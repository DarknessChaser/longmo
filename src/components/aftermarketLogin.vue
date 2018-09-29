<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <group class="inputPhone">
        <x-input type="tel" title="手机号：" is-type="china-mobile" :required="true" placeholder="请输入手机号码"
                 placeholder-align="right" v-model="aftermarketPhone"></x-input>
      </group>
      <group class="inputPhone">
        <x-input title="验证码：" class="weui-vcode" v-model="verificationCode">
          <x-button slot="right" type="primary" mini @click.native="sendMessage" text="发送验证码"
                    :disabled="!messageFlag"></x-button>
        </x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="登陆" action-type="button" :disabled="messageFlag" @click.native="checkMessage">登陆
      </x-button>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput} from 'vux'

  export default {
    name: 'aftermarketLogin',
    components: {
      Group,
      XInput
    },
    data: function () {
      return {
        aftermarketPhone: '',
        verificationCode: '',
        messageFlag: true
      }
    },
    methods: {
      sendMessage: function () {
        let url = '/api/' + this.$store.state.token + '/sendcaptcha'
        let postData = {}

        postData.phone = this.aftermarketPhone
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result === true || response.body.msg === '发送成功！') {
            this.$vux.alert.show({
              title: '发送成功！'
            })
            this.messageFlag = !this.messageFlag
          } else {
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
      },
      checkMessage: function () {
        let url = '/api/' + this.$store.state.token + '/mobilelogin'
        let postData = {}

        postData.phone = this.aftermarketPhone
        postData.captcha = this.verificationCode
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result === true || response.body.msg === '验证成功！') {
            this.$router.push({path: 'aftermarketCarInfo.vue', query: {aftermarketPhone: JSON.stringify(this.aftermarketPhone)}})
          } else {
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
    }
  }
</script>

<style scoped>
  .main {
    height: 60%;
    text-align: center;
  }

  .inputPhone {
    padding: 0 5%;
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
