<template>
<div class="all Dingdan">
	<div id="header">
		<span class="carH">购物车</span><router-link to="/wode">登录</router-link>
	</div>
	<div id="con">
		<img src="static/car/car.png"/>
		<p>购物车是空的!</p>
		<router-link to="/detail">去详情页（测试）</router-link>
	</div>
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
<style scoped lang="scss">
#header{
	height: 1rem;
	line-height: 1rem;
	background: #f5f5f5;
	text-align: center;
	overflow: hidden;
	font-size: 18px;
	position: relative;
	a{
		position: absolute;
		right: .4rem;
		font-size: 12px;
		color: #666;
	}
}
#con{
	background: #eee;
	text-align: center;
	img{
		width: 2.5rem;
		height: 2rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}
}

</style>
