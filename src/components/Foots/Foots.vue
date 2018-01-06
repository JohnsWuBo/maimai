<template>
	<div class='foots'>
		<div class="footsxs">
			<div class="top">
				<div class='icon_img'>
					<img src="../../assets/img/foots/1.png" alt="" />
					<p class='p1'>预约送货</p>
					<p class='p2'>送货可预约时间</p>
				</div>
				<div class='icon_img'>
					<img src="../../assets/img/foots/2.png" alt="" />
					<p class='p1'>正品自营</p>
					<p class='p2'>100%保证正品</p>
				</div>
				<div class='icon_img'>
					<img src="../../assets/img/foots/3.png" alt="" />
					<p class='p1'>货到付款</p>
					<p class='p2'>收到货再付款</p>
				</div>
				<div class='icon_img'>
					<img src="../../assets/img/foots/4.png" alt="" />
					<p class='p1'>自主物流</p>
					<p class='p2'>更安全更便捷</p>
				</div>
				<div class='icon_img'>
					<img src="../../assets/img/foots/5.png" alt="" />
					<p class='p1'>极速配送</p>
					<p class='p2'>最快可2小时送达</p>
				</div>
			</div>
			<ul class='zhong'>
				<li v-for='(x,index) in item' :key='index'>
					<h3>{{x.name1}}</h3>
					<p v-for='(item2,index) in x.name2' :key='index'>
						<a>{{item2}}</a>
					</p>
				</li>
				<li>
					<img src="../../assets/img/weixin/dberm.jpg"/>
				</li>
			</ul>
			<div class='bottom'>
				<h4>友情链接：</h4>
				<div class='right'>
					<a v-for='(items,index) in itemA' :href='items.href' :key = 'index' target="_blank">{{items.name}}&nbsp;&nbsp;</a>
				</div>
			</div>
			<div class='foot'>
				<div class='tu'>
					<a href="http://www.anquan.org/authenticate/cert/?site=www.hdbuy.com&at=business" target='_blank'><img src="../../assets/img/banner/1.jpg"/></a>
					<a href="https://credit.cecdc.com/CX20140919005181005227.html" target='_blank'><img src="../../assets/img/banner/2.jpg"/></a>
					<a href="http://www.cyberpolice.cn/wfjb/" target='_blank'><img src="../../assets/img/banner/3.jpg"/></a>
					<a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202014031800001" target='_blank'><img src="../../assets/img/banner/4.png"/></a>
					<a href="https://ss.knet.cn/verifyseal.dll?sn=e130709110100415527emk000000&ct=df&a=1&pa=0.49094655739713855" target='_blank'><img src="../../assets/img/banner/5.png"/></a>
					<a href="https://credit.cecdc.com/CX20150825011037280662.html" target='_blank'><img src="../../assets/img/banner/6.jpg"/></a>
				</div>
				<p class='text'>出版物经营许可 新出发京字第通130073号经营许可证编号 京ICP证130433号 营业执照 编号NO.1 01151395  &nbsp;&nbsp;</p>
				<p class='text'>食品流通许可证编号 SP1101121310093715(1-1)| 京ICP备13023475号| 北京市通公网安备11011202001620号</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created(){
			let arr = [
				{
					"name1" : "新手指南",
					"name2" : [
						"注册登录",
						"购物流程",
						"会员等级",
						"积分规则"
					]
				},
				{
					"name1" : "支付方式",
					"name2" : [
						"在线支付",
						"货到付款",
						"汇go卡",
						"发票制度说明"
					]
				},
				{
					"name1" : "关于我们",
					"name2" : [
						"公司简介",
						"人才招聘",
						"隐私申明"
					]
				},
				{
					"name1" : "帮助中心",
					"name2" : [
						"联系我们",
						"我们的优势",
						"退换货政策",
						"友情链接"
					]
				},
				{
					"name1" : "配送服务",
					"name2" : [
						"配送范围",
						"配送费用",
						"配送时间",
						"北京市养老助残定点单位"
					]
				}
			];
			let arr1 = [
				{
					"name" : "网上订花",
					"href" : "http://www.yiklan.com"
				},
				{
					"name" : "宝宝百日宴",
					"href" : "http://www.qhho.com"
				},
				{
					"name" : "西瓜",
					"href" : "http://www.xghao.com"
				},
				{
					"name" : "欧莱雅化妆品",
					"href" : "http://www.ipinhui.com"
				},
				{
					"name" : "水果店加盟",
					"href" : "http://shuiguodian.qudao.com"
				},
				{
					"name" : "环球华网",
					"href" : "http://www.509.cc"
				},
				{
					"name" : "多功能豆芽机",
					"href" : "http://www.31586.org"
				},
				{
					"name" : "折900",
					"href" : "http://www.zhe900.com"
				},
				{
					"name" : "网上订蛋糕",
					"href" : "http://www.okdangao.com"
				},
				{
					"name" : "中国贸易网",
					"href" : "http://www.ichangjia.com"
				},
				{
					"name" : "内衣加盟",
					"href" : "http://www.xiudai.com"
				},
				{
					"name" : "中国咖啡网",
					"href" : "http://www.gafei.com"
				},
				{
					"name" : "北京租车价格",
					"href" : "http://www.zuche001.com.cn"
				},
				{
					"name" : "直线导轨",
					"href" : "http://www.forrun.cn"
				},
				{
					"name" : "热卖排行",
					"href" : "https://top.zhe800.com"
				},
				{
					"name" : "lv官网女包",
					"href" : "http://www.532buy.com"
				},
				{
					"name" : "9.9包邮",
					"href" : "http://www.qituke.com"
				},
				{
					"name" : "卡诗贝尔内衣连锁店",
					"href" : "http://www.kisber.cn"
				},
				{
					"name" : "北京生日蛋糕",
					"href" : "http://www.micamika.com"
				},
				{
					"name" : "外贸论坛",
					"href" : "http://www.iwaimao.cn"
				},
				{
					"name" : "特色加盟店",
					"href" : "http://qita.shang360.com"
				},
				{
					"name" : "西凤酒价格",
					"href" : "http://www.vipxfj.com"
				},
				{
					"name" : "物流专线",
					"href" : "http://www.yunbao88.com"
				},
				{
					"name" : "化妆品商城",
					"href" : "http://mall.cunan.com"
				},
				{
					"name" : "澳洲特产",
					"href" : "http://www.0061.com.au"
				}
			];
			//新手指南等
			this.item = arr;
			//友情链接
			this.itemA = arr1;
		},
		data : function(){
			return {
				item : [],
				itemA : []
			}
		}
	}
