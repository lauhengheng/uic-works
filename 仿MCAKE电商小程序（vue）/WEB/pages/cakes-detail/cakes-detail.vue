<template>
	<view class="">
		<!-- 头部区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		<!-- 商品内容 -->
		<cakes-sum :goodsDetail="goodsDetail"></cakes-sum>
		<!-- 详情底部 -->
		<!-- <cakes-footer></cakes-footer> -->
		<view class="buy-box">
			<view class="buy-in">
				<view class="buy">
					<view class="buy-ti" @click="goBuy()">
						<text>立即购买</text>
					</view>
				</view>
				<view class="car">
					<view class="car-ti" @click="addCar()">
						<text>加入购物车</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"
	import cakesFooter from "../../components/cakes-footer.vue"
	import cakesSum from "../../components/cakes-sum.vue"
	
	export default{
		components: {
			"second-header": secondHeader,
			"cakes-footer": cakesFooter,
			"cakes-sum": cakesSum

		},
		data(){
			return{
				title:'',
				goodsDetail:[],
				headerFlag:true
			}
		},
		methods:{
				async getSum(){
						const res = await uniCloud.callFunction({
							name:"cakes_sum_list",
							data:{
								title:this.title
							}
						})
						this.goodsDetail = res.result.data
					},
				 addCar(){
					uni.showLoading()
					setTimeout(function() {
						uni.hideLoading()
						uni.showToast({
							icon:"none",
							title:"已成功加入购物车！"
						})
					}, 1000);
					const db = uniCloud.database()
					db.collection('car_goods').add(this.goodsDetail)
				},
				goBuy(){
					const db = uniCloud.database()
					db.collection('car_goods').add(this.goodsDetail)
					uni.showLoading()
					setTimeout(function() {
						uni.hideLoading()
						uni.navigateTo({
							url:"/pages/car/car"
						})
					}, 500);
				}
		},
		onLoad:function(e){
			let n = JSON.parse(e.goodsName)
			this.title = n
			// console.log(this.title);
			this.getSum()
		},
		
			
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