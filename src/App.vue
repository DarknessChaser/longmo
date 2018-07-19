<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: url(./img/background.png) no-repeat bottom center #eeeeee;
    background-size: 100% 100%;
  }

  .clearFix {
    zoom: 1;
  }

  .clearFix:after {
    content: "";
    display: table;
    clear: both;
  }

  #app {
    height: 100%;
    width: 100%;
  }

  .longmo{
    height: 100%;
    width: 100%;
  }
</style>
