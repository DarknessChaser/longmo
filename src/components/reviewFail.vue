<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <img src="../img/reviewfail.png"/>
    </div>
    <div class="touchBtn">
      <x-button type="primary" text="重新提交审核" action-type="button">重新提交审核</x-button>
    </div>
  </div>
</template>

<script>
  import {Group} from 'vux'

  export default {
    name: 'reviewFail',
    components: {
      Group
    }
  }
</script>

<style scoped>
  .main {
    height: 55%;
    text-align: center;
  }

  .touchBtn {
    padding: 0 5%;
  }
</style>
