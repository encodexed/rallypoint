<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let datepicker: Node;
	let { classes = '' } = $props();
	let value = new Date(Date.now()).toISOString();

	onMount(() => {
		flatpickr(datepicker, {
			monthSelectorType: 'dropdown',
			altInput: true,
			altFormat: 'j F, Y',
			locale: 'default'
		});
	});
</script>

<div class={classes}>
	<label class="label label-text self-start" for="flatpickr-date">Date</label>
	<input type="text" class="input max-w-sm" id="flatpickr-date" {value} bind:this={datepicker} />
</div>
