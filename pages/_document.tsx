import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { Site } from '@/config/site';

class SiteDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const stylesheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => stylesheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{stylesheet.getStyleElement()}
					</>
				),
			};
		} finally {
			stylesheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html lang={Site.lang.replace('_', '-')}>
				<NoPreloadHead />

				<body>
					{Site.gtmId && (
						<noscript>
							<iframe
								src={`https://www.googletagmanager.com/ns.html?id=${Site.gtmId}`}
								height="0"
								width="0"
								className="d-none invisible"
							></iframe>
						</noscript>
					)}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

type DocumentFiles = {
	sharedFiles: readonly string[];
	pageFiles: readonly string[];
	allFiles: readonly string[];
};

export class NoPreloadHead extends Head {
	getPreloadMainLinks(files: DocumentFiles): JSX.Element[] | null {
		const { assetPrefix, devOnlyCacheBusterQueryString, scriptLoader } = this.context;
		const preloadFiles = files.allFiles.filter((file: string) => {
			return file.endsWith('.js');
		});

		return [
			...(scriptLoader.beforeInteractive || []).map((file) => (
				<link
					key={file.src}
					nonce={this.props.nonce}
					rel="preload"
					href={file.src}
					as="script"
					crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
				/>
			)),
			...preloadFiles.map((file: string) => (
				<link
					key={file}
					nonce={this.props.nonce}
					//rel="preload"
					href={`${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`}
					as="script"
					crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
				/>
			)),
		];
	}
}

export default SiteDocument;
