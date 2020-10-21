import HashRouter from './hash'
import HistoryRouter from './history'
import Utils from './utils'

class MyRouter {
    constructor(options){
        this.routes = options.routes || []
        this.mode = options.mode || 'hash' // 模式 hash || history
        this.routesMap = Utils.createMap(this.routes)
        this.beforeHooks = [] // 全局导航守卫 before
        this.afterHooks = [] // 全局导航守卫 after
        this.history = null  
        this.current= {
            name: '',
            meta: {},
            path: '/',
            // hash: '',
            // query:{},
            // params: {},
            fullPath: '',
            component:null,
            matchAs:undefined,
            matched:[],
            parent:undefined
        } // 记录当前路由
        switch (options.mode) {
            case 'hash':
                this.history = new HashRouter(this)
                break
            case 'history':
                this.history = new HistoryRouter(this)
                break
            default:
                this.history = new HashRouter(this)
        }
    }

    init(){
        this.history.init()
        console.log(this.routesMap)
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
     * 全局路由导航 brefore
     */
    beforeEach(fn){
        this.beforeHooks.push(fn)
    }
    /**
     * 全局路由导航 after
     */
    afterEach(fn){
        this.afterHooks.push(fn)
    }

}

export default MyRouter