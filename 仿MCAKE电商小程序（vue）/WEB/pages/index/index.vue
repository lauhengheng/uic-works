<template>
	<view>
		<!-- 占格区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		
		<!-- 首页滑动区域 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			:circular="true">
			<swiper-item v-for="(item, index) in banner" :key="index" @click="navTOxindex(index)">
				<view class="swiper-item">
					<image :src="item.img" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>		
		
		<!-- 第一索引区域 -->
		<title-list wTitle="本季" sTitle="推荐" enTitle="Seasonal Recommend" :flag="false"></title-list>		
		<!-- 第一索引区域配图 -->
		<scroll-view scroll-x="true" class="scroll">
			<view class="scroll-inner">
				<image src="../../static/img/配图/07f182e9ddccf6c2.jpg" mode="heightFix" @click="img1()"></image>
				<!-- <image src="../../static/img/配图/recommend1.jpeg" mode="heightFix"></image> -->
				<image src="../../static/img/配图/596d128570564100.jpg" mode="heightFix" @click="img2()"></image>
				<image src="../../static/img/配图/e7b8d32f87aba937.jpg" mode="heightFix" @click="img3()"></image>
				<!-- <image src="../../static/img/配图/recommend2.jpg" mode="heightFix"></image> -->
				<!-- <image src="../../static/img/配图/recommend3.jpg" mode="heightFix"></image> -->
			</view>		
		</scroll-view>
		
		
		<!-- 第二索引区域 -->
		<title-list wTitle="法式" sTitle="经典" enTitle="French Classics" :flag="true"></title-list>
		<!-- 第二索引区域配图 -->
		<view class="F-img">
			<image src="../../static/img/配图/french.jpg" mode="" @click="home1()"></image>
		</view>	
		<!-- 第二索引区域商品详情区域 -->
		<home-goods :frenchGoods="frenchGoods" :frenchFlag="true" :festicalFlag='false' :childrenFlag='false'></home-goods>
		
		
		<!-- 第三索引区域 -->
		<title-list wTitle="节日" sTitle="庆典" enTitle="Festival celebration" :flag="true"></title-list>	
		<!-- 第三索引区域配图 -->
		<view class="F-img">
			<image src="../../static/img/配图/257f85e0fa92561a.jpg" mode="" @click="home2()"></image>		
		</view>		
		<!-- 第三索引区域商品详情区域 -->		
		<home-goods :festivalGoods='festivalGoods' :childrenFlag='false' :festivalFlag='true' :frenchFlag="false"></home-goods>
	
	
		<!-- 第四索引区域 -->
		<title-list wTitle="儿童" sTitle="系列" enTitle="Children Series" :flag="true"></title-list>
		<!-- 第四索引区域配图 -->
		<view class="F-img">
			<image src="../../static/img/配图/5a0afa6b76da54fb.jpg" mode="" @click="home3()"></image>		
		</view>
		<!-- 第四索引区域商品详情区域 -->
		<home-goods :childrenGoods='childrenGoods' :childrenFlag='true' :festivalFlag='false' :frenchFlag="false"></home-goods>	
	
	
		<!-- 底部二维码区域 -->
		<view class="outside-footer bg-white">
			<view class="inside-footer">
				<view class="footer-img">
					<image src="/static/img/logo2.png" mode="widthFix"></image>
				</view>
				<view class="wx-img">
					<image src="../../static/img/wx_code.jpg" mode="widthFix"></image>
				</view>
				<view class="fs-img">
					<image src="/static/img/weibo.png" mode="widthFix"></image>
					<image src="/static/img/weixin.png" mode="widthFix"></image>
				</view>
				<view class="footer-title-1">
					<text>----------版权---------- </text>
				</view>
				<view class="footer-title-2">
					<text>----------备案号----------</text>
				</view>
			</view>
		</view>
		
		
		<!-- 底部区域 -->
		<all-footer></all-footer>
	</view>
</template>

