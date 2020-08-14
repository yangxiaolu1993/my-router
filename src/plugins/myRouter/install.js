
import MyRouter from '.'
import MyRouterLink from './router/link'
import MyRouterView from './router/view'

MyRouter.install = function(Vue,options){

    Vue.mixin({
        beforeCreate(){
            // console.log('全局混入 beforeCreate')
            if (this.$options && this.$options.myRouter){ 
                // 如果是根组件
                this._myRouter = this.$options.myRouter;
            }else { 
                //如果是子组件
                this._myRouter= this.$parent && this.$parent._myRouter
            }
            
            // 利用 Vue defineReactive 监听当前路由的变化
            Vue.util.defineReactive(this._myRouter,'current')
            
            // 为当前实例添加 $route 属性
            Object.defineProperty(this,'$myRoute',{
                get(){

                    let current = this._myRouter.current
                    let currentRouter = this._myRouter.routes.filter(item=>{ 
                        return item.path == current
                    })
                   
                    return currentRouter[0]
                }
            })
        }
    })

    // 自定义组件 - <my-router-view>
    Vue.component(MyRouterView.name, MyRouterView)
    

    // 自定义组件 - <my-router-link>
    Vue.component(MyRouterLink.name, MyRouterLink)

    
}

export default MyRouter