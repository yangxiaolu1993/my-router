class MyRouter {
    constructor(options){
        this.routes = options.routes || []
        this.routesMap = this.createMap(this.routes)
        this.current= null // 记录当前路由
        this.init()
    }

    createMap(routes){
        return routes.reduce((pre,current)=>{
            pre[current.path] = current.component
            return pre;
        },{})
    }

    init(){
        // hash值改变
        window.addEventListener('hashchange', ()=>{
            
            this.current = location.hash.slice(1)
        })

        // 路由 初始化
        window.addEventListener('DOMContentLoaded', ()=>{
            
            //如果不存在hash值，那么重定向到#/
            if(!location.hash){
                this.current = "#/"
            }else{
                console.log(location.hash.slice(1))
                //如果存在hash值，那就渲染对应UI
                this.current = location.hash.slice(1)
            }
        })
    }

    push(params){
        console.log(params)
        window.location.href = this.getUrl(params.name)
    }

    replace(params){
        window.location.replace(this.getUrl(params.name))
    }

    go(n){
        window.history.go(n)
    }

    getUrl(path){
        const fullPath = window.location.href
        const pos = fullPath.indexOf('#')
        const p = pos > 0?fullPath.slice(0,pos):fullPath

        return `${p}#/${path}`
    }
}

export default MyRouter