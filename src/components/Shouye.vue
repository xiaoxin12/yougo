<template>
<div class="all Shouye">
  <Shouye_head></Shouye_head>
	<div id="con">
    <shouye_swiper></shouye_swiper>
    <Shouye_bgred></Shouye_bgred>
    <Shouye_repeat></Shouye_repeat>
	</div>
	<navbar></navbar>
</div>
</template>

<script>

  import Navbar  from './Nav.vue'
  import Shouye_head  from './shouye/shouye_head.vue'
  import Shouye_swiper  from './shouye/Shouye_swiper.vue'
  import Shouye_bgred  from './shouye/Shouye_bgred.vue'
  import Shouye_repeat  from './shouye/shouye_repeat.vue'


export default {
  name: 'shouye',
  components: {
    Navbar,
    Shouye_head,
    Shouye_swiper,
    Shouye_bgred,
    Shouye_repeat
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
