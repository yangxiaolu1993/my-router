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
      }
  },
  render: (createElement, context) => {
      return createElement(context.props.tag,{
          attrs: {
              href: `/${context.props.to}`
          }
      },context.children)
  }
};
