<script lang="ts">
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let timepicker: Node;

	onMount(() => {
		flatpickr(timepicker, {
			enableTime: true,
			noCalendar: true,
			dateFormat: 'H:i'
		});
	});
</script>

<input
	type="text"
	class="input max-w-sm"
	placeholder="HH:MM"
	id="flatpickr-time"
	bind:this={timepicker}
/>
