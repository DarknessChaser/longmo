<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <group class="inputOrder">
        <x-input type="number" :required="true" placeholder="点击输入保换计划ID号" placeholder-align="center" @on-enter="test"></x-input>
      </group>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="下一步" action-type="button">下一步</x-button>
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
    methods: {
      test: function () {
        console.log('事件触发')
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