</script>
<style scoped>
	.foots{
		width:100%;
		height:560px;
		background: #fff;
	}
	.footsxs{
		width:1200px;
		height:100%;
		margin:0 auto;
	}
	.footsxs>.top{
		height:130px;
		width:100%;
	}
	.icon_img{
		float:left;
		width:188px;
		height:100%;
		padding-top:35px;
		padding-left:10px;
		margin-right:56px;
	}
	.icon_img:last-child{
		margin-right:0
	}
	.icon_img>img{
		float:left;
		display:block;
		margin-right:5px;
		width:60px;
		height:60px;
	}
	.icon_img>p{
		display:block;
		margin-top:7px;
		font-size:18px;
		font-weight:bold;
		color:#5c5c5c
	}
	.icon_img>.p2{
		margin-top:2px;
		font-size:14px;
		font-weight:normal;
		color:#747474;
	}
	.zhong{
		padding-top:20px;
		width:100%;
		height:200px;
	}
	.zhong>li{
		width:199px;
		height:100%;
		float:left;
		padding-left:35px;
		border-right:1px solid #e7e7e7
	}
	.zhong>li:nth-child(5){
		border-right: none;
	}
	.zhong>li:nth-child(6){
		border-right: none;
		padding:0;
	}
	.zhong>li>h3{
		font-size:18px;
		line-height:35px;
	}
	.zhong>li>p>a{
		line-height:25px;
		color:#413f40;
		font-size:14px;
		cursor:pointer;
	}
	.zhong>li>p>a:hover{
		color:red;
	}
	.zhong>li>img{
		width:164px;
		height:178px;
		display:block;
	}
	.footsxs>.bottom{
		height:82px;
		margin-top:20px;
		width:100%;
	}
	.footsxs>.bottom>h4{
		float:left;
		font-size:14px;
		margin-top:4px;
	}
	.footsxs>.bottom>.right{
		float:left;
		width:890px;
		height:100%;
		
	}
	.footsxs>.bottom>.right>a{
		text-decoration: none;
		color:#413f40;
		font-size:12px;
		line-height:29px;
		text-align: center;
		float:left;
		padding:0 6px;
	}
	.footsxs>.foot{
		width:1200px;
		margin-top:10px;
		color:#666;
		text-align: center;
	}
	.tu{
		height:50px;
		margin:0 auto;
		width:817px;
	}
	.tu>a{
		float:left;
		margin-right:7px;
	}
	.tu>a:last-child{
		margin:0;
	}
	.tu>a>img{
		width:130px;
		height:48px;
		display:block;
	}
	.text{
		font-size:12px;
		color:#666666;
		line-height:22px;
		font-family: "宋体", SimSun;
	}
</style>