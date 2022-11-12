<template>
	<view>
		<!-- 头部区域 -->
		<second-header :headerFlag='headerFlag'></second-header>
		
		<view class="login-out-box-1" v-if="show">
			<view class="login-change-box">
				<view class="phone-change-box">
					<text>手机验证码登录</text>
				</view>
				<view class="up-change-box" @click="changeShow()">
					<text>账号密码登录</text>
				</view>
			</view>
			<view class="phoneNum-box">
				<view class="img">
					<u-icon class="pi" size="30" name="phone" color="#7f7f7f"></u-icon>
				</view>
				<input type="number" placeholder="手机号码">
			</view>
			<view class="" style="display: flex;">
				<view class="pic-box">
					<view class="img">
						<u-icon class="pi" size="30" name="photo" color="#7f7f7f"></u-icon>
					</view>
					<input type="number" placeholder="图片验证码" v-model="imgCode" maxlength="4">
				</view>
				<view class="code-img-wrapper" @click="updateImageCode">
				  <canvas style="width:288rpx;height:93rpx;" canvas-id="canvas"></canvas>
				</view>
			</view>
			<view class="" style="display: flex;">
				<view class="codeP-box">
					<view class="img">
						<u-icon class="pi" size="30" name="lock" color="#7f7f7f"></u-icon>
					</view>
					<input type="number" placeholder="请输入验证码">
				</view>
				<view class="numcode-box">
					<text>点击发送验证码</text>
				</view>
			</view>
			<view class="zf-box">
				<view class="z-box">
					<text @click="navToRegistration()">立即注册</text>
				</view>
				<view class="fenge-box">
					<text>|</text>
				</view>
				<view class="forgetP-box">
					<text @click="navToForgetPassword()">忘记密码</text>
				</view>
			</view>
			<view class="login-go">
				<view class="lg-title" @click="submit()">
					<text>立即登录</text>
				</view>
			</view>
		</view>
		
		<view class="login-out-box-2" v-if="!show">
			<view class="change-box">
				<view class="phone-change-box" @click="changeShow()">
					<text>手机验证码登录</text>
				</view>
				<view class="up-change-box">
					<text>账号密码登录</text>
				</view>
			</view>
			<view class="phoneNum-box">
				<view class="img">
					<u-icon class="pi" size="30" name="phone" color="#7f7f7f"></u-icon>
				</view>
				<input type="number" placeholder="手机号码">
			</view>
			<view class="password-box">
				<view class="img">
					<u-icon class="pi" size="30" name="lock" color="#7f7f7f"></u-icon>
				</view>
				<input type="text" password="true" placeholder="请输入密码">
			</view>
			<view class="zf-box">
				<view class="z-box">
					<text @click="navToRegistration()">立即注册</text>
				</view>
				<view class="fenge-box">
					<text>|</text>
				</view>
				<view class="forgetP-box">
					<text @click="navToForgetPassword()">忘记密码</text>
				</view>
			</view>
			<view class="login-go">
				<view class="lg-title" >
					<text>立即登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import secondHeader from "../../components/second-header.vue"
	import { Mcaptcha  } from '@/utils/mcaptcha'
	
	export default{
		data(){
			return{
				imgCode:'',
				show:true,
				headerFlag: true,
			}
		},
		components: {
			"second-header": secondHeader,
		},
		onReady() {
		   this.mcaptcha = new Mcaptcha({
		     el: 'canvas',
		     width: 150,
		     height: 50,
		     createCodeImg: ""
		   });
		 },
		methods:{
			// 提交前校验图形验证码
			submit() {
				let validate = this.mcaptcha.validate(this.imgCode)
			  if(this.imgCode == '' || this.imgCode==null) {
			    return uni.showToast({ title: '请输入图形验证码' })
			  }
			  if(this.imgCode.length == 4 ? !validate : '') {
			    return uni.showToast({ title: '图形验证码错误' })
			  }
			  if(this.imgCode.length == 4 ? validate : ''){
				  return uni.showToast({ title: '图形验证码正确' })
			  }
			},
			// 刷新验证码
			updateImageCode() {
			  this.mcaptcha.refresh()
			},
			changeShow(){
				this.show = !this.show
			},
			navToRegistration(){
				uni.navigateTo({
					url:"registration"
				})
			},
			navToForgetPassword(){
				uni.navigateTo({
					url:"forget-password"
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.login-out-box-1{
		width: 100%;
		height: 957.54rpx;
		padding: 15rpx;
		.login-change-box{
			width: 100%;
			height: 85rpx;
			padding: 15rpx 45rpx 30rpx;
			display: flex;
			.phone-change-box{
				width: 375rpx;
				height: 40rpx;
				text-align: center;
				text{
					font-weight: 700;
					color: #000;
					font-size: 30rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.up-change-box{
				width: 375rpx;
				height: 40rpx;
				text-align: center;
				text{
					font-size: 30rpx;
					color: #7f7f7f;
					font-family: "Microsoft YaHei";
				}
			}
		}
		.phoneNum-box{
			width: 100%;
			height: 93rpx;
			background-color: #ededed;
			border-radius: 15rpx;
			display: flex;
			margin: 0rpx 0rpx 25rpx 0rpx;
			input{
				width: 600rpx;
				height: 93rpx;
			}
			.img{
				width: auto;
				height: 93rpx;
				margin: 0rpx 7.5rpx 0rpx 7.5rpx;
				.pi{
					padding: 15rpx 0rpx 0rpx 0rpx;
				}
			}
		}
		.pic-box{
			width: 417rpx;
			height: 93rpx;
			background-color: #ededed;
			border-radius: 15rpx;
			display: flex;
			margin: 0rpx 15rpx 25rpx 0rpx;
			.img{
				width: auto;
				height: 93rpx;
				margin: 0rpx 7.5rpx 0rpx 7.5rpx;
				.pi{
					padding: 15rpx 0rpx 0rpx 0rpx;
				}
			}
			input{
				width: auto;
				height: 93rpx;
			}
		}
		.codeP-box{
			width: 417rpx;
			height: 93rpx;
			background-color: #ededed;
			border-radius: 15rpx;
			display: flex;
			margin: 0rpx 15rpx 25rpx 0rpx;
			.img{
				width: auto;
				height: 93rpx;
				margin: 0rpx 7.5rpx 0rpx 7.5rpx;
				.pi{
					padding: 15rpx 0rpx 0rpx 0rpx;
				}
			}
			input{
				width: auto;
				height: 93rpx;
			}
		}
		.numcode-box{
			width: 288rpx;
			height: 93rpx;
			background-color: #ffe32a;
			text-align: center;
			line-height: 90rpx;
			border-radius: 15rpx;
			text{
				color: #000;
				font-size: 30rpx;
				font-family: "Microsoft YaHei";
			}
		}
		.zf-box{
			width: 100%;
			height: 84rpx;
			display: flex;
			.z-box{
				width: 288rpx;
				height: 84rpx;
				text-align: right;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.fenge-box{
				width: 144rpx;
				height: 84rpx;
				text-align: center;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.forgetP-box{
				width: 288rpx;
				height: 84rpx;
				text-align: left;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
		}
		.login-go{
			width: 690rpx;
			height: 90rpx;
			background-color: #ffe32a;
			margin: 75rpx 0rpx 0rpx 15rpx;
			border-radius: 15rpx;
			.lg-title{
				line-height: 90rpx;
				text-align: center;
				margin: 0rpx 200rpx;
				text{
					color: #000;
					font-size: 33rpx;
					font-family: "Microsoft YaHei";
				}
			}
		}
	}
	.login-out-box-2{
		width: 100%;
		height: 957.54rpx;
		padding: 15rpx;
		.change-box{
			width: 100%;
			height: 85rpx;
			padding: 15rpx 45rpx 30rpx;
			display: flex;
			.phone-change-box{
				width: 375rpx;
				height: 40rpx;
				text-align: center;
				text{
					color: #7f7f7f;
					font-size: 30rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.up-change-box{
				width: 375rpx;
				height: 40rpx;
				text-align: center;
				text{
					font-weight: 700;
					font-size: 30rpx;
					color: #000;
					font-family: "Microsoft YaHei";
				}
			}
		}
		.phoneNum-box{
			width: 100%;
			height: 93rpx;
			background-color: #ededed;
			border-radius: 15rpx;
			display: flex;
			margin: 0rpx 0rpx 25rpx 0rpx;
			input{
				width: 600rpx;
				height: 93rpx;
			}
			.img{
				width: auto;
				height: 93rpx;
				margin: 0rpx 7.5rpx 0rpx 7.5rpx;
				.pi{
					padding: 15rpx 0rpx 0rpx 0rpx;
				}
			}
		}
		.password-box{
			width: 100%;
			height: 93rpx;
			background-color: #ededed;
			border-radius: 15rpx;
			display: flex;
			margin: 0rpx 0rpx 25rpx 0rpx;
			input{
				width: 600rpx;
				height: 93rpx;
			}
			.img{
				width: auto;
				height: 93rpx;
				margin: 0rpx 7.5rpx 0rpx 7.5rpx;
				.pi{
					padding: 15rpx 0rpx 0rpx 0rpx;
				}
			}
		}
		.zf-box{
			width: 100%;
			height: 84rpx;
			display: flex;
			.z-box{
				width: 288rpx;
				height: 84rpx;
				text-align: right;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.fenge-box{
				width: 144rpx;
				height: 84rpx;
				text-align: center;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
			.forgetP-box{
				width: 288rpx;
				height: 84rpx;
				text-align: left;
				text{
					color: #8d8d8d;
					font-size: 27rpx;
					font-family: "Microsoft YaHei";
				}
			}
		}
		.login-go{
			width: 690rpx;
			height: 90rpx;
			background-color: #ffe32a;
			margin: 75rpx 0rpx 0rpx 15rpx;
			border-radius: 15rpx;
			.lg-title{
				line-height: 90rpx;
				text-align: center;
				margin: 0rpx 200rpx;
				text{
					color: #000;
					font-size: 33rpx;
					font-family: "Microsoft YaHei";
				}
			}
		}
	}
	
</style>