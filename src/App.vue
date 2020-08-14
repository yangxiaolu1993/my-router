<template>
  <div id="app">
    <my-router-view/>
    
    <!-- 底部导航 -->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/index'
export default {
  name: 'App',
  components:{
    'footer-nav':FooterNav
  }
}
</script>

<style lang="scss">
  @import './assets/css/reset.scss';
</style>
<style lang="scss">
#app {
  font-size: 14px;
  color: #333;
  background: rgba(242,243,243,1);
}
</style>
