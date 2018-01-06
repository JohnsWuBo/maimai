<template>
	<div class='Login'>
		<div class='login-xs'>
			<div class='login-img'>
				<img src="../../assets/img/bg/login_bgr.jpg" />
			</div>
			<div class='login-login'>
				<h3>会员登录</h3>
				<input type="text" placeholder='手机号' id='phone' v-model='phone' />
				<input type="text" placeholder='验证码' id='yan' v-model='yan' />
				<button id='yanzheng' @click='Btn()'></button>
				<input type="submit" value='登录' id='btn' @click='BtnD()' />
			</div>
			<div class='login-bottom'>
				<p>出版物经营许可 新出发京字第通130073号经营许可证编号 京ICP证130433号 营业执照 编号NO.1 01151395</p>
				<p>食品流通许可证编号 SP1101121310093715(1-1)| 京ICP备13023475号| 北京市通公网安备11011202001620号</p>
			</div>
			<div class='img_bottom'>
				<img src="../../assets/img/logo/2.gif"/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import $huoqu from '../../api/Dom'
	import yanzhen from '../../api/yanzhengma'
	export default {
		mounted(){
			this.$nextTick(function(){
				setTimeout(this._yan,0)
			})
		},
		methods: {
			//验证码初始值
			_yan(){
				let obj = $huoqu('#yanzheng');
				yanzhen(obj);
			},
			//点击改变验证码的值
			Btn(){
				let obj = $huoqu('#yanzheng');
				yanzhen(obj);
			},
			BtnD(){
				//^1[3|4|5|8][0-9]\d{4,8}$ 
				let yanzhengmazhi = $huoqu('#yanzheng').innerHTML;
				let obj = $huoqu('#yanzheng');
				let ceshi = /^1[3|4|5|8][0-9]\d{4,8}$/; 
				if(this.phone !== "" && this.yan !== ""){
					if(ceshi.test(this.phone) && this.yan == yanzhengmazhi){
						localStorage.setItem('userName',this.phone);
						this.$router.push('/');
					}else{
						window.alert('验证码错误或者手机号格式错误')
					}
				}else{
					alert('验证码或者手机号不能为空')
				};
				
				yanzhen(obj);
			}
		},
		data(){
			return {
				phone : '',
				yan : ''
			}
		}
	}
</script>
<style scoped>
	.login{
		width:100%;
		height:100%;
		background:#fff;
	}
	.login-xs{
		width:100%;
		height:663px;
		padding:100px 0;
	}
	.login-xs{
		margin:0 auto;
		width:1100px;
		position:relative;
	}
	.login-img{
		float:left;
		width:710px;
	}
	.login-login{
		float:right;
		width:240px;
		height:230px;
		border:1px solid #cfcfcf;
		padding:13px 20px 28px 20px;
	}
	.login-login>h3{
		height:40px;
		width:100%;
		line-height:40px;
		border-bottom:1px solid #e6e6e6;
		font-size:14px;
	}
	.login-login>input{
		height:34px;
		width:100%;
		border:1px solid #c4c4dc;
		border-radius: 5px;
		padding-left:5px;
		font-size:12px;
		margin-top:10px;
	}
	.login-login>#phone{
		margin-top:12px
	}
	.login-login>button{
		position:relative;
		top:-33px;
		right:-131px;
		height:32px;
		width:66px;
		background:#dddddd;
		color:#000;
		font-size:12px;
		line-height:32px;
		outline: none;
		border:none;
		cursor:pointer;
		color:red;
		font-size:16px;
	}
	.login-login>#btn{
		background:#f1332b;
		color:#fff;
		font-size:14px;
		width:100%;
		height:30px;
		border:none;
		cursor:pointer;
		position:relative;
		top:-15px;
	}
	.login-bottom{
		text-align: center;
		margin-top:92px;
		clear:both;
		width:100%;
		position:absolute;
		bottom:34px;
		font-size:12px;
	}
	.img_bottom{
		position:absolute;
		text-align: center;
		bottom:15px;
		left:50%;
		transform: translateX(-50%);
	}
</style>