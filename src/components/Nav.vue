<template>
<div id="nav" class="footer">
	<router-link to="/" exact class="n_one">首页</router-link>
	<router-link to="/lists" exact class="n_two">分类</router-link>
	<router-link to="/share" exact class="n_three">分享购</router-link>
	<router-link to="/dingdan" exact class="n_four">购物车</router-link>
	<router-link to="/wode" exact class="n_five">我的</router-link>
</div>
</template>

<script>
export default {
  name: 'nav',
  data : function () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	border-top: 1px solid #ccc;
	height: 1.5rem;
	background: #eee;
	display: flex;
	font-size: 12px;
	justify-content: space-around;
	position: relative;
	z-index: 999;
}
.footer a{
	color: black;
}

.footer .router-link-active{
	color: blue;
}
.footer a{
	box-sizing: border-box;
	display: inline-block;
	padding-top: .4rem;
	width: 2rem;
	text-align: center;
}
.n_one{
	background: url("../assets/nav/shouye.png") no-repeat center 0.1rem;
	background-size: 0.8rem 0.8rem;
}
.n_two{
	background: url("../assets/nav/fenlei.png") no-repeat center 0.1rem;
	background-size: 0.8rem 0.8rem;
}
.n_three{
	background: url("../assets/nav/fenxiang.png") no-repeat center 0.1rem;
	background-size: 0.8rem 0.8rem;
}
.n_four{
	background: url("../assets/nav/car.png") no-repeat center 0.1rem;
	background-size: 0.8rem 0.8rem;
}
.n_five{
	background: url("../assets/nav/wode.png") no-repeat center 0.1rem;
	background-size: 0.8rem 0.8rem;
}
</style>
