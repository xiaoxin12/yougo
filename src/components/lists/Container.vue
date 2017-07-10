<template>
	<div id="container"  >
	  <div class="containerPage" v-show="$store.state.lists_container">
		<ul class="aside">
			<li v-for="(sort,index) in productList" @click="getTabDetail(index)" v-bind:class="{ linvxie: index==selectItem }">
		      {{sort.name}}
		   </li>
		</ul>
		<div class="nvxie"  v-if="selectItem == 0">
			<div class="top_pic">
				<img src="static/lists/nvxie/1499061169454.jpg" alt="" />
			</div>
			<div class="title">
				<a href="">
					<p>热门品牌</p>
				</a>
			</div>
			<div class="ulW">
				<ul>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210024516.jpg" alt="" />
							<!--<img src="https://heweijie.me/img/img (32).jpg" alt="" />-->
							<p>百丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210037675.jpg" alt="" />
							<p>天美意</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210051044.jpg" alt="" />
							<p>他他</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210065265.jpg" alt="" />
							<p>拔佳</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210079180.jpg" alt="" />
							<p>思加图</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210024516.jpg" alt="" />
							<p>百思图</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210113052.jpg" alt="" />
							<p>森达</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210133902.jpg" alt="" />
							<p>妙丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1473813826304.jpg" alt="" />
							<p>全部品牌</p>
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
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210024516.jpg" alt="" />
							<p>小白鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210037675.jpg" alt="" />
							<p>乐福鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210051044.jpg" alt="" />
							<p>休闲鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210065265.jpg" alt="" />
							<p>松糕鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210079180.jpg" alt="" />
							<p>内增高</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210024516.jpg" alt="" />
							<p>帆布鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210113052.jpg" alt="" />
							<p>运动鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1487210133902.jpg" alt="" />
							<p>妙丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="static/lists/nvxie/1473813826304.jpg" alt="" />
							<p>全部品牌</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="nvxie"  v-if="selectItem == 1">
			男鞋
		</div>
		<div class="nvxie"  v-if="selectItem == 2">
			户外
		</div>
		<div class="nvxie"  v-if="selectItem == 3">
			运动
		</div>
		<div class="nvxie"  v-if="selectItem == 4">
			男装
		</div>
		<div class="nvxie"  v-if="selectItem == 5">
			女装
		</div>
		<div class="nvxie"  v-if="selectItem == 6">
			箱包
		</div>
		<div class="nvxie"  v-if="selectItem == 7">
			童鞋童装
		</div>
		<div class="nvxie"  v-if="selectItem == 8">
			化妆品
		</div>
		<div class="nvxie"  v-if="selectItem == 9">
			全部品牌
		</div>
		<div class="nvxie"  v-if="selectItem == 10">
			专柜同款
		</div>
	  </div>
	  <div class="searchpage" v-show="!$store.state.lists_container">
	  	<div class="searchCon">
	  		<div class="hotSearch">
	  			热门搜索
	  		</div>
	  		<ul class="hotworld">
	  			<li><a href="">百丽</a></li>
	  			<li><a href="">阿迪达斯</a></li>
	  			<li><a href="">耐克</a></li>
	  			<li><a href="">T恤</a></li>
	  			<li><a href="">凉鞋</a></li>
	  			<li><a href="">女鞋</a></li>
	  			<li><a href="">卫衣</a></li>
	  			<li><a href="">跑步鞋</a></li>
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
	import Headers  from './Header.vue'
	import { mapGetters, mapActions } from 'vuex'
	export default {
	  name: 'container',
	  data : function () {
	    return {
	    	selectItem:0,
	    	type:"nvxie",
	    	isnvxie:"ture",
	    	productList:[]
	    }
	  },
	   mounted:function() {
	   	this.readyss()
	   },
	  methods: {
		  	getTabDetail(index){
		  			this.selectItem = index
		  			console.log(index)
		  	},
		  	readyss: function() {
			    this.$http.get('/data/lists.json')
		        .then(function(res){
		        	this.productList = res.data
		   	 		})
	       },
		  	...mapActions([
			   'reset'
			  ]),
			  delete : function(){
			  	this.reset({
			  		resetInfo : []
			  	});
			  }
	  	
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$ui-width:750px;
		@function pr($px){
			@return $px/$ui-width*7.5rem
		}
	#container{
		flex: 1;
		overflow-x: hidden;
		.containerPage{
		ul.aside{
			width: pr(250px);
			display: flex;
			flex-direction: column;
			flex: 1;
			float:left;
			position:fixed;
			li{
				flex: 1;
				padding: pr(40.5px) 0;
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
			li.linvxie{
				background: #eee;
			}
		}
		.nvxie{
			float:right;
			width: 7.6rem;
			padding: 0 pr(20px);
			overflow: hidden;
			.top_pic{
    				padding-top: pr(40px);
				img{
					 width: 100%;
					}
			}
			.title{
					text-align: center;
				a{
					display: inline-block;
					height: pr(160px);
				    line-height: pr(160px);
				    font-size: 18px;
				    color: #333;
				    padding: 0 pr(20px);
				}
			}
			.ulW{
				background: #fff;
				overflow: hidden;
				ul{
					li{
						float: left;
						overflow: hidden;
	    				width: 33.33333%;
	    				a{
	    					display: block;
						    background-color: #fff;
						    margin: 0px pr(12px) pr(20px);
						    text-align: center;
						    padding: pr(40px) pr(20px);
						    color: #333;
						    img{
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
		.searchpage{
			width: 100%;
			height: pr(2400px);
			background-color: #fff;
			overflow: hidden;
			.searchCon{
				.hotSearch{
					padding: 10px 0;
					padding-left: 30px;
					background: url("../../assets/lists/search/hot.png") no-repeat left center;
					background-size:pr(40px) pr(60px);
					margin: 0 20px;
					
				}
				ul.hotworld{
						overflow: hidden;
					li{ 
						float:left;
							a{
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
				.searchHistory{
				 .history{
				 	font-size: 14px;
				    color: #a0a0a0;
				    padding: pr(48px) pr(40px);
				    border-bottom: 1px solid #ddd;
				 }
				 ul{
				 	li{
				 		border-bottom: 1px solid #ddd;
				 		a{
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
				 .reset{
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
