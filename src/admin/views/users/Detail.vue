<template>
	<div id="content-container">
		
		<PageHead
			title="Users" 
			bread-icon="pli-home" 
			:bread-contents="['users', 'detail']"
		/>

		<div id="page-content">
			<div class="row">
				<div class="col-sm-12">

					<PanelCard title="Users Form">
						<template #panel-head-button>
							<router-link class="btn btn-sm btn-warning btn-labeled" to="/users">
								<i class="btn-label psi-arrow-back"></i> Back
							</router-link>
						</template>

						<form class="form-horizontal">
							<FormStatic label="Name">{{ form.name }}</FormStatic>
							<FormStatic label="Email">{{ form.email }}</FormStatic>
							<FormStatic label="gender">{{ form.gender | formatGender }}</FormStatic>
							<FormStatic label="Role">{{ form.role.name }}</FormStatic>
							<FormStatic label="Registered At">{{ form.created_at | shortenFullDate }}</FormStatic>
							<FormStatic label="Last Update">{{ form.updated_at | shortenFullDate }}</FormStatic>
						</form>
					</PanelCard>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FormStatic from '@/admin/components/FormStatic'

export default {
	name: 'Detail',

	components: { FormStatic },

	filters: {
		formatGender(val) {
			if (!val) return ''
			return val == 'l' ? 'Laki-laki' : 'Perempuan'
		},
		shortenFullDate(val) {
			if (!val) return ''
			return val.substr(0, 10)
		},
	},

	data: () => ({
		form: {
			name: null, email: null, password: null, gender: null, role_id: null
		},
	}),

	methods: {
		checkId() {
			const id = this.$route.params.id
			if (id) {
				const user = this.$store.state.users.data.filter(d => d.id == id)[0]

				this.editMode = true
				this.form = Object.assign({}, user)
			}
		},
	},

	created() {
		this.checkId()
	}
}
</script>