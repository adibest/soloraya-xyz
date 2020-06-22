<template>
	<div class="cls-content-lg panel">
		<div class="panel-body">
			<div class="mar-ver pad-btm">
				<h1 class="h3">Create a New Acc</h1>
				<p>Come join the Nifty community! Let's set up your account.</p>
			</div>
			<form action="pages-login.html">
				<div class="row">
					<div class="col-sm-6">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Full name" name="name">
						</div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="E-mail" name="email">
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Username" name="username">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" name="password">
						</div>
					</div>
				</div>
				<div class="checkbox pad-btm text-left">
					<input id="demo-form-checkbox" class="magic-checkbox" type="checkbox">
					<label for="demo-form-checkbox">I agree with the <a href="#" class="btn-link text-bold">Terms and Conditions</a></label>
				</div>
				<button class="btn btn-primary btn-lg btn-block" type="submit">Register</button>
			</form>
		</div>
		<div class="pad-all">
			Already have an account ? <a href="pages-login.html" class="btn-link mar-rgt text-bold">Sign In</a>

			<div class="media pad-top bord-top">
				<div class="pull-right">
					<a href="#" class="pad-rgt"><i class="demo-psi-facebook icon-lg text-primary"></i></a>
					<a href="#" class="pad-rgt"><i class="demo-psi-twitter icon-lg text-info"></i></a>
					<a href="#" class="pad-rgt"><i class="demo-psi-google-plus icon-lg text-danger"></i></a>
				</div>
				<div class="media-body text-left text-main text-bold">
					Sign Up with
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register'
}
</script>