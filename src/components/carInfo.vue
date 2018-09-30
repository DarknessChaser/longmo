<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>车辆信息</span>
      </div>
      <group>
        <x-input type="text" :required="true" title="车牌号：" placeholder-align="center" v-model="plateNumber"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="车架号：" placeholder-align="center" v-model="frameNumber"></x-input>
      </group>
      <flexbox>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('compulsoryInsuranceImg')"
               :style="{backgroundImage:'url('+compulsoryInsuranceImgUrl+')'}"><img src="../img/inputImgMini.png"/>
            <p>交强险保单</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('commercialInsuranceImg')"
               :style="{backgroundImage:'url('+commercialInsuranceImgUrl+')'}"><img src="../img/inputImgMini.png"/>
            <p>商业险保单</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep"
                :disabled="plateNumber == '' || frameNumber == '' || compulsoryInsuranceImgId == '' || commercialInsuranceImgId == ''"></x-button>
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
    },
    data: function () {
      return {
        plateNumber: '',
        frameNumber: '',
        compulsoryInsuranceImgLocalId: '',
        compulsoryInsuranceImgUrl: '',
        compulsoryInsuranceImgId: '',
        commercialInsuranceImgLocalId: '',
        commercialInsuranceImgUrl: '',
        commercialInsuranceImgId: '',
        infoData: JSON.parse(this.$route.query.infoData)
      }
    },
    methods: {
      chooseImage: function (objName) {
        const vm = this
        this.$wechat.chooseImage({
          count: 1, // 选择图片张数
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 图片来源
          success: function (res) {
            // 渲染图片
            vm[objName + 'LocalId'] = res.localIds[0]
            if (window.__wxjs_is_wkwebview) { // 兼容苹果
              vm.$wechat.getLocalImgData({
                localId: vm[objName + 'LocalId'], // 图片的localID
                success: function (res) {
                  vm[objName + 'Url'] = res.localData
                  // localData是图片的base64数据，可以用img标签显示，ios系统必须使用base64显示
                }
              })
            } else {
              vm[objName + 'Url'] = vm[objName + 'LocalId']
            }
            vm.uploadImage(objName)
          }
        })
      },
      uploadImage: function (objName) {
        const vm = this
        this.$wechat.uploadImage({
          localId: vm[objName + 'LocalId'],
          isShowProgressTips: 100,
          success: function (res) {
            vm[objName + 'Id'] = res.serverId // 返回图片的服务器端ID
            console.log('图片微信服务器id为：' + vm[objName + 'Id'])
          }
        })
      },
      nextStep: function () {
        this.infoData.plateNumber = this.plateNumber
        this.infoData.frameNumber = this.frameNumber
        this.infoData.compulsoryInsuranceImgId = this.compulsoryInsuranceImgId
        this.infoData.commercialInsuranceImgId = this.commercialInsuranceImgId
        this.$router.push({path: 'ownerInfo', query: {infoData: JSON.stringify(this.infoData)}})
      }
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .inputImg p {
    font-size: 1rem;
    color: #aaaaaa;
  }
</style>
