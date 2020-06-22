<template>
	<div id="content-container">
		
		<PageHead
			title="Users" 
			bread-icon="pli-home" 
			:bread-contents="['users', formTitle]"
		/>

		<div id="page-content">
			<div class="row">
				<div class="col-sm-12">

					<PanelCard :title="'Users ' + formTitle + ' Form'">
						<template #panel-head-button>
							<router-link class="btn btn-sm btn-warning btn-labeled" to="/users">
								<i class="btn-label psi-arrow-back"></i> Back
							</router-link>
						</template>

						<form class="form-horizontal">

							<FormInput label="Name" v-model="form.name" validator="form.name" :validation="validation"/>
							<FormInput label="Email" v-model="form.email" validator="form.email" :validation="validation" type="email"/>

							<div v-show="editMode && !editPassword" class="row">
								<div @click="editPassword = true" class="col-md-offset-2 col-sm-offset-3">
									<button type="button" class="btn btn-sm btn-mint">Edit Password</button>
								</div>
								<br>
							</div>

							<FormInput v-show="!editMode || editPassword" label="Password" v-model="form.password" validator="form.password" :validation="validation" type="password"/>


							<FormRadio label="Gender" v-model="form.gender" validator="form.gender" :validation="validation" :options="genderOptions"/>
							<FormRadio label="Role" v-model="form.role_id" validator="form.role_id" :validation="validation" :options="roleOptions"/>

						</form>

						<template #panel-footer>
							<div class="row">
								<div class="col-md-offset-2 col-sm-offset-3">
									<button type="button" class="btn btn-sm btn-primary btn-labeled" @click="submit()">
										<i class="btn-label pli-save"></i> Save
									</button>
									|
									<button type="button" class="btn btn-sm btn-warning btn-labeled" @click="reset()">
										<i class="btn-label pli-reset"></i> Reset
									</button>
								</div>
							</div>
						</template>

					</PanelCard>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'
import FormInput from '@/admin/components/FormInput'
import FormRadio from '@/admin/components/FormRadio'

const { Validator } = SimpleVueValidator;

export default {
	name: 'Form',

	components: { FormInput, FormRadio },

	mixins: [SimpleVueValidator.mixin],

	data: () => ({
		editMode: false,
		editPassword: false,
		form: {
			name: null, email: null, password: null, gender: null, role_id: null
		},
		genderOptions: [
			{label: 'Laki-laki', value: 'l'},
			{label: 'Perempuan', value: 'p'},
		],
		roleOptions: [
			{label: 'Admin', value: 1},
			{label: 'Teacher', value: 2},
			{label: 'Student', value: 3},
		]
	}),

	computed: {
		formTitle() {
			return this.editMode ? 'Edit' : 'Create'
		}
	},

	validators: {
		'form.name': function(val) {
			return Validator.value(val).required()
		},
		'form.email': function(val) {
			return Validator.value(val).required().email()
		},
		'form.password': function(val) {
			if (this.form.password !== undefined) {
				let res = Validator.value(val).lengthBetween(6, 20)
				if (!this.editMode) {
					res = res.required()
				}
				return res;
			}
		},
		'form.gender': function(val) {
			return Validator.value(val).required()
		},
		'form.role_id': function(val) {
			return Validator.value(val).required()
		},
	},

	methods: {
		checkId() {
			const id = this.$route.params.id
			if (id) {
				const user = this.$store.state.users.data.filter(d => d.id == id)[0]

				this.editMode = true
				this.form = Object.assign({}, user)
			}
		},
		submit() {
			this.$validate()
				.then(async (success) => {
					if (success) {
						const actionType = this.editMode ? 'users/editData' : 'users/createData'
						const data = {
							form: this.$qs.stringify(this.form),
							id: this.editMode ? this.form.id : null,
						}

						await this.$store.dispatch(actionType, data)
						this.$router.push('/users')
					}
				})
		},
		reset() {
			const defaultForm = {
				name: null, email: null, password: null, gender: null, role_id: null
			}

			this.form = Object.assign({}, defaultForm)
			this.validation.reset()
		}
	},

	created() {
		this.checkId()
	}
}
</script>