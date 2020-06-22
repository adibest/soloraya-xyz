<template>
	<div class="form-group" :class="{'has-error': validation.hasError(validator)}">
		<label class="col-sm-3 col-md-2 control-label">{{ label }} : </label>
		<div class="col-sm-9 col-md-10">
			<input 
				:type="type" 
				class="form-control" 
				:value="value" 
				@input="updateValue($event.target.value)"
			>
			<small class="help-block">{{ validation.firstError(validator) }}</small>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormInput',
	props: {
		validation: { type: Object, required: true },
		validator: { type: String, required: true },
		label: { type: String, required: true },
		value: { type: [String, Number] },
		type: { type: String, default: 'text' },
	},
	methods: {
		updateValue(val) {
			this.$emit('input', val)
		}
	}
}
</script>