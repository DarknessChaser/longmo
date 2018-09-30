<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>申请赔付</span>
      </div>
      <flexbox>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('accidentLiabilityCertificateImg')"
               :style="{backgroundImage:'url('+accidentLiabilityCertificateImgUrl+')'}"><img src="../img/inputImgMini.png"/>
            <p>事故责任认定书</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('siteImg')"
               :style="{backgroundImage:'url('+siteImgUrl+')'}"><img src="../img/inputImgMini.png"/>
            <p>受损现场照片</p></div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="inputImg" @click="chooseImage('otherImg')"
               :style="{backgroundImage:'url('+otherImgUrl+')'}"><img src="../img/inputImgMini.png"/>
            <p>其他相关图片</p></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="提交资料" action-type="button" @click.native="submitInfo" :disabled="!checkFlag || accidentLiabilityCertificateImgId == '' || siteImgId == '' || otherImgId == ''">提交资料</x-button>
      <check-icon :value.sync="checkFlag" type="plain" class="userAgreement">我已阅读并同意<span>《赔付须知》</span></check-icon>
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
        planId: JSON.parse(this.$route.query.planId),
        aftermarketPhone: JSON.parse(this.$route.query.aftermarketPhone),
        accidentLiabilityCertificateImgLocalId: '',
        accidentLiabilityCertificateImgUrl: '',
        accidentLiabilityCertificateImgId: '',
        siteImgLocalId: '',
        siteImgUrl: '',
        siteImgId: '',
        otherImgLocalId: '',
        otherImgUrl: '',
        otherImgId: '',
        checkFlag: true
      }
    },
    methods: {
      getCompensationInfo: function () {
        let url = '/api/' + this.$store.state.token + '/applyplan'
        let postData = {}

        postData.plan_id = this.planId
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          if (response.body.result) {
            this.$vux.alert.show({
              content: response.body.msg,
              buttonText: '知道了'
            })
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
      submitInfo: function () {
        let url = '/api/' + this.$store.state.token + '/compensateaudit'
        let postData = {}

        /* plan_id(保换ID)  traffic_report(事故责任书)  damaged_thumb（受损现场照片）
          other_thumb（其他图片） */
        postData.plan_id = this.planId
        postData.traffic_report = this.accidentLiabilityCertificateImgId
        postData.damaged_thumb = this.siteImgId
        postData.other_thumb = this.otherImgId
        postData = JSON.stringify(postData)

        this.$http.post(url, postData).then(response => {
          console.log(response)
          if (response.body.result !== false) {
            this.$vux.alert.show({
              title: '资料已提交，请等待审核！'
            })
            this.$router.push({
              path: 'aftermarketCarInfo',
              query: {aftermarketPhone: JSON.stringify(this.aftermarketPhone)}
            })
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
    },
    mounted: function () {
      this.getCompensationInfo()
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .inputImg p {
    font-size: 1rem;
    color: #aaaaaa;
  }
</style>
