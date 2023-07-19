const Parser = require("rss-parser");
let parser = new Parser();
require("isomorphic-fetch");
async function getRSSFeed(feedURL) {
  try {
    const response = await fetch(feedURL);
    const responseData = await response.text();
    const rss = await parser.parseURL(responseData);
    return rss;
  } catch (error) {
    console.error("Error:", error);
    return { error: error };
  }
}

module.exports = getRSSFeed;
