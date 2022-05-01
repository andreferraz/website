/**
 * A Gulp task for generating favicon images for multiple devices and platforms
 * @param {*} gulp Instance of gulp
 * @param {object} config Tasks configurations
 * @param {object} project Project info
 * @param {object} hp Additional helper functions already imported on the gulpfile
 * @param {object} arg Object with arguments passed via command line
 */
module.exports = function (gulp, config, project, hp, arg) {
	return function () {
		// Import modules
		const del = require('del');
		const favicons = require('gulp-favicons');
		const replace = require('gulp-replace');
		const optimize = require('gulp-image');

		return new Promise(async (done, reject) => {
			// Check for existence of entry file
			if (!hp.fs.existsSync(hp.path.resolve(project.path, config.entry))) {
				reject(
					new Error(
						hp.colors.red(
							'Problem: The entry favicon file (' + config.entry + ") wasn't found.",
						),
					),
				);
			}

			try {
				await generateFavicons();
				await moveFaviconsTemplateFile();
				await optimizeImages();

				console.log(
					hp.colors.green(
						`\n✔ Favicons successfully created (and optimized) at ${hp.colors.cyan(
							config.dist,
						)}, and the template at ${hp.colors.cyan(
							config.templateDist + `/${config.templateFileName}`,
						)}\n`,
					),
				);
				done();
			} catch (err) {
				reject(err);
			}
		});

		/**
		 * Generate favicons files using source PNG image
		 */
		async function generateFavicons() {
			return new Promise((resolve, reject) => {
				hp.pump(
					[
						// Get source file
						gulp.src(config.entry),

						// Generate favicon files
						favicons({
							appName: '%SITE_NAME%',
							background: 'transparent',
							path: './',
							display: 'browser',
							version: 1.0,
							logging: false,
							online: false,
							html: config.templateFileName,
							pipeHTML: true,
							replace: true,
							icons: {
								android: false, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
								appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
								appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }`
								coast: false, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
								favicons: true, // Create regular favicons. `boolean`
								firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background }`
								windows: false, // Create Windows 8 tile icons. `boolean` or `{ background }`
								yandex: false, // Create Yandex browser icon. `boolean` or `{ background }`
							},
						}).on('error', reject),

						// Write files to destination folder
						gulp.dest(config.dist),
					],
					resolve,
				);
			});
		}

		/**
		 * Move the recently generated favicons.php and updates the template with the path PHP variable
		 */
		function moveFaviconsTemplateFile() {
			return new Promise((resolve) => {
				hp.pump([
					// Get source file
					gulp.src(config.dist + `/${config.templateFileName}`),

					// Replace paths and site name
					replace(/(\w+)="([^\s]*?\.(?:\w{3,5}))"/g, '$1={`${path}$2`}'),
					replace('%SITE_NAME%', '{Site.title}'),

					// Move files to destination folder
					gulp.dest(config.templateDist).on('end', () => {
						// Delete original generated file
						del(config.dist + `/${config.templateFileName}`).then(() => {
							resolve();
						});
					}),
				]);
			});
		}

		/**
		 * Optimize images on
		 */
		function optimizeImages() {
			return new Promise((resolve) => {
				hp.pump([
					// Get source file
					gulp.src(config.dist + '/*.png'),

					// Optimize images
					optimize({
						pngquant: ['--quality=65-85'],
						optipng: false,
						zopflipng: false,
						jpegRecompress: false,
						mozjpeg: false,
						gifsicle: false,
						svgo: false,
						quiet: true,
					}),

					// Move files to destination folder
					gulp.dest(config.dist).on('end', () => {
						resolve();
					}),
				]);
			});
		}
	};
};
