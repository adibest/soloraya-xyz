<template>
	<div class="form-group">
		<label class="col-sm-3 col-md-2 control-label">{{ label }} : </label>
		<div class="col-sm-9 col-md-10">
			<p class="form-control-static">
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormStatic',
	props: {
		label: { type: String, required: true },
	}
}
</script>