<template>
	<view>
		<view class="outside-box bg-white" v-if="cakeFlag">
			<view class="first-box bg-white " v-for="item in cakeList" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseGoodsDetail(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix" @click="changeDetail(item.title)"></image>
								</view>
							</view>
							<view class="title-2">
								<text>{{item.en_title}}</text>
							</view>
						</view>
						<view class="price">
							<text>￥</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="outside-box bg-white" v-else-if="bcakeFlag">
			<view class="first-box bg-white " v-for="item in bcakeList" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseGoodsDetail(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix" @click="changeDetail(item.title)"></image>
								</view>
							</view>
							<view class="title-2">
								<text>{{item.en_title}}</text>
							</view>
						</view>
						<view class="price">
							<text>￥</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="outside-box bg-white" v-else-if="sfoodsFlag">
			<view class="first-box bg-white " v-for="item in sfoodsList" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseGoodsDetail(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix" @click="changeDetail(item.title)"></image>
								</view>
							</view>
							<view class="title-2">
								<text>{{item.en_title}}</text>
							</view>
						</view>
						<view class="price">
							<text>￥</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="outside-box bg-white" v-else-if="toolsFlag">
			<view class="first-box bg-white " v-for="item in toolsList" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseGoodsDetail(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix" @click="changeDetail(item.title)"></image>
								</view>
							</view>
							<view class="title-2">
								<text>{{item.en_title}}</text>
							</view>
						</view>
						<view class="price">
							<text>￥</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
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
								<text>￥{{item.price}}.00</text>
							</view>
						</view>
					</view>
					<view class="ol-v">
						<view class="ol-choose">
							<text>规格选择</text>
						</view>
						<view class="ol-bp">
							<text>{{item.bnum}}- {{item.pnum}}</text>
						</view>
					</view>
					<view class="ol-num">
						<view class="ol-nc">
							<text>数量选择</text>
						</view>
						<u-number-box v-model="item.num" bgColor="#ffe32a">
							<view slot="input" class="input">
								<text>{{item.num}}</text>
							</view>
						</u-number-box>
					</view>
					<view class="ol-footer">
						<view class="ol-fq" @click="show = false">
							<text>取消</text>
						</view>
						<view class="ol-fe" @click="handleOk()">
							<text>确认</text>
						</view>
					</view>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		props:['cakeList','bcakeList','sfoodsList','toolsList',
			   'cakeFlag','bcakeFlag','sfoodsFlag','toolsFlag'],
		data() {
			return {
				show:false,
				value:1,
				overDetail:[],
				goodsName:''
			};
		},
		methods:{
			handleOk(){
				this.show = false
				uni.showLoading()
				setTimeout(function() {
					uni.hideLoading()
					uni.showToast({
						icon:"none",
						title:"已成功加入购物车！"
					})
				}, 1000);
				const db = uniCloud.database()
				db.collection('car_goods').add(this.overDetail)
			},
			chooseGoodsDetail(title){
				this.goodsName = JSON.stringify(title) 
				// console.log(this.goodsName);
				uni.navigateTo({
					url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
				})
			},
			async changeDetail(title) {
				this.show = true
				const res = await uniCloud.callFunction({
					name: "delete_car_goods",
					data: {
						title: title
					}
				})
				this.overDetail = res.result.data
			}
		},
		onLoad() {
			this.chooseGoodsDetail()
		}
	}
</script>

<style lang="scss" scoped>
	.input {
		text-align: center;
		width: 65rpx;
		height: 56rpx;
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
	page{
		background-color: #fff;
	}
	.outside-box {
		width: 100%;
		// height: 2900rpx;
		border-bottom: #d3d3d3 solid 1rpx;
		.first-box {
			float: left;
			padding: 0rpx 0rpx 0rpx 0rpx;
			margin: 10rpx 0rpx 0rpx 0rpx;
		}
		.img-box {
			width: 355rpx;
			height: 486rpx;
			margin-left: 15rpx;
			.img-inside-box {
				display: inline-flexbox;
				width: 352rpx;
				.price {
					text:nth-child(1){
						font-size: 24rpx;
						font-weight: 700;
						font-family: "Microsoft YaHei";
						color: #000;
						padding: 0rpx 0rpx 0rpx 8rpx;
					}
					text:nth-child(2){
						font-size: 24rpx;
						font-weight: 700;
						font-family: "Microsoft YaHei";
						color: #000;
						padding: 0rpx 0rpx 0rpx 0rpx;
					}	
				}
			}
			.title-box {
				width: 352rpx;
				// height: 86rpx;
				.title-1 {
					text:nth-child(1){
						font-size: 24rpx;
						font-weight: 700;
						font-family: "Microsoft YaHei";
						color: #000;
						padding: 16rpx 10rpx 6rpx 8rpx;
					}
					text:nth-child(2){
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						color: #000;
						background-color: #ffe32a;
					}	
				}
				.title-2 {
					width: 270rpx;
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #7f7f7f;
					padding: 0rpx 8rpx;
					margin: 0rpx 0rpx 10rpx;
					white-space: nowrap;
					overflow: hidden;
				}
				.title-img {
					float: right;
					width: 60rpx;
					height: 60rpx;
					margin: 8rpx 16rpx 0rpx 0rpx;
				}
			}
		}
	}
</style>