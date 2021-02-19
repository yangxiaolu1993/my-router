<template>
  <div class="hash-router">
      <h3>{{mode}} router My</h3>
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
    this.mode = this.$myRouter.mode
  },
  beforeRouteEnter (to, from, next) {
    console.log('my 组件导航守卫 beforeRouteEnter')
   
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('my 组件导航守卫 beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('my 组件导航守卫 beforeRouteLeave')
    next()
  },
  methods:{

   
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

