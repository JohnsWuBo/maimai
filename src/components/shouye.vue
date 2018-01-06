<template>
  <div class="hello">
  	<!-- 全局可以用的头部 -->
    <hed></hed>
    <!-- banner左边导航 -->
    <banner-nav :Datas='Datas'></banner-nav>
    <!-- 天天特价轮播 -->
    <tejia :Tejia='Tejia'>
    		<slot name='header'></slot>
    </tejia>
     
    <!-- 爬楼啦 -->
    <pa :Palou='Palou'></pa>
    <!-- 尾部 -->
    <foots></foots>
  </div>
</template>

<script>
import $huo from './../api/Dom'
export default {
  name: 'shouye',
  props : {
  	Datas : {
  		type : Object,
  		default : function(){
  			return {}
  		}
  	},
  	Tejia : {
  		type : Object,
  		default : function(){
  			return {}
  		}
  	},
  	Palou: {
  		type : Object,
  		default : function(){
  			return {}
  		}
  	}
  },
  data () {
    return {
      PailouTop : 0
    }
  },
  components: {
  
  },
  mounted(){
  	//进入首页的时候让滚动条为0
  	document.documentElement.scrollTop = 0
  },
  methods : {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		width:100%;
	}
</style>
