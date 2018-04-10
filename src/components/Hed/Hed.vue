<template>
	<!-- header -->
	<div class='header1'>
		<div class="hed" v-show='scollFalse'>
		<!-- 欢迎页 -->
		<div class='top'>
			<!-- 欢迎页头 -->
			<div class='login'>
				<!-- 欢迎页头左 -->
				<div class='left'>
					<span>您好，欢迎你来到汇多买!</span>
					<router-link tag='a' to='/login' v-show='zhi'>[请登录]</router-link>
					<a v-show='!zhi'>{{denglu}}</a>
					<a v-show='!zhi' @click='dchu()'>[登出]</a>
				</div>
				<!-- 欢迎页头右 -->
				<div class="right">
					<ul class='left'>
						11112222
						<li>汇多买首页</li>
						<li class='gang'>|</li>
						<li>配送范围</li>
						<li class='gang'>|</li>
						<li>关于我们</li>
						<li class='gang'>|</li>
						<li><i><img src="../../assets/img/icon/icon_3.png"/></i>手机下单</li>
						<li class='gang'>|</li>
						<li><i><img src="../../assets/img/icon/icon_1.png"/></i>400-8881999</li>
						<li class='gang'>|</li>
					</ul>
					<ul id='hed_top_login_right_right'>
						<!-- 这有下拉框 -->
						<li>我的汇多买</li>
						<ul id='hed_top_login_right_right_content'>
							<li>1</li>
							<li>2</li>
							<li>3</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
		<!-- 欢迎页logo和搜索框 -->
		<div class='bottom'>
			<div class='bottom_content'>
				<div class='top'>
					<!-- 欢迎页返回首页logo -->
					<router-link tag='a' to='/'>
						<img src="../../assets/img/logo/logo_1.png"/>
					</router-link>
					<!-- 搜索框左边的logo -->
					<router-link tag='a' to='/'>
						<img src="../../assets/img/logo/logo.png" class='img1'/>
					</router-link>
					<!-- 欢迎页搜索框 -->
					<div class='seach'>
						<input type="text" placeholder='这里输入需要的商品名，品牌等，可以直接搜索商品哦' />
						<div class='top_btn'>搜索</div>
						<!-- 热门搜索 -->
						<ul class='remenSeach'>
							<!-- 点击跳网页 -->
							<li>热门搜索：</li>
							<li>桶装水</li>
							<li>水饺</li>
							<li>鲜花</li>
							<li>啤酒</li>
							<li>水果</li>
							<li>圣诞</li>
							<li>红皮鸡蛋</li>
						</ul>
					</div>
					<!-- 欢迎页图标 -->
					<ul class='tubiao'>
						<li>
							<p class='st_img st_img1'></p>
							<p class='st_size'>预计送货</p>
						</li>
						<li>
							<p class='st_img st_img2'></p>
							<p class='st_size'>货到付款</p>
						</li>
						<li>
							<p class='st_img st_img3'></p>
							<p class='st_size'>极速配送</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- nav -->
			<div class='nav'>
				<div class='nav_one'>
					<!-- 导航 -->
					<ul class='nav_one_ul'>
						<!-- router-link分配导航 -->
						<li id='temai'>
							超市特卖
						</li>
						<router-link to='/' tag='li' active-class='change'>首页</router-link>
						<li class='pei_send_fu'>
							极速配
							<div class='pei_send'>
								<div class="pei_send1">
									<span>区域</span>
									<span>配送费(元)</span>
									<span>满额免邮(元)</span>
									<span>配送时间(分钟)</span>
								</div>
								<div class="pei_send1">
									<span>通州区</span>
									<span>8</span>
									<span>99</span>
									<span>约/45</span>
								</div>
								<div class="pei_send1">
									<span>大兴区</span>
									<span>8</span>
									<span>109</span>
									<span>约/45</span>
								</div>
								<div class="pei_send1">
									<span>朝阳区</span>
									<span>15</span>
									<span>139</span>
									<span>约/60</span>
								</div>
								<div class="pei_send1">
									<span>丰台区</span>
									<span>15</span>
									<span>139</span>
									<span>约/99</span>
								</div>
								<div class="pei_send1">
									<span>海淀区</span>
									<span>30</span>
									<span>259</span>
									<span>约/110</span>
								</div>
								<div class="pei_send2">二环以内暂时不支持配送服务，敬请谅解。</div>
								<div class="pei_send3">本网站支持开发票，开票金额99元起，请在下单时填写好发票抬头。</div>
							</div>
						</li>
						<li></li>
					</ul>
					<!-- 企业和购物车 -->
					<div class='right'>
						<router-link to='/gouwuche' tag='a'>我的购物车</router-link><span>{{countss}}</span>
					</div>
					<div class='left'>
						<router-link to='/qiye' tag='a'>切换企业用户</router-link>
						
					</div>
				</div>
			</div>
			
		</div>
	</div>
		<div class='hed2' v-show='!scollFalse'>
			<div class='hed2-xs'>
				<img src="../../assets/img/bg/Smalllogo.png"/>
				<div class='ipt'>
					<input type="text" placeholder='这里输入需要的商品名，品牌等，可以直接搜索商品哦' />
					<button>搜索</button>
				</div>
				<ul class='right'>
					<router-link to='/' tag='li'>
						<div class='img'></div>
						<span>返回首页</span>
					</router-link>
					<li>
						<div class='img'></div>
						<span>我的购物车</span>
					</li>
					<li>
						<div class='img'></div>
						服务热线
						<span>400-8881999</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="hed3" v-show='!scollFalse'></div>
	</div>
	
