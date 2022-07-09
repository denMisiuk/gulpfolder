const { watch, series, parallel} = require("gulp");//src, dest,
const browsersync = require("browser-sync").create();







//server
const server = () => {
   browsersync.init({
      server:{
         baseDir: path.root
      }
   })
}

//watcher
const watcher = () => {
   watch(path.html.watch, html).on("all", browsersync.reload);
   watch(path.scss.watch, scss).on("all", browsersync.reload);
   watch(path.js.watch, js).on("all", browsersync.reload);
   watch(path.img.watch, img).on("all", browsersync.reload);
   watch(path.font.watch, font).on("all", browsersync.reload);
}


//configaration
const path = require("./config/path.js");


//import tasks
const clear = require("./task/clear.js")
const html = require("./task/html.js")
const scss = require("./task/scss.js")
const js = require("./task/js.js")
const img = require("./task/img.js")
const font = require("./task/font.js")

//tasks
exports.html = html;
//exports.watch = watcher;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;


//sborka
exports.dev = series(
   clear,
   parallel (scss, html, js, img, font),
   parallel(watcher, server)
);