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

.content{
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  .link{
    display: inline-block;
    padding: 8px 10px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #f2140c 0%, #f2270c 70%, #f24d0c 100%);
    border-radius: 0.8rem;
    
    a{
      color: #fff;
    }
  }
}



</style>
