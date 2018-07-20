<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="carInfo">
      <flexbox>
        <flexbox-item>
          <div class="carInfoTitleLeft">车辆信息（1）</div>
        </flexbox-item>
        <flexbox-item>
          <div class="carInfoTitleRight">申请赔付></div>
        </flexbox-item>
      </flexbox>
      <group>
        <x-input type="text" :required="true" title="车牌号："></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号："></x-input>
      </group>
    </div>
    <div class="carInfo">
      <flexbox>
        <flexbox-item>
          <div class="carInfoTitleLeft">车辆信息（2）</div>
        </flexbox-item>
        <flexbox-item>
          <div class="carInfoTitleRight">申请赔付></div>
        </flexbox-item>
      </flexbox>
      <group>
        <x-input type="text" :required="true" title="车牌号："></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号："></x-input>
      </group>
    </div>
    <div class="carInfo">
      <flexbox>
        <flexbox-item>
          <div class="carInfoTitleLeft">车辆信息（3）</div>
        </flexbox-item>
        <flexbox-item>
          <div class="carInfoTitleRight">申请赔付></div>
        </flexbox-item>
      </flexbox>
      <group>
        <x-input type="text" :required="true" title="车牌号："></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号："></x-input>
      </group>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {XInput, Flexbox, FlexboxItem, AlertModule} from 'vux'

  export default {
    name: 'aftermarketCarInfo',
    components: {
      XInput,
      Flexbox,
      FlexboxItem
    },
    methods: {
      alertInfo: function () {
        AlertModule.show({
          content: '尊敬的***先生/女士，你车牌号为***的车辆参加龙膜PPF保换计划的赔付在***门店，时间为2018年**月**日。',
          buttonText: '查看详情',
          onHide () {
            console.log('此处应当有页面跳转')
          }
        })
      }
    },
    mounted: function () {
      this.alertInfo()
    }
  }
</script>

<style scoped>
  .carInfo {
    padding: 3% 5% 0 5%;
  }

  .carInfo:nth-of-type(2) {
    padding: 0 5% 0 5%;
  }

  .carInfoTitleLeft {
    font-size: 1.25rem;
    color: #101010;
  }

  .carInfoTitleRight {
    font-size: 1rem;
    color: #dd222f;
    text-align: right;
  }
</style>
