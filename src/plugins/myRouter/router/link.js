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
        
        let toRoute = parent.$myRouter.mode == 'hash'?`#/`:``
        
        if( props.to.name ){
            let current = props.to.name
            toRoute += parent._myRouter.routesMap.nameMap[current].path
        } else {
            toRoute += Utils.getProperty(props.to) == 'String'?props.to:props.to.path
        }

        let on = {'click':guardEvent} // 触发导航的事件 a 标签阻止跳转
            
        on[props.event] = e=>{
            guardEvent(e)
            parent.$myRouter.push(props.to)
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