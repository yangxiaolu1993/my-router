<template>
    <div id="app">
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'MyRouter',
  data () {
    return {
      
    }
  },
  mounted(){
    console.log(this.$myRouter)
  },

}
</script>


<style lang="scss" scoped>
</style>

