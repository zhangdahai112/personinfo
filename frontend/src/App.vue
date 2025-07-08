<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import './themes/index.scss';
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
.el-drawer__body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: scroll;
}
</style>
