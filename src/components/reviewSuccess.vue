<template>
  <div class="longmo">
    <my-logo></my-logo>
    <div class="main">
      <img src="../img/reviewsuccess.png"/>
    </div>
  </div>
</template>

<script>
  import {Group} from 'vux'

  export default {
    name: 'reviewSuccess',
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
</style>
