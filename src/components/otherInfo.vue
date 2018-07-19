<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>其他信息</span>
      </div>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/><p>车辆在门店正面照</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/><p>施工交付单</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/><p>其他相关图片</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="提交审核" action-type="button">提交审核</x-button>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'otherInfo',
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

  .inputImg{
    margin-top: 5%;
    padding-top: 5%;
    text-align: center;
    background-color: #ffffff;
  }
</style>
