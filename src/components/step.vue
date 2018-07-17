<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step"><span>Step1.选择门店</span></div>
      <div class="selectItems">
        <group>
          <x-address @on-hide="test()" @on-show="test()" title="地址:" v-model="address" :list="addressData"
                     placeholder="请选择地址" @on-shadow-change="onShadowChange"></x-address>
        </group>
      </div>
      <div class="selectItems">
        <group>
          <selector title="title" v-model="mendian" :options="mendianData" name="测试"
                    placeholder="测试提示"></selector>
        </group>
      </div>
    </div>
    <div class="nextBtn">
      <x-button type="primary" text="下一步" action-type="submit">下一步</x-button>
    </div>
    <my-footer v-bind:footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, Cell, XAddress, ChinaAddressV4Data, Selector} from 'vux'

  export default {
    name: 'step',
    components: {
      Group,
      Cell,
      XAddress,
      ChinaAddressV4Data,
      Selector
    },
    data: function () {
      return {
        address: [],
        addressData: ChinaAddressV4Data,
        mendianData: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
        mendian: '',
        myStep: 0,
        province: '',
        city: '',
        footerData: {myStep: 0, province: '', city: ''}
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      onShadowChange: function (ids, names) {
        let province = names[0]
        let city = names[1]
        this.footerData.myStep = 2
        this.footerData.province = province
        this.footerData.city = city
      }
    }
  }
</script>

<style scoped>
  .step {
    font-size: 2rem;
    color: #101010;
  }

  .main {
    height: 50%;
    padding: 0 10%;
  }

  .selectItems {
    padding: 3% 0%;
  }

  .selectItems > select {
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    box-shadow: none;
  }

  .nextBtn {
    padding: 0 10%;
  }

  /*.nextBtn > button {
    background-color: #120907;
    border-radius: 0.25rem;
    color: #ffffff;
  }*/
</style>
