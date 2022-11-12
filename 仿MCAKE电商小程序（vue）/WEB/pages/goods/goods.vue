<template>
	<view class="">
		<!-- 头部区域 -->
		<second-header :headerFlag="headerFlag"></second-header>
		<!-- 分类选择z-index区域 -->
		<view class="goods-detail">
			<view class="detail-box">
				<view class="cake-out-box" v-for="(item, index) in headerGroup" :key="index" @click="changeDetailHeader(index)">
					<view class="cake-in-box" :style="{borderRight:item.borderRight}">
						<text :style="{color:item.color}">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 分类选择区域 -->
		<xd-header></xd-header>
		<!-- 蛋糕区域 -->
		<cake-list :cakeList="cakeList" :bcakeList="bcakeList" 
				   :sfoodsList="sfoodsList" :toolsList="toolsList"
				   :cakeFlag="cakeFlag" :bcakeFlag="bcakeFlag" 
				   :sfoodsFlag="sfoodsFlag" :toolsFlag="toolsFlag"></cake-list>
		<!-- 底部区域 -->
		<xd-footer></xd-footer>
		<!-- 底部z-index区域 -->
		<all-footer :footerGroup="footerGroup"></all-footer>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"
	import allFooter from "../../components/all-footer.vue"
	import cakesList from "../../components/cake-list.vue"
	import xdHeader from "../../components/xd-header.vue"
	import xdFooter from "../../components/xd-footer.vue"

	export default {
		components: {
			"second-header": secondHeader,
			"all-footer": allFooter,
			"cake-list":cakesList,
			"xd-header":xdHeader,
			"xd-footer":xdFooter
		},
		data() {
			return {
				headerFlag:true,
				pageindex:1,
				cakeList:[],
				bcakeList:[],
				toolsList:[],
				sfoodsList:[],
				cakeFlag:true,
				bcakeFlag:false,
				sfoodsFlag:false,
				toolsFlag:false,
				footerGroup: [
					{
						img: "/static/img/底部/下载 (5).png",
						title: "首页",
						backgroundColor: '#fff',
						color: "#bebebe",
						flag:true
					},
					{
						img: "/static/img/底部/下载 (4).png",
						title: "分类",
						backgroundColor: '#ffcd3a',
						color: "#000",
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
						img: "/static/img/底部/下载 (3).png",
						title: "我的",
						backgroundColor: '#fff',
						color: "#bebebe",
						flag:false
					}
				],
				headerGroup: [
						{
							title:"蛋糕",
							color:"#000",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"面包",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"小食",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"配件",
							color:"#c5c5c5",
						}		
				]
			}
		},
		methods: {
			async getCakeList(){
				const res = await uniCloud.callFunction({
					name:"cake_goods_list",
					data:{
						pageindex:this.pageindex
					}
				})
				this.cakeList = [...this.cakeList, ...res.result.data]
			},
			async getBcakeList(){
				const res = await uniCloud.callFunction({
					name:"bcake_goods_list",
					data:{
						pageindex:this.pageindex
					}
				})
				this.bcakeList = [...this.bcakeList, ...res.result.data]
			},
			async getSFoodsList(){
				const res = await uniCloud.callFunction({
					name:"sfoods_goods_list",
					data:{
						pageindex:this.pageindex
					}
				})
				this.sfoodsList = [...this.sfoodsList, ...res.result.data]
			},
			async getToolsList(){
				const res = await uniCloud.callFunction({
					name:"tools_goods_list",
					data:{
						pageindex:this.pageindex
					}
				})
				this.toolsList = [...this.toolsList, ...res.result.data]
			},	
			changeDetailHeader(index){
				if(index === 0){
					this.cakeFlag = true
					this.bcakeFlag = false
					this.sfoodsFlag = false
					this.toolsFlag = false
					this.headerGroup = [
						{
							title:"蛋糕",
							color:"#000",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"面包",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"小食",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"配件",
							color:"#c5c5c5",
						}						
					]
				}else if(index === 1){
					this.cakeFlag = false
					this.bcakeFlag = true
					this.sfoodsFlag = false
					this.toolsFlag = false
					this.headerGroup = [
						{
							title:"蛋糕",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"面包",
							color:"#000",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"小食",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"配件",
							color:"#c5c5c5",
						}					
				]
				}else if(index === 2){
					this.cakeFlag = false
					this.bcakeFlag = false
					this.sfoodsFlag = true
					this.toolsFlag = false
					this.headerGroup = [
						{
							title:"蛋糕",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"面包",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"小食",
							color:"#000",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"配件",
							color:"#c5c5c5",
						}		
					]
				}else if(index === 3){
					this.cakeFlag = false
					this.bcakeFlag = false
					this.sfoodsFlag = false
					this.toolsFlag = true
					this.headerGroup = [
						{
							title:"蛋糕",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"面包",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"小食",
							color:"#c5c5c5",
							borderRight: "1rpx solid #c5c5c5"
						},
						{
							title:"配件",
							color:"#000",
						}			
					]
				}
			}
		},
		onLoad() {
			this.getCakeList()
			this.getBcakeList()
			this.getSFoodsList()
			this.getToolsList()
		},
		onReachBottom() {
			this.pageindex++
			setTimeout(()=>{
				this.getCakeList()
				this.getBcakeList()
				this.getSFoodsList()
				this.getToolsList()
			},100)
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail {
		width: 100%;
		height: 82rpx;
		background-color: #fff;
		z-index: 1;
		position: fixed;
		border-bottom: 1rpx solid #c5c5c5;
		.detail-box {
			position: relative;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 720rpx;
			height: 82rpx;
			background-color: #7f7f7f;	
			.cake-out-box {
				float: left;
				width: 180rpx;
				height: 82rpx;
				background-color: #fff;
				border-bottom: 1rpx solid #c5c5c5;
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
