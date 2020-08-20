export default {
    name: 'MyRouterView',
    functional: true,
    render: (createElement, {props, children, parent, data}) => {
        let path = ''
        let temp = ''
        console.log(parent.$myRouter)
        if(parent.$myRouter){
            switch (parent.$myRouter.mode){
                case 'hash':
                    path = location.hash.slice(1)
                case 'history':
                    // path = 
            }

            parent.$myRouter.routes.forEach(route=>{
                if(route.path == path) temp = route.component
            })
        }
        return createElement(temp)
    }
}