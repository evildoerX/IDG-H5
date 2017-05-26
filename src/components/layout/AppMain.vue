<template>
	<div class="container">
    <transition>
      <router-view></router-view>
    </transition>
	</div>
</template>

<script>
	export default {
		components:{
		}
	}

</script>

<style scoped lang="less">
	.container {
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
</style>
