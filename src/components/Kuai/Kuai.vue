<template>
	<div class='kuaikuai' ref='kuai' @click='kuaidj()'>
		<div class="kuai">
			<div class='box'>
				<img :src='img' />
				<p>{{textCont}}</p>
				<div class='bottom'>
					<div class='left'>
						<span>¥ {{moneyNew}}</span>
						<span v-show='moneyOld'>¥ {{moneyOld}}</span>
					</div>
					<div class='right'>
						<div class='btn'>
							加入购物车
						</div>
						<span v-if="pople">以有{{pople}}人购买</span>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			width: {
				type: Number,
				default: 294.5
			},
			height: {
				type: Number,
				default: 370
			},
			textCont: {
				type: String,
				default: ''
			},
			img: {
				type: String,
				default: ''
			},
			moneyNew: {
				type : Number,
				default : 0
			},
			moneyOld: {
				type : Number,
				default : 0
			},
			pople : {
				type : Number,
				default : 0
			}
		},
		mounted() {
			this.$nextTick(function() {
				setTimeout(function() {
					this._getWidth();
				}.bind(this), 0)
			})
		},
		methods: {
			_getWidth() {
				var kuai = this.$refs.kuai;
				kuai.style.width = this.width + 'px';
				kuai.style.height = this.height + 'px'
			},
			kuaidj(){
				this.$emit('kuaiD')
			}
		}
	}
</script>
<style scoped>
	.kuai {
		overflow: hidden;
		width:100%;
		height:100%;
	}
	
	.box {
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.box>img {
		width: 293px;
		height: 260px;
		display: block;
		cursor:pointer;
	}
	
	.box>p {
		height: 30px;
		line-height: 30px;
		width: 270px;
		margin:0 auto;
		text-align: center;
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color:#585858;
		cursor:pointer;
	}
	
	.box>.bottom {
		margin:0 auto;
		width:260px;
		height: 78px;
		/*width: 100%;*/
	}
	.box>.bottom>.left{
		
		height:100%;
		text-align: center;
		line-height:60px;
		float:left;
	}
	.box>.bottom>.left>span{
		font-size:25px;
		color:#eb3333;
	}
	.box>.bottom>.left>span:nth-child(2){
		font-size:14px;
		color:#a2a2a2;
		text-decoration:line-through;
	}
	.box>.bottom>.right{
		padding-top:14px;
		padding-right:15px;
		height:100%;
		text-align:right;
		float:right;
	}
	.box>.bottom>.right>.btn{
		width:106px;
		height:30px;
		text-align: center;
		line-height:30px;
		color:#fff;
		font-weight: 500;
		margin-bottom:7px;
		font-size:16px;
		background:#eb3333;
		border-radius: 10px;
		cursor:pointer;
	}
	.box>.bottom>.right>span{
		color:#b7b7b7;
		font-size:12px;
		color:#9c9c9c;
	}
</style>