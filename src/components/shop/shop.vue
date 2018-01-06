<template>
	<div class='shop'>
		<div class="shop-xs">
			<h3>
				<router-link tag='a' to='/'>首页</router-link>
				<span>></span>
				<a href="">休闲零食</a>
				<span>></span>
				<a href="">方便速食</a>
				<span>></span>
				<a href="">方便面|粉丝</a>
				<span>></span>
				<a href="">康师傅</a>
			</h3>
			<!-- 下面内容 -->
			<div class='neirong'>
				<!-- 左边 -->
				<div class='left'>
					<!-- 分类 -->
					<div class='fenlei'>
						<div class='fenleiTop'>
							<i></i>
							<span>{{arr.name}}</span>
						</div>
						<!-- 产品 -->
						<div class='chanpin'>
							<ul>
								<li v-for='item in items'>{{item.name}}</li>
							</ul>
						</div>
					</div>
					<!-- 同类 -->
					<div class='fenlei tong'>
						<div class='fenleiTop tong1'>
							<i></i>
							<span>同类产品</span>
						</div>
						<!-- 产品 -->
						<div class='chanpin tong2'>
							<ul>
								<li v-for='(ar,index) in arr.kuai'>
									<dl>
										<dt>
											<img :src='"./../../src/assets/img/F/"+ar.img.substr(0,1)+"F/"+ar.img'/>
											<i>{{index+1}}</i>
										</dt>
										<dd>{{ar.textCont}}</dd>
										<dd>{{ar.moneyNew}}</dd>
									</dl>
								</li>
							</ul>
						</div>
					</div>
					<!-- 最近浏览 -->
					<div class='fenlei tong zui'>
						<div class='fenleiTop tong1 zui1'>
							<i></i>
							<span>最近浏览</span>
						</div>
						<!-- 产品 -->
						<div class='chanpin tong2 zui2'>
							<ul>
								<li>
									<dl>
										<dt>
											<img :src='"../../src/assets/img/F/"+item.img.substr(0,1)+"F/"+item.img'/>
											<i>1</i>
										</dt>
										<dd>{{item.textCont}}</dd>
										<dd>{{item.moneyNew}}</dd>
									</dl>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 右边 -->
				<div class="right">
					<!-- 上边的选购项 -->
					<div class="top">
						<div class="left">
							<!-- 放大镜的小图 -->
							<div class='smallImg'>
								<img :src='"../../src/assets/img/F/"+item.img.substr(0,1)+"F/"+item.img'/>
								<!-- 遮罩 -->
								<div class='shopsMask'></div>
								<div class='bigImg'>
									<img :src='"../../src/assets/img/F/"+item.img.substr(0,1)+"F/"+item.img'/>
								</div>
							</div>
							<!-- 查看项 -->
							<div class='cha'>
								<div class='btn1'></div>
								<div class='imgT'>
									<img :src='"../../src/assets/img/F/"+item.img.substr(0,1)+"F/"+item.img'/>
								</div>
								<div class='btn2'></div>
							</div>
						</div>
						<div class="right">
							<h3>{{item.textCont}}</h3>
							<!-- 选购页 -->
							<ul>
								<li>
									<i></i><span>汇多买</span><b>商品编号</b>
								</li>
								<li>
									<span>市场价:</span>
									<i>¥{{(item.moneyOld * beishu).toFixed(2)}}</i>
								</li>
								<li>
									<span>会员价:</span>
									<i>¥{{(item.moneyNew * beishu).toFixed(2)}}</i>
								</li>
								<li>
									<span>库存情况:</span>
									<i>现货</i>
								</li>
								<li>
									<span>可用积分:</span>
									<i>0</i>
								</li>
								<li>
									<span>商品评分:</span>
									<i>.....</i>
									<b>(已有5人评论)</b>
								</li>
							</ul>
							<!-- 选项 -->
							<div class='xuan'>
								<ul>
									<li>
										<span>饮料容量:</span>
										<i>1.25L</i>
									</li>
									<li>
										<span>饮料包装:</span>
										<em :class='{active : !flag}' @click='flagChange(0)'>瓶装</em>
										<em :class='{active : flag}' @click='flagChange(1)'>箱装</em>
									</li>
									<li>
										<span>饮料容量:</span>
										<b>{{lalalal}}</b>
									</li>
									<li>
										<strong>我要购买:</strong>
										<!-- 选中数量 -->
										<div class='counts'>
											<div class='T' @click='jia(0)'></div>
											<div class='shu'>{{count}}</div>
											<div class='T' @click='jia(1)'></div>
										</div>
										<!-- 加入购物车 -->
										<div class='addso'>
											<div class='addShops' @click='addS'>加入购物车</div>
											<div class='smallKu' v-show='shopsFlag'>
												<h3>{{count}}件商品加入购物车<span class='close' @click='shopClose'>x</span></h3>
												
												<div class='smallKu_xs'>
													<ul style="width:100%;">
														<li>
															<img :src='"../../src/assets/img/F/"+item.img.substr(0,1)+"F/"+item.img' style="width:50px;height:50px;float:left;"/>
														</li>
														<li>
															<div class='itemName'>{{item.textCont}}</div>
															<div>数量:<span>{{this.count}}</span></div>
															<div>总计金额:<span>{{(item.moneyNew * beishu * count).toFixed(2)}}</span></div>
															<div class='anniu'>
														<input type="submit" value='继续购买'  @click='shopClose'/>
														<input type="submit" value='去结算' @click='TiaochuanJisuan((item.moneyNew * beishu * count).toFixed(2),item,count)' />
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!-- 提示 -->
							<div class='alert'>
								<h3>提&nbsp;&nbsp;&nbsp;&nbsp;示&nbsp;:&nbsp;</h3>
								由于部分商品包装可能会更换，所示商品图片仅作为参考，关于商品的更详尽信息如包装、产地、生产日期等，以收到商品实物为准。
							</div>
							<div class="fen">
								<span>分享到:</span>
								<a href="">
									<img src="../../assets/img/weixin/fenxiang.gif"/>
								</a>
								<a href="">
									<img src="../../assets/img/weixin/fenxiang2.gif"/>
								</a>
								<a href="">
									<img src="../../assets/img/weixin/fenxiang3.gif"/>
								</a>
								<a href="">
									<img src="../../assets/img/weixin/fenxiang4.gif"/>
								</a>
							</div>
						</div>
					</div>
					<!-- 组合推荐 -->
					<div class="and">
						<h3>组合推荐</h3>
						<div class="Tubo">
							<div class='left'>
								<img src="../../assets/img/F/1F/1Fsximg26.jpg"/>
								<span>可口可乐 碳酸饮料 汽水 大瓶装 1.25L*12/箱_汇多</span>
							</div>
							<div class='zhong'>
								<div class='add'></div>
								<div class="Tua">
									
								</div>
							</div>
							<!-- 右边 -->
							<div class="right">
								<span>已选择0个配件</span>
								<span>搭配价&nbsp;:&nbsp;<b>6.00</b></span>
								<div class='buy'>搭配购买</div>
							</div>
						</div>
					</div>
					<!-- 标签页 -->
					<div class='bottom'>
						<!-- 点击 -->
						<ul id='biaoBtn'>
							<li>商品详情</li>
							<li>规格参数</li>
							<li>包装清单</li>
							<li>售后服务</li>
						</ul>
						<div class='bottom-xs'>
							<ul id='neiBtn'>
								<li>
									<p style="text-align: center;">
										<img src="../../assets/img/banner/5ff82d41-a9ab-4ff6-b8f3-7ca750ab53f3.jpg" alt="" />
									</p>
									<p style="text-align: center;">
										<img src="../../assets/img/banner/e797b906-202f-4eb6-8260-859eb7b050d6.jpg" alt="" />
									</p>
									<p style="text-align: center;">
										<img src="../../assets/img/banner/9976cf3a-dc6b-4e11-a344-cb94dcc357a8.jpg" alt="" />
									</p>
									<p style="text-align: center;">
										<img src="../../assets/img/banner/73806c37-d2ae-4cca-a705-31de011caf92.jpg" alt="" />
									</p>
									<p style="text-align: center;">
										<img src="../../assets/img/banner/66be667a-ffba-4b08-9ec9-76107387fb53.jpg" alt="" />
									</p>
								</li>
								<li>
									<table cellspacing="0" cellpadding="0" class='tab'>
										<tr>
											<th class='ht'>基本参数</th>
											<th>&nbsp;</th>
										</tr>
										<tr>
											<td class='ht'>商品品牌</td>
											<td>可口可乐</td>
										</tr>
										<tr>
											<td class='ht'>商品产地</td>
											<td>中国大陆</td>
										</tr>
										<tr>
											<td class='ht'>商品规格</td>
											<td>1.25L</td>
										</tr>
										<tr>
											<td class='ht'>保质期</td>
											<td>540天</td>
										</tr>
									</table>
								</li>
								<li>
									<div class='kong'></div>
								</li>
								<li>
									<div class='kong'></div>
								</li>
							</ul>
						</div>
						<div class="apl">
							<p style="text-align: center;">
								<img src="../../assets/img/banner/379c2b3d-25d8-44ef-8b52-7e2101f96f9e.jpg" alt="" />
							</p>
						</div>
					</div> 
					<FootsC></FootsC>
				</div> 
			</div>
		
		</div>
	</div>
