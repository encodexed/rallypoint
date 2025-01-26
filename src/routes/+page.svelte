<script lang="ts">
	const sendEmail = async () => {
		console.log('Sending email from a button click...');
		const res = await fetch('/api/send-message', {
			method: 'POST',
			body: JSON.stringify({
				to: 'robbiegollan@gmail.com',
				subject: 'New notification - Rallypoint',
				text: 'Hi there,\n\nYou have a new notification waiting for you in Rallypoint!\n\nBest regards,\n\nThe Rallypoint Team'
			})
		});
		if (!res.ok) console.error("Oops, something ain't right");
	};
</script>

<h1>Rallypoint</h1>
<button onclick={sendEmail}>Send email</button>
