const {src, dest} = require("gulp");//, watch, series, parallel
//const browsersync = require("browser-sync").create();


//configaration
const path = require("../config/path.js")
const app = require("../config/app.js")

//plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
//const uglify = require("gulp-uglify");           //не нужен с вебпак
const webpack = require("webpack-stream");



//JS
const js = () => {
   return src (path.js.src, {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "Javascript",
         message: error.message,
      }))
   }))
   .pipe(babel())                                       //настройки в package.json
   .pipe(webpack(app.webpack))
   //.pipe(uglify())                                      //toZIP
   .pipe(dest(path.js.dest, {sourcemaps: true}));
}


module.exports = js;