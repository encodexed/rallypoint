<script lang="ts">
	import DatePicker from '$lib/components/Form/DatePicker.svelte';
	import RadioGroup from '$lib/components/Form/RadioGroup.svelte';
	import TimePicker from '$lib/components/Form/TimePicker.svelte';

	const handleCalendarChoice = (index: number) => {
		console.log(index);
	};

	const calendarChoices = [
		{
			label: 'Single',
			description: 'You choose the day. No debates!',
			isChecked: false
		},
		{
			label: 'Multiple',
			description: 'Choose a selection of days that may work for your group.',
			isChecked: false
		},
		{
			label: 'Range',
			description: 'Let your group choose dates from inside a time frame.',
			isChecked: false
		}
	];
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<form action="" class="flex h-fit w-1/2 flex-col p-4">
		<div class="card w-full">
			<div class="card-header">
				<h5 class="card-title">Choosing a date</h5>
			</div>
			<div class="card-body">
				<RadioGroup
					choices={calendarChoices}
					group="calendarChoices"
					clickHandler={handleCalendarChoice}
				/>
				<div class="divider mt-8">Choose the date</div>
				<DatePicker classes="w-64" />
			</div>
		</div>
		<TimePicker classes="w-64" />
	</form>
</div>
