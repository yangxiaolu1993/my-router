<template>
  <div class="hash-router">
      <h3>{{mode}} router Cart</h3>
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
    console.log('cart 组件导航守卫 beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('cart 组件导航守卫 beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('cart 组件导航守卫 beforeRouteLeave')
    next()
  },
  methods:{
    /**
     * 两个对象是否相等
     */
    isEq(){
      let aa = {
        b:{
          name:'张三'
        },
        c:{
          name:'李四'
        }
      }
      let b = aa
      let c = aa
      console.log('两个对象是否相等',c==b)
    },
    /**
     * 洋葱模型
     */
    onionModel(arr){
      console.log(arr)

      let idx = 0

      while( idx < arr.length){
        arr[idx](function(){
          ++idx
        })
      }
      
    }
   
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/router/index.scss';
</style>

