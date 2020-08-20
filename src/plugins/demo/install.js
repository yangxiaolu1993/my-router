import MyRouter from './index'
import MyRouterLink from './link.js'
import MyRouterView from './view.js'

MyRouter.install = function(Vue,options){

    Vue.mixin({
        beforeCreate(){
            if (this.$options && this.$options.routerDemo){  // 根组件
                this._myRouter = this.$options.routerDemo;
            }else { 
                this._myRouter= this.$parent && this.$parent._myRouter // 子组件
            }
            // 当前实例添加 $router 实例
            Object.defineProperty(this,'$myRouter',{
                get(){
                    return this._myRouter
                }
            })

            // 为当前实例添加 $route 属性
            Object.defineProperty(this,'$myRoute',{
                get(){
                    return {
                        path:'',
                        name:'',
                        hash:'',
                        meta:{},
                        fullPath:'',
                        query:{},
                        params:{}
                    }
                }
            })
        }
    }) 

    Vue.component(MyRouterLink.name, MyRouterLink)
    Vue.component(MyRouterView.name, MyRouterView)
}

export default MyRouter