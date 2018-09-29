<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <group class="inputOrder">
        <x-input type="number" :required="true" placeholder="点击输入保换计划ID号" placeholder-align="center" :min="18" :max="18" v-model="planId"></x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep"
                :disabled="planId == ''">下一步</x-button>
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
    data: function () {
      return {
        planId: '',
        infoData: {
          planId: '', // 包换计划id号
          plateNumber: '', // 车牌号
          frameNumber: '', // 车架号
          compulsoryInsuranceImgId: '', // 交强险保单
          commercialInsuranceImgId: '', // 商业险保单
          ownerName: '', // 车主姓名
          ownerGender: '', // 车主性别
          ownerPhone: '', // 车主手机
          eWarrantyImgId: '', // 电子质保
          carAtStoreImgId: '', // 车辆在门店正面照
          deliverImgId: '', // 施工交付单
          otherImgId: '' // 其他相关图片
        }
      }
    },
    methods: {
      nextStep: function () {
        this.infoData.planId = this.planId

        let url = '/api/' + this.$store.state.token + '/checkplanid'
        let postData = {}

        postData.plan_id = this.planId
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result === true) {
            this.$router.push({path: 'carInfo', query: {infoData: JSON.stringify(this.infoData)}})
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
  .inputOrder{
    padding: 20% 5%;
    font-size: 1.5rem;
    color: #101010;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
