<template>
	<div class='pailou' v-if='Palou'>

		<div class="paloula" v-for='(x,index) in Palou.pailou' :key='index'>
			<div class='top'>
				<div class='lou' :style="{background:x.background}">{{x.name}}</div>
				<img :src='"../../assets/img/F/"+(index + 1) + "F/"+(index+1) + "fbg.png"' />
				<div class='top-right'>
					<div class='class' v-for='(item,index) in x.fenlei' :key='index' :style='background1(item,index,x.background)' @mouseenter='_Yi(item,index,x.fenlei)'>{{item.name}}</div>
					<div class="class">查看更多</div>
				</div>
			</div>
			<ul class="bottom">

				<li v-for='(item1,index) in x.fenlei' :key='index' v-show='item1.yiShu'>
					<kuai :width='300' :height='355' style='border:1px solid #ebebeb;float:left;' v-for='(item2,index) in item1.kuai' :textCont='item2.textCont' :moneyNew='item2.moneyNew' :moneyOld='item2.moneyOld' :img='"../src/assets/img/F/"+x.index + "F/"+item2.img' @kuaiD='kuaiD(item2,item1,x.fenlei)' :key='index'></kuai>
				</li>
			</ul>
		</div>
		<!-- 锚点 -->
		<div class='Position' v-show='Pos'>
			<ul>
				<li>汇多买</li>
				<li v-for='(x,index) in Palou.pailou' :key='index' @mouseenter='Maodian(index,x)' @mouseleave="MaodianL(index,x,Palou.pailou)" ref='mao' @click='TiaoScr(index,x,Palou.pailou)' :class='{activeLi : count === index}'>
					<img :src="'../src/assets/img/icon/index_0'+(index+2)+'.jpg'" v-show='!x.imgPj' />
					<img :src="'../src/assets/img/icon/index_0'+(index+2)+'.png'" v-show='x.imgPj' />
					<span>{{x.name | w}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import $huo from './../../api/Dom'
	import $offsetTop from './../../api/offsetTop'
	export default {
		props: {
			Palou: {
				type: Object,
				default: function() {
					return {}
				}
			},
			PailouTop: {
				type: Number,
				default: 0
			}
		},
		mounted() {
			//top值
			this.$nextTick(function() {
				setTimeout(() => {
					window.addEventListener('scroll', this.scrollT)
				}, 10)
			});
		},
		data: function() {
			return {
				xiabiao: {},
				Pos: false,
				//左右联动的i值
				count: 0
			}
		},

		methods: {
			_Yi: function(v, a, c, b) {
				this.xiabiao = v;
				c.forEach((v) => {
					v.yiShu = false;
				})
				v.yiShu = true;
			},
			//移入改变background值
			background1(a, b, bac) {
				let oDiv = a.yiShu;
				if(oDiv) {
					return {
						"background": bac
					}
				}
			},
			//锚点
			//移入
			Maodian(a, x) {
			this.$refs.mao[a].classList.add('activeLi');
			x.imgPj = true
								
			},
			//移出
			MaodianL(a, x,arr) {
				this.$refs.mao[a].classList.remove('activeLi');
				x.imgPj = false;
				this.$refs.mao[this.count].classList.add('activeLi');
				arr[this.count].imgPj = true
			},
			scrollT() {
				let scrollTop = document.documentElement.scrollTop;
				let offsetW = $huo('.pailou').offsetTop || 0;
				if(scrollTop + 72 >= offsetW) {
					this.Pos = true;
				} else {
					this.Pos = false
				};
				let oDiv = $huo('.paloula');
				oDiv.forEach((v, index) => {
					
					this.Palou.pailou[index].imgPj = false
					if(scrollTop >= $offsetTop(v).top - 61 && scrollTop <= $offsetTop(v).top + v.offsetHeight - 62) {
					
//						&& scrollTop <= v.offsetHeight + $offsetTop(v).top
						this.Palou.pailou[index].imgPj = true;
						this.count = index;
					}
				});
			},
			//左右联动 点击左边 移动右边
			TiaoScr(index, x, arr) {
				arr.forEach((v, index) => {
					v.imgPj = false;
				});
				
				arr[index].imgPj = true;
				var height = $offsetTop($huo('.paloula')[index]).top - 36;
//				clearInterval(time1)
				if(this.count > index){
					document.documentElement.scrollTop = height
					this.count = index;
				}else{
					document.documentElement.scrollTop = height
					this.count = index;
				}
//				var time1 = setInterval(function(){
//					console.log(document.documentElement.scrollTop,height)
//					console.log(this.count,index)
//					if(this.count > index){
//						//点击的i值比count小
//						//往上走
//						document.documentElement.scrollTop = document.documentElement.scrollTop - $huo('.paloula')[index].offsetHeight;
//						
//						if(document.documentElement.scrollTop == height + 172){
//							
//							clearInterval(time1);
//							this.count = index;
//						}
//					}else{
//						//点击的i值比count大
//						//往下走
//						document.documentElement.scrollTop = document.documentElement.scrollTop + $huo('.paloula')[index].offsetHeight / 10;
//						if(document.documentElement.scrollTop == height){
//							
//							clearInterval(time1);
//							this.count = index;
//						}
//					};
//				}.bind(this),0)
				
		},
		//移除滚动事件
		delScroll(){
			window.removeEventListener('scroll',this.scrollT)
		},
		kuaiD(a,b,c,index){
			this.$router.push({path : '/shops',query:{item : a,arr : b,items : c}})
		}
		
		},
		computed: {

		},
		destroyed(){
			this.delScroll()
		}
	}
</script>
<style scoped>
	.pailou {
		width: 100%;
	}
	
	.paloula {
		margin: 30px auto 0;
		width: 1200px;
		height: 764px;
	}
	
	.paloula>.top {
		width: 100%;
		height: 55px;
		
	}
	
	.paloula>.top>.lou {
		width: 165px;
		background: red;
		height: 100%;
		line-height: 55px;
		text-align: center;
		font-size: 22px;
		color: #fff;
		float: left;
	}
	
	.paloula>.top>img {
		width: 230px;
		height: 80px;
		float: left;
		position: relative;
		top: -25px;
	}
	
	.paloula>.top>.top-right {
		margin-top: 15px;
		height: 40px;
		display: flex;
		float: right;
	}
	
	.paloula>.top>.top-right>.class {
		width: 92px;
		height: 40px;
		background: #b8b8b8;
		font-size: 18px;
		color: #fff;
		text-align: center;
		line-height: 40px;
		margin-right: 5px;
		border-radius: 10px 10px 0 0;
		cursor: pointer
	}
	
	.paloula>.top>.top-right>.class:last-child {
		margin: 0;
	}
	
	.paloula>.bottom {
		width: 100%;
		height: calc(100% - 55px);
		position: relative;
		top: -25px;
		overflow: hidden;
	}
	
	.paloula>.bottom>li {
		width: 100%;
		height: 100%;
		float: left;
	}
	
	.paloula>.bottom>li>kuai {
		float: left;
	}
	
	.active {
		background: #adc914;
	}
	
	.Position {
		position: fixed;
		left: 18px;
		top: 100px;
		width: 61px;
	}
	
	.Position>ul {
		width: 100%;
	}
	
	.Position>ul>li {
		width: 61px;
		height: 61px;
		border: 1px solid #e5e5e5;
		line-height: 94px;
		text-align: center;
		background: #fff;
		color: #f2332b;
		font-size: 12px;
		position: relative;
		cursor: pointer;
	}
	
	.Position>ul>li>img {
		position: absolute;
		left: 0;
		top: 0;
		width: 60px;
		height: 60px;
		display: block;
		float: left;
	}
	
	.Position>ul>li:first-child {
		border: 1px solid #f23329;
		background: #f23329;
		color: #fff;
		font-size: 16px;
		line-height:61px;
	}
	
	li.activeLi {
		background: #f23329 !important;
		color: #fff !important;
		line-height: 94px !important;
	}
</style>