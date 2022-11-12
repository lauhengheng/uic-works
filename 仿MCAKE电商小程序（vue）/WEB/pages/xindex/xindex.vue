<template>
	<view>
		<!-- 头部区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		<view class="box1">
			<image class="img-1" src="../../static/img/5d13ed8857f4e3d6.jpg" mode="widthFix"></image>
		</view>
		<view class="box2">
			<view class="box2-1">
				<image class="img-2" src="../../static/img/首页进入/quan-1.png" mode=""></image>
			</view>
			<view class="box2-2">
				<image class="img-3 animate__animated animate__heartBeat" src="../../static/img/首页进入/get-btn.png"
					mode="widthFix"></image>
			</view>
		</view>
		<view class="box3">
			<view class="box3-1">
				<view class="box3-1-1">
					<image src="../../static/img/首页进入/tabar-1.png" mode="widthFix"></image>
				</view>
				<view class="box3-1-2">
					<image src="../../static/img/首页进入/tabar-2.png" mode="widthFix"></image>
				</view>
				<view class="box3-1-3">
					<image src="../../static/img/首页进入/tabar-3.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="box4">
			<view class="box4-1">
				<view class="box4-1-1" v-for="(item, index) in box4Group" :key="index">
					<view class="box4-1-2">
						<image class="box4-img-2" :src="item.img" mode="widthFix"></image>
						<view class="box4-1-3">
							<text>折扣价</text>
							<text>￥</text>
							<text>{{item.price}}</text>
							<text>原价￥</text>
							<text>{{item.oldprice}}</text>
						</view>
						<view class="box4-1-4">
							<view class="box4-1-5">
								<text>立即购买</text>
							</view>
							<view class="box4-1-6">
								<text>{{item.g}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<image class="box4-img-1" src="../../static/img/首页进入/sec-2.png" mode="widthFix"> </image>
		</view>
		
		<view class="box5">
			<image class="box5-img" src="../../static/img/首页进入/quan-2.png" mode="widthFix"></image>
		</view>

		<view class="box6">
			<image class="box6-img" src="../../static/img/首页进入/quan-3.png" mode="widthFix"></image>
		</view>
		
		<view class="box7">
			
			<view class="box7-1">
				<view class="a">
					<text>活动规则</text>
				</view>
				<view class="b">
					<text>1、活动时间：2022年1月14日-2022年12月31日</text>
				</view>
				<view class="c">
					<text>2、活动城市：上海、苏州、杭州、北京</text>
				</view>
				<view class="d">
					<text>3、支付方式：微信、支付宝，本活动仅限使用微信、支付宝全额支付的用户参与</text>
				</view>
				<view class="e">
					<text>4、活动内容：</text>
				</view>
				
				<view class="ot">
					<view class="f">
						<text>a、在活动页面注册后即可领取185元新人优惠券礼包，仅限新用户参与，每位新用户仅限领取一次，优惠券有效期：自领取之日内180天内有效，不与其他优惠同享</text>				
					</view>
					<view class="g">
						<text>b、活动页面订购“芋”见轻甜、蓝莓轻乳拿破仑、黛西的旅行、摩登茶道、卡法香缇、黑森林拿破仑首单用户享78折优惠</text>
					</view>
					<view class="h">
						<text>c、凡新用户首单配送完成后，账户内即赠60元通兑券1张，单笔订单满320元即可使用，有效期为自发放之日60天内有效；面包小食48元兑换券1张，单笔订单金额满100元即可使用，有效期为自发放之日60天内有效</text>
					</view>
					<view class="i">
						<text>d、凡新用户第2笔订单配送完成后，账户内即赠蛋糕100元升磅券1张，仅限1磅升2磅，有效期为自发放之日180天内有效</text>
					</view>					
				</view>
				<view class="j">
					<text>5、本活动与会员等级制度、积分同享，但不与其他优惠同享</text>
				</view>		
			</view>
			
			<image class="box7-img" src="../../static/img/首页进入/sec-foot.jpg" mode="widthFix"></image>
			
		</view>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"

	export default {
		components: {
			"second-header": secondHeader
		},
		data() {
			return {
				headerFlag:true,
				box4Group: [{
						img: "/static/img/首页进入/cake-1.png",
						price: 170,
						oldprice: 218,
						g: "1磅(454g)"
					},
					{
						img: "/static/img/首页进入/cake-2.png",
						price: 154,
						oldprice: 198,
						g: "1磅(454g)"
					},
					{
						img: "/static/img/首页进入/cake-3.png",
						price: 170,
						oldprice: 218,
						g: "1磅(681g)"
					},
					{
						img: "/static/img/首页进入/cake-4.png",
						price: 154,
						oldprice: 198,
						g: "1磅(454g)"
					},
					{
						img: "/static/img/首页进入/cake-5.png",
						price: 154,
						oldprice: 198,
						g: "1磅(454g)"
					},
					{
						img: "/static/img/首页进入/cake-6.png",
						price: 154,
						oldprice: 198,
						g: "1磅(454g)"
					}

				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #FEF7E3;
	}

	.box1 {
		width: 100%;
		height: 792rpx;

		.img-1 {
			width: 100%;
		}
	}


	.box2 {
		width: 100%;
		height: 602rpx;
		margin: 0rpx 0rpx 50rpx 0rpx;

		.box2-1 {
			width: 100%;
			height: 552rpx;

			.img-2 {
				width: 100%;
				height: 552rpx;
			}
		}

		.box2-2 {
			text-align: center;

			.img-3 {
				width: 238rpx;
				height: 50rpx;
				animation-duration: 1s;
				animation-iteration-count: infinite;
			}
		}
	}

	.box3 {
		width: 100%;
		height: 69rpx;
		margin-bottom: 50rpx;
		border-top: 1rpx solid #000;
		border-bottom: 1rpx solid #000;

		.box3-1 {
			width: 676rpx;
			height: 64rpx;
			margin: 0rpx 37rpx 0rpx 37rpx;

			.box3-1-1 {
				display: inline-block;
				width: 226rpx;
				height: 62rpx;
			}

			.box3-1-2 {
				display: inline-block;
				width: 220rpx;
				height: 62rpx;
			}

			.box3-1-3 {
				display: inline-block;
				width: 230rpx;
				height: 62rpx;
			}
		}
	}

	.box4 {
		width: 100%;
		height: 2016rpx;
	}

	.box4-img-1 {
		position: relative;
		width: 100%;
	}

	.box4-1 {
		z-index: 1;
		position: absolute;
		padding: 250rpx 0rpx 80rpx 0rpx;
		width: 100%;
		height: 1968rpx;

		.box4-1-1 {
			float: left;
			width: 340rpx;
			height: 516rpx;
			margin: 0rpx 0rpx 30rpx 24rpx;

			.box4-1-2 {
				width: 376rpx;
				height: 396rpx;

				.box4-img-2 {
					// width: 376rpx;
					// height: 396rpx;
				}

				.box4-1-3 {
					width: 300rpx;
					height: 62rpx;
					margin-left: 20rpx;
					margin-right: 20rpx;
					text-align: center;

					text:nth-child(1) {
						font-size: 25rpx;
						font-family: "Microsoft YaHei";
					}

					text:nth-child(2) {
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						color: #493B66;
					}

					text:nth-child(3) {
						font-size: 32rpx;
						color: #e13601;
						font-family: "Microsoft YaHei";
					}

					text:nth-child(4) {
						margin-left: 10rpx;
						font-size: 24rpx;
						color: #393C3F;
						font-family: "Microsoft YaHei";
						text-decoration: #393C3F line-through;
					}

					text:nth-child(5) {
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
						color: #393C3F;
						text-decoration: #393C3F line-through;
					}
				}

				.box4-1-4 {
					width: 300rpx;
					height: 50rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;

					.box4-1-5 {
						float: left;
						text-align: center;
						width: 138rpx;
						height: 40rpx;
						background-color: #990000;
						color: #fff;
						margin-left: 10rpx;
					}

					.box4-1-6 {
						float: left;
						text-align: center;
						width: 140rpx;
						height: 40rpx;
						background-color: #990000;
						color: #fff;
						margin-left: 10rpx;
					}
				}
			}
		}
	}
	
	.box5{
		padding: 30rpx 0rpx;
		.box5-img{
			width: 100%;
			height: 426rpx;
		}
	}
	
	.box6{
		padding: 30rpx 0rpx;
		.box6-img{
			width: 100%;
			height: 432rpx;
		}
	}
	
	.box7{
		padding: 0rpx 0rpx 40rpx 0rpx;
		.box7-1{
			position: absolute;
			z-index: 1;
			width: 600rpx;
			height: 836rpx;
			margin: 0rpx 76rpx;
			padding: 80rpx 0rpx 0rpx 0rpx;
			.a{
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
			.b{
				margin: 5rpx 0rpx;
				// padding: 0rpx 0rpx 0rpx 36rpx;
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
			.c{
				margin: 5rpx 0rpx;
				// padding: 0rpx 0rpx 0rpx 36rpx;
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
			.d{
				margin: 5rpx 0rpx;
				// padding: 0rpx 0rpx 0rpx 36rpx;
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
			.e{
				margin: 5rpx 0rpx 0rpx 0rpx;
				// padding: 0rpx 0rpx 0rpx 36rpx;
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
			.ot{
				width: 600rpx;
				height: 430rpx;
				padding: 0rpx 0rpx 0rpx 10rpx;
				.f{
					margin: 5rpx 0rpx;
					text{
						font-size: 10rpx;
						font-family: "Microsoft YaHei";
						color: #131313;
					}
				}
				.g{
					margin: 5rpx 0rpx;
					text{
						font-size: 10rpx;
						font-family: "Microsoft YaHei";
						color: #131313;
					}
				}
				.h{
					margin: 5rpx 0rpx;
					text{
						font-size: 10rpx;
						font-family: "Microsoft YaHei";
						color: #131313;
					}
				}
				.i{
					margin: 5rpx 0rpx 0rpx 0rpx;
					text{
						font-size: 10rpx;
						font-family: "Microsoft YaHei";
						color: #131313;
					}
				}
			}
			.j{
				text{
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #131313;
				}
			}
		}
		.box7-img{
			position: relative;
			width: 100%;
			height: 882rpx;
		}
	}
</style>
