const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
	trailingSlash: true,
	basePath: '',
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/scss/core')],
	},
	i18n,
	webpack: (config, { isServer }) => {
		if (isServer) {
			// Generates a sitemap.xml
			// if (process.env.NODE_ENV !== 'development') {
			// 	require('./utils/helpers/sitemap')();
			// }
		}
		return config;
	},
};
