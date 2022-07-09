const {src, dest} = require("gulp");//, watch, series, parallel
//const browsersync = require("browser-sync").create();


//configaration
const path = require("../config/path.js")
const app = require("../config/app.js")

//plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");




//IMG
const img = () => {
   return src (path.img.src)
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "Image",
         message: error.message,
      }))
   }))
   .pipe(newer(path.img.dest))
   .pipe(webp())
   .pipe(dest(path.img.dest))
   .pipe(src(path.img.src))
   .pipe(newer(path.img.dest))
   .pipe(imagemin(app.imagemin))
   .pipe(dest(path.img.dest));
}


module.exports = img;