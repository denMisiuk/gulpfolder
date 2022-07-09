module.exports = {
htmlmin: {
      collapseWhitespace: false,                     //true for zip
},
webpack: {
      mode: "development",                  //"development" -> noZIP,       "production" ZIP
},
imagemin: {
      verbose: true
},
fonter: {
      formats: ["ttf", "woff", "eot", "svg"]},
}
