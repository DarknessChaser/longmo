<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <group class="inputPhone">
        <x-input type="tel" title="手机号：" is-type="china-mobile" :required="true" placeholder="请输入手机号码"
                 placeholder-align="right" @on-enter="test"></x-input>
      </group>
      <group class="inputPhone">
        <x-input title="验证码：" class="weui-vcode">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button">下一步</x-button>
    </div>
  </div>
</template>

<script>
  import {Group, XInput} from 'vux'

  export default {
    name: 'login',
    components: {
      Group,
      XInput
    },
    methods: {
      test: function () {
        console.log('事件触发')
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 50%;
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
