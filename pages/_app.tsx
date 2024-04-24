import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

// Global Styles
import '@/styles/scss/index.scss';

// Styled Components Theme
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { AppProvider } from 'utils/hooks/AppProvider';

function SiteApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(SiteApp, nextI18NextConfig);
