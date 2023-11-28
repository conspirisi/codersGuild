const myFunctions = require("./_data/myFunctions.js");
const customScrollx = require("./_data/customScroll.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css/*.css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/source-images": "images" });

  //this code below makes helper functions available throughout the site.
  eleventyConfig.addNunjucksGlobal("myFunctions", myFunctions);
  eleventyConfig.addNunjucksGlobal("customScrollx", customScrollx);

  //
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
