<template>
<div class="all Shouye">
  <Shouye_head></Shouye_head>
	<div id="con">

	</div>
	<navbar></navbar>
</div>
</template>

<script>

  import Navbar  from './Nav.vue'
  import Shouye_head  from './shouye/shouye_head.vue'
export default {
  name: 'shouye',
  components: {
       Navbar,
       Shouye_head
  },
  data () {
    return {

    }
  },
  methods :{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  span,a{
    display:block;
  }
</style>
