<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let timepicker: Node;
	let { classes = '', type = 'single' } = $props();
	let value = new Date(Date.now()).toTimeString();

	onMount(() => {
		if (type === 'single') {
			flatpickr(timepicker, {
				enableTime: true,
				noCalendar: true,
				allowInput: true,
				dateFormat: 'h:i K'
			});
		}
	});
</script>

<div class={classes}>
	<label class="label label-text self-start" for="flatpickr-time">Time</label>
	<input type="text" class="input max-w-sm" {value} id="flatpickr-time" bind:this={timepicker} />
</div>
