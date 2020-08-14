<template>
  <div class="home-page">
    <h3>开始你的表演吧！</h3>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <my-router-link :to="item.route">
              <div class="img"><img :src="require(`../assets/image/${item.icon}`)" alt=""></div>
              <div class="content">
                  <div class="title">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
              </div>  
            </my-router-link>
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
        {id:'6',title:'hash 路由',desc:'手写路由 ',route:'hashRouter',icon:'6.jpg'},
        {id:'1',title:'Typescript',desc:'TypeScript 在 Vue 中的应用',route:'',icon:'1.jpg'},
      ]
    }
  },
  mounted(){
    // console.log(this.$myMethod())
  },
  methods:{

    jump(obj){
      
      if(obj.route != ''){
        this.$router.push({
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

