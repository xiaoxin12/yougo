<template>
<div class="all Shouye">
	<div id="header">
		首页
	</div>	
	<div id="con">
		
	</div>
	<navbar></navbar>
</div>
</template>

<script>
	
import Navbar  from './Nav.vue'
export default {
  name: 'shouye',
  components: {
       Navbar 
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
#header{
	height: 1.5rem;
	line-height: 1.5rem;
	background: #0096FF;
	position: relative;
	text-align: center;
	overflow: hidden;
}
</style>
