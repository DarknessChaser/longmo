<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="carInfo" v-for="(carInfo, index) in carInfoData">
      <flexbox>
        <flexbox-item>
          <div class="carInfoTitleLeft">车辆信息（{{index + 1}}）</div>
        </flexbox-item>
        <flexbox-item>
          <div class="carInfoTitleRight" @click="applyCompensation(carInfo.plan_id)" v-if="carInfo.is_audit === '申请赔付'||carInfo.is_audit === '重新申请'">{{carInfo.is_audit}}></div>
          <div class="carInfoTitleRight" v-if="carInfo.is_audit === '审核中'||carInfo.is_audit === '理赔中'">{{carInfo.is_audit}}</div>
        </flexbox-item>
      </flexbox>
      <group>
        <x-input type="text" :required="true" title="车牌号：" :disabled="disabledFlag" v-model="carInfo.plate_numbers"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号：" :disabled="disabledFlag" v-model="carInfo.vin"></x-input>
      </group>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {XInput, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'aftermarketCarInfo',
    components: {
      XInput,
      Flexbox,
      FlexboxItem
    },
    data: function () {
      return {
        aftermarketPhone: JSON.parse(this.$route.query.aftermarketPhone),
        carInfoData: [],
        disabledFlag: true
      }
    },
    methods: {
      getCarInfo: function () {
        let url = '/api/' + this.$store.state.token + '/vehicleinfo'
        let postData = {}

        postData.phone = this.aftermarketPhone
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result !== false) {
            this.carInfoData = response.body
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
      applyCompensation: function (planId) {
        this.$router.push({
          path: 'applicationReady',
          query: {planId: JSON.stringify(planId), aftermarketPhone: JSON.stringify(this.aftermarketPhone)}
        })
      },
      alertInfo: function () {
        this.$vux.alert.show({
          content: '尊敬的***先生/女士，你车牌号为***的车辆参加龙膜PPF保换计划的赔付在***门店，时间为2018年**月**日。',
          buttonText: '查看详情',
          onHide () {
            console.log('此处应当有页面跳转')
          }
        })
      }
    },
    mounted: function () {
      this.getCarInfo()
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
