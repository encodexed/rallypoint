<script lang="ts">
	type Choice = {
		label: string;
		description: string;
		isChecked: boolean;
	};

	let {
		choices,
		group,
		clickHandler
	}: { choices: Choice[]; group: string; clickHandler: (index: number) => void } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each choices as choice, index}
		<div class="flex gap-3">
			<input
				type="radio"
				name={group}
				class="radio radio-primary"
				id={`${group}-${choice.label}`}
				onclick={() => clickHandler(index)}
				checked={choice.isChecked}
			/>
			<label
				class="label -mt-1 cursor-pointer flex-col items-start pt-0"
				for={`${group}-${choice.label}`}
			>
				<span class="label-text text-base">{choice.label}</span>
				<span class="label-text-alt text-white/30">{choice.description}</span>
			</label>
		</div>
	{/each}
</div>
