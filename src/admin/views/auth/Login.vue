<template>
	<div class="cls-content-sm panel">
		<div class="panel-body">
			<div class="mar-ver pad-btm">
				<h1 class="h3">Bajak Learneed Login</h1>
				<p>Sign In to your account</p>
			</div>
			<form @submit.prevent="submit()">
				<div class="form-group">
					<input v-model="form.email" type="text" class="form-control" placeholder="Username" autofocus>
				</div>
				<div class="form-group">
					<input v-model="form.password" type="password" class="form-control" placeholder="Password">
				</div>
				<!-- <div class="checkbox pad-btm text-left">
					<input id="demo-form-checkbox" class="magic-checkbox" type="checkbox">
					<label for="demo-form-checkbox">Remember me</label>
				</div> -->
				<button class="btn btn-primary btn-lg btn-block" type="submit">Sign In</button>
			</form>
		</div>

		<div class="pad-all">
			<a href="javascript:void(0)" class="btn-link mar-rgt">Forgot password ?</a>
			<router-link to="/register" class="btn-link mar-lft">Create a new account</router-link>

			<div class="media pad-top bord-top">
				<div class="pull-right">
					<a href="#" class="pad-rgt"><i class="psi-facebook icon-lg text-primary"></i></a>
					<a href="#" class="pad-rgt"><i class="psi-twitter icon-lg text-info"></i></a>
					<a href="#" class="pad-rgt"><i class="psi-google-plus icon-lg text-danger"></i></a>
				</div>
				<div class="media-body text-left text-bold text-main">
					Login with
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',

	data: () => ({
		form: { email: null, password: null },
	}),

	methods: {
		async submit() {
			const data = this.$qs.stringify(this.form)
			const successLogin = await this.$store.dispatch('auth/login', data)

			if (successLogin) {
				this.$router.push('/')
			} else {
				alert('email atau password salah')
			}
		}
	}
}
</script>
