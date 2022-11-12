<template>
	<view>
		<swiper class="swiper-box" :indicator-dots="true"
		:autoplay="true" :interval="3000" :duration="1000" 
		indicator-color="#fff" indicator-active-color="#ffe32a"
		v-for="item in goodsDetail" :key="item.id">
			<swiper-item v-if="item.img1Flag">
				<view class="swiper-item">
					<image :src="item.img1" mode="widthFix"></image>
				</view>	
			</swiper-item>
			<swiper-item v-if="item.img2Flag">
				<view class="swiper-item">
					<image :src="item.img2" mode="widthFix"></image>
				</view>	
			</swiper-item>
			<swiper-item v-if="item.img3Flag">
				<view class="swiper-item">
					<image :src="item.img3" mode="widthFix"></image>
				</view>	
			</swiper-item>
			<swiper-item v-if="item.img4Flag">
				<view class="swiper-item">
					<image :src="item.img4" mode="widthFix"></image>
				</view>	
			</swiper-item>
		</swiper>	
		<!-- 商品信息区域 -->
		<view class="detail-box" v-for="(item, index) in goodsDetail" :key="index">
			<!-- 商品名字 -->
			<view class="big-title">
				<text>{{item.title}}</text>
			</view>
			<!-- 外文名字 -->
			<view class="en-title">
				<text>{{item.en_title}}</text>
			</view>
			<!-- 商品磅数 -->
			<view class="col-title">
				<view class="g-title">
					<text>{{item.bnum}}</text>
				</view>
				<view class="p-title">
					<text>{{item.pnum}}</text>
				</view>
			</view>
			<!-- 商品价格 -->
			<view class="num-box">
				<view class="num-title">
					<text>￥</text>
					<text>{{item.price}}</text>
				</view>
			</view>		
			<!-- 常规提示区域 -->
			<view class="tool-box">
				<!-- 时间 -->
				<view class="tool-title">
					<view class="tool-1">
						<view class="iconfont icon-unie65f"></view>
						<!-- v-if="timeFlag" -->
						<view class="text-1" v-if="item.timeFlag">
							<text>{{item.time}}</text>
						</view>	
					</view>
					<!-- 大小 -->
					<view class="tool-2" v-if="item.vFlag">
						<view class="iconfont icon-biaoqian1"></view>
						<!-- v-if="vFlag" -->
						<view class="text-2">
							<text>{{item.v}}</text>
						</view>
					</view>
					
					<!-- 用具 -->
						<view class="tool-img" v-if="item.toolFlag">
							<view class="img-1">
								<image src="/static/img/icon_nb1.png" mode="widthFix"></image>
							</view>
						</view>
						<!-- v-if="toolFlag" -->
						<view class="text-3" >
							<text>{{item.toolnum}}</text>
						</view>
				</view>
			</view>			
			<!-- 红提示区域 -->
			<!-- v-if="redFlag" -->
			<view class="red-box" v-if="item.redFlag">
				<view class="text-box" >
					<image src="/static/img/新图网_感叹号_ixintu.com.png" mode="widthFix"></image>
					<text>
						{{item.redtitle}}
					</text>		
				</view>				
			</view>
			<!-- 简介区域 -->
			<view class="ce-box">
				<!-- 中文 -->
				<!-- v-if="detailFlag" -->
				<view class="c-box" v-if="item.detailFlag">
					<text>
						{{item.detail}}
					</text>
				</view>
				<!-- 外文 -->
				<!-- v-if="endetailFlag" -->
				<view class="e-box" v-if="item.endetailFlag">
					<text>
						{{item.endetail}}
					</text>
				</view>
			</view>		
		</view>
				
		<view class="main">
			<view class="main-in">
				<view class="main-lift">
					<text>促销</text>
				</view>
				<view class="main-cx">
					<view class="cx-1">
						<view class="cx-ti-1">
							<text>换购</text>
						</view>
						<view class="cx-ti-2">
							<text>买蛋糕可至购物车参加优惠换购</text>
						</view>
					</view>
					<view class="cx-2">
						<view class="cx-ti-1">
							<text>赠券</text>
						</view>
						<view class="cx-ti-2">
							<text>2022年新人活动</text>
						</view>
					</view>
				</view>
				<view class="main-right">
					<view class="main-title">
						<text>详情</text>
					</view>
					<view class="iconfont icon-xiayiyeqianjinchakangengduo">
						
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部分页区域 -->
		<view class="message-box">
			<!-- 分页点击事件区域 -->
			<view class="choose-box">
				<!-- 基本信息 -->
				<view class="base" @click="chooseBase()" :style="{borderBottom:baseColor}">
					<text :style="{color:baseTcolor}">基本信息</text>
				</view>
				<!-- 商品点评 -->
				<view class="goods" @click="chooseGoods()" :style="{borderBottom:goodsColor}">
					<text :style="{color:goodsTcolor}">商品点评</text>
				</view>
				<!-- 商品详情 -->
				<view class="more" @click="chooseMore()" :style="{borderBottom:moreColor}">
					<text :style="{color:moreTcolor}">商品详情</text>
				</view>
			</view>
			
			<!-- 底部分页显示区域 -->
			<view class="all-box" v-for="(item, index) in goodsDetail" :key="index">
				<!-- 基本信息区域 -->
				<view class="base-box" v-if="baseFlag">
					<!-- v-if="dFlag" -->
					<view class="base-title" v-if="item.dFlag">
						<view class="title-box">
							<view class="sw">
								<view class="sw-title">
									<text>Sweetness 甜味</text>
								</view>
								<view class="sw-img">
									<!-- v-if="bbt1Flag" -->
									<image src="/static/img/3503662(1).png" mode="widthFix" v-if="item.bbt1"></image>
									<!-- v-if="bbt2Flag" -->
									<image src="/static/img/3503662(1).png" mode="widthFix" v-if="item.bbt2"></image>
									<!-- v-if="bbt3Flag" -->
									<image src="/static/img/3503662(1).png" mode="widthFix" v-if="item.bbt3"></image>
								</view>
							</view>
							
							<view class="wd">
								<view class="wd-title">
									<text>Base 口味基底</text>
								</view>
								<view class="wd-etitle">
									<text>{{item.base}}</text>
								</view>
							</view>
							
							<view class="wd">
								<view class="wd-title">
									<text>Texture 口感</text>
								</view>
								<view class="wd-etitle">
									<text>{{item.texture}}</text>
								</view>
							</view>
							
							<view class="wd">
								<view class="wd-title">
									<text>Flavor 口味</text>
								</view>
								<view class="wd-etitle">
									<text>{{item.flavor}}</text>
								</view>
							</view>
						</view>
						<view class="kon">
							
						</view>
					</view>
					<view class="buyfooter"></view>
				</view>
				<!-- 商品点评区域 -->
				<view class="goods-box" v-else-if="goodsFlag">
					<view class="goods-title">
						<view class="title-out">
							<view class="title-in">
								<text>暂无评价</text>
							</view>
							<view class="buyfooter"></view>
						</view>
					</view>
				</view>
				<!-- 商品详情区域 -->
				<view class="more-box" v-else-if="moreFlag">
					<!-- v-if="mFlag" -->
					<view class="more-img" v-if="item.mFlag">
						<image :src="item.detail_img" mode="widthFix"></image>
						<view class="buyfooter"></view>
					</view>
				</view>
			</view>		
		</view>
			
		<!-- <view class="buyfooter"></view>	 -->
	</view>
