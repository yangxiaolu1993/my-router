<!-- 
<template functional>
  <a v-bind="data.attrs"><slot/></a>
</template>
-->

<template>
  <a :href="getUrl"><slot/></a>
</template>

<script>
export default {
  name: 'MyRouterLink',
  props:['to'],
  data () {
    return {}
  },
  computed: {
    getUrl: function () {
      return this.$props.to
    }
  }
}
</script>


