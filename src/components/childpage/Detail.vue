<template>
<div class="all Detail">
	<div id="header">
		<router-link to="/dingdan"><img src="static/detail/new-back.png" class="return" /></router-link><span class="carH">商品详情</span>
		<img src="static/detail/ico-menu.png" @click="showmenu()" class="menu" />
	</div>
	<div id="con">
		<div class="menu1" v-show="menu">
			<router-link to="/">首页</router-link>
			<router-link to="/lists">分类</router-link>
			<router-link to="/dingdan">购物车</router-link>
			<router-link to="/wode">我的</router-link>
		</div>
		<mt-swipe :auto="0" class="swiper">
		  <mt-swipe-item>
		  	<img src="static/detail/pic_001.jpg" class="lunbo" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/detail/pic_002.jpg" class="lunbo" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/detail/pic_003.jpg" class="lunbo" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/detail/pic_004.jpg" class="lunbo" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/detail/pic_005.jpg" class="lunbo" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/detail/pic_006.jpg" class="lunbo" />
		  </mt-swipe-item>
		</mt-swipe>
		<div class="name">
			<p class="name_p l">adidas阿迪三叶草2017年新款中性三叶草系列休闲鞋BY3715</p>
			<p class="r">分享</p>
		</div>
		<p class="price">
			<span class="s1">￥679</span>
			<span class="s2">￥769</span>
			<span class="r">可用优惠券</span>
		</p>
		<p class="ytime">
			限时优惠： 3天，亲们快来抢购吧
		</p>
		<p class="chima">
			选择：颜色/尺码
			<img src="static/detail/open.png" class="r"/>
		</p>
		<p class="chima">
			评价（0）
			<img src="static/detail/open.png" class="r"/>
		</p>
		<p class="chima">
			<img src="static/detail/pic_015.jpg" class="l"/>
			<span>品牌：阿迪休闲</span>
			<span>发货：百丽优购</span>
			<img src="static/detail/open.png" class="r"/>
		</p>
		<p class="chima">
			选择此商品的人还买了
			<img src="static/detail/open.png" class="r"/>
		</p>
		<div class="pro_o">
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
			<div class="pro_list">
				<img src="static/detail/pic_039.jpg"/>
				<p class="pro_name">阿迪达斯运动鞋</p>
				<p class="pro_price">￥355</p>
			</div>
		</div>
		<div class="imgo">
			<p class="top">
				图文详情
			</p>
			<img src="static/detail/pic_031.jpg"/>
			<img src="static/detail/pic_032.jpg"/>
			<img src="static/detail/pic_033.jpg"/>
			<img src="static/detail/pic_034.jpg"/>
			<img src="static/detail/pic_035.jpg"/>
			<img src="static/detail/pic_036.jpg"/>
			<img src="static/detail/pic_037.jpg"/>
		</div>
	</div>
	<div id="foot">
		<span class="one l">收藏</span>
		<router-link to="/dingdan" class="two l">购物车</router-link>
		<span class="three l">加入购物车</span>
		<span class="four l">立即购买</span>
	</div>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'detail',
  components: {

  },
  data () {
    return {
    	menu: false
    }
  },
  methods: {
  	showmenu: function(){
  		this.menu = !this.menu;
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
	border-bottom: 1px solid #ccc;
	.return{
		height: 0.6rem;
		position: absolute;
		left: 0.2rem;
		top: 0.2rem;
	}
	.menu{
		height: 0.5rem;
		position: absolute;
		right: 0.2rem;
		top: 0.2rem;
	}
}
#con{
	background: #f5f5f5;
	.menu1{
		height: 1rem;
		line-height: 1rem;
		background: #333;
		display: flex;
		justify-content: space-around;
		margin-bottom: 0.1rem;
		a{
			color: #fff;
		}
	}
	p{
		background: #fff;
	}
	.swiper{
		height: 7rem;
		width: 8rem;
		margin-left: 1rem;
		overflow: hidden;
		background: #f5f5f5;
		text-align: center;
		img{
			height: 100%;
		}
	}
	.name{
		height: 1rem;
		line-height: 0.5rem;
		color: #666666;
		font-size: 12px;
		margin-top: 0.5rem;
		background: #fff;
		.name_p{
			height: 1rem;
			display: inline-block;
			width: 8.5rem;
			padding: 0 0.5rem;
			font-size: 14px;
			border-right: 1px solid #ccc;
		}
		.r{
			width: 1.4rem;
			display: inline-block;
			height: 1rem;
			background: url(../../assets/detail/share.png) no-repeat center top;
			background-size: 0.6rem;
			text-align: center;
			padding-top: 0.5rem;
		}
	}
	.price{
		height: 1rem;
		line-height: 1rem;
		margin-top: 0.5rem;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		.s1{
			font-size: 30px;
			color: #FF0000;
			margin-left: 0.5rem;
		}
		.s2{
			font-size: 14px;
			color: #666;
			margin-left: 0.5rem;
			text-decoration: line-through;
		}
		.r{
			color: #666;
			font-size: 12px;
			padding-right: 0.3rem;
			margin-top: 0.3rem;
		}
	}
	.ytime{
		height: 1rem;
		color: #f00;
		font-size: 12px;
		line-height: 1rem;
		padding-left: 0.5rem;
	}
	.chima{
		height: 1rem;
		line-height: 1rem;
		margin: 0.2rem 0;
		padding: 0 0.3rem;
		overflow: hidden;
		img{
			height: 0.4rem;
			margin-top: 0.3rem;
		}
		span{
			font-size: 12px;
			line-height: 0.5rem;
			color: #666;
			padding-left: 0.2rem;
		}
	}
	.pro_o{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.pro_list{
			width: 3rem;
			height: 4.5rem;
			overflow: hidden;
			background: #fff;
			border:1px solid #eee;
			padding-left: 0.2rem;
			img{
				width: 100%;
			}
			.pro_name{
				height: 0.7rem;
				line-height: 0.7rem;
				font-size: 14px;
			}
			.pro_price{
				height: 0.7rem;
				line-height: 0.7rem;
				font-size: 16px;
				color: #f00;
			}
		}
	}
	.imgo{
		p{
			height: 1rem;
			line-height: 1rem;
			margin: 0.2rem 0;
			color: #000;
			font-size: 14px;
			padding-left: 0.5rem;
			border-bottom: 1px solid #ccc;
			border-top: 1px solid #ccc;
		}
		img{
			width: 9rem;
			margin-left: 0.5rem;
			margin-bottom: 0.2rem;
		}
	}
}
#foot{
	height: 1rem;
	overflow: hidden;
	span{
		display: inline-block;
		text-align: center;
	}
	.one,.two{
		width: 1.5rem;
		height: 1rem;
		font-size: 10px;
		background: url(../../assets/detail/pic_056.png) no-repeat center 0.1rem #fff;
		background-size: 0.5rem;
		padding-top: 0.5rem;
		text-align: center;
	}
	.two{
		background: url(../../assets/detail/pic_057.png) no-repeat center 0.1rem #fff;
		background-size: 0.5rem;
	}
	.three{
		width: 3.5rem;
		height: 1rem;
		background: #FFBC00;
		line-height: 1rem;
		color: #fff;
	}
	.four{
		width: 3.5rem;
		height: 1rem;
		background: #FF3300;
		line-height: 1rem;
		color: #fff;
	}
}
</style>