</template>
<script type="text/javascript">
	import $huo from './../../api/Dom'
	import Bus from './../../api/Bus'
//	console.log($huo)
	export default {
		created(){
			this.denglu = localStorage.getItem('userName') || '[请登录]';
			if(localStorage.getItem('userName')){
				this.zhi = false
			}else{
				this.zhi = true
			};
			if(Bus.arrAdd){
				this.countss = Bus.arrAdd.length
			}else{
				this.countss = 0
			};
			
		},
		mounted(){
			this.learn();
			this.$nextTick(function(){
				document.addEventListener('scroll',this._ScollTop)
			});
//			Bus.$on('shuChange',function(a){
//				this.countss = a;
//			})
		},
		data: function(){
			return {
				scollFalse : true,
				ScollTop: 0,
				denglu : '',
				zhi : false,
				countss : 0
			}
		},
		
		methods: {
			//我的汇多买移入移出事件
			learn : function(){
				let aDiv = document.getElementById('hed_top_login_right_right');
				let aDiv2 = document.getElementById('hed_top_login_right_right_content');
				aDiv.addEventListener('mouseenter',function(){
					aDiv2.style.display = 'block';
					aDiv.style.borderLeft = '1px solid #DDDDDD';
					aDiv.style.borderRight = '1px solid #DDDDDD';
					aDiv.style.borderTop = '1px solid #DDDDDD';
				});
				aDiv.addEventListener('mouseleave',function(){
					aDiv2.style = '';
					aDiv.style = ''
				});
				let temai = document.getElementById('temai');
				temai.addEventListener('mouseenter',function(){
					this.style.background = '#c12922'
				});
				temai.addEventListener('mouseleave',function(){
					this.style = ''
				});
				let jisu = document.querySelector('.pei_send_fu');
				let jisuD = document.querySelector('.pei_send_fu>.pei_send');
				jisu.addEventListener('mouseenter',function(){
					jisuD.style.display = 'block'
				});
				jisu.addEventListener('mouseleave',function(){
					jisuD.style = ''
				})
			},
			//scollTop值
			_ScollTop : function(){
				this.ScollTop = document.documentElement.scrollTop;
//				console.log(this.ScollTop)	
				if(this.ScollTop > 173){
					this.scollFalse = false;
				}else{
					this.scollFalse = true;
				};
				
			},
			//登出
			dchu(){
				localStorage.removeItem('userName');
				this.zhi = true;
			}
			
		},
		
	}
