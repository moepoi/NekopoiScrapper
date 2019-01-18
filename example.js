const NekopoiScrapper = require('./NekopoiScrapper');

// Latest Release
NekopoiScrapper.getLatest()
    .then((data) => console.log(data));

// Get Page Info
NekopoiScrapper.getInfo("http://nekopoi.cash/dokidoki-little-ooyasan-episode-4-subtitle-indonesia")
    .then((data) => console.log(data));