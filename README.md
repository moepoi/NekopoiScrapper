# Nekopoi Scrapper

*Scrapper for nekopoi*

[![pipeline status](https://gitlab.com/moepoi/NekopoiScrapper/badges/master/pipeline.svg)](https://gitlab.com/moepoi/NekopoiScrapper/-/commits/master)

## Installation

```sh
$ npm install
```

## Usage

```sh
const NekopoiScrapper = require('./NekopoiScrapper');

// Latest Release
NekopoiScrapper.getLatest()
    .then(result => console.log(result))

// Get Page Info
NekopoiScrapper.getInfo("https://nekopoi.care/sexfriend-gakuen-episode-1-subtitle-indonesia/")
    .then(result => console.log(result));
```

## Credit

Moe Poi ~ / [@moepoi](https://github.com/moepoi)
