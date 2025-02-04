require('colors');
const fs = require('fs');
const generatorsDir = './tools/plop/generators';

const plopConfig = (plop) => {
	// Register a new generator for each file at the generators folder
	const files = fs.readdirSync(generatorsDir);
	files.forEach((generator) => {
		plop.load(`${generatorsDir}/${generator}`, {}, { generators: true });
	});
};

module.exports = plopConfig;