</script>
<style scoped>
	.hed{
		width:100%;
		height:173px;
		background:#fff;
		font-size:12px;
	}
	.hed>.top{
		width:100%;
		height:33px;
		border-bottom:1px solid #dddddd;
	}
	.hed>.top>.login{
		width:1200px;
		margin:0 auto;
		height:100%;
		line-height:33px;
	}
	.hed>.top>.login>.left{
		height:100%;
		font-size:12px;
		color:#a5a5a5;
		float:left;
	}
	.hed>.top>.login>.left>a{
		color:#ff0000;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		cursor:pointer;
	}
	.hed>.top>.login>.right{
		width:592px;
		height:100%;
		float:right;
	}
	.hed>.top>.login>.right>.left{
		width:479px;
		float:left;
		height:100%;
	}
	.hed>.top>.login>.right>.left>li{
		float:left;
		padding-left:16px;
		color:#a5a5a5;
		cursor:pointer;
	}
	.hed>.top>.login>.right>.left>li:nth-child(9){
		color:#ff0000
	}
	.hed>.top>.login>.right>.left>li>i{
		position:relative;
		left:-5px;
		top:5px;
	}
	.hed>.top>.login>.right>.left>.gang{
		margin-left:16px;
		padding-left:0;
		cursor:default;
	}
	#hed_top_login_right_right{
		float:right;
		width:113px;
		height:100%;
		text-align: center;
		position:relative;
		left:-3px;
		border:1px solid #fff;
		border-bottom:none;
		cursor:pointer;
	}
	#hed_top_login_right_right_content{
		position:absolute;
		top:30px;
		background:#fff;
		left:-1px;
		border:1px solid #dddddd;
		display:none;
		border-top:1px solid transparent;
		transition: all 33s;
		z-index:999999
	}
	#hed_top_login_right_right_content>li{
		text-align: center;
		line-height:33px;
		height:33px;
		width:95px;
		border-bottom:none;
		border-top:1px solid #dddddd;
		margin:0 8px;
	}
	.hed>.bottom{
		width:100%;
		height:140px;
	}
	.hed>.bottom>.bottom_content{
		margin:0 auto;
		height:90px;
		width:1200px;
		position:relative;
	}
	.hed>.bottom>.bottom_content>.top{
		height:90px;
		width:100%;
	}
	.hed>.bottom>.bottom_content>.top>a:nth-child(1){
		width:136px;
		height:100%;
		float:left;
	}
	
	.hed>.bottom>.bottom_content>.top>a:nth-child(2){
		width:310px;
		float:left;
	}
	.hed>.bottom>.bottom_content>.top>a:nth-child(1)>img{
		position:absolute;
		top:13px;
		left:0;
	}
	.hed>.bottom>.bottom_content>.top>a>.img1{
		margin-top:-8px;
	}
	.hed>.bottom>.bottom_content>.top>.seach{
		width:485px;
		height:71px;
		margin-top:19px;
		float:left;
	}
	.hed>.bottom>.bottom_content>.top>.seach>input{
		float:left;
		border:2px solid #f1332b;
		border-right:none;
		height:35px;
		width:402px;
		padding-left:10px;
	}
	.hed>.bottom>.bottom_content>.top>.seach>.top_btn{
		float:left;
		width:80px;
		height:35px;
		background:#f1332b;
		line-height:35px;
		text-align: center;
		color:#fff;
		font-size:16px;
		cursor: pointer;
	}
	.remenSeach{
		width:100%;
		height:25px;
		line-height:25px;
	}
	.remenSeach>li{
		margin-right:14px;
		font-size:12px;
		float:left;
		cursor: pointer;
	}
	
	.remenSeach>li:nth-child(1){
		color:#d03235
	}
	.tubiao{
		margin-left:10px;
		float:left;
		margin-top:12px;
	}
	.tubiao>li{
		width:75px;
		height:80px;
		float:left;
		text-align: center;
	}
	.st_img{
		width:100%;
		height:38px;
		background:url(../../assets/img/tubiao/yyshy.png) no-repeat 16px 0;
		 text-align: center;
    overflow: hidden;
    background-size:38px;
    margin-bottom:4px;
	}
	.st_img.st_img2{
		background:url(../../assets/img/tubiao/hdfky.png) no-repeat 16px 0;
		background-size:38px;
	}
	.st_img.st_img3{
		background: url(../../assets/img/tubiao/jspsy.png) no-repeat 16px 0;
		background-size:38px;
	}
	.st_size{
		color:#f1332b;
	}
	.nav{
		width:100%;
		height:50px;
		background:#f1332b
	}
	.nav_one{
		width:1200px;
		height:100%;
		margin:0 auto;
	}
	.nav_one_ul{
		margin-left:218px;
		height:50px;
		float:left;
		position:relative;
		top:-2px;
	}
	.nav_one_ul>li{
		text-align: center;
		line-height:50px;
		color:#fff;
		font-size:20px;
		font-weight:700;
		float:left;
		padding:0 20px;
		cursor:pointer
	}
	
	.nav_one_ul>li:last-child{
		background:url(../../assets/img/tubiao/vip_gg.gif) no-repeat;
		width:276px;
		height:50px;
	}
	.change{
		background:#c12922;
	}
	.nav_one>.left{
		float:right;
		width:120px;
		height:35px;
		border-radius: 25px;
		background:#fff url(../../assets/img/tubiao/dh_iocn.png) no-repeat 3px -34px;
		
		background-size:30px; 
		line-height:35px;
		margin-top:5px;
		padding-left:35px;
	}
	.nav_one>.right{
		float:right;
		width:120px;
		height:35px;
		border-radius: 25px;
		margin-left:6px;
		background:#fff url(../../assets/img/tubiao/dh_iocn.png) no-repeat 3px 0;
		background-size:30px;
		line-height:35px;
		margin-top:5px;
		padding-left:35px;
	}
	.nav_one>.right>a,.nav_one>.left>a{
		color:#707070;
	}
	.nav_one>.right>span{
		    background: #f1332b;
    border-radius: 50px;
    -moz-border-radius: 50px;
    color: #ffffff;
    padding: 5px;
    height: 10px;
    display: block;
    line-height: 10px;
    text-align: center;
    font-size: 14px;
    margin-right: 5px;
    margin-top: 8px;
    float: right;
	}
	.pei_send_fu{
		position:relative;
	}
	.pei_send{
		position:absolute;
		width:400px;
		height:216px;
		background:#f1332b;
		color:#fff;
		border-radius: 15px;
		top:40px;
		overflow: hidden;
		padding:20px 0 0 0;
		display:none;
		z-index: 999999
	}
	.pei_send1{
		width:100%;
		height:20px;
		font-weight:normal;
		font-size:12px;
	}
	.pei_send1:last-child{
		
	}
	.pei_send1>span{
		border-right:1px solid #cf3120;
		width: 99px;
		height:19px;
		line-height:19px;
		text-align: center;
		float:left;
		border-bottom:1px solid #cf3120;
	}
	.pei_send1>span:last-child{
		border-right:none;
	}
	.pei_send2{
		width:100%;
		font-size:12px;
		line-height:12px;
		text-align: center;
		color:#fff;
		font-weight: 500;
		margin-top:20px;
		margin-bottom:10px;
	}
	.pei_send3{
		width:100%;
		font-size:12px;
		text-align: center;
		line-height:25px;
		border-bottom:1px solid #cf3120;
		font-weight: normal;
	}
	.hed3{
		height:173px;
		width:100%;
	}
	.hed2{
		height:37px;
		width:100%;
		background:#fff;
		clear: both;
		border-bottom:1px solid #f1332b;
		position:fixed;
		top:0;
		z-index: 1000000;
		left:0;
	}
	.hed2>.hed2-xs{
		width:1200px;
		margin:0 auto;
		height:100%;
	}
	.hed2>.hed2-xs>img{
		width:262px;
		height:100%;
		float:left;
		display:block;
	}
	.hed2>.hed2-xs>.ipt{
		width:483px;
		height:100%;
		float:left;
		padding-left:12px;
	}
	.hed2>.hed2-xs>.ipt>input{
		width:390px;
		border:2px solid #f1332b;
		border-right:none;
		padding-left:10px;
		border-bottom:none;
		height:calc(100% - 2px);
		float:left;
	}
	.hed2>.hed2-xs>.ipt>button{
		float:left;
		width:80px;
		color:#fff;
		background:#f1332b;
		height:100%;
		padding:0;
		border:0;
		font-size:16px;
		cursor:pointer;
		outline: none;
	}
	.hed2>.hed2-xs>.right{
		float:right;
		padding:5px 0;
		height:100%;
	}
	.hed2>.hed2-xs>.right>li{
		float:left;
		font-size:12px;
		color:#000;
		padding:0 12px;
		line-height:25px;
		border-left:1px solid #ebebeb;
		cursor:pointer;
	}
	.hed2>.hed2-xs>.right>li>.img{
		float:left;
		background:url(../../assets/img/logo/Smalsouskinco.png) no-repeat -2px -2px;
		margin-right:8px;
		width:25px;
		height:25px;
	}
	.hed2>.hed2-xs>.right>li:nth-child(2)>.img{
		background:url(../../assets/img/logo/Smalsouskinco.png) no-repeat -2px -43px;
	}
	.hed2>.hed2-xs>.right>li:nth-child(3)>.img{
		background:url(../../assets/img/logo/Smalsouskinco.png) no-repeat -2px -83px;
	}
	.hed2>.hed2-xs>.right>li:nth-child(3)>span{
		font-size:14px;
		color:#d7271c;
		font-family: "宋体";
	}
</style>