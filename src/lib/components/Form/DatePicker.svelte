<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let datepicker: Node;
	let { classes = '' } = $props();

	onMount(() => {
		flatpickr(datepicker, {
			monthSelectorType: 'static',
			locale: 'default'
		});
	});
</script>

<div class={classes}>
	<label class="label label-text self-start" for="flatpickr-date">Date</label>
	<input
		type="text"
		class="input max-w-sm"
		placeholder="YYYY-MM-DD"
		id="flatpickr-date"
		bind:this={datepicker}
	/>
</div>
