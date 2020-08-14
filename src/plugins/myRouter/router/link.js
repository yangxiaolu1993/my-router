import Utils from '../utils'

export default {
    name: 'MyRouterLink',
    functional: true,
    props: {
        to: {
            type: [String, Object],
            required: true
        }
    },
    render: (createElement, context) => {
        let toRoute = '#/'

        if(Utils.getProperty(context.props.to) == 'String'){

            toRoute = `#/${context.props.to}`

        } else {

            let current = context.props.to.name
            let currentRouter = context.parent._myRouter.routes.filter(item=>{ 
                return item.name == current
            })
            let routeParams = context.props.to.params

            if(routeParams){
                for(let key in routeParams){
                    if(currentRouter[0].path.indexOf(key) != -1){
                        var reg = new RegExp(`:${key}`)
                        currentRouter[0].path = currentRouter[0].path.replace(reg, routeParams[key])
                    }
                }
                
                toRoute = `#${currentRouter[0].path}`
            } 
        }
        return createElement('a',{
            attrs: {
                href: toRoute
            }
        },context.children)
    }
};



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