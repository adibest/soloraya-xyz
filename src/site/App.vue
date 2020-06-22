<template>
	<div id="app">
			
		<transition name="fade">
			<LoadingAnimation v-if="globalLoading" class="app-loading-animation"/>
		</transition>
		
		<AppNavbar />

		<transition name="fade" mode="out-in">
			<router-view />
		</transition>

	</div>
</template>

<script>
import AppNavbar from './layouts/AppNavbar'

export default {
	name: 'App',
	components: { AppNavbar },
	computed:{
		globalLoading() {
			return this.$store.state.globalLoading
		}
	}
}
</script>

<style>
	a {
		cursor: pointer;
	}

	.fade-enter-active, .fade-leave-active {
		transition: all .2s ease !important;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	.app-loading-animation {
		position: fixed;
		z-index: 100000;
		top: 0px;
		left: 50%;
	}
</style>