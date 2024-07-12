const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');

	eleventyConfig.addCollection('posts', (collection) => {
		return collection.getFilteredByGlob('src/posts/*.md');
	});

	eleventyConfig.addShortcode('year', () => {
		return `${new Date().getFullYear()}`;
	});

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("MMM dd, yyyy");
	});

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};

};
