import Utils from '../utils'

export default {
    name: 'MyRouterLink',
    functional: true,
    props: {
        to: {
            type: [String, Object],
            required: true
        },
        tag:{
            type: String,
            default: 'a'
        },
        event: {
            type: String,
            default: 'click'
        }
    },
    render: (createElement, {props,parent,children}) => {
        
        let toRoute = parent.$myRouter.mode == 'hash'?`#`:``

        if(Utils.getProperty(props.to) == 'String'){
            toRoute += `/${props.to}`
        } else {
            let current = props.to.name
            let currentRouter = parent._myRouter.routes.filter(item=>{ 
                return item.name == current
            })
            let routeParams = props.to.params

            if(routeParams){
                for(let key in routeParams){
                    if(currentRouter[0].path.indexOf(key) != -1){
                        var reg = new RegExp(`:${key}`)
                        currentRouter[0].path = currentRouter[0].path.replace(reg, routeParams[key])
                    }
                }
                
                toRoute += `${currentRouter[0].path}`
            } 
        }

        let on = {'click':guardEvent} // 触发导航的事件 a 标签阻止跳转
            
        on[props.event] = e=>{
            guardEvent(e)
            parent.$myRouter.push(toRoute)
        }

        return createElement(props.tag,{
            attrs: {
                href: toRoute
            },
            on,
        },children)
    }
};

function guardEvent(e){
    if (e.preventDefault) {
        e.preventDefault()
    }
}


// template 形式
// Vue.component(MyRouterLink.name, {
//     functional: true,
//     attrs: {
//         to: {
//             type: String,
//             required: true
//         }
//     },
//     render(createElement, { data, children }) {
//         data.attrs.to = `#/${data.attrs.to}`
//         return createElement( MyRouterLinkT, data, children );
//     }
// })