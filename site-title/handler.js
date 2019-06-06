"use strict"

var request = require("request");
const cheerio = require('cheerio')

module.exports = (url, callback) => {
  request({
    uri: url,
  }, function(error, response, body) {
    if (error) callback(error)
    const $ = cheerio.load(body)
    const title = $('h1').text()
    if (title) {
      callback(undefined, title);
    }
    else {
      callback('title not found');
    }
  });
}
