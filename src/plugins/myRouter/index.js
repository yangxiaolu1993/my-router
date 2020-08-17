import Hash from './hash'
import History from './history'

class MyRouter {
    constructor(options){
        this.routes = options.routes || []
        this.mode = options.mode || 'hash' // 模式 hash || history
        this.routesMap = this.createMap(this.routes)
        this.history = null
        this.current= {
            name: '',
            meta: {},
            path: '/',
            hash: '',
            query:{},
            params: {},
            fullPath: '',
            component:null
        } // 记录当前路由
        
        switch (options.mode) {
            case 'hash':
                this.history = new Hash(this)
            case 'history':
                this.history = new History(this)
            default:
                this.history = new Hash(this)
        }
    }

    init(){
        this.history.init()
    }

    push(params){
       this.history.push(params)
    }

    replace(params){
        this.history.replace(params)
    }

    go(n){
        this.history.go(n)
    }

    /**
     * 将 options.routes 的路由重新排列组合，方便之后的调用
     * @param {*} routes 
     */
    createMap(routes){

        let nameMap = {} // 以每个路由的名称创建 key value map
        let pathMap = {} // 以每个路由的路径创建 key value map

        routes.forEach((route)=>{

            let record = {
                path:route.path || '/',
                component:route.component,
                meta:route.meta || {},
                name:route.name || '',
                regex:'' // 正则表达式匹配，用于hash路由 :userId 匹配
            }

            if(route.name){
                nameMap[route.name] = record
            }

            if(route.path){
                pathMap[route.path] = record
            }
        })

        return {
            nameMap,
            pathMap
        }
    }
}

export default MyRouter