<script>
	
	import secondHeader from "../../components/second-header.vue"
	import midTitle from "../../components/title-list.vue"
	import homeGoods from "../../components/home-goods.vue"
	import allFooter from "../../components/all-footer.vue"
	
	export default {
		data() {
			return {
				n1:'摩登风情',
				n2:'甜甜莓莓',
				n3:'蔓越莓红丝绒',
				h1:'经典香草拿破仑',
				h2:'甜愿·生日蛋糕',
				h3:'黛西的旅行',
				headerFlag:false,
				frenchGoods:[],
				festivalGoods:[],
				childrenGoods:[],
				banner: [{
						id: 1,
						img: "../../static/img/5d13ed8857f4e3d6.jpg"
					},
					{
						id: 2,
						img: "../../static/img/banner.jpg"
					}
				]
			}
		},
		onLoad() {
				this.getFrenchGoods()
				this.getFestivalGoods()
				this.getChildrenGoods()
		},
		methods: {
				async getFrenchGoods(){
					 const res = await uniCloud.callFunction({
						name:"home_goods_list",
						data:{
							action:"French"
						}
					})
					this.frenchGoods = res.result.data
				},
				
				async getFestivalGoods(){
					const res = await uniCloud.callFunction({
						name:"home_goods_list",
						data:{
							action:"Festival"
						}
					})
					this.festivalGoods = res.result.data
				},
				
				async getChildrenGoods(){
					const res = await uniCloud.callFunction({
						name:"home_goods_list",
						data:{
							action:"Children"
						}
					})
					this.childrenGoods = res.result.data					
				},
				navTOxindex(index){
					uni.navigateTo({
						url:"/pages/xindex/xindex"
					})
				},
				img1(){
					this.goodsName = JSON.stringify(this.n1)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				},
				img2(){
					this.goodsName = JSON.stringify(this.n2)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				},
				img3(){
					this.goodsName = JSON.stringify(this.n3)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				},
				home1(){
					this.goodsName = JSON.stringify(this.h1)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				},
				home2(){
					this.goodsName = JSON.stringify(this.h2)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				},
				home3(){
					this.goodsName = JSON.stringify(this.h3)
					uni.navigateTo({
						url:`/pages/cakes-detail/cakes-detail?goodsName=${this.goodsName}`
					})
				}
				
		},
		components: {
			"second-header": secondHeader,
			"title-list": midTitle,
			"home-goods":homeGoods,
			"all-footer":allFooter
		}
	}
</script>

<style lang="scss">
	.banner {
		height: 792rpx;
		.swiper-item {
			height: 792rpx;
			// image{
			// width: 100%;
			// height: 500rpx;
			// }
		}
	}
	
	.scroll {
		display: flex;
		.scroll-inner {
			white-space: nowrap;
			image {
				height: 300rpx;
			}
		}
	}

	.F-img {
		display: flex;
		image {
			width: 100%;
			height: 380rpx;
		}
	}

	.outside-footer{
		width: 100%;
		height: 886rpx;
		.inside-footer{
			float: left;
			background-color: #000000;
			width: 100%;
			height: 826rpx;
			margin-top: 60rpx;
			.footer-img{
				text-align: center;
				image{
					margin-top: 112rpx;
					width: 226rpx;
					height: 34rpx;
				}
			}
			.wx-img{
				text-align: center;
				image{
					margin-top: 50rpx;
					width: 226rpx;
					height: 226rpx;
				}
			}
			.fs-img{
				text-align: center;
				image:nth-child(1){
					width: 76rpx;
					height: 76rpx;
					margin-top: 50rpx;
					margin-right: 10rpx;
				}
				image:nth-child(2){
					width: 76rpx;
					height: 76rpx;
					margin-top: 50rpx;
					margin-left: 10rpx;
				}
			}
			.footer-title-1{
				text-align: center;
				margin-top: 34rpx;
				color: #9c9c9c;
			}
			.footer-title-2{
				text-align: center;
				color: #9c9c9c;
			}
		}
	}
</style>