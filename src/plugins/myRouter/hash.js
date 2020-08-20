import Utils from './utils'
export default class Hash {
    constructor(router){
        this.router = router
    }
    init(){

        this.createRoute()
        
        // 监听 hash 值改变
        window.addEventListener('hashchange', this.handleHashChange.bind(this))
    }
    handleHashChange(){
        
        this.createRoute()
    }

    createRoute(){
       
        let path = location.hash.slice(1)?location.hash.slice(1):'/'
     
        let route = this.router.routesMap.pathMap[path]
      

        // 匹配路由 path = '/my/:userId'
        if(!route){
            const routeMap = this.router.routesMap.pathMap
            for(let key in routeMap){
                if(routeMap[key].regex && routeMap[key].regex.exec(path)) route = routeMap[key]
            }
        }
        
        // 更新路由
        this.router.current = {
            name: route.name || '',
            meta: route.meta || {},
            path: route.path || '/',
            hash: route.hash || '',
            query:location.query || {},
            params: location.params || {},
            fullPath: location.href,
            component: route.component
        }  
    }
    push(params){
        
        history.pushState(null, '', this.getPath(params))
        this.handleHashChange() 
    }
    replace(params){
        window.location.replace(this.getUrl(params))
    }

    go(n){
        window.history.go(n)
    }
    // 获取当前路由
    getUrl(params){

        let path = ''
        if(Utils.getProperty(params) == 'string'){
            path = params
        } else if(params.name || params.path){
            path = params.name?params.name:params.path
        }

        const fullPath = window.location.href
        const pos = fullPath.indexOf('#')
        const p = pos > 0?fullPath.slice(0,pos):fullPath

        return `${p}#/${path}`
    }

    getPath(params){
        
        let path = ''
        if(params.name){
            path = '#'+this.router.routesMap.nameMap[params.name].path
            
        }else{
            path = Utils.getProperty(params) == 'String'?params:params.path
        }

        return path
    }

    
}