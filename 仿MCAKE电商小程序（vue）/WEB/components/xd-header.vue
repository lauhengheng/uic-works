<template>
	<view>
		<view class="goods-detail">
			<view class="detail-box">
				<view class="cake-out-box" v-for="(item, index) in headerGroup" :key="index" >
					<view class="cake-in-box" :style="{borderRight:item.borderRight}">
						<text :style="{color:item.color}">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			headerGroup:{
				type:Array,
				default(){
					return[
					// {
					// 	title:"蛋糕",
					// 	color:"#000",
					// 	borderRight: "1rpx solid #c5c5c5"
					// },
					// {
					// 	title:"面包",
					// 	color:"#c5c5c5",
					// 	borderRight: "1rpx solid #c5c5c5"
					// },
					// {
					// 	title:"小食",
					// 	color:"#c5c5c5",
					// 	borderRight: "1rpx solid #c5c5c5"
					// },
					// {
					// 	title:"配件",
					// 	color:"#c5c5c5",
					// }
				]
				}
			}			
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #fff;
	}
	.goods-detail {
		width: 100%;
		height: 82rpx;
		background-color: #fff;
		.detail-box {
			position: relative;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 720rpx;
			height: 82rpx;
			// background-color: #7f7f7f;

			.cake-out-box {
				float: left;
				width: 180rpx;
				height: 82rpx;
				background-color: #fff;
				.cake-in-box {
					text-align: center;
					margin: 22rpx 0rpx;
					text {
						width: 180rpx;
						height: 38rpx;
						font-size: 30rpx;
						font-family: "Microsoft YaHei";
					}
				}
			}
		}
	}
</style>