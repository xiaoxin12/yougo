<template>
	<div id="container" >
		<ul class="aside">
			<li v-on:click="changeColor"  v-bind:class="{active: isActive }">女鞋</li>	
			<li>男鞋</li>
			<li>运动</li>
			<li>户外</li>
			<li>男装</li>
			<li>女装</li>
			<li>箱包</li>
			<li>童鞋童装</li>
			<li>化妆品</li>
			<li>全部品牌</li>
			<li>专柜同款</li>
		</ul>
		<div class="shop">
			<div class="top_pic">
				<img src="../../assets/lists/nvxie/1499061169454.jpg" alt="" />
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
							<img src="../../assets/lists/nvxie/1487210024516.jpg" alt="" />
							<p>百丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210037675.jpg" alt="" />
							<p>天美意</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210051044.jpg" alt="" />
							<p>他他</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210065265.jpg" alt="" />
							<p>拔佳</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210079180.jpg" alt="" />
							<p>思加图</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210024516.jpg" alt="" />
							<p>百思图</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210113052.jpg" alt="" />
							<p>森达</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210133902.jpg" alt="" />
							<p>妙丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1473813826304.jpg" alt="" />
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
							<img src="../../assets/lists/nvxie/1487210024516.jpg" alt="" />
							<p>小白鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210037675.jpg" alt="" />
							<p>乐福鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210051044.jpg" alt="" />
							<p>休闲鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210065265.jpg" alt="" />
							<p>松糕鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210079180.jpg" alt="" />
							<p>内增高</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210024516.jpg" alt="" />
							<p>帆布鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210113052.jpg" alt="" />
							<p>运动鞋</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1487210133902.jpg" alt="" />
							<p>妙丽</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/lists/nvxie/1473813826304.jpg" alt="" />
							<p>全部品牌</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'container',
	  data:{
	  		isActive:false
	  },
	  data : function () {
	    return {
	    	isActive:false
	    }
	  },
	  methods: {
	  	changeColor:function(){
	  			this.isActive = true
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
			li.active{
				background: #f60;
			}
		}
		.shop{
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
</style>
