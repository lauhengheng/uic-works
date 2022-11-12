<template>
	<view class="footer">	
		<view v-for="(item, index) in footerGroup" :key="index">
			<view class="f-box" :style="{backgroundColor:item.backgroundColor}">
				<view class="f">
					<view class="f-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="f-title" :style="{color:item.color}">
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		props:{
			footerGroup:{
					type: Array,
					default(){
						return [

						]
					}
				}
		},
		data() {
			return {
					
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.footer {
		float: left;
		width: 100%;
		height: 114rpx;
		background-color: #fff;
		.h {
			float: left;
			margin-top: 20rpx;
			width: 1rpx;
			height: 70rpx;
			background-color: #b1b1b1;
			border-right: 1rpx solid #b1b1b1;
			margin-right: 1rpx;
		}		
	}	
	.f-box {
		float: left;
		width: 186rpx;
		height: 114rpx;
		.f {
			float: left;
			width: 186rpx;
			height: 103rpx;
			background-color: #fff;
			.f-img {
				text-align: center;
				height: 50rpx;
				padding: 16rpx 0rpx 0rpx 0rpx;
	
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
			.f-title {
				text-align: center;
				padding: 0rpx 0rpx 16rpx 0rpx;
	
				text {
					font-size: 28rpx;
					font-weight: 700;
				}
			}
		}
	}
</style>
