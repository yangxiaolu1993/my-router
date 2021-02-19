<template>
  <div class="hash-router">
      <h3>{{mode}} router Home</h3>
      <div @click="goChild">点击跳转子路由 my</div>
  </div>
</template>

<script>
export default {
  name: 'HashRouterHome',
  data () {
    return {
      mode:''
    }
  },
  mounted(){
    console.log(this.$myRouter)
    this.mode = this.$myRouter.mode
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

<style scoped>
h3{
  margin-bottom: 20px;
}
</style>

