import type { Config } from 'tailwindcss';
import flyonui from 'flyonui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [flyonui]
} satisfies Config;
