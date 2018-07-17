<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <div class="step"><span>Step1.选择门店</span></div>
      <div class="selectItems">
        <group>
          <x-address @on-hide="test()" @on-show="test()" title="地址:" v-model="address" :list="addressData"
                     placeholder="请选择地址" @on-shadow-change="onShadowChange(ids, names)"></x-address>
        </group>
      </div>
      <div class="selectItems">
        <select>
          <option>属性:</option>
        </select>
      </div>
    </div>
    <div class="nextBtn">
      <x-button type="primary" text="下一步" action-type="submit">下一步</x-button>
    </div>
    <my-footer v-bind:footerData="footerData"></my-footer>
  </div>
</template>

<script>
  import {Group, Cell, XAddress, ChinaAddressV4Data} from 'vux'

  export default {
    name: 'step',
    components: {
      Group,
      Cell,
      XAddress,
      ChinaAddressV4Data
    },
    data: function () {
      return {
        footerData: {myStep: 2},
        address: [
          '110000',
          '110100',
          '110119'
        ],
        addressData: ChinaAddressV4Data
      }
    },
    methods: {
      test: function () {
        console.log('我就试试')
      },
      onShadowChange: function (ids, names) {
        console.log(ids + ':' + names)
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
