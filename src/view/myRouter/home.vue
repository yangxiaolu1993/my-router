<template>
  <div class="hash-router">
      <h3>hash router Home</h3>
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
    console.log(this.$myRoute)
  },
  methods:{

   
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

