<template>
	<div>
		<div id="header">
			<div class="listPage" v-show="$store.state.lists_container">
				<div class="arrow">
					<a href="/"><img src="static/lists/nvxie/new-back.png"></img>
					</a>
				</div>
				<div class="search">
					女鞋所有品牌
				</div>
				<div class="menu" @click="isShow()">
					<img src="static/lists/nvxie/ico-menu.png" alt="" />
				</div>
			</div>
		</div>
		<Navbar v-show="flage"></Navbar>
		<div class="ulW">
			<ul>
				<li v-for="(item,index) in search">
					<a href="#/listpage1">
						<img v-bind:src="item.list_src" alt="" />
						<p>{{item.list_dir}}</p>
					</a>
				</li>
			</ul>
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
				flage: false
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
						for(var i = 0; i < len; i++) {
							if(res.body[i].list_class_1 == "热门品牌") {
								this.search.push(res.body[i])
							}
						}
					})
			},
			isShow: function() {
				this.flage = !this.flage
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
				font-size: 18px;
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
		background: #fff;
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
	
	#nav {
		float: left;
		border: none;
	}
</style>