<template>
  <div class="hash-router">
      <h3>hash router My</h3>
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
  //  console.log(this.$myRoute)
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

