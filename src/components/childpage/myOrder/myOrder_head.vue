<template>
	<div class="all Detail">
		<div id="myOrder_head">		
			<router-link to="/dingdan">
				<img src="static/detail/new-back.png" class="return" />
			</router-link>
			<span class="carH">我的订单</span>
			<img src="static/detail/ico-menu.png" @click="showmenu()" class="menu" />
		</div>
		<div id="con">
			<div class="menu1" v-show="menu">
				<router-link to="/">首页</router-link>
				<router-link to="/lists">分类</router-link>
				<router-link to="/dingdan">购物车</router-link>
				<router-link to="/wode">我的</router-link>
			</div>
			<!-- 这一部分需要四个列表，然后对应的显示不同的内容 -->
			<mt-navbar v-model="selected" class="lists" style="font-size:18px">
			  <mt-tab-item id="1" class="lists_select">全部订单</mt-tab-item>
			  <mt-tab-item id="2" class="lists_select">待付款</mt-tab-item>
			  <mt-tab-item id="3" class="lists_select">已完成</mt-tab-item>
			  <mt-tab-item id="4" class="lists_select">售后记录</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div v-for="n in 2" :title="'内容 ' + n" >
						<div class="shop">
							<div class="title">
								<p class="creat_time fl">下单时间:2017-06-30</p>
								<!-- 这里输入订单状态 -->
								<span class="fr state">已取消</span>
							</div>
							<!-- 这里是图片和描述 -->
							<div class="div_img">
								<span class="fl">
									<a href="">
										<img src="http://i2.ygimg.cn/pics/converse/2016/100368752/100368752_01_m.jpg?4">
									</a>
								</span>
								<section class="fl">
									<p>这里是对产品的描述</p>
								</section>
							</div>
							<div class="footers">
								<div class="fl">总计：
									<span class="price">￥262元</span>
									（共 <span class="count">1件</span>）
								</div>
								<div class="footer_fr fr">
									<a href="">重新购买</a>
								</div>
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>

				<mt-tab-container-item id="2">
					<div v-for="n in 2" :title="'内容 ' + n" >
						<div class="shop">
							<div class="title">
								<p class="creat_time fl">下单时间:2017-06-30</p>
								<!-- 这里输入订单状态 -->
								<span class="fr state">代付款</span>
							</div>
							<!-- 这里是图片和描述 -->
							<div class="div_img">
								<span class="fl">
									<a href="">
										<img src="">
									</a>
								</span>
								<section class="fl">
									<p>这里是对产品的描述</p>
								</section>
							</div>
							<div class="footers">
								<div class="fl">总计：
									<span class="price">￥262元</span>
									（共 <span class="count">1件</span>）
								</div>
								<div class="footer_fr fr">
									<a href="">重新购买</a>
								</div>
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>

				<mt-tab-container-item id="3">
					<div v-for="n in 2" :title="'内容 ' + n" >
						<div class="shop">
							<div class="title">
								<p class="creat_time fl">下单时间:2017-06-30</p>
								<!-- 这里输入订单状态 -->
								<span class="fr state">交易成功</span>
							</div>
							<!-- 这里是图片和描述 -->
							<div class="div_img">
								<span class="fl">
									<a href="">
										<img src="">
									</a>
								</span>
								<section class="fl">
									<p>这里是对产品的描述</p>
								</section>
							</div>
							<div class="footers">
								<div class="fl">总计：
									<span class="price">￥262元</span>
									（共 <span class="count">1件</span>）
								</div>
								<div class="footer_fr fr">
									<a href="">重新购买</a>
								</div>
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>

			   
				<mt-tab-container-item id="4">
					<div v-for="n in 2" :title="'内容 ' + n" >
						<div class="shop">
							<div class="title">
								<p class="creat_time fl">下单时间:2017-06-30</p>
								<!-- 这里输入订单状态 -->
								<span class="fr state">售后记录</span>
							</div>
							<!-- 这里是图片和描述 -->
							<div class="div_img">
								<span class="fl">
									<a href="">
										<img src="">
									</a>
								</span>
								<section class="fl">
									<p>这里是对产品的描述</p>
								</section>
							</div>
							<div class="footers">
								<div class="fl">总计：
									<span class="price">￥262元</span>
									（共 <span class="count">1件</span>）
								</div>
								<div class="footer_fr fr">
									<a href="">重新购买</a>
								</div>
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>
			</mt-tab-container>

			<!-- 这里写入一个div包含两个p标签字体颜色#666 -->
			<div class="sixrecords">
				<p>仅显示六个月内的消息</p>
				<p>历史信息请到电脑端查看</p>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import { Navbar, Cell,TabItem , TabContainer, TabContainerItem} from 'mint-ui';
import Vue from 'vue';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  name: 'myOrder_head',
  components: {

  },
  data () {
    return {
    	selected:'1',
    	menu: false,
    }
  },
  methods: {
  	showmenu: function(){
  		this.menu = !this.menu;
  	},
  	lists_select: function (){
		console.log('准备发送ajax进行链表查询返回订单信息');		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fl{
	float:left;
}
.fr{
	float:right;
}
ul,ol{
	list-style: none;
}
#myOrder_head{
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
	.lists{
		height:1rem;
		line-height: 1rem;
		font-size: 18px;
		vertical-align: middle;
		text-align: center;

		.lists_select{
			border-bottom: 3px solid #ccc;
			margin: 0;
		}

	}
	.lists_select.is-selected{
		color: red;
		border-bottom: 3px solid red;
		margin: 0;
	}
	.shop{
		width:100%;
		// height:3rem;
		background:#fff;
		margin-bottom: 0.3rem; 
		.title{
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			padding: 0 0.2rem;
			border-bottom: 1px solid #ccc; 
			.creat_time{
				// background:green;
			}
			.state{
				// background: green;
			}
		}
		.div_img{
			width:100%;
			height: 3rem;
			padding:0.5rem 0.2rem;
			// background:yellow;
			border-bottom: 1px solid #ccc; 
			span.fl{
				a{
					img{
						width: 2rem;
						height: 2rem;
					}
					padding-right:1rem;
				}
			}
		}
		.footers{
			height: 1rem;
			line-height: 1rem;
			font-size: 12px;
			color: #666;
			padding: 0 0.2rem;
			.price{
				font-weight: bolder;
				font-size: 14px;
			}
			.footer_fr{
				a{
					border:1px solid red;
					color: red;
					padding:0.2rem;
				}
			}

		}

	}
	.sixrecords{
		width: 100%;
		// height: 3rem;
		font-size: 12px;
		color: #666;
		text-align: center;
		margin-top: 1rem;

		p{
			height: 0.5rem;
		}
	}

}

</style>
