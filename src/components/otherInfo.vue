<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>其他信息</span>
      </div>
      <flexbox>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('carAtStoreImg')"
               :style="{backgroundImage:'url('+carAtStoreImgUrl+')', backgroundSize:'cover'}"><img src="../img/inputImgMini.png"/><p>车辆在门店正面照</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('deliverImg')"
               :style="{backgroundImage:'url('+deliverImgUrl+')', backgroundSize:'cover'}"><img src="../img/inputImgMini.png"/><p>施工交付单</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('otherImg')"
               :style="{backgroundImage:'url('+otherImgUrl+')', backgroundSize:'cover'}"><img src="../img/inputImgMini.png"/><p>其他相关图片</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="提交审核" action-type="button" @click.native="submitReview"
                :disabled="carAtStoreImgId == '' || deliverImgId == '' || otherImgId == ''">提交审核</x-button>
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
    },
    data: function () {
      return {
        carAtStoreImgLocalId: '',
        carAtStoreImgUrl: '',
        carAtStoreImgId: '',
        deliverImgLocalId: '',
        deliverImgUrl: '',
        deliverImgId: '',
        otherImgLocalId: '',
        otherImgUrl: '',
        otherImgId: '',
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
            if (window.wxjs_is_wkwebview) { // 兼容苹果
              this.$wechat.getLocalImgData({
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
      submitReview: function () {
        this.infoData.carAtStoreImgId = this.carAtStoreImgId
        this.infoData.deliverImgId = this.deliverImgId
        this.infoData.otherImgId = this.otherImgId

        let url = '/api/' + this.$store.state.token + '/baohuanplan'
        let postData = {}

        /* plan_id(保换ID)
        plate_number(车牌号)  vin(车架号) sali_thumb(交强险保单) commercial_thumb（商业险保单）
        name(姓名)  sex(性别)  mobile(手机号)
        guarantee_thumb（电子质保单）frontal_view（正面照） delivery_form（交付单） other_thumb（其它图片） */
        postData.plan_id = this.infoData.planId
        postData.plate_numbers = this.infoData.plateNumber
        postData.vin = this.infoData.frameNumber
        postData.sali_thumb = this.infoData.compulsoryInsuranceImgId
        postData.commercial_thumb = this.infoData.commercialInsuranceImgId
        postData.name = this.infoData.ownerName
        postData.sex = this.infoData.ownerGender === '女' ? 2 : 1
        postData.mobile = this.infoData.ownerPhone
        postData.guarantee_thumb = this.infoData.eWarrantyImgId
        postData.frontal_view = this.infoData.carAtStoreImgId
        postData.delivery_form = this.infoData.deliverImgId
        postData.other_thumb = this.infoData.otherImgId
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result !== false) {
            this.$vux.alert.show({
              title: '资料已提交，请等待审核！'
            })
            // this.$router.push({path: 'paySuccess', query: {prepay_id: JSON.stringify(jsApiParameters.package.toString().split('=')[1])}})
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

  .inputImg p {
    font-size: 1rem;
    color: #aaaaaa;
  }
</style>
