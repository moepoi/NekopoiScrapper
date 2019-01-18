/**
 * @author Moe Poi <moepoi@protonmail.com>
 * @license MIT
 */
"use strict";

const axios = require('axios');
const cheerio = require('cheerio');

let links = [];

const getInfo = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(function(req) {
            let soup = cheerio.load(req.data);
            var title = soup("title").text();
            soup('div.liner').each(function(i, e) {
                soup(e).find('div.listlink').each(function(j, s) {
                    links.push(soup(s).find('a').attr('href'))
                });
            });
            var data = {
                "title": title,
                "links": links
            };
            if (data == null) {
                reject("No result :(");
            } else {
                var result = JSON.stringify(data, null, 2);
                resolve(result);
            }
        });
    });
};

module.exports = getInfo;