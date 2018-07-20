<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="showImgItems">
      <div class="step">
        <span>赔付信息 · 苏A98D89</span>
      </div>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>接单表格</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>签字表格</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>其他资料1</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>其他资料2</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>其他资料3</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/imgtest.png"/><p>其他资料4</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'applicationComplete',
    components: {
      Group,
      XInput,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>
  .showImgItems {
    height: 80%;
    padding: 0 5%;
  }

  .step {
    font-size: 1.5rem;
    color: #101010;
  }

  .inputImg{
    position: relative;
    margin-top: 5%;
    background-color: #ffffff;
    border-radius: 5px;
  }

  .inputImg>img{
    width: 100%;
    vertical-align:bottom;
    border-radius: 5px;
  }

  .inputImg>p{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    background-color: rgba(0,0,0,0.3);
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
  }
</style>
