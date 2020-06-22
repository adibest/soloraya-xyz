<template>
	<div id="app">
		<div id="container" class="effect aside-float aside-bright mainnav-lg mainnav-fixed navbar-fixed">
			
			<transition name="lol">
				<LoadingAnimation v-if="globalLoading" class="app-loading-animation"/>
			</transition>
			
			<AppNavbar />

			<div class="boxed">

				<transition name="lol" mode="out-in" appear>
					<router-view />
				</transition>

				<AppSidebar />
				
				<AppToolbar />

			</div>

			<AppFootbar />

			<button class="scroll-top btn">
				<i class="pci-chevron chevron-up"></i>
			</button>

		</div>
	</div>
</template>

<script>
import AppNavbar from '@/admin/layouts/AppNavbar'
import AppSidebar from '@/admin/layouts/AppSidebar'
import AppToolbar from '@/admin/layouts/AppToolbar'
import AppFootbar from '@/admin/layouts/AppFootbar'

export default {
	name: 'App',
	components: { AppNavbar, AppSidebar, AppToolbar, AppFootbar },
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

	.lol-enter-active, .lol-leave-active {
		transition: all .2s ease !important;
	}
	.lol-enter, .lol-leave-to {
		opacity: 0;
		transform: translateY(-10%);
	}

	.app-loading-animation {
		position: fixed;
		z-index: 100000;
		top: 0px;
		left: 50%;
	}
</style>