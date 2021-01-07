const path = require('path');

module.exports = {
    publicPath: process.env.VUE_APP_STATIC_URL,
    outputDir: path.resolve(__dirname, "../static", "beranda"),
    indexPath: path.resolve(__dirname, "../templates/", "beranda", "index.html"),
}