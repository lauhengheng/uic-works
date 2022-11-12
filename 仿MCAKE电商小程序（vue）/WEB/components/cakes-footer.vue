<template>
	<view>
		<view class="buy-box">
			<view class="buy-in">
				<view class="buy">
					<view class="buy-ti">
						<text>立即购买</text>
					</view>
				</view>
				<view class="car">
					<view class="car-ti">
						<text>加入购物车</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.buy-box{
		background-color: #fff;
		position: fixed !important;
		bottom: 0rpx;
		width: 100%;
		height: 120rpx;
		.buy-in{
			width: 735rpx;
			height: 90rpx;
			margin: 0rpx 0rpx 0rpx 15rpx;
			padding: 15rpx 0rpx 0rpx 0rpx;
			.buy{
				float: left;
				width: 352.5rpx;
				height: 90rpx;
				background-color: #857a72;
				text-align: center;
				border-radius: .16rem;
				margin-right: 15rpx;
				.buy-ti{
					margin-top: 22.5rpx;
					text{
						color: #fff;
						font-size: 35rpx;
						font-family: "Microsoft YaHei";
					}
				}	
			}
			.car{
				float: left;
				width: 352.5rpx;
				height: 90rpx;
				background-color: #ffe32a;
				text-align: center;
				border-radius: .16rem;
				.car-ti{
					margin-top: 22.5rpx;
					text{
						color: #000;
						font-size: 35rpx;
						font-family: "Microsoft YaHei";
					}
				}
			}
		}
	}
</style>