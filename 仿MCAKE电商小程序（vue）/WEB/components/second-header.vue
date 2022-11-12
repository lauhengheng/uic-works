<template>
	<view>
		<view class="ddd"></view>
		<view class="cu-bar bg-white">
			<view class="header-left" >
				<view class="iconfont icon-fanhuijiantouxiangqingye" 
				v-show="headerFlag" @click="navFlag()"></view>
			</view>
			<view class="header-img">
				<image src="/static/img/下载.png" mode="widthFix" @click="navHome()"></image>
			</view>
			<view class="header-right">
				<!-- <view class="r1">
					<view class="iconfont icon-gouwuche-xianxing" v-show="rFlag"></view>
				</view>
				<view class="h" v-show="hFlag"></view> -->
				<view class="r2">
					<view class="r2-in">
						<view class="iconfont icon-menu"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['headerFlag'],
		data() {
			return {
				
			};
		},
		methods:{
			navHome(){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			},
			navFlag(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.ddd{
		width: 100%;
		height: 120rpx;
	}
	.cu-bar {
		position: fixed !important;
		top: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		z-index: 99;
		.header-left{
			width: 195rpx;
			height: 120rpx;
			text-align: left;
			.iconfont{
				padding: 0rpx 0rpx 0rpx 25rpx;
				margin: 38rpx 0rpx 0rpx 0rpx;
				font-size: 46rpx;
				color: #8d8d8d;			
			}
		}
		.header-right{
			width: 195rpx;
			height: 120rpx;
			// .r1{
			// 	float: left;
			// 	width: 45rpx;
			// 	text-align: left;
			// 	margin: 38rpx 30rpx 0rpx 0rpx;
			// 	.icon-gouwuche-xianxing{
			// 		display: inline-block;
			// 		font-size: 45rpx;
			// 		color: #c6c6c6;
			// 		font-weight: 700;
			// 	}
			// }
			// .h{
			// 	float: left;
			// 	width: 2rpx;
			// 	height: 24rpx;
			// 	margin: 47rpx 0rpx 0rpx;
			// 	border: #b1b1b1 1rpx solid;
			// }
			.r2{
				float: left;
				width: 50rpx;
				text-align: right;
				margin: 30rpx 0rpx 0rpx 30rpx;
				.r2-in{
					margin: 0rpx 0rpx 0rpx 70rpx;
					.icon-menu{
						display: inline-block;
						font-size: 55rpx;
						color: #c6c6c6;
					}
				}
			}
		}
		.header-img {
			height: 120rpx;
			width: 375rpx;
			image {
				margin: 50rpx 95rpx 50rpx 95rpx;
				width: 90px;
				height: 14px;
			}
		}
	}
</style>
