/**
 * @author Moe Poi <moepoi@protonmail.com>
 * @license MIT
 */
"use strict";

const axios = require('axios');
const cheerio = require('cheerio');

const getInfo = url => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(req => {
        try {
          const links = [];
          let soup = cheerio.load(req.data);
          let title = soup("title").text();
          soup('div.liner').each(function(i, e) {
            soup(e).find('div.listlink').each(function(j, s) {
              links.push(soup(s).find('a').attr('href'))
            });
          });
          const data = {
            "title": title,
            "links": links
          };
          resolve(data)
        } catch (err) {
          reject('Error : ' + err)
        }
      })
  });
};

module.exports = getInfo;
