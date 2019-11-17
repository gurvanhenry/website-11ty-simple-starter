module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  return {
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      data: "data",
      includes: "includes",
      output: "dist",
    }
  };
};