</template>

<script>
	export default {
		props:['goodsDetail'],
		data() {
			return {
				baseFlag: true,
				goodsFlag: false,
				moreFlag: false,
				baseColor: '4rpx solid #ffcd20',
				goodsColor: '',
				moreColor: '',
				baseTcolor: '#000',
				goodsTcolor: '#888888',
				moreTcolor: '#888888'
			}
		},
		methods:{
			chooseBase(){
				this.baseFlag = true
				this.goodsFlag = false
				this.moreFlag = false
				this.baseColor = '4rpx solid #ffcd20'
				this.goodsColor = ''
				this.moreColor = ''
				this.baseTcolor = '#000',
				this.goodsTcolor = '#888888',
				this.moreTcolor = '#888888'
			},
			chooseGoods(){
				this.baseFlag = false
				this.goodsFlag = true
				this.moreFlag = false
				this.baseColor = ''
				this.goodsColor = '4rpx solid #ffcd20'
				this.moreColor = ''
				this.baseTcolor = '#888',
				this.goodsTcolor = '#000',
				this.moreTcolor = '#888888'
			},
			chooseMore(){
				this.baseFlag = false
				this.goodsFlag = false
				this.moreFlag = true
				this.baseColor = ''
				this.goodsColor = ''
				this.moreColor = '4rpx solid #ffcd20'
				this.baseTcolor = '#888',
				this.goodsTcolor = '#888888',
				this.moreTcolor = '#000'
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
	
	.swiper-box{
		width: 100%;
		height: 750rpx;
		.swiper-item{
			// width: 750rpx;
			// height: 750rpx;
		}
	}
	
	.detail-box{
		width: 100%;
		height: auto;
		padding: 15rpx 15rpx 0rpx;
		.big-title{
			width: 100%;
			height: 75rpx;
			margin: 15rpx 0rpx 0rpx;
			text-align: center;
			text{
				color: #000;
				font-size: 45rpx;
				font-family: "Microsoft YaHei";
			}
		}
		.en-title{
			width: 100%;
			height: 40rpx;
			margin: 0rpx 0rpx 30rpx;
			text-align: center;
			text{
				color: #000;
				font-size: 30rpx;
				font-family: "Microsoft YaHei";
			}
		}
		.col-title{
			width: 100%;
			height: 105rpx;
			padding: 22.5rpx 10rpx;
			background-color: #ffcd20;
			.g-title{
				width: 100%;
				height: 30rpx;
				text-align: center;
				text{
					font-size: 30rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
			.p-title{
				width: 100%;
				height: 30rpx;
				text-align: center;
				text{
					font-size: 24rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
		}
		.num-box{
			width: 100%;
			height: 92rpx;
			padding: 15rpx 0rpx;
			.num-title{
				width: 100%;
				height: 62rpx;
				text:nth-child(1){
					float: left;
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
					color: #000;
					margin: 15rpx 0rpx;
				}
				text:nth-child(2){
					font-size: 48rpx;
					font-family: "Microsoft YaHei";
					color: #000;
				}
			}
		}
		.tool-box{
			width: 100%;
			height: 120rpx;
			// height: auto;
			border-bottom: 1rpx solid #e9e9e9;
			border-top: 1rpx solid #e9e9e9;
			.tool-title{
				width: 100%;
				height: 100rpx;
				// height: auto;
				padding: 15rpx 0rpx 0rpx;
				.tool-1{
					display: inline-block;
					width: 254rpx;
					height: 63rpx;
					.iconfont{
						display: inline-block;
						width: 50rpx;
						height: 58rpx;
						text-align: center;
						color: #bfbfbf;
						font-size: 35rpx;
					}
					.text-1{
						display: inline-block;
						width: 198rpx;
						height: 32rpx;
						text{
							width: 160rpx;
							height: 32rpx;
							font-size: 24rpx;
							color: #8d8d8d;
							font-family: "Microsoft YaHei";
						}
					}
				}
				.tool-2{
					display: inline-block;
					width: 450rpx;
					height: 63rpx;
					.iconfont{
						display: inline-block;
						width: 50rpx;
						height: 58rpx;
						text-align: center;
						color: #bfbfbf;
						font-size: 35rpx;
					}
					.text-2{
						display: inline-block;
						width: 300rpx;
						height: 32rpx;
						text{
							width: 160rpx;
							height: 32rpx;
							font-size: 24rpx;
							color: #8d8d8d;
							font-family: "Microsoft YaHei";
						}
					}
				}	
						.tool-img{
							display: inline-block;
							// float: left;
							width: 20rpx;
							height: 30rpx;
							margin: 3rpx 0rpx 0rpx 15rpx;
							.img-1{
								width: 20rpx;
								height: 20rpx;
							}
						}
				
					.text-3{
						display: inline-block;
						// float: left;
						width: 150rpx;
						height: 32rpx;
						margin: 0rpx 0rpx 10rpx 16rpx;
						text{
							width: 124rpx;
							height: 32rpx;
							font-size: 24rpx;
							color: #8d8d8d;
							font-family: "Microsoft YaHei";
						}						
					}
			}
		}	
		.red-box{
			padding: 15rpx 0rpx;
			border-bottom: 1rpx solid #e9e9e9;
			width: 100%;
			// height: 129.5rpx;
			height: auto;
			.text-box{
				padding: 7.5rpx 0rpx 0rpx;
				width: 680rpx;
				// height: 88rpx;
				height: auto;
				text-align: left;
				line-height: 35rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 0rpx 5rpx;
				}
				text{
					font-size: 24rpx;
					color: #f0250f;
					
				}
			}
		}
	
		.ce-box{
			width: 720rpx;
			// height: 444.5rpx;
			height: auto;
			padding: 15rpx;
			border-bottom: 1rpx solid #e9e9e9;
			.c-box{
				width: 690rpx;
				// height: 165rpx;
				height: auto;
				line-height: 40rpx;
				text{
					font-size: 24rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
			.e-box{
				width: 690rpx;
				// height: 247.5rpx;
				height: auto;
				line-height: 40rpx;
				text{
					font-size: 24rpx;
					color: #8d8d8d;
					font-family: "Microsoft YaHei";
				}
			}
		}
	
	}
	
	.main{
		width: 100%;
		height: 155rpx;
		// height: auto;
		border-bottom: 1rpx solid #e9e9e9;
		.main-in{
			width: 100%;
			height: 155rpx;
			// height: auto;
			padding: 22.5rpx;
			.main-lift{
				float: left;
				width: 82rpx;
				height: 108rpx;
				text{
					color: #8d8d8d;
					font-size: 24rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.main-right{
				width: 82rpx;
				height: 108rpx;
				float: left;
				.main-title{
					float: left;
					width: 48rpx;
					height: 108rpx;
					text{
						color: #8d8d8d;
						font-size: 24rpx;
						font-family: "Microsoft YaHei";
					}
				}
				.icon-xiayiyeqianjinchakangengduo{
					float: left;
					width: auto;
					height: auto;
					font-size: 30rpx;
					color: #c9c9c9;
					padding: 5rpx 0rpx 0rpx 0rpx;
				}
				
			}
			.main-cx{
				float: left;
				width: 539rpx;
				height: 108rpx;
				.cx-1{
					width: 539rpx;
					height: 43rpx;
					margin: 0rpx 0rpx 22.5rpx;
					padding: 0rpx 0rpx 6.5rpx;
					.cx-ti-1{
						display: inline-block;
						width: 82rpx;
						height: 36rpx;
						text-align: center;
						border: 1rpx solid #f51127;
						border-radius: 0.6rem;
						text{
							color: #f51127;
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
						}
					}
					.cx-ti-2{
						display: inline-block;
						height: 32rpx;
						text{
							color: #8d8d8d;
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
							padding: 0rpx 0rpx 0rpx 10rpx ;
						}
					}
				}
				.cx-2{
					width: 539rpx;
					height: 43rpx;
					// height: auto;
					.cx-ti-1{
						display: inline-block;
						width: 82rpx;
						height: 36rpx;
						text-align: center;
						border: 1rpx solid #f51127;
						border-radius: 0.6rem;
						text{
							color: #f51127;
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
						}
					}
					.cx-ti-2{
						display: inline-block;
						height: 32rpx;
						text{
							color: #8d8d8d;
							font-size: 24rpx;
							font-family: "Microsoft YaHei";
							padding: 0rpx 0rpx 0rpx 10rpx ;
						}
					}
				}
			}
		}
	}
	
		
	.message-box{
		width: 100%;
		// height: 2020rpx;
		height: auto;
		padding: 15rpx 15rpx 0rpx;
		.choose-box{
			width: 720rpx;
			height: 90rpx;
			text-align: center;
			border-bottom: 1rpx solid #e9e9e9;
			.base{
				display: inline-block;
				width: 240rpx;
				height: 90rpx;
				padding: 22.5rpx 10rpx;
				text{
					font-size: 37.5rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
			.goods{
				display: inline-block;
				width: 240rpx;
				height: 90rpx;
				padding: 22.5rpx 10rpx;
				text{
					font-size: 37.5rpx;
					color: #000;
					font-family: "Microsoft YaHei";;
				}
			}
			.more{
				display: inline-block;
				width: 240rpx;
				height: 90rpx;
				padding: 22.5rpx 10rpx;
				text{
					font-size: 37.5rpx;
					color: #000;
					font-family: "Microsoft YaHei";;
				}
			}
		}
		.all-box{
			width: 720rpx;
			height: auto;
			// border-bottom: 1rpx solid #bfbfbf;
			.base-box{
				width: 720rpx;
				height: 406rpx;
				.base-title{
					width: 720rpx;
					height: 406rpx;
					padding: 30rpx 0rpx 0rpx;
					.title-box{
						// display: inline-block;
						width: 720rpx;
						height: 152rpx;
						.sw{
							width: 720rpx;
							height: 40rpx;
							text-align: left;
							padding: 0rpx 20rpx;
							.sw-title{
								display: inline-block;
								width: 226rpx;
								height: 40rpx;
								text{
									font-size: 24rpx;
									color: #8d8d8d;
									font-family: "Microsoft YaHei";
									}
								}
							.sw-img{
								display: inline-block;
								text-align: right;
								width: 452rpx;
								height: 40rpx;
								image{
									width: 32rpx;
									height: 32rpx;
								}
							}
						}
						.wd{
							width: 720rpx;
							height: 37.5rpx;
							text-align: left;
							padding: 0rpx 20rpx;
							.wd-title{
								display: inline-block;
								height: 37.5rpx;
								width: 226rpx;
								text{
									font-size: 24rpx;
									color: #8d8d8d;
									font-family: "Microsoft YaHei";
								}
							}
							.wd-etitle{
								display: inline-block;
								text-align: right;
								width: 452rpx;
								height: 37.5rpx;
								text{
									font-size: 24rpx;
									color: #8d8d8d;
									font-family: "Microsoft YaHei";
								}
							}
						}
					}
					.kon{
						width: 720rpx;
						height: 190rpx;
						border-bottom: 1rpx solid #e9e9e9;
					}
				}
			}
			.goods-box{
				width: 720rpx;
				height: 406rpx;
				.goods-title{
					width: 720rpx;
					height: 406rpx;
					padding: 30rpx 0rpx 0rpx;
					background-color: #f9f9f9;
					.title-out{
						width: 720rpx;
						height: 375rpx;
						padding: 15rpx 15rpx 15rpx 25rpx;
						text-align: center;
						.title-in{
							width: 682.5rpx;
							height: 345rpx;
							padding: 150rpx 0rpx;
							text{
								// width: 682.5rpx;
								// padding: 150rpx;
								font-size: 30rpx;
								color: #8d8d8d;
								font-family: "Microsoft YaHei";
								
							}
						}
					}
				}
			}
			.more-box{
				width: 720rpx;
				height: 300rpx;
				.more-img{
					width: 720rpx;
					height: auto;
					image{
						width: 720rpx;
						padding: 30rpx 0rpx 0rpx 0rpx;
					}
				}
			}
		}
	}
	
	
	.buyfooter{
		width: 100%;
		height: 120rpx;
	}
</style>