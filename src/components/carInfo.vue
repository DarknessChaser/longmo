<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>车辆信息</span>
      </div>
      <group>
        <x-input type="text" :required="true" title="车牌号：" placeholder-align="center"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号：" placeholder-align="center"></x-input>
      </group>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/>
            <p>交强险保单</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/>
            <p>商业险保单</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button">下一步</x-button>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'carInfo',
    components: {
      Group,
      XInput,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>
  .main {
    height: 55%;
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

  .inputImg p {
    font-size: 1rem;
    color: #aaaaaa;
  }
</style>
