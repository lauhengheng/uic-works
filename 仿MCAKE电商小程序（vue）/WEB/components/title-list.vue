<template>
	<view>
		<view class="recommend bg-white cu-bar">
			<view class="recommend-top">
				<view class="recommend-top-in">
					<view class="img">
						<image src="/static/img/knifeFork.png"></image>
					</view>
					<view class="recommend-top-in-text">
						<text>{{wTitle}}</text>
						<text>{{sTitle}}</text>
						<view class="text-en">{{enTitle}}</view>
					</view>
					<view class="more-img" v-show="flag">
						<image src="../static/img/more1.png" mode="widthFix" @click="toMore()"></image>
					</view>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	export default {
		props:['wTitle','sTitle','enTitle','flag'],
		data() {
			return {
				
			};
		},
		methods:{
			toMore(){
				uni.navigateTo({
					url:"/pages/goods/goods"
				})
			}
		}
	}
</script>

<style lang="scss">
.recommend {
		// position: absolute;
		// top: 900rpx;
		display: flex;
		width: 100%;
		height: 274rpx;
		.recommend-top {
			position: relative;
			top: auto;
			width: 100%;
			height: 274rpx;
			.recommend-top-in {
				position: relative;
				top: 96rpx;
				left: 50rpx;
				width: 100%;
				height: 76rpx;
				.img {
					width: 166rpx;
					height: 76rpx;
					image {
						width: 116rpx;
						height: 64rpx;
					}
				}
				.more-img{
					position: relative;
					top: -130rpx;
					left: 500rpx;
					width: 150rpx;
					height: 28rpx;
				}
				.recommend-top-in-text {
					position: relative;
					top: -80rpx;
					left: 170rpx;
					width: 260rpx;
					text:nth-child(1) {
						font-size: 30rpx;
						font-weight: 700;
						font-family: "Microsoft YaHei";
						color: #000;
					}
					text:nth-child(2) {
						font-size: 30rpx;
						font-family: "Microsoft YaHei";
						color: #000;
					}
					.text-en{
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						color: #7f7f7f;
					}
				}
			}
		}
	}
</style>