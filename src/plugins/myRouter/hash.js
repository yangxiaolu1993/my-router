
export default class Hash {
    constructor(router){
        this.router = router
    }
    init(){
     
        // 监听 hash 值改变
        window.addEventListener('hashchange', this.handleHashChange.bind(this))
    }
    handleHashChange(){

        let path = location.hash.slice(1)       
        let route = this.router.routesMap.pathMap[path]
       
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
        window.location.href = this.getUrl(params.name)
    }

    replace(params){
        window.location.replace(this.getUrl(params.name))
    }

    go(n){
        window.history.go(n)
    }
    // 获取当前路由
    getUrl(path){
        const fullPath = window.location.href
        const pos = fullPath.indexOf('#')
        const p = pos > 0?fullPath.slice(0,pos):fullPath

        return `${p}#/${path}`
    }

    
}