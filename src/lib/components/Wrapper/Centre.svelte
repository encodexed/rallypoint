<script>
	let { children, classes } = $props();
</script>

<div class={`flex h-full w-full flex-col items-center justify-center ${classes}`}>
	{@render children()}
</div>
