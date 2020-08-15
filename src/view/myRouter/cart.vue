<template>
  <div class="hash-router">
      <h3>hash router Cart</h3>
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
  //  console.log(this.$myRouter.__proto__.push())
    console.log(this.$myRouter)
    this.$myRouter.push({
      name:'cart'
    })
  },
  methods:{

   
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

