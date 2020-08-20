import Hash from './hash'
import History from './history'
import Utils from './utils'

class MyRouter {
    constructor(options){
        this.routes = options.routes || []
        this.mode = options.mode || 'hash' // 模式 hash || history
        this.routesMap = Utils.createMap(this.routes)
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
                break
            case 'history':
                this.history = new History(this)
                break
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

    
}

export default MyRouter