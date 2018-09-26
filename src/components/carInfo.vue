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
          <div class="inputImg" @click.native="chooseImage()"><img src="../img/inputImgMini.png"/>
            <p>交强险保单</p></div>
        </flexbox-item>
        <flexbox-item>
          <div class="inputImg" @click.native="chooseImage()"><img src="../img/inputImgMini.png"/>
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
    },
    data: function () {
      return {
        imgUrl: ''
      }
    },
    methods: {
      chooseImage: function () {
        console.log(123)
        const vm = this
        this.$wechat.chooseImage({
          count: 1, // 选择图片张数
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 图片来源
          success: function (res) {
            // 渲染图片
            vm.imgUrl = res.localIds[0]
            if (window.__wxjs_is_wkwebview) { // 兼容苹果
              this.$wechat.getLocalImgData({
                localId: vm.imgUrl, // 图片的localID
                success: function (res) {
                  vm.chooseImg = res.localData
                  // localData是图片的base64数据，可以用img标签显示，ios系统必须使用base64显示
                }
              })
            } else {
              vm.chooseImg = vm.imgUrl
            }
          }
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
