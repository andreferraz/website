const path = require('path');

module.exports = {
	trailingSlash: true,
	basePath: '',
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/scss/core')],
	},
	i18n: {
		locales: ['en', 'pt-BR'],
		defaultLocale: 'pt-BR',
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			// Generates a sitemap.xml
			if (process.env.NODE_ENV !== 'development') {
				require('./utils/helpers/sitemap')();
			}
		}
		return config;
	},
};
