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
     * @param {*} routes 
     */
    createMap(routes){

        let nameMap = {} // 以每个路由的名称创建 key value map
        let pathMap = {} // 以每个路由的路径创建 key value map

        routes.forEach((route)=>{
            
            let regex = route.path == '*'?'':pathToRegexp(route.path)
            
            let record = {
                path:route.path || '/',
                component:route.component,
                meta:route.meta || {},
                name:route.name || '',
                regex:regex // 正则表达式匹配，用于hash路由 :userId 匹配
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

export default new Utils()