<template>
	<view>
		<!-- <u-swipe-action class="">
			<u-swipe-action-item :options="options1" class="">
				<view class="">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">基础使用</text>
					</view>
					<image src="../../static/img/3503662(1).png" mode="widthFix"></image>
				</view>
			</u-swipe-action-item>
		</u-swipe-action> -->
		<!-- <uni-data-checkbox  multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
		
		<uni-data-checkbox   v-model="value" :multiple="true" :localdata="sex" />
		
		<checkbox-group>
			<label>
				<checkbox value="cb" checked="true" color="#fff"/>选中
			</label>
		</checkbox-group> -->
		<!-- <uni-data-select
			 class="b"
		      v-model="value"
		      :localdata="range"
		      @change="change"
		    ></uni-data-select> -->
			<!-- <tui-dropdown-list :show="dropdownShow" :top="94" :height="400">
				<template v-slot:selectionbox>
					点击选择内容块
				</template>
				<template v-slot:dropdownbox>
					
						<text>1</text>
				
						<text>2</text>
			
				</template>
			</tui-dropdown-list> -->
			<input type="text" id="code" name="codeImg" placeholder-class='C3' bindinput='codeImg' placeholder="请输入图形验证码" maxlength="4" v-model="imgCode" @input="submit()"/>
			<view class="code-img-wrapper" @click="updateImageCode">
			  <canvas style="width:100%;height:200rpx;display: inline-block;" canvas-id="canvas"></canvas>
			</view>
			<button v-model="imgCode" @click="submit()"></button>
			
			<!-- <uni-captcha scene="场景值" v-model="o"></uni-captcha>
			
			
			<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :value="index" :range="array">
									<view class="uni-input">{{array[index]}}</view>
								</picker>
							</view>
			
			<fui-dropdown-menu :size="28" selectedColor="#465CFF" 
			:options="options" @click="rangeItemClick" @close="rangeClose" ref="ddmRange"
			:isCheckbox="false" :minWidth='0'>
				<view class="fui-filter__item" @tap="filterTap">
					<text>{{range}}</text>
					<!-- <view class="fui-filter__icon" :class="{'fui-icon__ani':rangeShow}">
						<fui-icon name="turningdown" :size="32"></fui-icon>
					</view> -->
		<!-- 		</view>
			</fui-dropdown-menu> --> 
		<!-- <scroll-view scroll-x="true" class="a">
			<view class="b">
				<view class="c">
					<text>基本</text>
				</view>
				<view class="d">
					<text>删除</text>
				</view>
			</view>
		</scroll-view> -->
	</view>
</template>

<script>
	import { Mcaptcha  } from '@/utils/mcaptcha'
	
	export default {
		data() {
			return {
				imgCode:'',
				o:"",
				 array: ['请选择', '需要', '不需要'],
				 index: 0,
				 
				 
				 
				showMenu:false,
				options: [{
							text: '请选择',
							value: 1,
							checked: true
						}, {
							text: '需要',
							value: 2
						}, {
							text: '不需要',
							value: 3
						}],
						range: '请选择',
						rangeShow: false,
				dropdownShow:true,
				checkbox6: [0],
				value:0,
				hobby: [{
									text: '足球',
									value: 0
								}, {
									text: '篮球',
									value: 1
								}, {
									text: '游泳',
									value: 2
								}],
				sex: [{
									
									value: 0
								}],
								sex1: [{
									
									value: 0
								}, {
									
									value: 1,
									disable: true
								}, {
									
									value: 2
								}],
				// options1: [{
				// 	text: '删除',
				// 	style: {
				// 		backgroundColor: '#ff0000',
				// 	}
				// }]
			};
		},
		methods: {
			// 提交前校验图形验证码
			submit() {
				let validate = this.mcaptcha.validate(this.imgCode)
			  if(this.imgCode == '' || this.imgCode==null) {
			    return uni.showToast({ title: '请输入图形验证码' })
			  }
			  if(!validate) {
			    return uni.showToast({ title: '图形验证码错误' })
			  }
			
			},
			// 刷新验证码
			updateImageCode() {
			  this.mcaptcha.refresh()
			},
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.detail.value)
			            this.index = e.detail.value
			        },
			filterTap() {
				//显示下拉框
				this.$refs.ddmRange.show()
				this.rangeShow = true;
			},
			rangeItemClick(e) {
				console.log(e)
				this.range = e.text
				this.rangeClose()
			},
			rangeClose() {
				this.rangeShow = false;
			}
		},
		onReady() {
		   this.mcaptcha = new Mcaptcha({
		     el: 'canvas',
		     width: 220,
		     height: 35,
		     createCodeImg: ""
		   });
		 },
	};
</script>

<style lang="scss">
	.code-img-wrapper{
		width: 100%;
		height: 50rpx;
	}
	.fui-filter__item {
		width: 100rpx;
		height: 45rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		background-color: #fff;
	}
	
	.fui-filter__icon {
		transition: all .15s linear;
	}
	
	.fui-icon__ani {
		transform: rotate(180deg);
	}

	.c{
		
		white-space: nowrap;
		width: 745rpx;
		// height: 1000rpx;
		
		background-color: #fff;
	}
	.b{
		width: 200rpx;
		height: 200rpx;
		// height: 1000rpx;
		// background-color: #000;
	}
	.d{
		white-space: nowrap;
		width: 50rpx;
		// height: 1000rpx;
		background-color: #ff0000;
	}
	// .u-page {
	//     padding: 0;
	// }

	// .u-demo-block__title {
	//     padding: 10px 0 2px 15px;
	// }

	.swipe-action {
		&__content {
			// width: 500rpx;
			// height: 100000rpx;
			padding: 25rpx 0;

			&__text {
				font-size: 15px;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}
</style>
