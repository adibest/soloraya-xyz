<template>
	<div id="data-table">
		<vue-good-table
			style-class="vgt-table striped"
			mode="remote"

			:pagination-options="{
				enabled: true,
				mode: 'pages',
				dropdownAllowAll: false,
			}"
			:search-options="{
				enabled: true,
				skipDiacritics: true,
			}"

			@on-page-change="onPageChange"
			@on-sort-change="onSortChange"
			@on-search="onSearch"
			@on-per-page-change="onPerPageChange"

			:columns="columns"
			:rows="tableRows"
			:totalRows="totalData"
			:is-loading.sync="isLoading"
		>
			<template slot="table-row" slot-scope="props">
				<span v-if="props.column.field == 'action'">
					<button class="btn btn-xs btn-mint" @click="editData(props.row.id)">
						<i class="psi-pencil"></i> Edit
					</button> | 
					<button class="btn btn-xs btn-warning" @click="detailData(props.row.id)">
						<i class="psi-letter-open"></i> Detail
					</button> | 
					<button class="btn btn-xs btn-danger" @click="deleteData(props.row.id)">
						<i class="psi-trash"></i> Delete
					</button>
				</span>
			</template>
		</vue-good-table>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import _ from 'lodash'

export default {
	name: 'DataTable',

	components: { VueGoodTable },

	props: {
		columns: { type: Array, required: true },
		storeName: { type: String, required: true },
		path: { type: String, required: true },
		sortBy: { type: Object, required: false },
	},

	computed: {
		totalData() {
			return this.$store.state[this.storeName].totalData
		},
		tableParams() {
			return this.$store.state[this.storeName].tableParams
		},
		tableRows() {
			return this.$store.getters[this.storeName+'/tableRows']
		},
		isLoading: {
			get: function() {
				return this.$store.state[this.storeName].isLoading
			},
			set: function(val) {
				this.$store.commit(this.storeName+'/toggleIsLoading', val)
			}
		},
	},

	methods: {
		updateParams(newProps) {
			const newParams = Object.assign({}, this.tableParams, newProps)
			this.$store.commit(this.storeName+'/setTableParams', newParams)
		},
		onPageChange(params) {
			this.updateParams({page: params.currentPage})
			this.loadItems()
		},
		onPerPageChange(params) {
			this.updateParams({perPage: params.currentPerPage})
			this.loadItems()
		},
		onSortChange(params) {
			this.updateParams({sort: params[0]})
			this.loadItems()
		},
		loadItems() {
			this.$store.dispatch(this.storeName+'/fetchTableData')
		},
		editData(id) {
			this.$router.push(this.path + '/edit/' + id)
		},
		detailData(id) {
			this.$router.push(this.path + '/detail/' + id)
		},
		deleteData(id) {
			if (confirm('Are you sure?')) this.$store.dispatch(this.storeName+'/deleteData', id)
		},	
	},
	
	created() {
		const self = this;
		this.onSearch = _.debounce((params) => {
			self.updateParams(params)
			self.loadItems()
		}, 300)

		if (this.sortBy) this.updateParams({sort: this.sortBy}) 

		this.loadItems()
	}
}

</script>

<style>
.vgt-table {
	border: 0 !important;
	font-size: 13px !important;
}
.vgt-wrap__footer .footer__row-count__select,
.vgt-wrap__footer .footer__row-count__label,
.vgt-wrap__footer .footer__navigation,
.vgt-input,
.vgt-select {
	font-size: 11px !important;
}
.vgt-table thead th {
	background: none;
}
.vgt-wrap__footer,
.vgt-global-search {
	background: none;
	border: 0;
}
.vgt-global-search__actions {
	margin-right: 0;
	margin-left: 0;
}
</style>