<template>
  <div class="home-page">
    <h3>开始你的表演吧！</h3>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="require(`../assets/image/${item.icon}`)" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyRouter',
  data () {
    return {
      list:[
        {id:'6',title:'Hash 路由',desc:'手写 Hash 路由 ',route:'home',icon:'6.jpg'},
        {id:'1',title:'History 路由',desc:'手写 History 路由',route:'cart',icon:'1.jpg'},
      ]
    }
  },
  mounted(){
    console.log(111)
    console.log(this.$myRouter)
  },
  methods:{

    jump(obj){
      
      if(obj.route != ''){
        this.$myRouter.push({
          name:obj.route
        })
      }
      
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../src/assets/css/home/home.scss';
</style>

