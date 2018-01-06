<template>
	<div class='bannerLeft'>
		<div class='bannerLeft-nav'>
			<div class='left-nav'>
				<!-- 导航开始 -->
				<ul class='left-nav-begin'>
					<li v-for='x in Datas.fenlei' @mouseenter="mouseSen(x)" @mouseleave="mouseLea()">
						<span>{{x.name1}}</span>
						<span>{{x.name2}}</span>
						<!-- 移入显示的div -->
						<div class='left-nav-begin-div' v-if='isObject === x'>
							<div class='item' v-for='item in x.children'>
								<dl>
									<dt>{{item.name}}</dt>
									<dd v-for='items in item.cont'>{{items}}</dd>
								</dl>
							</div>
						</div>
					</li>
				</ul>
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props : {
			Datas : {
				type : Object,
				default : function(){
					return {}
				}
			}
		},
		data(){
			return {
				isShow : false,
				isObject: {}
			}
		},
		mounted(){
			
		},
		methods : {
			mouseSen(x){
				this.isObject = x;
			},
			mouseLea(){
				this.isObject = {}
			}
		}
	}
</script>
<style scoped>
	.bannerLeft{
		clear:both;
		width:100%;
		height:416px;
		background:#f9c7c0 url(../../assets/img/banner/banner_2.jpg) no-repeat;
		background-size:1200px;
		position:relative;
		top:-2px;
	}
	.bannerLeft-nav{
		margin:0 auto;
		width:1200px;
		height:100%;
	}
	.left-nav{
		width:146px;
		height:418px;
		background:url(../../assets/img/bg/bg_1.png) no-repeat;
		background-size:100%;
		position:relative;
	}
	.left-nav-begin{
		width:100%;
		height:330px;
		position:absolute;
		top:26px;
		left:0
	}
	.left-nav-begin>li{
		line-height:39px;
		font-size:14px;
		color:#fff;
		padding-right:20px;
		padding-left:5px;
		height:41px;
		cursor:pointer;
	}
	.left-nav-begin>li>span{
		float:left;
	}
	.left-nav-begin>li>span{
		color:#fff;
	}
	.left-nav-begin>li>span:hover{
		color:orange
	}
	.left-nav-begin>li>span:nth-child(2){
		float:left;
		margin-left:9px;
	}
	.left-nav-begin-div{
		position:absolute;
		top:-26px;
		left:150px;
		width:997px;
		height:432px;
		background:rgba(255,255,255,.9);
		box-shadow: 1px 1px 1px rgba(0,0,0,.5);
	}
	.item{
		float:left;
		width:248px;
		height:135px;
		padding:15px 20px 20px 22px 
	}
	.item>dl{
		width:100%;
		height:100%;
		border-right:1px dashed #ccc
	}
	.item>dl>dt{
		font-size:14px;
		color:#dd102f;
		line-height:14px;
	}
	.item>dl>dd{
		margin-right:10px;
		float:left;
		margin-top:15px;
		font-size:12px;
		line-height:12px;
		color:#6f6b6a;
	}
	.item>dl>dd:hover{
		color:red
	}
</style>