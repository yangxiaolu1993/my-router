<template>
  <div class="footer">
        <my-router-link to="home">首页</my-router-link>
        <my-router-link to='classify'>分类</my-router-link>
        <my-router-link to='cart'>购物车</my-router-link>
        <!-- <my-router-link :to="{name:'my',params:{userId: 123}}">我的</my-router-link> -->
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      
    }
  },
  mounted(){
    // console.log(this.$options)
  }
}
</script>


<style lang="scss" scoped>

.footer{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 1px solid rgba(230,230,230,0.5);
}
</style>