</template>
<script type="text/javascript">
import $huo from './../../api/Dom'
import off from './../../api/offsetTop'
import fangdajin from './../../api/fangdajin'
import Bus from './../../api/Bus'
export default {
	mounted(){
		this.$nextTick(function(){
			setTimeout(this._huoqu,0);
			setTimeout(function(){
				var smallbox = $huo('.smallImg');
				var smallImg = $huo('.smallImg>img');
				var mask = $huo('.shopsMask');
				var bigImg = $huo('.bigImg');
				var _bigImg = $huo('.bigImg>img');
				fangdajin(smallbox,mask,bigImg,_bigImg,smallImg)
			}.bind(this),0)
		}.bind(this));
	},
	created(){
		this.arr = this.$route.query.arr;
		this.item = this.$route.query.item;
		this.items = this.$route.query.items;
	},
	data(){
		return {
			arr: {},
			item : {},
			items : [],
			beishu : 1,
			flag : false,
			lalalal : "瓶装",
			count:1,
			//购物车
			shopsFlag : false,
			//添加的数组
			addArr: []
		}
	},
	methods : {
		//标签页
		_huoqu(){
			let oLi = $huo('#biaoBtn>li');
			let bLi = $huo('#neiBtn>li');
			
			changeBac(oLi,bLi);
			//初始化样式
			function changeBac(oLi,bLi){
				for(var i = 0;i < oLi.length;i++){
					bLi[i].style.display = 'none';
					bLi[0].style.display = 'block';
					(function(i){
						oLi[i].addEventListener('click',function(){
							for(var j = 0;j < oLi.length;j++){
								oLi[j].style.background = '#f6f6f6';
								oLi[j].style.color = '#000';
								bLi[j].style.display = 'none';
							}
							oLi[i].style.background = '#d63139';
							oLi[i].style.color = '#fff';
							bLi[i].style.display = 'block'
						})
					})(i)
				};
				         
			}
		},
		//点击饮料包装 加边框
		flagChange(a){
			if(a){
				this.flag = true;
				
			}else{
				this.flag = false;
			}
		},
		//增 减 数量
		jia(a){
			if(a){
				this.count++;
			}else{
				this.count--;
				if(this.count <= 1){
					this.count = 1;
				}
			}
		},
		//点击加入购物车
		addS(){
			this.shopsFlag = true;
		},
		//点击隐藏购物车列表
		shopClose(){
			this.shopsFlag = false;
		},
		TiaochuanJisuan(a,item,coun){
//			this.addArr.push({
//				add : item,
//				coun,
//				zongji : a
//			});
			Bus.arrAdd.push({
				add : item,
				coun,
				zongji : a
			});
//			Bus.$emit('huoquArr',this.addArr)

			this.$router.push({path: '/gouwuche',query:{addArr:this.addArr}})
		}
	},
	watch : {
		//监听flag的值 如果加了border 容量值为。。。 倍数变12
		flag (n,o){
			if(n){
				this.lalalal = '箱装';
				this.beishu = 12;
			}else{
				this.lalalal = '瓶装';
				this.beishu = 1
			}
		}
	}
}
</script>
<style type="text/css">
	.shop {
		clear: both;
		width: 100%;
		background: #fff;
	}
	
	.shop-xs {
		width: 1200px;
		margin: 0 auto;
	}
	
	.shop-xs>h3 {
		width: 100%;
		height: 35px;
		line-height: 35px;
		font-size: 12px;
	}
	
	.shop-xs>h3>a,
	.shop-xs>h3>span {
		float: left;
		color: #555555;
		font-weight: normal
	}
	
	.shop-xs>h3>span {
		margin: 0 4px;
	}
	
	.shop-xs>.neirong {
		width: 100%;
	}
	
	.shop-xs>.neirong>.left {
		width: 200px;
		float: left;
	}
	
	.fenlei {
		width: 200px;
		border: 1px solid #dddddd;
	}
	
	.fenleiTop {
		position: relative;
		width: 100%;
		height: 34px;
		font-size: 14px;
		font-weight: 700;
		line-height: 34px;
		box-shadow: 0 2px 0 #d63139 inset;
	}
	
	.fenleiTop>i {
		width: 21px;
		height: 21px;
		background: url(../../assets/img/icon/topsale_index_bg2.gif) no-repeat;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.fenleiTop>span {
		margin-left: 10px;
	}
	
	.chanpin {
		width: 100%;
		border-top: 1px solid #dddddd
	}
	
	.chanpin>ul {
		width: 100%;
		padding: 0 28px;
	}
	
	.chanpin>ul>li {
		list-style: initial;
		height: 26px;
		line-height: 26px;
		color: #4f4f4f;
		font-size: 12px;
	}
	
	.tong {
		margin-top: 7px;
		width: 100%;
		border: 1px solid #DDDDDD
	}
	
	.tong2 {}
	
	.tong2>ul {
		width: 100%;
		padding-top: 5px;
		padding: 0 6px;
	}
	
	.tong2>ul>li {
		padding: 10px 0;
		width: 100%;
		height: 82px;
		border-bottom: 1px dashed #DDDDDD;
		list-style: none;
	}
	
	.tong2>ul>li>dl {
		width: 100%;
		height: 100%;
		
	}
	.shopsMask{
		width:190px;
		height:202.66px;
		position:absolute;
		left:0;
		top:0;
		background:rgba(255,225,225,.6);
		z-index:100000;
		display:none
	}
	.tong2>ul>li>dl>dt {
		float: left;
		width: 62px;
		height: 62px;
		border: 1px solid #DDDDDD;
		margin-right: 8px;
		position: relative;
	}
	
	.tong2>ul>li>dl>dt>i {
		width: 21px;
		height: 21px;
		background: url(../../assets/img/icon/topsale_index_bg2.gif) no-repeat;
		position: absolute;
		left: 0;
		top: 0;
		text-align: top;
		font-style:normal;
		color:#fff;
		font-weight: bold;
	 	font-weight:700;
		/*line-height:21px;*/
		line-height:10px;
	}
	
	.tong2>ul>li>dl>dt>img {
		float: left;
		width: 60px;
		height: 60px;
		background-size: 60px;
		margin: 0 auto;
	}
	
	.tong2>ul>li>dl>dd {
		line-height: 20px;
		font-size: 12px;
		overflow: hidden;
		height:39px;
		cursor:pointer;
	}
	.tong2>ul>li>dl>dd:hover{
		color:red;
	}
	.tong2>ul>li>dl>dd:last-child {
		color: #D63139;
		font-size: 14px;
		font-weight: bold;
		height:calc(100% - 40px);
	}
	.shop-xs>.neirong>.right{
		width:985px;
		float:right;
	}
	
	.shop-xs>.neirong>.right>.top{
		width:100%;
		height:520px;
	}
	.shop-xs>.neirong>.right>.top>.left{
		width:380px;
		height:100%;
		float:left;
	}
	.smallImg{
		width:380px;
		height:380px;
		float:left;
		border:1px solid #DDDDDD;
		margin-bottom:5px;
		position:relative;
	}
	.smallImg>img{
		width:100%;
		height:100%;
		float:left;
	}
	.bigImg{
		width:300px;
		height:320px;
		overflow: hidden;
		position:absolute;
		right:-320px;
		top:0;
		border:1px solid #DDDDDD;
		z-index:100000;
		display:none;
	}
	.bigImg>img{
		position:absolute;
		left:0;
		top:0;
		
		width:600px;
		height:600px;
		display:inline-block;
	}
	.shop-xs>.neirong>.right>.top>.left>.cha{
		height:55px;
		width:100%;
		clear:both
	}
	.left>.cha>.btn1{
		width:13px;
		height:100%;
		background:url(../../assets/img/icon/left_active.gif) no-repeat;
		float:left;
	}
	.left>.cha>.imgT{
		width:55px;
		height:55px;
		border:1px solid #DDDDDD;
		float:left;
		margin-left:8px;
		cursor:pointer
	}
	.left>.cha>.imgT>img{
		width:100%;
		height:100%;
		float:left;
		cursor:pointer
	}
	.left>.cha>.btn2{
		width:13px;
		height:100%;
		background:url(../../assets/img/icon/right_active.gif) no-repeat;
		float:right;
		cursor:pointer
	}
	.shop-xs>.neirong>.right>.top>.right{
		float:right;
		width:580px;
	}
	.shop-xs>.neirong>.right>.top>.right>h3{
		height:45px;
		border-bottom:1px dashed #DDDDDD;
		width:100%;
		line-height:45px;
		padding-left:5px;
		font-size:16px;
		font-weight:600;
	}
	.shop-xs>.neirong>.right>.top>.right>ul{
		width:100%;
		height:186px;
		padding-top:6px;
		margin-bottom:9px;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li{
		line-height:30px;
		height:30px;
		width:100%;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li>span{
		width:58px;
		display:inline-block;
		font-size:12px;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li>i{
		margin-left:16px;
		font-size:12px;
		font-style:normal;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:first-child{
		position:relative;
		line-height:22px;
		
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li>i{
		font-size:14px;
		color:#999999
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:last-child>b{
		margin-left:14px;
		color:#015fa5
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:nth-child(3)>i{
		color:red;
		font-size:18px;	
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:first-child>i{
		width:29px;
		margin-top:3px;
		height:13px;
		background:url(../../assets/img/icon/shoppingcart_business_other.jpg) no-repeat;
		float:left;
		margin-left:0;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:first-child>span{
		margin-left:5px;
		font-size:12px;
		color:#424041;
		float:left;
	}
	.shop-xs>.neirong>.right>.top>.right>ul>li:first-child>b{
		color:#000;
		font-weight:normal;
		margin-left:52px;
		float:left;
	}
	.xuan{
		width:100%;
		height:165px;
		border:1px solid #DDDDDD;
	}
	.xuan>ul{
		width:100%;
		height:100%;
		padding:0 8px;
	}
	.xuan>ul>li{
		width:100%;
		height:41px;
		line-height:41px;
		
		border-top:1px dashed #DDDDDD;
	}
	.xuan>ul>li:first-child{
		border:0
	}
	.xuan>ul>li>span{
		color:#c76f15;
		font-size:12px;
		margin-right:7px;
	}
	.xuan>ul>li>i{
		
		width:46px;
		height:24px;
		border:1px solid #ff6701;
		line-height:24px;
		text-align: center;
		font-style: normal;
		font-size:12px;
		display:inline-block;
	}
	.xuan>ul>li>em{
		width:40px;
		height:24px;
		border:1px solid transparent;
		display:inline-block;
		line-height:24px;
		font-style:normal;
		text-align: center;
		font-size:12px;
		cursor:pointer;
	}
	.xuan>ul>li>b{
		color:#d63139;
		font-size:12px;
		margin-right:8px;
	}
	.xuan>ul>li>strong{
		font-size:12px;
		margin-right:13px;
		font-weight:normal;
		float:left;
	}
	.counts{
		width:64px;
		height:18px;
		line-height:18px;
		float:left;
		margin-top:10px;
	}
	.counts>.T{
		width:9px;
		height:9px;
		background:url(../../assets/img/icon/close.gif) no-repeat;
		float:left;
		margin-top:3px;
		margin-right:5px;
		cursor:pointer;
	}
	.counts>.T:last-child{
		float:right;
		background:url(../../assets/img/icon/open.gif) no-repeat;
		margin-right:0;
	}
	.counts>.shu{
		float:left;
		width:34px;
		height:100%;
		border:1px solid #DDDDDD;
		text-align:center;
		line-height:15px;
		font-size:12px;
	}
	.alert{
		clear:both;
		color:#afa9ab;
		font-size:12px;
		line-height:20px;
	}
	.alert>h3{
		font-size:16px;
		line-height:34px;
		color:#D63139;
		font-weight:normal;
	}
	.fen{
		line-height:34px;
		width:100%;
		font-size:12px;
		
	}
	.right>.fen>span{
		margin-right:8px;
		float:left;
	}
	.right>.fen>a{
		width:18px;
		height:18px;
		float:left;
		margin-top:3px;
		margin-right:4px;
	}
	.right>.fen>a>img{
		width:18px;
		height:18px;
		display:inline-block;
		margin-top:0;
		line-height:40px;
		text-align: center;
		line-height:18px;
	}
	.and{
		margin-top:15px;
		width:100%;
		height:228px;
		border:1px solid #E6E6E6;
		background:#fafafa;
		margin-bottom:10px;
	}
	.and>h3{
		width:100%;
		height:22px;
		padding-left:10px;
		line-height:22px;
		color:#a20500;
		font-size:12px;
		margin-bottom:18px;
	}
	.Tubo{
		width:100%;
		height:188px;
		padding-left:15px;
	}
	.Tubo>.left{
		width:140px;
		height:calc(100% - 6px);
		padding-top:6px; 
		float:left;
	}
	.Tubo>.left>img{
		width:100px;
		height:100px;
		margin-left:20px;
	}
	.Tubo>.left>span{
		font-size:12px;
		display:inline-block;
		line-height:19px;
		color:#413f40;
	}
	.Tubo>.zhong{
		width:652px;
		height:calc(100% - 2px);
		float:left;
		position:relative;
		border-right: 1px #bfbfbf dotted
	}
	.add{
		position:absolute;
		top:31px;
		left:5px;
		width:19px;
		height:19px;
		background:url(../../assets/img/icon/add_icon.gif) no-repeat;
		
	}
	.Tua{
		margin-left:37px;
		float:left;
		width:614px;
		height:100%;
		background:#fff;
	}
	.Tubo>.right{
		width:176px;
		height:70px;
		float:left;
	}
	.Tubo>.right>span{
		text-align: center;
		font-size:12px;
		display:block;
		line-height:17px;
	}
	.Tubo>.right>span>b{
		font-weight:normal;
		color:#d63139;
	}
	.buy{
		width:87px;
		height:23px;
		background:#d63139;
		text-align:center;
		line-height:23px;
		margin:12px auto;
		cursor:pointer;
		font-size:13px;
		border-radius: 3px;
		color:#fff;
	}
	.right>.bottom{
		width:100%;
		
	}
	.right>.bottom>ul{
		width:100%;
		height:35px;
		border:1px solid #dddddd;
		border-bottom:2px solid #d63139;
	}
	.right>.bottom>ul>li{
		line-height:32px;
		border-right:1px solid #DDDDDD;
		width:92px;
		background:#f6f6f6;
		text-align:center;
		font-size:12px;
		float:left;
	}
	.right>.bottom>ul>li:nth-child(1){
		background:#d63139;
		color:#fff;
	}
	.bottom-xs{
		width:100%;
		padding-top:108px;
	}
	.bottom-xs>ul{
		width:100%;
		overflow: hidden;
	}
	.bottom-xs>ul>li{
		width:100%;
		float:left;
	}
	.bottom-xs>ul>li:nth-child(1){
		display:block
	}
	.apl{
		width:100%;
		margin-top:30px;
		height:156px;
	}
	.apl>p{
		width:100%;
		height:156px;
	}
	.apl>p>img{
		width:100%;
		height:100%;
		height:156px;
		display:inline-block
	}
	.bottom-xs>ul>li>.tab{
		width:100%;
		border:1px solid #ddd;
		height:146px;
		 border-collapse:collapse
	}
	.bottom-xs>ul>li>.tab>tr{
		font-size:12px;
		border-bottom:1px solid #ddd
	}
	.bottom-xs>ul>li>.tab>tr>th{
		
		background:#eee;
		
	}
	.ht{
		width:110px;
		padding:5px;
		background:#eee;
		text-align:right;
	}
	.bottom-xs>ul>li>.tab>tr>td:first-child{
		border-right:1px solid #DDDDDD;
	}
	.bottom-xs>ul>li>.tab>tr>td:last-child{
		padding:5px;
	}
	.kong{
		width:100%;
	}
	#biaoBtn>li{
		cursor:pointer;
	}
	.active{
		border:1px solid #fe7e01 !important
	}
	.addso{
		margin-top:5px;
		margin-left:20px;
		width: 125px;
	    height: 30px;
	    float:left;
	    position:relative;
	}
	.addShops{
		background:#d63139;
		line-height:30px;
		text-align: center;
		color:#fff;
		border-radius: 10px;
		width: 125px;
	    height: 30px;
	    cursor: pointer;
	}
	.smallKu{
		position:absolute;
		top:-140px;
		left:-90px;
		width: 258px;
   		overflow: hidden;
		border: 1px #DDDDDD solid;
   		background:#fff;
	}
	.smallKu>h3{
		line-height:20px;
		width:100%;
		font-size:12px;
		background:#EDEDED;
		padding-left:5px;
		font-weight:normal
	}
	.smallKu_xs{
		width:100%;
	    border-top: 0 none;
	    background: #fff;
	  
	}
	.smallKu_xs>ul{
		width:100%;
		padding: 10px 8px;
	}
	.smallKu_xs>ul>li{
		float:left;
	}
	.smallKu_xs>ul>li:last-child{
		width:180px;
		height:100%;
		overflow: hidden;
		float:right;
	}
	.smallKu_xs>ul>li:last-child>div{
		font-size:12px;
		line-height:20px;
		
	}
	.smallKu_xs>ul>li:last-child>div>span{
		margin-left:4px;
		
	}
	.anniu{
		width:100%;
		line-height:20px;
	}
	.anniu>input{
		font-size:12px;
		color:#fff;
		border-radius: 5px;
		float: left;
		line-height:20px;
   		margin-right: 5px;
   		width:74px;
   		height:16px;
   		background:#d63139;
   		cursor:pointer;
	}
	.anniu>input:last-child{
		background:#ff6701
	}
	.close{
		float:right;
		margin-right:10px;
	    height: 20px;
	    line-height: 20px;
	    font-size:16px;
	    cursor: pointer;
	}
</style>