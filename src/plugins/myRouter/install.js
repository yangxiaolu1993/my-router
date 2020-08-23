
import MyRouter from './index'
import MyRouterLink from './router/link'
// import MyRouterLink from './routerTemplate/routerLink'
import MyRouterView from './router/view'

MyRouter.install = function(Vue,options){

    Vue.mixin({
        beforeCreate(){
            if (this.$options && this.$options.myRouter){ 
                console.log('路由初始化 ')
                this.$options.myRouter.init()
                // 如果是根组件
                this._myRouter = this.$options.myRouter;
            }else { 
                //如果是子组件
                this._myRouter= this.$parent && this.$parent._myRouter
            }
            
            // 利用 Vue defineReactive 监听当前路由的变化
            Vue.util.defineReactive(this._myRouter,'current')
        }
    })

    
    // 当前实例添加 $router 实例
    Object.defineProperty(Vue.prototype,'$myRouter',{
        get(){
            return this._myRouter
        }
    })
    // 为当前实例添加 $route 属性
    Object.defineProperty(Vue.prototype,'$myRoute',{
        get(){
            return this._myRouter.current
        }
    })

    // 自定义组件 - <my-router-view>
    Vue.component(MyRouterView.name, MyRouterView)
    

    // 自定义组件 - <my-router-link>
    Vue.component(MyRouterLink.name, MyRouterLink)
    
}

export default MyRouter