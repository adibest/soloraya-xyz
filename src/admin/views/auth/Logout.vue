<template>
	<h1 class="title">Processing Logout</h1>
</template>

<script>
export default {
	name: 'Logout',
	async created() {
		const successLogout = await this.$store.dispatch('auth/logout')

		if (successLogout) {
			this.$router.push('/login')
		} else {
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.title {
	text-align: center;
}
</style>