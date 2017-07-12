<template>
	<div id="listPage">
		<div id="header">
			<div class="listPage" v-show="$store.state.lists_container">
				<div class="arrow">
					<a href="/"><img src="static/lists/nvxie/new-back.png"></img>
					</a>
				</div>
				<div class="search">
					<form action="">
						<input type="text" placeholder="请输入关键字" />
					</form>
					<a href=""> <img src="static/lists/nvxie/ygseach.png" alt="" /></a>
				</div>
				<div class="menu" >
					<img src="static/lists/nvxie/ico-menu.png" alt=""  @click="isShow()"/>
				</div>
			</div>
		</div>
		<Navbar v-show="flage"></Navbar>
		<div class="order">
			<ul class="searchOrder">
				<li v-for="(item,index) in orderData" @click="changeIndex(index)" :class="{changeColor : index==currentIndex}">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="ulW">
			<div class="search_list">
				<ul>
					<li v-for="items in search">
						<dl>
							<dt><a href="" class="aaa"><img :src="items.list_src"></a></dt>
							<dd>
								<a href="" class="aaa title">
									<p>销量：{{items.salecount}}</p>
									<span>{{items.bewrite}}</span>
								</a>
								<div class="price">
									<span>￥{{items.price}}</span>
									<a href="" class="aaa"><i class="iconfont downcc">&#xe66c;</i></a>
								</div>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import Navbar from '../Nav.vue'
	export default {
		name: 'listpage',
		data: function() {
			return {
				search: [],
				flage: false,
				orderData: [
					"综合",
					"销量",
					"价格",
					"新品",
					"筛选"
				],
				currentIndex: 0,
				flag:false
			}
		},
		components: {
			Navbar
		},
		mounted: function() {
			this.listData();
		},
		methods: {
			listData: function() {
				this.$http.get('/api/lis/select1')
					.then(function(res) {
						var len = res.body.length;
						this.search=[]
						for(var i = 0; i < len; i++) {
							if(res.body[i].list_class == "nvxie"||res.body[i].list_class == "nanxie") {
								if(res.body[i].list_class_1 !== "热门品牌") {
									this.search.push(res.body[i])
								}
							}
						}
						
					})
			},
			isShow: function() {
				this.flage = !this.flage
			},
			changeIndex(index){
				this.search=[]
				this.currentIndex = index
				if(index==0){
					this.listData()
				}else if(index == 1){
					this.search=[];
					this.$http.get('/api/lis/select3')
					.then(function(res){
						var len = res.body.length;
						for(var i = 0; i < len; i++) {
							if(res.body[i].list_class == "nvxie"||res.body[i].list_class == "nanxie") {
								if(res.body[i].list_class_1 !== "热门品牌") {
									this.search.push(res.body[i])
								}
							}
						}
						
					})
				}else if(index == 2){
					this.search=[];
					this.$http.get('/api/lis/select4')
					.then(function(res) {
						var len = res.body.length;
						for(var i = 0; i < len; i++) {
							if(res.body[i].list_class == "nvxie"||res.body[i].list_class == "nanxie") {
								if(res.body[i].list_class_1 !== "热门品牌") {
									this.search.push(res.body[i])
								}
							}
						}
						
					})
				}else if(index == 3){
					this.search=[];
					this.$http.get('/api/lis/select4')
					.then(function(res) {
						var len = res.body.length;
						for(var i = 0; i < len; i++) {
							if(res.body[i].list_class == "nvxie"||res.body[i].list_class == "nanxie") {
								if(res.body[i].list_class_1 !== "热门品牌") {
									this.search.push(res.body[i])
								}
							}
						}
						
					})
				}
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$ui-width:750px;
	@function pr($px) {
		@return $px/$ui-width*7.5rem
	}
	@font-face {
  font-family: 'iconfont';
  src: url('./../../../static/iconfont/iconfont.eot');
  src: url('./../../../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./../../../static/iconfont/iconfont.woff') format('woff'),
  url('./../../../static/iconfont/iconfont.ttf') format('truetype'),
  url('./../../../static/iconfont/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
	
	#header {
		height: 1.60rem;
		line-height: 1.60rem;
		background: #f8f8f8;
		position: relative;
		text-align: center;
		.listPage {
			.arrow {
				height: 1.5rem;
				width: 1rem;
				float: left;
				img {
					width: pr(40px);
					height: pr(70px);
					margin-top: pr(40px);
				}
			}
			.search {
				width: pr(750px);
				height: pr(80px);
				float: left;
				position: relative;
				margin-left: pr(20px);
				form {
					input {
						width: pr(750px);
						height: pr(80px);
						text-indent: 2em;
						border: none;
					}
					;
				}
				a {
					position: absolute;
					top: 5px;
					right: 10px;
					img {
						width: pr(50px);
						height: pr(45px);
					}
				}
			}
			.menu {
				margin-left: pr(20px);
				float: left;
				img {
					margin-top: pr(45px);
					width: pr(72px);
					height: pr(60px);
				}
			}
		}
	}
	
	.ulW {
		width: 100%;
		height: 100%;
		padding-top: 10px;
		background: #fff;
		 .search_list li:nth-child(2n){
		    float: right;
		  }
		 .search_list li:nth-child(2n+1){
		    float: left;
		  }
		.search_list {
			li {
				  float: left;
				width: 50%;
				padding-left: 10px;
				height: px2rem(600px);
				background: #fff;
				box-sizing: border-box;
				margin-bottom: px2rem(18px);
				overflow: hidden;
				position: relative;
				padding-top: 20px;
				border: 1px solid #ccc;
				dt {
					width: 100%;
					height: px2rem(368px);
					overflow: hidden;
					position: relative;
					img {
						height: px2rem(368px);
					}
				}
				dd {
					.title {
						margin-bottom: px2rem(6px);
						color: #39383b;
						box-sizing: border-box;
						padding-left: px2rem(14px);
						padding-right: px2rem(14px);
						height: px2rem(110px);
						p {
							display: block;
							color: #252525;
							font-size: 16px;
							line-height: 100%;
							padding-top: px2rem(16px);
							padding-bottom: px2rem(8px);
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							color: #f60;
							
						}
						span {
							font-size: 14px;
							height: px2rem(50px);
							line-height: px2rem(30px);
							overflow: hidden;
							text-overflow: ellipsis;
							word-break: break-all;
							word-wrap: break-word;
							color: #000;
							display: inline-block;
							line-height: 22px;
							padding-top: 5px;
						}
					}
					.price {
						box-sizing: border-box;
						padding-right: px2rem(14px);
						padding-left: px2rem(14px);
						height: px2rem(68px);
						position: relative;
						span {
							height: px2rem(68px);
							width: 75%;
							display: block;
							float: left;
							font-size: 16px;
							color: #ff4a30;
							line-height: px2rem(68px);
						}
						a {
							width: px2rem(42px);
							height: px2rem(60px);
							float: left;
							font-size: 16px;
							
							padding-right: px2rem(14px);
							padding-left: px2rem(14px);
							text-align: center;
							line-height: px2rem(60px);
							color: #ffbc00;
							/*border-radius: 3px;
							border: 1px solid #e0e0e0;*/
						}
					}
				}
			}
		}
	}
	
	.order {
		font-size: 12px;
		line-height: 42px;
		height: 42px;
		border-bottom: 1px solid #ccc;
		.searchOrder {
			width: 100%;
			display: flex;
			justify-content: space-around;
			float: left;
			li {
				justify-content: space-around;
				align-items: center;
				float: left;
				color: #000;
				font-size: 16px;
			}
			.changeColor {
				color: #f60;
			}
		}
	}
	
	#nav {
		float: left;
		border: none;
	}
</style>