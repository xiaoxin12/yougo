<template>
	<div id="container">
		<div class="containerPage" v-show="$store.state.lists_container">
			<ul class="aside">
				<li v-for="(sort,index) in productList" @click="getTabDetail(index)" v-bind:class="{ linvxie: index==selectItem }">
					{{sort.name}}
				</li>
			</ul>
			<div class="nvxie" v-if="selectItem == 0">
				<div class="top_pic">
					<img src="static/lists/nvxie/1499061169454.jpg" alt="" />
				</div>
				<div class="title">
					<a href="#/listpage">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="(item,index) in product_1" >
							<a href="#/listpage1">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>极简实穿</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_2">
							<a href="#/detail" @click="changehref(3)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="#/detail" @click="changehref(3)">
						<p>女士单鞋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_3">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="#/detail" @click="changehref(3)">
						<p>女士靴子</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_4">
							<a href="#/detail" @click="changehref(3)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>女士凉鞋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_5">
							<a href="#/detail" @click="changehref(3)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 1">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>男士单鞋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_7">
							<a href="#/detail" @click="changehref(1)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>男士靴子</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_8">
							<a href="#/detail" @click="changehref(1)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>男士凉鞋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_9">
							<a href="#/detail" @click="changehref(1)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>鞋护理品/配饰</p>
					</a>
				</div>
				<div class="title">
					<a href="">
						<p>暂无商品</p>
					</a>
				</div>
				
			</div>
			<div class="nvxie" v-if="selectItem == 2">
				<div class="top_pic">
					<img src="static/lists/huwai/pic (121).jpg" alt="" />
				</div>
				<div class="title">
					<a href="#/listpage">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_10">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>户外鞋靴</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_11">
							<a href="#/detail" @click="changehref(1)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>户外服装</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_12">
							<a href="#/detail" @click="changehref(2)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>户外包袋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_13">
							<a href="#/detail" @click="changehref(7)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 3">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 4">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 5">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 6">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 7">
				<div class="top_pic">
					<img src="static/lists/tongxietongzhuang/1499049415458.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_15">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>童鞋</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_14">
							<a href="#/detail" @click="changehref(8)">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>童装</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_16">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="title">
					<a href="">
						<p>年龄段</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_17">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 8">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 9">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="nvxie" v-if="selectItem == 10">
				<div class="top_pic">
					<img src="static/lists/nanxie/1499061311603.jpg" alt="" />
				</div>
				<div class="title">
					<a href="">
						<p>热门品牌</p>
					</a>
				</div>
				<div class="ulW">
					<ul>
						<li v-for="item in product_6">
							<a href="">
								<img v-bind:src="item.list_src" alt="" />
								<p>{{item.list_dir}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="searchpage" v-show="!$store.state.lists_container">
			<div class="searchCon">
				<div class="hotSearch">
					热门搜索
				</div>
				<ul class="hotworld">
					<li>
						<a href="">百丽</a>
					</li>
					<li>
						<a href="">阿迪达斯</a>
					</li>
					<li>
						<a href="">耐克</a>
					</li>
					<li>
						<a href="">T恤</a>
					</li>
					<li>
						<a href="">凉鞋</a>
					</li>
					<li>
						<a href="">女鞋</a>
					</li>
					<li>
						<a href="">卫衣</a>
					</li>
					<li>
						<a href="">跑步鞋</a>
					</li>
				</ul>
				<div class="searchHistory" v-show="!$store.state.search.length==0">
					<div class="history">历史搜索</div>
					<ul>
						<li v-for="item in $store.state.search">
							<a href="">{{item}}</a>
						</li>
					</ul>
					<div class="reset" @click="reset">清楚搜索记录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Headers from './Header.vue'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'container',
		data: function() {
			return {
				selectItem: 0,
				type: "nvxie",
				isnvxie: "ture",
				productList: [],
				product_1: [],
				product_2: [],
				product_3: [],
				product_4: [],
				product_5: [],
				product_6: [],
				product_7: [],
				product_8: [],
				product_9:[],
				product_10:[],
				product_11:[],
				product_12:[],
				product_13:[],
				product_14:[],
				product_15:[],
				product_16:[],
				product_17:[]
			}
		},
		created: function() {
			this.listData();
		},
		beforeMount: function() {

		},
		mounted: function() {
			this.readyss();
		},
		methods: {
			getTabDetail(index) {
				this.selectItem = index
			
			},
			readyss: function() {
				this.$http.get('/data/lists.json')
					.then(function(res) {
						this.productList = res.data
					})
			},
			listData: function() {
				this.$http.get('/api/lis/select?list_class=nvxie&list_class_1=热门品牌')
					.then(function(res) {
						
						this.product_1 = res.data
						
					});
				this.$http.get('/api/lis/select?list_class=nvxie&list_class_1=极简实穿')
					.then(function(res) {
					
						this.product_2 = res.data
						
					});
				this.$http.get('/api/lis/select?list_class=nvxie&list_class_1=女士单鞋')
					.then(function(res) {
					
						this.product_3 = res.data
					
					});
				this.$http.get('/api/lis/select?list_class=nvxie&list_class_1=女士靴子')
					.then(function(res) {
						
						this.product_4 = res.data
						
					})
				this.$http.get('/api/lis/select?list_class=nvxie&list_class_1=女士凉鞋')
					.then(function(res) {
						
						this.product_5 = res.data
						
					})
				this.$http.get('/api/lis/select1')
					.then(function(res) {
						var len = res.body.length
						for(var i = 0;i<len;i++){
							if(res.body[i].list_class=="nanxie"){
								if(res.body[i].list_class_1=="热门品牌"){
									this.product_6.push(res.body[i])
								}else if(res.body[i].list_class_1=="男士单鞋"){
									this.product_7.push(res.body[i])
								}else if(res.body[i].list_class_1=="男士靴子"){
									this.product_8.push(res.body[i])
								}else if(res.body[i].list_class_1=="男士凉鞋"){
									this.product_9.push(res.body[i])
								}
							}else if(res.body[i].list_class=="huwai"){
								if(res.body[i].list_class_1=="热门品牌"){
									this.product_10.push(res.body[i])
								}else if(res.body[i].list_class_1=="户外鞋靴"){
									this.product_11.push(res.body[i])
								}else if(res.body[i].list_class_1=="户外服装"){
									this.product_12.push(res.body[i])
								}else if(res.body[i].list_class_1=="户外包袋"){
									this.product_13.push(res.body[i])
								}
							}
						}
//						console.log(this.product_10)
//						this.product_5 = res.data
//						console.log(this.product_5)
					})
					this.$http.get('/api/lis/select2')
					.then(function(res) {
						var len = res.body.length
						for(var i = 0;i<len;i++){
							if(res.body[i].list_class=="tongxietongzhuang"){
								if(res.body[i].list_class_1=="童鞋"){
									this.product_14.push(res.body[i])
								}else if(res.body[i].list_class_1=="热门品牌"){
									this.product_15.push(res.body[i])
								}else if(res.body[i].list_class_1=="童装"){
									this.product_16.push(res.body[i])
								}else if(res.body[i].list_class_1=="年龄段"){
									this.product_17.push(res.body[i])
								}
							}
						}
						
					})
			},
			...mapActions([
				'reset',
				"hrefVal"
			]),
			delete: function() {
				this.reset({
					resetInfo: []
				});
			},
			changehref(val) {
				this.hrefVal({
					hrefVal: val
				});
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
	
	#container {
		flex: 1;
		overflow-x: hidden;
		.containerPage {
			ul.aside {
				width: pr(250px);
				display: flex;
				flex-direction: column;
				flex: 1;
				float: left;
				position: fixed;
				li {
					line-height: 1.35rem;
					height: 1.35rem;
					font-size: 14px;
					text-align: center;
					border-right: 1px solid #ddd;
					background-color: #fff;
					position: relative;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					border-bottom: 1px solid #ccc;
				}
				li.linvxie {
					background: #eee;
					color:#FF0000;
				}
			}
			.nvxie {
				float: right;
				width: 7.6rem;
				padding: 0 pr(20px);
				overflow: hidden;
				.top_pic {
					padding-top: pr(40px);
					img {
						width: 100%;
					}
				}
				.title {
					text-align: center;
					a {
						display: inline-block;
						height: pr(120px);
						line-height: pr(120px);
						font-size: 18px;
						color: #333;
						padding: 0 pr(20px);
					}
				}
				.ulW {
					background: #fff;
					overflow: hidden;
					ul {
						li {
							float: left;
							overflow: hidden;
							width: 33.33333%;
							a {
								display: block;
								background-color: #fff;
								margin: 0px pr(12px) pr(20px);
								text-align: center;
								padding: pr(40px) pr(20px);
								color: #333;
								img {
									width: pr(220px);
									padding: 0 0 pr(20px);
									display: block;
									margin: 0 auto;
									min-height: pr(200px);
								}
							}
						}
					}
				}
			}
		}
		.searchpage {
			width: 100%;
			height: pr(2400px);
			background-color: #fff;
			overflow: hidden;
			.searchCon {
				.hotSearch {
					padding: 10px 0;
					padding-left: 30px;
					background: url("../../assets/lists/search/hot.png") no-repeat left center;
					background-size: pr(40px) pr(60px);
					margin: 0 20px;
				}
				ul.hotworld {
					overflow: hidden;
					li {
						float: left;
						a {
							display: block;
							color: #666;
							padding: pr(12px) pr(48px);
							background: #eee;
							border-radius: pr(20px);
							font-size: 14px;
							line-height: pr(96px);
							margin-left: pr(40px);
							margin-bottom: pr(40px);
						}
					}
				}
				.searchHistory {
					.history {
						font-size: 14px;
						color: #a0a0a0;
						padding: pr(48px) pr(40px);
						border-bottom: 1px solid #ddd;
					}
					ul {
						li {
							border-bottom: 1px solid #ddd;
							a {
								display: block;
								padding: pr(60px) pr(40px);
								font-size: 14px;
								line-height: pr(68px);
								white-space: nowrap;
								text-overflow: ellipsis;
								position: relative;
								overflow: hidden;
							}
						}
					}
					.reset {
						margin: pr(40px) 30%;
						text-align: center;
						display: inline-block;
						font-size: 14px;
						padding: pr(30px) pr(48px);
						border: 1px solid #a0a0a0;
						border-radius: pr(20px);
					}
				}
			}
		}
	}
</style>