<template>
	<div id="page-head">
		
		<div id="page-title">
			<h1 class="page-header text-overflow">{{ title }}</h1>
		</div>

		<ol class="breadcrumb">
			<li><a href="#"><i :class="breadIcon"></i></a></li>
			<li 
				v-for="(breadContent, index) in breadContents"
				:key="breadContent"
				:class="{ active: (breadContents.length - 1) == index }"
			>
				<a href="javascript:void(0)">{{ breadContent }}</a>
			</li>
		</ol>

	</div>
</template>

<script>
export default {
	name: 'PageHead',
	props: {
		title: { type: String, required: true },
		breadContents: { type: Array, required: true },
		breadIcon: { type: String, required: true },
	},
}
</script>