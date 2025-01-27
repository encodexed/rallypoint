<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let timepicker: Node;
	let { classes = '' } = $props();

	onMount(() => {
		flatpickr(timepicker, {
			enableTime: true,
			noCalendar: true,
			dateFormat: 'H:i'
		});
	});
</script>

<div class={classes}>
	<label class="label label-text self-start" for="flatpickr-date">Time</label>
	<input
		type="text"
		class="input max-w-sm"
		placeholder="HH:MM"
		id="flatpickr-time"
		bind:this={timepicker}
	/>
</div>
