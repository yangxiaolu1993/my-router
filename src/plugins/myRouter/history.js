import Utils from './utils'
export default class HistoryRouter {
    constructor(router){
        this.router = router
    }

    init(){
        
        // 路由改变
        window.addEventListener('popstate', ()=>{
            this.createRoute(this.getLocation())
        })
    }
    createRoute(params){
        // console.log(params)
        let route = {}
        if(params.name){
            route = this.router.routesMap.nameMap[params.name]
        }else{
            let path = this.getRegularPath(Utils.getProperty(params) == 'String'?params:params.path)
            route = this.router.routesMap.pathMap[path]
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
            component: route.components
        }  

    }

    push(params){
        // history.pushState(null, '', this.getPath(params))
        // this.createRoute(params)
        Utils.transitionTo(this.router,this.getPath(params),route=>{  
            history.pushState(null, '', route)
        })
    }
    replace(params){
        history.replaceState(null, '', this.getPath(params))
        this.createRoute(params)
    }

    go(n){
        window.history.go(n)
    }

    getPath(params){
        
        let path = ''
        if(params.name){
            path = this.router.routesMap.nameMap[params.name].path
        }else{
            path = this.getRegularPath(Utils.getProperty(params) == 'String'?params:params.path)
        }

        return path
    }

    getLocation () {
        let path = decodeURI(window.location.pathname)
        return (path || '/') + window.location.search + window.location.hash
    }

    getRegularPath(path){
        return path.indexOf('/')<0?`/${path}`:path
    }
}