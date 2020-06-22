<template>
	<div class="form-group" :class="{'has-error': validation.hasError(validator)}">
		<label class="col-sm-3 col-md-2 control-label">{{ label }} : </label>
		<div class="col-sm-9 col-md-10">
			<div class="radio">
				<span v-for="option in options" :key="option.value">
					<input 
						:id="option.value" 
						class="magic-radio" 
						type="radio" 
						:value="option.value"
						@change="updateValue($event.target.value)"
						:checked="option.value == value"
					>
					<label :for="option.value">{{ option.label }}</label>
				</span>
			</div>
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
		options: { type: Array, required: true },
		value: { type: [String, Number] },
	},
	methods: {
		updateValue(val) {
			this.$emit('input', val)
		}
	}
}
</script>