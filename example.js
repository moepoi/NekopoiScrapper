const NekopoiScrapper = require('./NekopoiScrapper');

// Latest Release
NekopoiScrapper.getLatest()
    .then(result => console.log(result))

// Get Page Info
NekopoiScrapper.getInfo("https://nekopoi.care/sexfriend-gakuen-episode-1-subtitle-indonesia/")
    .then(result => console.log(result));
