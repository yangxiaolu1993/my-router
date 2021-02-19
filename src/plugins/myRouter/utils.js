import { pathToRegexp } from 'path-to-regexp'

class Utils{
    constructor(){

    }
    // 获取属性类型
    getProperty(value){
        let Rex = /^\[object\s(.*)\]$/
        let type = Object.prototype.toString.call(value)
        return (Rex.exec(type))[1]
    }

    /**
     * 将 options.routes 的路由重新排列组合，方便之后的调用
     * 如果路由配置中存在 children ，循环 children 将子路由也进行排列组合，保证配置的所有的路由都进行排列
     * @param {*} routes 
     */
    createMap(routes){
        const _this = this
        let nameMap = {} // 以每个路由的名称创建 key value map
        let pathMap = {} // 以每个路由的路径创建 key value map
        
        routes.forEach((route)=>{
            _this.createMapRecord(nameMap,pathMap,route)
        })

        return {
            nameMap,
            pathMap
        }
    }
    /**
     * 为每个路由创建 record
     */
    createMapRecord(nameMap,pathMap,route,matchAs,parent){
        const _this = this
        let regex = route.path == '*'?'':pathToRegexp(route.path)
    
        let record = {
            path:route.path || '/',
            component:route.components || { default:route.component }, //route 配置可以是 component 或 components。将两种类型统一
            meta:route.meta || {},
            name:route.name || '',
            regex:regex, // 正则表达式匹配，用于hash路由 :userId 匹配
            matchAs, // 嵌套路由情况下，用于补全子路由的 path
            parent, // 嵌套路由，保存父路由
        }
        // 配置了子路由 children
       
        if(route.children){
            route.children.forEach((child,index)=>{
                let childMatchAs = matchAs?`${matchAs}/${child.path}`:undefined
                _this.createMapRecord(nameMap,pathMap,child,childMatchAs,record)
            })
        }
        // 嵌套路由情况下，存储父路由直到根路由，也就是全路径
        record.matched = _this.formatMatch(record) 

        // 配置了路由名称
        if(route.name){
            nameMap[route.name] = record
        }
        // 配置了路由路径
        if(route.path){
            pathMap[route.path] = record
        }

        
    }
    /**
     * 创建路由 route
     */
    formatMatch(record){
        let matchArr = []
        while(record){
            matchArr.unshift(record)
            record = record.parent
        }
        return matchArr
    }

    /**
     * 路由跳转
     * @param {*} records 
     * @param {*} name 
     * @param {*} bind 
     * @param {*} reverse 
     */
    transitionTo(router,toRoute,onComplete){
    
        const _this = this
        let route = {}
        const current = router.current
       
        if(toRoute.name){
            route = router.routesMap.nameMap[toRoute.name]
        }else{
            let path = _this.getRegularPath(_this.getProperty(toRoute) == 'String'?toRoute:toRoute.path)
            route = router.routesMap.pathMap[path]
        }
        // 实现导航守卫 
        // 对比跳转的两个路由 to：即将激活的路由 from：即将失活的路由
        const {updated,activated,deactivated} = _this.resolveQueue(current.matched,route.matched)

        // 收集路由跳转之前的导航钩子函数
        const queue = [].concat(
            // 获取失活的组件的钩子 beforeRouterLeave
            _this.extractGuards(deactivated,'beforeRouteLeave'),
            // 全局钩子 beforeEach
            router.beforeHooks,
            // 组件重用钩子 beforeRouterUpdate
            _this.extractGuards(updated,'beforeRouteUpdate'),
            // 激活组件路由配置的导航守卫 beforeEnter
           
            // 激活组件钩子 beforeRouterEnter
            /** TODO  组件通常使用懒加载引入 */
            _this.extractGuards(activated,'beforeRouteEnter'),
        )
        
        // 执行收集到的导航钩子
        _this.runQueue(queue,(hookFn,next)=>{
            /**
             * 定义导航守卫函数 to from next
             */
            hookFn(route,current,()=>{
                next()
            })
        },()=>{
            let fullPath = route.path
            let path = route
            while(path.parent){
                fullPath = path.parent.path + fullPath
                path = path.parent
            }
            onComplete && onComplete(fullPath)

            // 更新路由
            router.current = route
        })
        
    }

    /**
     * 路由跳转时，获取激活组件、失活组件、更新组件
     */
    resolveQueue(current,next){
        let i = 0
        const max = Math.max(current.length,next.length)
        for(i;i<max;i++){
            if(current[i] !== next[i]){
                break
            }
        }
       
        return {
            // 可复用，更新的组件
            updated:next.slice(0,i),
            // 需要激活的组件
            activated:next.slice(i),
            // 失活的组件
            deactivated:current.slice(i)
        }
    }

    getRegularPath(path){
        return path.indexOf('/')<0?`/${path}`:path
    }
    /**
     * 提取导航守卫
     */
    extractGuards(records,name){
        const guards = records.map(m => {
            return Object.keys(m.component).map(key => m.component[key][name])
        })

        return [].concat(...guards)
    }
    /**
     * 执行导航钩子
     */
    runQueue(queue,fn,onComplete){
        const step = (i)=>{
            if(i>queue.length){
                onComplete && onComplete()
            }else{
                if(queue[i]){
                    fn(queue[i],()=>{
                        step(i+1)
                    })
                } else {
                    step(i+1)
                }
            }
        }
        step(0)
    }

}

export default new Utils()