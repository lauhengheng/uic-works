<template>
	<view>
		<!-- 头部区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		<!-- 无商品时购物车头部区域 -->
		<view class="car-header" v-if="carGoodsList.length == ''">
			<view class="car-img">
				<image src="../../static/img/cart-empty.png" mode="widthFix"></image>
			</view>
			<view class="car-title">
				<text>您的购物车还是空的，</text>
				<text @click="toHome()">赶紧行动吧！</text>
			</view>
		</view>
		<!-- 无商品时购物车详情区域 -->
		<view class="car-detail" v-if="carGoodsList.length == ''">
			<view class="detail-title">
				<text>为您推荐</text>
			</view>
			<cake-list :cakeList="cakeList" :bcakeList="bcakeList" :sfoodsList="sfoodsList" :toolsList="toolsList"
				:cakeFlag="cakeFlag" :bcakeFlag="bcakeFlag" :sfoodsFlag="sfoodsFlag" :toolsFlag="toolsFlag"></cake-list>
			<view class="carfooter"></view>
		</view>
		<!-- 无商品时购物车底部区域 -->
		<view class="buy-box" v-if="carGoodsList.length == ''">
			<view class="buy-in">
				<view class="buy">
					<view class="buy-ti">
						<text @click="toHome()">再逛逛</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 有商品时购物车详情区域 -->
		<unicloud-db ref="udb" @load="handleLoad" v-slot:default="{data, loading, error, options}"
			collection="car_goods" :manual="true">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<u-swipe-action v-if="carGoodsList.length != ''">
					<u-swipe-action-item :options="options1" v-for="(item, index) in carGoodsList" :key="index"
						@click="chooseDel(item)">
						<view class="sa">
							<view class="changeBuy" v-if="item.toolFlag">
								<view class="buy-in">
									<view class="buy-turn">
										<text>换购</text>
									</view>
									<view class="buy-title">
										<text>以满足换购条件，可换购优惠商品</text>
									</view>
									<view class="buy-go">
										<text>去换购</text>
										<view class="iconfont icon-xiayiyeqianjinchakangengduo">

										</view>
									</view>
								</view>
							</view>

							<view class="showGoods">
								<u-checkbox-group class="cg" @change="selected(item)">
									<u-checkbox activeColor="#ffe32a" inactiveColor="#ffe32a" size=30rpx class="cg-in"
										:checked='checked'>
									</u-checkbox>
								</u-checkbox-group>

								<view class="cg-img">
									<image :src="item.img_url" mode="widthFix"></image>
								</view>

								<view class="cg-title">

									<view class="ti">
										<view class="ti-1">
											<text>{{item.title}}</text>
										</view>

										<view class="ti-2">
											<text>{{item.en_title}}</text>
										</view>

									</view>

									<!-- <view class="icon">
										<view class="iconfont icon-xiepinglun" @click="changeDetail(item.title)">

										</view>
									</view> -->
									<view class="price">
										<view class="p1">
											<text>￥{{item.price}}.00</text>
										</view>
										<view class="p2">
											<!-- <text>{{item.bnum}}×{{totalNum}}</text> -->
											<u-number-box v-model="item.num" bgColor="#ffe32a" class="nb">
												<view slot="minus" class="minus" @click="reduce(item)">
													<u-icon name="minus" size="12"></u-icon>
												</view>
												<view slot="input" class="input">
													<text>{{item.num}}</text>
												</view>
												<view slot="plus" class="plus" @click="add(item)">
													<u-icon name="plus" size="12"></u-icon>
												</view>
											</u-number-box>
										</view>
									</view>
									<view class="tools">
										<view class="t1" v-if="item.toolFlag">
											<text>标配</text>
										</view>
										<view class="t2-img" v-if="item.toolFlag">
											<image src="../../static/img/icon_nb1.png" mode="widthFix"></image>
										</view>
										<view class="t2-title">
											<text>{{item.toolnum}}</text>
										</view>
									</view>
								</view>
							</view>


							<!-- <view class="c" v-if="item.toolFlag">
								<view class="choose1">
									<view class="ct-1">
										<text>巧克力生日牌</text>
									</view>
									<view class="cc">
										<text>请选择</text>
									</view>
								</view>
								<view class="choose2">
									<view class="ct-2">
										<text>蜡烛</text>
									</view>
									<view class="cl">
										<text>请选择</text>
									</view>
								</view>
							</view> -->

							<!-- <view class="newbuy" v-if="item.toolFlag">
								<view class="nb-b">
									<text>促销</text>
								</view>
								<view class="nb-t">
									<text>不使用活动优惠</text>
								</view>
								<view class="nb-turn">
									<text>修改优惠</text>
								</view>
							</view> -->
							
							<view class="k" v-if="item.toolFlag">
								
							</view>
						</view>
					</u-swipe-action-item>
				</u-swipe-action>
			</view>
		</unicloud-db>
		<!-- 有商品时购物车外加详情区域 -->
		<view class="addbuy" v-if="carGoodsList.length != ''">
			<view class="ab-1">
				<text>加购配件</text>
			</view>
			<u-scroll-list class="ab-2" indicatorWidth="750rpx" indicatorBarWidth="375rpx" indicatorColor="#fff"
				indicatorActiveColor="#cccccc">
				<view class="sl">
					<view class="sl-in" v-for="(item, index) in toolsList" :key="index">
						<view class="sl-img">
							<image :src="item.img_url" mode="widthFix"></image>
						</view>
						<view class="sl-title">
							<text>{{item.title}}</text>
						</view>
						<view class="sl-price">
							<text>￥</text>
							<text>{{item.price}}</text>
							<view class="sl-car">
								<image src="../../static/img/car-icon.png" mode="widthFix" @click="changeDetail(item.title)"></image>
							</view>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<!-- 有商品时购物车占格区域 -->
		<view class="kong" v-if="carGoodsList.length != ''"></view>
		<!-- 有商品时购物车底部区域 -->
		<view class="gobuy" v-if="carGoodsList.length != ''">
			<view class="gb-in">
				<u-checkbox-group class="gb-check" @change="selectgoods()">
					<u-checkbox activeColor="#ffe32a" inactiveColor="#ffe32a" size=30rpx :checked='checkedAll'>
					</u-checkbox>
				</u-checkbox-group>
				<!-- <view class=""> -->
				<text>全选</text>
				<!-- </view> -->
			</view>
			<view class="gb-sum">
				<view class="gb-st">
					<text>合计：</text>
				</view>
				<view class="gb-sm">
					<text>￥{{totalPrice}}</text>
				</view>
			</view>
			<view class="gb-on">
				<view class="gb-go">
					<text>去结算</text>
				</view>
			</view>
		</view>
		<!-- 加购遮罩层区域 -->
		<u-overlay :show="show" @click="show = false">
			<view class="ol animate__animated animate__fadeInDownBig" @click.stop v-for="(item, index) in overDetail" :key="index">
				<view class="ol-in">
					<view class="ol-title">
						<view class="ol-img">
							<image :src="item.img_url" mode="widthFix"></image>
						</view>
						<view class="ol-name">
							<view class="iconfont icon-guanbi" style="float: right; color: #a2a2a2;" @click="show = false">
								
							</view>
							<view class="ol-n1">
								<text>{{item.title}}</text>
							</view>
							<view class="ol-n2">
								<text>{{item.en_title}}</text>
							</view>
							<view class="ol-price">
								<text>￥{{item.price}}</text>
							</view>
						</view>
					</view>
					<view class="ol-v">
						<view class="ol-choose">
							<text>规格选择</text>
						</view>
						<view class="ol-bp">
							<text>{{item.bnum}}</text>
						</view>
					</view>
					<view class="ol-num">
						<view class="ol-nc">
							<text>数量选择</text>
						</view>
						<u-number-box v-model="value" bgColor="#ffe32a">
							<view slot="input" class="input" style="width: 68rpx;height: 58rpx;">
								<text>{{value}}</text>
							</view>
						</u-number-box>
					</view>
					<view class="ol-footer">
						<view class="ol-fq" @click="show = false">
							<text>取消</text>
						</view>
						<view class="ol-fe" @click="handleOk(item)">
							<text>确认</text>
						</view>
					</view>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"
	import cakesList from "../../components/cake-list.vue"

	export default {
		data() {
			return {
				// showBuy: true,
				value: 1,
				show:false,
				checked: true,
				checkedAll: true,
				headerFlag: true,
				// pageindex:Math.floor(Math.random() * 3) + 1,
				pageindex: uni.$u.random(1, 3),
				cakeList: [],
				bcakeList: [],
				toolsList: [],
				sfoodsList: [],
				cakeFlag: true,
				bcakeFlag: false,
				sfoodsFlag: false,
				toolsFlag: false,
				carGoodsList: [],
				toolsList: [],
				pageindex1: 1,
				idname: '',
				options1: [{
					text: '删除',
					style: {
						backgroundColor: '#ff0000',
					}
				}],
				overDetail: [],

			}
		},
		computed: {
			totalPrice() {
				let totalPrice = 0
				this.carGoodsList.map(item => {
					item.checked ? totalPrice += item.price * item.num : totalPrice += 0
				})
				return totalPrice + ".00"
			}
		},
		methods: {
			handleOk(){
				this.show = false
				this.$router.go(0)
				const db = uniCloud.database()
				db.collection('car_goods').add(this.overDetail)
			},
			reduce(item) {
				let num = item.num
				if (num > 1) {
					num 
				} else if (num = 1) {
					uni.showLoading()
					setTimeout(function() {
						uni.hideLoading()
						uni.showToast({
							icon:"none",
							title:"数量不能再少了"
						})
					}, 500);
				}
				item.num = num
			},
			add(item) {
				let num = item.num
				item.num = num 
			},
			async changeDetail(title) {
				this.show = true
				const res = await uniCloud.callFunction({
					name: "tools_detail",
					data: {
						title: title
					}
				})
				this.overDetail = res.result.data
			},
			selected(item) {
				item.checked = !item.checked
				if (!item.checked) {
					this.checkedAll = false
				} else {
					const a = this.carGoodsList.forEach((item) => {
						return item.checked === true
					})
					if (a) {
						this.checkedAll = true
					} else {
						this.checkedAll = false
					}
				}
			},
			selectgoods() {
				this.checkedAll = !this.checkedAll
				if (this.checkedAll) {
					this.carGoodsList.map(item => {
						this.checked = true
						item.checked = true
					})
				} else {
					this.checked = false
					this.carGoodsList.map(item => {
						item.checked = false
					})
				}
			},
			async getToolsList() {
				const res = await uniCloud.callFunction({
					name: "tools_goods_list",
					data: {
						pageindex: this.pageindex1
					}
				})
				this.toolsList = [...this.toolsList, ...res.result.data]
			},
			chooseDel(item) {
				this.$refs.udb.remove(item._id, {
					needConfirm: false,
					needLoading: false
				})
				item.checked = !item.checked
				if (!item.checked) {
					this.checkedAll = false
					this.$router.go(0)
				}
			},
			toHome() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
			},
			async getCakeList() {
				const res = await uniCloud.callFunction({
					name: "cake_goods_list",
					data: {
						pageindex: this.pageindex
					}
				})
				this.cakeList = [...this.cakeList, ...res.result.data]
			},
			async addCar() {
				const res = await uniCloud.callFunction({
					name: "car_goods_list"
				})
				this.carGoodsList = [...this.carGoodsList, ...res.result.data]
			}
		},
		components: {
			"second-header": secondHeader,
			"cake-list": cakesList,
		},
		onLoad: function(e) {
			this.getCakeList()
			this.addCar()
			this.getToolsList()
		},
		onShow() {

		},
		onReady() {

		}

	}
