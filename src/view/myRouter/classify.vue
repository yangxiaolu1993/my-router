<template>
  <div class="hash-router">
      <h3>hash router Classify</h3>
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
  methods:{

   
  },
  beforeRouteEnter (to, from, next) {
    console.log('classify 组件导航守卫 beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('classify 组件导航守卫 beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('classify 组件导航守卫 beforeRouteLeave')
    next()
  },
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

