<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>申请赔付</span>
      </div>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/>
            <p>事故责任认定书</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/>
            <p>受损现场照片</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg"><img src="../img/inputImgMini.png"/>
            <p>其他相关图片</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="提交资料" action-type="button" @click.native="submitInfo">提交资料</x-button>
      <check-icon :value.sync="testValue" type="plain" class="userAgreement">我已阅读并同意<span>《赔付须知》</span></check-icon>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput, Flexbox, FlexboxItem, CheckIcon} from 'vux'

  export default {
    name: 'applicationReady',
    components: {
      Group,
      XInput,
      Flexbox,
      FlexboxItem,
      CheckIcon
    },
    data: function () {
      return {
        testValue: ''
      }
    },
    methods: {
      submitInfo: function () {
        this.$vux.alert.show({
          content: '尊敬的***先生/女士，感谢您参加龙膜PPF保换计划，你车牌号为***的车辆参加保换计划的生效时间为2018年**月**日**时，到时期间为2018年**月**日**时。',
          buttonText: '知道了',
          onHide () {
            console.log('此处应当有页面跳转')
          }
        })
      }
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

  .userAgreement {
    width: 100%;
    text-align: center;
  }

  .userAgreement span {
    color: #ff707a;
  }

  .inputImg {
    margin-top: 5%;
    padding-top: 5%;
    text-align: center;
    background-color: #ffffff;
  }

  .inputImg p {
    font-size: 1rem;
    color: #aaaaaa;
  }
</style>
