<template>
	<div id="container" class="cls-container">
		
		<div id="bg-overlay" class="bg-img" :style="`background-image: url( ${img} );`"></div>
		
		<div class="cls-content">
			<router-view />
		</div>

		<a 
			class="credit-wrapper" 
			href="https://unsplash.com/@paulmelki?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
			target="_blank" 
			rel="noopener noreferrer" 
			title="Download free do whatever you want high-resolution photos from Paul Melki"
		>
			<span class="credit-svg-wrapper">
				<svg xmlns="http://www.w3.org/2000/svg" class="credit-svg" viewBox="0 0 32 32">
					<title>unsplash-logo</title>
					<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
				</svg>
			</span>
			<span class="credit-text">Paul Melki</span>
		</a>
		
	</div>
</template>

<script>
export default {
	name: 'Auth',
	computed: {
		img: () => require('@/admin/assets/library1.jpg')
	}
}
</script>

<style>
#bg-overlay {
	filter: blur(5px);
}
.credit-wrapper {
	color: #aaaaaa55;
	text-decoration:none;
	padding:4px 6px;
	font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif;
	font-size:12px;
	font-weight:bold;
	line-height:1.2;
	display:inline-block;
	border-radius:3px;
	position: absolute;
	bottom: 15px; right: 15px;
	text-align: center;
}
.credit-svg-wrapper {
	display:inline-block;
	padding:2px 3px;
}
.credit-svg {
	height:12px;
	width:auto;
	position:relative;
	vertical-align:middle;
	top:-2px;
	fill: #aaaaaa55;
}
.credit-text {
	display:inline-block;
	padding:2px 3px;
	color:  #aaaaaa55;
}
</style>