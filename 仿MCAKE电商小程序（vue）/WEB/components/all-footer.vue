<template>
	<view class="footer">	
		<view v-for="(item, index) in footerGroup" :key="index" @click="changeFooter(index)">
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
			<view v-if="item.flag">
				<view class="h"></view>				
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
							{
								img:"/static/img/底部/下载.png",
								title:"首页",
								backgroundColor: '#ffcd3a',
								color: "#000",
								flag:true
							},
							{
								img:"/static/img/底部/下载 (1).png",
								title:"分类",
								backgroundColor: '#fff',
								color: "#bebebe",
								flag:true
							},
							{
								img:"/static/img/底部/下载 (2).png",
								title:"购物车",
								backgroundColor: '#fff',
								color: "#bebebe",
								flag:true
							},
							{
								img:"/static/img/底部/下载 (3).png",
								title:"我的",
								backgroundColor: '#fff',
								color: "#bebebe",
								flag:false
							}
						]
					}
				}
		},
		data() {
			return {
					
			}
		},
		methods: {
			changeFooter(index){
				if(index === 0){
					uni.navigateTo({
						url:"/pages/index/index"
					})
				}else if(index === 1){
					uni.navigateTo({
						url:"/pages/goods/goods"
					})
				}else if(index === 2){
					uni.navigateTo({
						url:"/pages/car/car"
					})
				}else if(index === 3){
					uni.navigateTo({
						url:"/pages/my/my"
					})
				}
			}
		}
	}
</script>

<style lang="scss">	
	.footer {
		width: 100%;
		height: 114rpx;
		background-color: #eee;
		z-index: 1;
		position: fixed !important;
		bottom: 0rpx;
		border-top: 1rpx solid #b1b1b1;
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
		// background-color: #fff;
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
					// color: #bebebe;
				}
			}
		}
	}
</style>
