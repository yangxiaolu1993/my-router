export default {
    name: 'MyRouterView',
    functional: true,
    render: (createElement, {props, children, parent, data}) => {
        console.log(parent)
        let temp = parent.$myRoute?parent.$myRoute.component:''
        return createElement(temp)
    }
};


// Vue.component("MyRouterView",{
//     render(h){
        
//         let currentRoute = this._self._myRouter.current
//         let routesMap = this._self._myRouter.routesMap
//         return h(routesMap[currentRoute])
//     }
// })