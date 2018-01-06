<template>
	<div class='shops'>
		<hed></hed>
		<shop></shop>
	</div>
</template>
<script type="text/javascript">
	export default {
		mounted(){
			document.removeEventListener('scroll',this.scrollT);
			document.documentElement.scrollTop = 0;
		}
	}
</script>
<style type="text/css">
	
</style>