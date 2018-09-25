<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>车主信息</span>
      </div>
      <group>
        <x-input type="text" :required="true" title="姓名：" placeholder-align="center"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="性别：" placeholder-align="center"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="手机：" placeholder-align="center"></x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button">下一步</x-button>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput} from 'vux'

  export default {
    name: 'ownerInfo',
    components: {
      Group,
      XInput
    }
  }
</script>

<style scoped>
  .main {
    height: 60%;
    padding: 0 5%;
  }

  .step {
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }

  .inputImg {
    margin-top: 15%;
    padding-top: 5%;
    text-align: center;
    background-color: #ffffff;
  }
</style>