</script>

<style lang="scss">
	.k{
		width: 100%;
		height: 41rpx;
	}
	.nb {
		float: right;
	}

	.plus {
		width: 40rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		// background-color: #ffe32a;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}

	.minus {
		width: 40rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		// background-color: #ffe32a;
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}

	.input {
		text-align: center;
		width: 40rpx;
		height: 40rpx;
		background-color: #f2f3f5;
		margin: 0rpx 4rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ol {
		width: 675rpx;
		height: 519rpx;
		background-color: #fff;
		position: relative;
		top: 0rpx;
		bottom: 0rpx;
		right: 0rpx;
		left: 0rpx;
		margin: auto;
		border-radius: 10rpx;

		.ol-in {
			width: 675rpx;
			height: 498rpx;
			margin: 20rpx 0rpx 0rpx;

			.ol-title {
				width: 633rpx;
				height: 196.5rpx;
				margin: 0rpx 21rpx 21rpx 21rpx;
				display: flex;

				.ol-img {
					width: 196rpx;
					height: 196rpx;

					image {
						border-radius: 10rpx;
					}
				}

				.ol-name {
					width: 435rpx;
					height: 196.5rpx;
					padding: 0rpx 10rpx 0rpx 30rpx;

					.ol-n1 {
						text {
							font-size: 24rpx;
							color: #000;
							font-family: "Microsoft YaHei";
							font-weight: 400;
						}
					}

					.ol-n2 {
						text {
							line-height: 50rpx;
							font-size: 24rpx;
							color: #a2a2a2;
							font-family: "Microsoft YaHei";
						}
					}

					.ol-price {
						text {
							font-size: 24rpx;
							color: #000;
							font-family: "Microsoft YaHei";
							font-weight: 400;
						}
					}
				}
			}

			.ol-v {
				width: 675rpx;
				height: 95rpx;
				border-top: 1rpx solid #eaeaea;
				display: flex;

				.ol-choose {
					width: 353rpx;
					height: 93rpx;
					padding: 0rpx 0rpx 0rpx 30rpx;

					text {
						color: #8d8d8d;
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						text-align: left;
						line-height: 88rpx;
					}
				}

				.ol-bp {
					width: 347rpx;
					height: 93rpx;
					padding: 0rpx 75rpx 0rpx 0rpx;
					text-align: right;
					text {
						font-size: 24rpx;
						color: #8d8d8d;
						font-family: "Microsoft YaHei";
						line-height: 88rpx;
					}
				}
			}

			.ol-num {
				width: 675rpx;
				height: 95rpx;
				border-top: 1rpx solid #eaeaea;
				display: flex;

				.ol-nc {
					width: 399rpx;
					height: 93rpx;
					padding: 0rpx 0rpx 0rpx 30rpx;

					text {
						line-height: 88rpx;
						font-size: 24rpx;
						color: #8d8d8d;
						font-family: "Microsoft YaHei";
					}
				}
			}

			.ol-footer {
				width: 675rpx;
				height: 90rpx;
				display: flex;

				.ol-fq {
					width: 338rpx;
					height: 95rpx;
					background-color: #888;
					border-bottom-left-radius: 10rpx;
					text-align: center;

					text {
						line-height: 88rpx;
						color: #fff;
						font-size: 33rpx;
						font-family: "Microsoft YaHei";
					}
				}

				.ol-fe {
					width: 338rpx;
					height: 95rpx;
					background-color: #ffe32a;
					border-bottom-right-radius: 10rpx;
					text-align: center;

					text {
						line-height: 88rpx;
						color: #000;
						font-family: "Microsoft YaHei";
						font-size: 33rpx;
					}
				}
			}
		}
	}

	.kong-2 {
		width: 100%;
		height: 300rpx;
		background-color: #000;
	}

	.kong {
		width: 100%;
		height: 125rpx;
	}

	.gobuy {
		width: 100%;
		height: 95.5rpx;
		position: fixed;
		display: flex;
		bottom: 0;
		z-index: 999;
		background-color: #fff;

		.gb-in {
			display: flex;
			width: 155rpx;
			height: 90rpx;
			margin: 7.5rpx 0rpx 0rpx;
			padding: 0rpx 0rpx 0rpx 15rpx;

			.gb-check {
				width: 42rpx;
				height: 90rpx;
			}

			text {
				font-size: 30rpx;
				color: #000;
				font-family: "Microsoft YaHei";
				line-height: 90rpx;
			}
		}

		.gb-sum {
			width: 377rpx;
			height: 95rpx;
			padding: 0rpx 20rpx 0rpx 0rpx;
			display: flex;

			.gb-st {
				width: 91rpx;
				height: 95rpx;
				text-align: left;

				text {
					line-height: 100rpx;
					font-size: 30rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}

			.gb-sm {
				width: 103rpx;
				height: 95rpx;

				text {
					line-height: 100rpx;
					font-size: 33rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
		}

		.gb-on {
			width: 220rpx;
			height: 95rpx;
			background-color: #ffe32a;
			text-align: center;

			text {
				line-height: 100rpx;
				font-size: 33rpx;
				color: #000;
				font-family: "Microsoft YaHei";
			}
		}
	}

	.addbuy {
		width: 100%;
		height: 464rpx;

		.ab-1 {
			width: 100%;
			height: 83rpx;
			padding: 0rpx 0rpx 0rpx 40rpx;
			text-align: left;

			text {
				line-height: 80rpx;
				font-size: 30rpx;
				color: #000;
				font-weight: 700;
				font-family: "Microsoft YaHei";
			}
		}

		.ab-2 {
			width: 100%;
			height: 381.5rpx;
			padding: 0rpx 0rpx 60rpx;

			.sl {
				width: 8000rpx;
				height: 321.5rpx;
				margin: 0rpx 0rpx 0rpx 20rpx;
				display: flex;

				.sl-in {
					width: 202.5rpx;
					height: 291.5rpx;
					margin: 0rpx 10rpx 0rpx 0rpx;

					.sl-img {
						width: 202.5rpx;
						height: 202.5rpx;
					}

					.sl-title {
						width: 202.5rpx;
						// height: 30rpx;
						height: auto;
						margin: 10rpx 0rpx 0rpx 0rpx;

						text {

							font-size: 24rpx;
							color: #2e2d2d;
							font-family: "Microsoft YaHei";
						}
					}

					.sl-price {
						width: 202.5rpx;
						// height: 44rpx;
						height: auto;
						text-align: left;
						line-height: 60rpx;

						text:nth-child(1) {
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
							color: #2e2d2d;
						}

						text:nth-child(2) {
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
							color: #2e2d2d;
						}
					}

					.sl-car {
						float: right;
						width: 44rpx;
						height: 44rpx;
						// line-height: 150rpx;
					}
				}

			}

		}
	}

	.newbuy {
		width: 100%;
		height: 33rpx;
		padding: 0rpx 0rpx 0rpx 60rpx;
		// position: relative;
		display: flex;

		.nb-b {
			width: 75rpx;
			height: 30rpx;
			margin: 0rpx 7.5rpx 0rpx 0rpx;
			padding: 0rpx 7.5rpx;
			background-color: #fef4f3;
			border: 1rpx solid #fef4f3;
			border-radius: .4rem;
			box-sizing: content-box;
			text-align: center;

			text {
				color: #f0250f;
				font-size: 24rpx;
				font-family: "Microsoft YaHei";
			}
		}

		.nb-t {

			text {
				font-size: 24rpx;
				color: #2e2d2d;
				font-family: "Microsoft YaHei";
			}
		}

		.nb-turn {

			width: 96rpx;
			height: 33rpx;
			margin: 0rpx 0rpx 0rpx 255rpx;

			text {
				font-size: 24rpx;
				font-weight: 700;
				color: #2e2d2d;
				font-family: "Microsoft YaHei";
			}
		}
	}




	.c {
		width: 100%;
		height: 83rpx;
		display: flex;
	}

	.choose1 {
		width: 450rpx;
		height: 83rpx;
		padding: 15rpx 0rpx 0rpx 60rpx;
		display: flex;

		.ct-1 {
			width: 144rpx;
			height: 52.5rpx;
			margin: 0rpx 20rpx 0rpx 0rpx;

			text {
				line-height: 50rpx;
				font-size: 24rpx;
				font-family: "Microsoft YaHei";
				color: #4a4a4a;
				font-weight: 700;
			}
		}

		.cc {
			width: 187.5rpx;
			height: 52.5rpx;
			margin: 0rpx 20rpx 0rpx 0rpx;

			text {

				font-size: 24rpx;
				font-family: "Microsoft YaHei";
				color: #4a4a4a;
				line-height: 50rpx;
			}
		}
	}

	.choose2 {
		display: flex;
		padding: 15rpx 0rpx 0rpx 0rpx;
		margin: 0rpx 0rpx 0rpx 100rpx;
		width: 220rpx;
		height: 83rpx;

		.ct-2 {
			width: 48rpx;
			height: 52.5rpx;
			margin: 0rpx 20rpx 0rpx 0rpx;

			text {
				line-height: 50rpx;
				font-size: 24rpx;
				font-family: "Microsoft YaHei";
				color: #4a4a4a;
				font-weight: 700;
				line-height: 50rpx;
			}
		}

		.cl {
			width: 72rpx;
			height: 52.5rpx;

			text {
				line-height: 50rpx;
				font-size: 24rpx;
				color: #888888;
				line-height: 50rpx;

			}
		}
	}

	.showGoods {
		display: flex;

		.cg-img {
			width: 180rpx;
			height: 180rpx;
		}

		.cg {
			width: 60rpx;
			height: 180rpx;

			.cg-in {
				margin: 0rpx 0rpx 0rpx 15rpx;

			}
		}

		.cg-title {
			width: 450rpx;
			height: 180rpx;
			padding: 0rpx 0rpx 0rpx 30rpx;

			.ti {
				width: 350rpx;
				height: 70rpx;
				// height: auto;
				display: inline-block;

				.ti-1 {
					width: 350rpx;
					height: 35rpx;
					// height: auto;
					text {
						font-size: 24rpx;
						color: #000;
						font-family: "Microsoft YaHei";
					}
				}

				.ti-2 {
					width: 350rpx;
					height: 35rpx;
					// height: auto;
					text {
						font-size: 24rpx;
						color: #848484;
						font-family: "Microsoft YaHei";
					}
				}
			}

			.icon {
				width: 50rpx;
				height: 52rpx;
				float: right;
				text-align: center;
				border: 1rpx solid #fff;
				border-radius: 50%;
				background-color: #e6e6e6;

				.icon-xiepinglun {
					line-height: 50rpx;
					width: 48rpx;
					height: 52rpx;
					color: #d0d0d0;
				}
			}

			.price {
				width: 420rpx;
				// height: 32rpx;
				height: auto;

				.p1 {
					display: inline-block;
					width: 208rpx;
					height: 32rpx;
					text-align: left;

					text {
						font-size: 24rpx;
						color: #2e2d2d;
						font-weight: 700;
						font-family: "Microsoft YaHei";
					}
				}

				.p2 {
					display: inline-block;
					width: 208rpx;
					height: 32rpx;
					text-align: right;

					text {
						font-size: 24rpx;
						color: #2e2d2d;
						font-family: "Microsoft YaHei";
					}
				}
			}

			.tools {
				width: 418rpx;
				height: 33rpx;
				// height: auto;
				display: flex;

				.t1 {
					width: 67rpx;
					height: 30rpx;
					margin: 0rpx 7.5rpx 0rpx 0rpx;
					padding: 0rpx 7.5rpx;
					background-color: #f6f8fa;

					text {
						font-size: 24rpx;
						color: #000;
						font-family: "Microsoft YaHei";
						font-weight: 700;
					}
				}

				.t2-img {
					width: 18rpx;
					height: 25rpx;
					display: inline-block;
					margin: 0rpx 7.5rpx 0rpx 0rpx;

					image {}
				}

				.t2-title {
					display: inline-block;
					line-height: 35rpx;

					text {
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						color: #2e2d2d;
					}
				}
			}
		}
	}


	.icon-xiayiyeqianjinchakangengduo {
		// float: left;
		display: inline-block;
		width: 35rpx;
		height: 26rpx;
		font-size: 30rpx;
		color: #c9c9c9;
		padding: 5rpx 0rpx 0rpx 0rpx;
	}

	.sa {
		width: 100%;
		// height: 416rpx;
		height: auto;
		padding: 15rpx;
		border-top: 1rpx solid #e6e6e6;
		border-right: 5rpx solid #f0250f;

		.changeBuy {
			width: 690rpx;
			height: 52rpx;

			.buy-in {
				display: flex;
				width: 690rpx;
				height: 37rpx;

				.buy-turn {
					display: inline-block;
					box-sizing: content-box;
					border-radius: .4rem;
					border: 1rpx solid #f0250f;
					padding: 0rpx 7.5rpx;
					margin: 0rpx 7.5rpx 7.5rpx 0rpx;
					width: 62rpx;
					height: 30rpx;
					background-color: #f0250f;
					text-align: center;
					line-height: 30rpx;

					text {
						color: #fff;
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
					}
				}

				.buy-title {
					width: 442rpx;
					height: 37rpx;

					text {
						color: #2e2d2d;
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
					}
				}

				.buy-go {
					width: 165rpx;
					height: 37rpx;
					text-align: right;
					line-height: 24rpx;

					text {
						font-size: 24rpx;
						color: #f0250f;
						font-family: "Microsoft YaHei";
						font-weight: 700;
					}
				}
			}
		}
	}






	page {
		background-color: #fff;
	}

	.carfooter {
		float: left;
		width: 100%;
		height: 120rpx;
	}

	.car-header {
		width: 100%;
		height: 375rpx;
		background-color: #c2c2c2;

		.car-img {
			text-align: center;
			padding: 70rpx 0rpx 0rpx 0rpx;

			// margin: 70rpx;
			image {
				width: 554rpx;
				height: 168rpx;
			}
		}

		.car-title {
			text-align: center;
			padding: 0rpx 0rpx 37rpx 0rpx;
			margin: 50rpx 0rpx 0rpx;

			text:nth-child(1) {
				color: #fff;
				font-size: 28rpx;
				font-family: "Microsoft YaHei";
			}

			text:nth-child(2) {
				text-decoration: underline;
				color: #fff;
				font-size: 28rpx;
				font-family: "Microsoft YaHei";
			}
		}
	}

	.car-detail {
		width: 100%;
		height: auto;

		.detail-title {
			width: 100%;
			height: 82rpx;
			padding: 0rpx 0rpx 0rpx 41rpx;
			text-align: left;

			text {
				color: #000;
				font-size: 30rpx;
				font-weight: 700;
				line-height: 82rpx;
				font-family: "Microsoft YaHei";
			}
		}
	}

	.buy-box {
		background-color: #fff;
		position: fixed !important;
		bottom: 0rpx;
		width: 100%;
		height: 120rpx;

		.buy-in {
			// width: 735rpx;
			width: 100%;
			height: 90rpx;
			// margin: 0rpx 0rpx 0rpx 15rpx;
			padding: 15rpx 0rpx 0rpx 0rpx;

			.buy {
				float: left;
				width: 100%;
				height: 90rpx;
				background-color: #ffe32a;
				text-align: center;
				border-radius: .16rem;

				// margin-right: 15rpx;
				.buy-ti {
					margin-top: 22.5rpx;

					text {
						color: #000;
						font-size: 35rpx;
						font-family: "Microsoft YaHei";
					}
				}
			}
		}
	}
</style>
