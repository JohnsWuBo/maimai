<template>
	<div class="tejia">
		<div class='tejia-cont'>
			<!-- 标题 -->
			<h2	slot='header'>小汇推荐  天天特价</h2>
			<!-- 轮播 -->
			<div class='tejia-cont-lun'>
				<ul>
					<li v-for='x in Tejia.tejia'>
						<kuai :width="294.5" :height='366' :img='"../src/assets/img/shops/"+x.img' :moneyNew='x.moneyNew' :moneyOld='x.moneyOld' :pople='x.polpe' :textCont='x.name'></kuai>
					</li>
				</ul>
				<div class='zuo'><</div>
				<div class="you">></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import $huo from '@/api/Dom'
	import Dclick from '@/api/Dianji'
	export default {
		mounted(){
			this.$nextTick(function(){
				setTimeout(() => {
					this.getWh();
					this._Diji();
				},0)
			})
		},
		props : {
			Tejia : {
				type : Object,
				default : function(){
					return {}
				}
			}
		},
		data (){
			return {
				width : 0,
				height: 0,
				textCont : '',
				img : "",
				moneyNew : 0,
				moneyOld: 0,
				pople : 0
			}
		},
		methods : {
			getWh : function(){
				let oUl = $huo('.tejia-cont-lun>ul');
				let oLi = oUl.children[0];
				console.log(this.height)
				oUl.style.width = oLi.offsetWidth * oUl.children.length+ 42 + 'px';
//				console.log(oUl.children.length)
			},
			_Diji: function(){
				var oDiv = $huo('.tejia-cont-lun');
				var oUl = $huo('.tejia-cont-lun>ul');
				var left = $huo('.tejia-cont-lun>.zuo');
				var right = $huo('.tejia-cont-lun>.you');
				var num = 0;
				Dclick(left,right,0,oDiv,oUl);
//				console.log(oDiv.offsetWidth,right)
			}
		}
	}
</script>
<style scoped>
	.tejia{
		width:100%;
		height:440px;
		position:relative;
		top:-2px;
	}
	.tejia-cont{
		margin:0 auto;
		width:1200px;
		height:100%;
	}
	h2{
		height:70px;
		width:100%;
		line-height:70px;
		text-align: center;
		font-size:30px;
		color:#535353;
		font-weight:normal
	}
	.tejia-cont-lun{
		height:calc(100% - 74px);
		width:100%;
		overflow: hidden;
		position:relative;
	}
	.tejia-cont-lun>ul{
		height:100%;
		position:absolute;
		left:0;
		top:0;
		transition: all 1s;
	}
	.tejia-cont-lun>ul>li{
		border:1px solid #dbdada;
		margin-right:7px;
		width:294.5px;
		height:100%;
		float:left;
		background:#fff;
	}
	.tejia-cont-lun>ul>li:nth-child(4n){
		margin-right:0;
	}
	.tejia-cont-lun>ul>li:last-child{
		width:295px
	}
	.tejia-cont-lun>.zuo,.tejia-cont-lun>.you{
		width:30px;
		height:50px;
		color:#fff;
		background:#a6a6a5;
		font-size:24px;
		line-height:50px;
		text-align: center;
		position:absolute;
		top:50%;
		transform: translateY(-50%);
		cursor:pointer;
		transition: all .5s;
	}
	.tejia-cont-lun>.zuo{
		left:0;
	}
	.tejia-cont-lun>.you{
		right:0;
	}
	.tejia-cont-lun>.zuo:hover,.tejia-cont-lun>.you:hover{
		background:#90908f;
		transition: all .5s;
	}
</style>