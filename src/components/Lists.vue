<template>
<div class="all lists">
	<headers></headers>
	<containers></containers>
	<navbar></navbar>
</div>
</template>

<script>
import Headers  from './lists/Header.vue'
import Containers  from './lists/Container.vue'
import Navbar  from './Nav.vue'

export default {
  name: 'lists',
  components: {
  	   Headers,
  	   Containers,
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
.lists{
	display: flex;
	flex: 1;
	flex-direction: column;
	background: #eee;	
}

</style>
