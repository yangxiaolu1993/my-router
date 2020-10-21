<template>
  <div class="hash-router">
      <h3>hash router Home</h3>
      <div @click="goChild">跳转子路由 my</div>
  </div>
</template>

<script>
export default {
  name: 'HashRouterHome',
  data () {
    return {
      
    }
  },
  mounted(){
    // console.log(this.$myRoute)
  },
  beforeRouteEnter (to, from, next) {
    console.log('home 组件导航守卫 beforeRouteEnter')
   
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('home 组件导航守卫 beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('home 组件导航守卫 beforeRouteLeave')
    next()
  },
  methods:{
    goChild(){
     
      this.$myRouter.push({
        name:'my'
      })
    }
   
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

