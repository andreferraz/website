import { rem } from 'polished';
import { Breakpoint, Breakpoints } from 'styled';
import { DefaultTheme } from 'styled-components';

const gridTiers: Breakpoint[] = [
	{ name: 'xs', value: 0 },
	{ name: 'sm', value: 576 },
	{ name: 'md', value: 768 },
	{ name: 'lg', value: 992 },
	{ name: 'xl', value: 1200 },
];

// Build the breakpoints objects
const breakpoints = {};
gridTiers.forEach(({ name, value }, index) => {
	breakpoints[name] = {};
	breakpoints[name].up = `${value}px`;
	if (index < gridTiers.length - 1) {
		breakpoints[name].down = `${(value - 0.02).toFixed(2)}px`;
	} else {
		breakpoints[name].down = `99999px`;
	}
});

export const themeColors = {
	primary: '#4e91f8',
	blue: '#3200d9',
	lightblue: '#dbedff',
	yellow: '#ffdb62',
	lightyellow: '#fff7a3',
	orange: '#ffc995',
	lightorange: '#fdf2e5',
	secondary: '#6c757d',
	light: '#f8f9fa',
	medium: '#adb5bd',
	dark: '#343a40',
	gradientBlue: 'linear-gradient(to right, #2231b9, #26b5ff)',
};

const colors = {
	// Theme colors
	...themeColors,
	white: '#FFF',
	black: '#000',
	success: '#28a745',
	info: '#17a2b8',
	warning: '#ffc107',
	danger: '#dc3545',
	// Social media colors
	instagram: '#f01874',
	youtube: '#ff0000',
	facebook: '#4167b2',
	twitter: '#1ca1f1',
	pinterest: '#ca212a',
	whatsapp: '#30d14d',
	linkedin: '#0b66c2',
	github: '#1e335e',
	gitlab: '#f96424',
};

const baseRem = 16;

const headings = {
	h1: {
		mobile: rem(40, baseRem),
		desktop: rem(48, baseRem),
	},
	h2: {
		mobile: rem(32, baseRem),
		desktop: rem(40, baseRem),
	},
	h3: {
		mobile: rem(26, baseRem),
		desktop: rem(32, baseRem),
	},
	h4: {
		mobile: rem(22, baseRem),
		desktop: rem(24, baseRem),
	},
	h5: {
		mobile: rem(18, baseRem),
		desktop: rem(18, baseRem),
	},
	h6: {
		mobile: rem(16, baseRem),
		desktop: rem(16, baseRem),
	},
};

const spacing = [
	rem(baseRem * 0.25, baseRem), // 4px
	rem(baseRem * 0.5, baseRem), // 8px
	rem(baseRem * 0.75, baseRem), // 12px
	rem(baseRem, baseRem), // 16px
	rem(baseRem * 1.5, baseRem), // 24px
	rem(baseRem * 2, baseRem), // 32px
	rem(baseRem * 2.75, baseRem), // 44px
	rem(baseRem * 3.5, baseRem), // 56px
	rem(baseRem * 5, baseRem), // 80px
];

const fontFamilyDisplay = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
'Segoe UI Symbol', 'Noto Color Emoji'`;
const fontFamilyBase = fontFamilyDisplay;

const theme: DefaultTheme = {
	baseRem,
	colors,
	fontFamily: {
		display: fontFamilyDisplay,
		body: fontFamilyBase,
	},
	headings,
	spacing,
	breakpoints: breakpoints as Breakpoints,
};

export default theme;
