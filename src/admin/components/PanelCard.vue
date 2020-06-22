<template>
	<div class="panel">

		<div class="panel-heading">
			<h3 class="panel-title">{{ title }}</h3>	
			<slot name="panel-head-button"></slot>
		</div>

		<div class="panel-body">
			<slot></slot>
		</div>

		<div class="panel-footer">
			<slot name="panel-footer"></slot>
		</div>

	</div>
</template>

<script>
export default {
	name: 'PanelCard',
	props: {
		title: { type: String, required: true }
	}
}
</script>

<style scoped>
	.panel-heading {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-right: 20px;
		padding-top: 15px;
	}
	.panel-footer {
		padding-right: 20px;
		padding-bottom: 15px;
	}
</style>