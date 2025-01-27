<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let datepicker: Node;

	onMount(() => {
		flatpickr(datepicker, {
			monthSelectorType: 'static',
			locale: 'default'
		});
	});
</script>

<input
	type="text"
	class="input max-w-sm"
	placeholder="YYYY-MM-DD"
	id="flatpickr-date"
	bind:this={datepicker}
/>
