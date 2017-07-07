<template>
<div class="all Lists">
	<div id="header">
		列表页
	</div>
	<div id="con"></div>
	<navbar></navbar>
</div>
</template>

<script>
import Navbar  from './Nav.vue'
export default {
  name: 'lists',
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
