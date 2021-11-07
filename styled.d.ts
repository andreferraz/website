import 'styled-components';

// Extend the default module
declare module 'styled-components' {
	export interface DefaultTheme {
		baseRem: number;
		colors: {
			// Theme colors
			blue: string;
			lightBlue: string;
			yellow: string;
			lightYellow: string;
			orange: string;
			lightOrange: string;
			gradientBlue: string;
			white: string;
			black: string;
			primary: string;
			secondary: string;
			success: string;
			info: string;
			warning: string;
			danger: string;
			light: string;
			medium: string;
			dark: string;
			// Social media colors
			instagram: string;
			youtube: string;
			facebook: string;
			twitter: string;
			pinterest: string;
			whatsapp: string;
			linkedin: string;
			github: string;
			gitlab: string;
		};
		fontFamily: {
			display: string;
			body: string;
		};
		headings: {
			h1: {
				mobile: string;
				desktop: string;
			};
			h2: {
				mobile: string;
				desktop: string;
			};
			h3: {
				mobile: string;
				desktop: string;
			};
			h4: {
				mobile: string;
				desktop: string;
			};
			h5: {
				mobile: string;
				desktop: string;
			};
			h6: {
				mobile: string;
				desktop: string;
			};
		};
		spacing: string[];
		breakpoints: {
			// TIP: Use [up] with min-width, and [down] with max-width
			xs: { up: string; down: string };
			sm: { up: string; down: string };
			md: { up: string; down: string };
			lg: { up: string; down: string };
			xl: { up: string; down: string };
			xxl: { up: string; down: string };
		};
		header: {
			height: {
				mobile: number;
				desktop: number;
			};
		};
	}
}

export interface Breakpoints {
	xs: { down: string; up: string };
	sm: { down: string; up: string };
	md: { down: string; up: string };
	lg: { down: string; up: string };
	xl: { down: string; up: string };
	xxl: { down: string; up: string };
}

export interface Breakpoint {
	name: string;
	value: number;
}
