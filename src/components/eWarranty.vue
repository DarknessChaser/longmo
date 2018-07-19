<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>电子质保</span>
      </div>
      <group>
        <div class="inputImg"><img src="../img/inputImg.png"/></div>
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
    height: 50%;
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
    padding: 15% 0;
    text-align: center;
    background-color: #ffffff;
  }
</style>
