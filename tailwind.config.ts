import type { Config } from 'tailwindcss';
import flyonui from 'flyonui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flatpickr/**/*.js'],

	theme: {
		extend: {}
	},
	flyonui: {
		themes: ['soft', 'dark'],
		vendors: true
	},

	plugins: [flyonui]
} satisfies Config;
