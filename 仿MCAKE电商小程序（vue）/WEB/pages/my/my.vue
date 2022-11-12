<template>
	<view>
		<!-- 占格区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		
		<view class="topheader">
			<view class="vip-box">
				<view class="vip">
					
				</view>
			</view>
		</view>
		<view class="vipname">
			<text>11122233344</text>
		</view>
		<view class="changevip">
			<view class="vipimg">
				<image src="../../static/img/我的/sort1.png" mode="widthFix"></image>
			</view>
			<view class="viptitle">
				<text>切换账号</text>
			</view>
		</view>
		
		<view class="vipdetail">
			<view class="" style="display: flex;">
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-1.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>我的订单</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-2.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>待付款</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-3.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>待收货</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v2-box">
					<view class="v2-in">
						<view class="v2">
							<view class="v2-img">
								<image src="../../static/img/我的/user-icon-4.png" mode="widthFix"></image>
							</view>
							<view class="v2-title">
								<text>会员等级</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="" style="display: flex;">
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-5.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>积分</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-6.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>余额</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v1-box">
					<view class="v1-in">
						<view class="v1">
							<view class="v1-img">
								<image src="../../static/img/我的/user-icon-7.png" mode="widthFix"></image>
							</view>
							<view class="v1-title">
								<text>红包/优惠卷</text>
							</view>
						</view>
					</view>
				</view>
				<view class="v2-box">
					<view class="v2-in">
						<view class="v2">
							<view class="v2-img">
								<image src="../../static/img/我的/user-icon-8.png" mode="widthFix"></image>
							</view>
							<view class="v2-title">
								<text>现金卡</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 底部区域 -->
		<all-footer :footerGroup="footerGroup"></all-footer>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"
	import allFooter from "../../components/all-footer.vue"
	
	export default{
		data(){
			return{
				headerFlag:true,
				footerGroup: [
					{
						img: "/static/img/底部/下载 (5).png",
						title: "首页",
						backgroundColor: '#fff',
						color: "#bebebe",
						flag:true
					},
					{
						img: "/static/img/底部/下载 (1).png",
						title: "分类",
						backgroundColor: '#fff',
						color: "#bebebe",
						flag:true
					},
					{
						img: "/static/img/底部/下载 (2).png",
						title: "购物车",
						backgroundColor: '#fff',
						color: "#bebebe",
						flag:true
					},
					{
						img: "/static/img/底部/下载 (6).png",
						title: "我的",
						backgroundColor: '#ffcd3a',
						color: "#000",
						flag:false
					}
				],
			}
		},
		components: {
			"second-header": secondHeader,
			"all-footer":allFooter
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.topheader{
		width: 100%;
		height: 300rpx;
		background-color: #eee;		
		.vip-box{
			width: 300rpx;
			height: 300rpx;
			position: relative;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			margin: auto;
			.vip{
				position: relative;
				top: 45rpx;
				margin: auto;
				width: 208rpx;
				height: 208rpx;
				border-radius: 50%;
				border: 5rpx solid #8d8d8d;
			}
		}
	}
	.vipname{
		width: 100%;
		height: 82rpx;
		text-align: center;
		line-height: 80rpx;
		text{
			font-size: 31rpx;
			color: #000;
			font-weight: 700;
			font-family: "Microsoft YaHei";
		}
	}
	.changevip{
		width: 100%;
		height: 36rpx;
		justify-content: center;
		display: flex;
		margin: 0rpx 0rpx 20rpx 0rpx;
		.vipimg{
			width: 24rpx;
			height: 22rpx;
			margin-right: 15rpx;
		}
		.viptitle{
			text{
				font-size: 24rpx;
				color: #8d8d8d;
				font-family: "Microsoft YaHei";
			}
		}
	}
	.vipdetail{
		width: 708rpx;
		height: 600rpx;
		margin: 0rpx 21rpx;
		// display: flex;
		.v1-box{
			width: 177.6rpx;
			height: 202rpx;
			padding: 14rpx 0rpx;
			border-right: 2rpx solid #e9e9e9;
			.v1-in{
				width: 175rpx;
				height: 175rpx;
				padding: 10rpx 0rpx;
				.v1{
					width: 175rpx;
					height: 109rpx;
					.v1-img{
						display: flex;
						justify-content: center;
						image{
							margin: .3rem auto;
							width: 63rpx;
							height: 63rpx;
						}
					}
					.v1-title{
						margin: 10rpx 0rpx 20rpx;
						text-align: center;
						text{
							font-size: 24rpx;
							color: #8d8d8d;
							font-family: "Microsoft YaHei";
						}
					}
				}
			}
		}
		.v2-box{
			width: 177.6rpx;
			height: 202rpx;
			padding: 14rpx 0rpx;
			// border-right: 2rpx solid #e9e9e9;
			.v2-in{
				width: 175rpx;
				height: 175rpx;
				padding: 10rpx 0rpx;
				.v2{
					width: 175rpx;
					height: 109rpx;
					.v2-img{
						display: flex;
						justify-content: center;
						image{
							margin: .3rem auto;
							width: 63rpx;
							height: 63rpx;
						}
					}
					.v2-title{
						margin: 10rpx 0rpx 20rpx;
						text-align: center;
						text{
							font-size: 24rpx;
							color: #8d8d8d;
							font-family: "Microsoft YaHei";
						}
					}
				}
			}
		}
	}
</style>