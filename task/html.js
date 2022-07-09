const {src, dest} = require("gulp");//, watch, series, parallel
//const browsersync = require("browser-sync").create();


//configaration
const path = require("../config/path.js")
const app = require("../config/app.js")

const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webphtml = require("gulp-webp-html");




//HTML
const html = () => {
   return src (path.html.src)
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "HTML",
         message: error.message,
      }))
   }))
   .pipe(fileInclude())
   .pipe(webphtml())
   .pipe(htmlmin(app.htmlmin))
   .pipe(dest(path.html.dest));
//   .pipe(browsersync.stream());
}


module.exports = html;