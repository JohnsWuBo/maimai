<template>
	<div id="app">
		<router-view :Datas='Datas' :Tejia='Tejia' :Palou='Palou'/>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				//导航数据
				Datas: {},
				//特价
				Tejia : {},
				//爬楼
				Palou : {}
			}
		},
		created() {
			this._shuju();
			this._tejia();
			this._palou();
		},
		methods: {
			//导航请求
			_shuju() {
				this.$.get('./../static/feilei.json').then(function(a) {
					this.Datas = a.data;
				}.bind(this))
			},
			//特价请求
			_tejia(){
				this.$.get('./../static/tejia.json').then(function(a) {
					this.Tejia = a.data;
					console.log(a.data)
				}.bind(this))
			},
			//楼层请求
			_palou(){
				this.$.get('./../static/paF.json').then(function(a){
					this.Palou = a.data;
					this.Palou.pailou.forEach((v) => {
						v.fenlei.forEach((a,index) => {
							this.$set(a,'yiShu',false)
							this.$set(a,'bgcor',index)
						});
						v.fenlei[0].yiShu = true;
						v.fenlei[0].bgcor = 0;
						this.$set(v,"imgPj",false)
					});
				}.bind(this))
			}
		},
		
	}
</script>

<style>
	html {
		font-family: "微软雅黑";
	}
	
	div,
	aside,
	section,
	ol,
	li,
	ul,
	dl,
	dt,
	dd,
	body,
	html,
	a,
	input,
	p,
	h1,
	h2,
	h3,
	h4{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body{
		width:100%;
	}
	input {
		outline: none;
		border: none;
	}
	
	ul>li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	#app {
		width: 100%;
		background: #f2f2f2;
	}
</style>