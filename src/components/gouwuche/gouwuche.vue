<template>
	<div class='gouwuche'>
		<hed></hed>
		<div class='gouwuche_xs'>
			<div class='gouwuche_xs_margin'>
				<img src="../../assets/img/banner/mycart_icon.jpg" />
				<table border="" cellspacing="0" cellpadding="0">
					<tr class='tr1'>
						<th style="width:10%">商品编号</th>
						<th>商品名称</th>
						<th style="width:10%">价格</th>
						<th style="width:10%">优惠</th>
						<th style="width:10%">积分</th>
						<th style="width:10%">数量</th>
						<th style="width:10%">操作</th>
					</tr>
					<tr class='tr2'>
						<td class='ted'>
							<span>：汇多买</span>
						</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr class='tr3' v-for='arr in addArr'>
						<td>
							YLKKKL0011-A1250
						</td>
						<td>
							<img :src='"../../src/assets/img/F/"+arr.add.img.substr(0,1)+"F/"+arr.add.img' />
							<span>{{arr.add.textCont}}</span>
						</td>
						<td style="color:#d7261c">￥{{arr.add.moneyNew}}</td>
						<td>0</td>
						<td>0</td>
						<td>
							<div class='counts'>
								<div class='T' @click='jia(0,arr)'></div>
								<div class='shu'>{{arr.coun}}</div>
								<div class='T' @click='jia(1,arr)'></div>
							</div>
						</td>
						<td>
							<em style="font-style:normal" @click='del(arr)'>删除</em>
						</td>
					</tr>
				</table>
				<div class='dibu'>
					<div class="dibuleft">
						<input type="submit" name="" id="" value="继续购物" @click='jixu()' />
						<input type="submit" value='清空购物车' @click='clear()' />
					</div>
					<div class="diburight">

						<span>重量总计：</span> {{this.addArr.length > 0? 6.25 : 0}} &nbsp;&nbsp;
						<span> 商品数量：</span> {{this.addArr.length > 0? shuliang : 0}} &nbsp;&nbsp;
						<span>赠送积分：</span> 0 &nbsp;&nbsp;
						<span>原始金额：</span> ￥{{this.addArr.length > 0 ?yuan.toFixed(2) : 0}}元 &nbsp;&nbsp;
						<span>优惠：</span> ￥0.00元 &nbsp;&nbsp;
						<br /> 商品总金额(不含运费)：
						<b class='r'>￥{{this.addArr.length > 0 ? yuan.toFixed(2) : 0}}元 </b>
					</div>
				</div>
				<div class='btn'>
					<button @click='jiesuan()'>结算</button>
				</div>
			</div>
		</div>
		<FootsC></FootsC>
	</div>
</template>
<script type="text/javascript">
	import Bus from './../../api/Bus'
	export default {
		created() {
			this.addArr = Bus.arrAdd;
			document.documentElement.scrollTop = 0;
		},
		methods:{
			jia(a,b){
				var index = this.addArr.indexOf(b);
				if(a){
//					this.addArr[index].coun++;
//					console.log(index)
//					console.log(this.addArr[index])
					Bus.arrAdd[index].coun++;
				}else{
					this.addArr[index].coun--;
					if(this.addArr[index].coun < 1){
						Bus.arrAdd.splice(index,1)
					}
				};
//				Bus.$emit('shuChange',Bus.arrAdd.length + 1);
			},
			jixu(){
				this.$router.push('/')
			},
			clear(){
				this.addArr = [];
				Bus.arrAdd = []
			},
			//删除商品
			del(a){
				let index = Bus.arrAdd.indexOf(a);
				Bus.arrAdd.splice(index,1)
			},
			jiesuan(){
				window.alert('总共消费' + this.yuan + "元")
			}
		},
		data(){
			return {
				addArr : [],
				coun : 0,
				item : {}
			}
		},
		computed:{
			//商品数量
			shuliang(){
				var counts = 0;
				for(var i = 0;i < this.addArr.length;i++){
					counts += this.addArr[i].coun;
				};
				
				return counts;
			},
			//原始金钱
			yuan(){
				var money = 0;
				for(var i = 0;i < this.addArr.length;i++){
					money += this.addArr[i].add.moneyNew * this.addArr[i].coun;
				};
				return money;
			}
		}
	}
</script>
<style scoped>
	.gouwuche {
		width: 100%;
		background: #fff;
	}
	
	.gouwuche_xs {
		width: 100%;
	}
	
	.gouwuche_xs_margin {
		width: 1200px;
		margin: 0 auto;
	}
	
	.gouwuche_xs_margin>img {
		width: 1200px;
		height: 107px;
		margin: 20px 0;
	}
	
	.gouwuche_xs_margin>table {
		width: 100%;
		border-collapse: collapse;
		font-weight: normal;
		border: 1px solid #DDDDDD;
		border-top: none;
		border-right: none;
		border-left: none;
	}
	
	.tr1 {
		border-top: 2px solid #d63139;
		text-align: center;
		width: 100%;
		height: 36px;
		padding: 5px 2px;
		font-size: 14px;
		line-height: 25px;
	}
	
	th {
		border-right: none;
		border-left: none;
	}
	
	td {
		border-right: none;
		border-left: none;
		text-align: center;
	}
	
	tr {
		font-size: 12px;
	}
	
	.tr2 {
		height: 42px;
		padding: 5px 2px;
		line-height: 25px;
		text-align: center;
	}
	
	.tr2>.ted {
		background: url(../../assets/img/banner/shoppingcart_business_other.jpg) no-repeat 17px 16px;
		border-top: none;
		border-bottom: none;
		display: block;
		height: 42px;
		line-height: 42px;
		padding: 0px 0 0 30px;
	}
	
	.tr2>.ted>span {
		margin-left: 20px;
		text-align: left;
		color: #0859C2;
		font-size: 12px;
	}
	
	.tr3 {
		height: 63px;
	}
	
	.tr3>td {
		padding: 5px 2px;
		line-height: 25px;
		border: 1px #ddd solid;
		border-right-style: none;
		border-left-style: none;
	}
	
	td>img {
		width: 52px;
		height: 52px;
		float: left;
		border: 1px solid #DDDDDD;
		margin-right: 10px;
	}
	
	td>span {
		float: left;
	}
	
	.dibu {
		width: 100%;
		height: 147px;
		background: #fafafa;
		border-bottom: 1px solid #DDDDDD;
		padding-bottom: 38px;
	}
	
	.dibuleft {
		float: left;
	}
	
	.dibu>.dibuleft>input {
		float: left;
		margin-left: 20px;
		border-radius: 10px;
		height: 25px;
		width: 100px;
		margin-top: 20px;
		background: #fdfdfd;
		box-shadow: 1px 1px 1px;
	}
	
	.diburight {
		float: right;
		text-align: right;
		padding: 10px 0px 0px 15px;
		font-size: 12px;
	}
	
	.r {
		color: #d63139;
		font-size: 24px;
	}
	
	.btn {
		width: 100%;
		height: 75px;
	}
	
	.btn>button {
		margin-top: 30px;
		width: 123px;
		height: 42px;
		background: #d7261c;
		color: #fff;
		font-size: 22px;
		float: right;
		outline: none;
		border: none;
		box-shadow: 0 2px 1px #000;
		cursor: pointer;
	}
	.counts{
		width:64px;
		height:18px;
		line-height:18px;
		float:left;
		margin-left:29px;
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
</style>