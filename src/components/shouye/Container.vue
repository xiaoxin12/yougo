<template>
	<div id="container">
		<div class="searchpage" v-show="!$store.state.shouye">
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
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'Container',
		data: function() {
			return {
				selectItem: 0,
				type: "nvxie",
				isnvxie: "ture",
				changesrc:"",
			}
		},
		beforeMount: function() {

		},
		mounted: function() {
			// this.readyss();
		},
		methods: {
			

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
		margin-top: 1rem;
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