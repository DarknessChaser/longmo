<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step">
        <span>车主信息</span>
      </div>
      <group>
        <x-input type="text" :required="true" title="姓名：" placeholder-align="center" v-model="ownerName"></x-input>
      </group>
      <group>
        <x-input type="text" :required="true" title="性别：" placeholder-align="center" v-model="ownerGender"></x-input>
      </group>
      <group>
        <x-input type="tel" :required="true" title="手机：" is-type="china-mobile" placeholder-align="center" v-model="ownerPhone"></x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button" @click.native="nextStep"
                :disabled="ownerName == '' || ownerGender == '' || ownerPhone == ''">下一步</x-button>
    </div>
    <my-footer :footerData="{}"></my-footer>
  </div>
</template>

<script>
  import {Group, XInput} from 'vux'

  export default {
    name: 'ownerInfo',
    components: {
      Group,
      XInput
    },
    data: function () {
      return {
        ownerName: '',
        ownerGender: '',
        ownerPhone: '',
        infoData: JSON.parse(this.$route.query.infoData)
      }
    },
    methods: {
      nextStep: function () {
        this.infoData.ownerName = this.ownerName
        this.infoData.ownerGender = this.ownerGender
        this.infoData.ownerPhone = this.ownerPhone
        this.$router.push({path: 'eWarranty', query: {infoData: JSON.stringify(this.infoData)}})
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
</style>
