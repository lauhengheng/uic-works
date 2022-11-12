<template>
	<view v-if="frenchFlag">
		<view class="outside-box bg-white">
			<view class="first-box bg-white " v-for="item in frenchGoods" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseHomeGoods(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix"></image>
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
	</view>
	<view v-else-if="festivalFlag">
		<view class="outside-box bg-white">
			<view class="first-box bg-white " v-for="item in festivalGoods" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseHomeGoods(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix"></image>
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
	</view>
	<view v-else-if="childrenFlag">
		<view class="outside-box bg-white">
			<view class="first-box bg-white " v-for="item in childrenGoods" :key="item.id">
				<view class="img-box">
					<view class="img-inside-box bg-white">
						<image :src="item.img_url" mode="widthFix" @click="chooseHomeGoods(item.title)"></image>
						<view class="title-box bg-white">
							<view class="title-1">
								<text>{{item.title}}</text>
								<text>{{item.col_title}}</text>
								<view class="title-img">
									<image src="/static/img/car-icon.png" mode="widthFix"></image>
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
	</view>
</template>

<script>
	export default {
		props: ['frenchGoods','frenchFlag','festivalFlag',
				'festivalGoods','childrenGoods','childrenFlag'],
		data() {
			return {
				goodsName:''
			};
		},
		methods: {
			chooseHomeGoods(title){
				this.goodsName = JSON.stringify(title)
				// console.log(this.goodsName);
				uni.navigateTo({
					url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.outside-box {
		width: 100%;
		height: 1150rpx;
		border-bottom: #d3d3d3 solid 1rpx;
		.first-box {
			float: left;
			padding: 0rpx 0rpx 0rpx 0rpx;
			margin: 10rpx 0rpx 40rpx 0rpx;
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
