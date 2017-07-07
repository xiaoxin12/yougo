<template>
<div class="all Dingdan">
	<div id="header">
		订单
	</div>
	<div id="con"></div>
	<navbar></navbar>
</div>
</template>

<script>
import Navbar  from './Nav.vue'
export default {
  name: 'dingdan',
  components: {
       Navbar 
  },
  data () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
	height: 1.5rem;
	line-height: 1.5rem;
	background: #0096FF;
	position: relative;
	text-align: center;
	overflow: hidden;
}

</style>
