<template>
	<div id="content-container">

		<PageHead
			title="Users" 
			bread-icon="pli-home" 
			:bread-contents="['users', 'index']"
		/>

		<div id="page-content">
			<div class="row">
				<div class="col-sm-12">

					<PanelCard title="Users Table">
						<template #panel-head-button>
							<router-link 
								class="btn btn-sm btn-primary btn-labeled"
								to="/users/create"
							>
								<i class="btn-label pli-notepad"></i>
								Add Data
							</router-link>
						</template>

						<DataTable
							:columns="columns"
							store-name='users'
							path="/users"
						/>
					</PanelCard>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DataTable from '@/admin/components/DataTable'

	export default {
		name: 'Index',

		components: { DataTable },

		data: () => ({
			columns: [
				{ label: 'Name', field: 'name' },
				{ label: 'Email', field: 'email' },
				{ label: 'Gender', field: 'gender', globalSearchDisabled: true },
				{ label: 'Role', field: 'role_id' },
				{ label: 'Registered at', field: 'created_at' },
				{ label: 'Action', field: 'action', width: '210px', sortable: false },
			],
		}),
	}
</script>