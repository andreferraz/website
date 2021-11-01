'use strict';

var colors = require('colors'); // Enable the use of colors for logs in console
console.log(colors.gray('Reading gulpfile.js...'));

// Required modules
var gulp = require('gulp'), // Gulp tasks
	pump = require('pump'), // Replace pipe() with pump for a better error handling
	path = require('path'), // Node.js module for handling paths
	ora = require('ora'), // Updated log messages (loading spinners)
	fs = require('fs'); // Node.js module for managing files and directories (used to get package.json)

const gulpFolder = './utils/tools/gulp';

// Content of the config.json file
// Where is defined the project info and tasks settings
const config = JSON.parse(fs.readFileSync(`${gulpFolder}/config.json`));

/** Fetch command line arguments */
const arg = ((argList) => {
	let arg = {},
		a,
		opt,
		thisOpt,
		curOpt;
	for (a = 0; a < argList.length; a++) {
		thisOpt = argList[a].trim();
		opt = thisOpt.replace(/^-+/, '');

		if (opt === thisOpt) {
			// argument value
			if (curOpt) arg[curOpt] = opt;
			curOpt = null;
		} else {
			// argument name
			curOpt = opt;
			arg[curOpt] = true;
		}
	}
	return arg;
})(process.argv);

/**
 * Imports the module of the required task passing the proper data to the script file
 * @param {string} task Name of the task and respective JS file
 */
function getTask(task) {
	const helpers = {
		pump,
		colors,
		ora,
		fs,
		path
	};
	config.project.path = __dirname;
	return require(`${gulpFolder}/tasks/` + task)(
		gulp,
		config.tasks[task],
		config.project,
		helpers,
		arg,
	);
}

// Register all tasks from the tasks folder
fs.readdirSync(`${gulpFolder}/tasks/`).forEach((file) => {
	const task = file.replace(/\.\w+$/, ''); // Remove extension
	exports[task] = getTask(task);
});
