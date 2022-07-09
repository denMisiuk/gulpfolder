const {src, dest} = require("gulp");//, watch, series, parallel
//const browsersync = require("browser-sync").create();


//configaration
const path = require("../config/path.js")
const app = require("../config/app.js")


const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const gulpGroupCssMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");



//CSS
const css = () => {
   return src (path.css.src, {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "CSS",
         message: error.message,
      }))
   }))
   .pipe(concat("main.css"))                               //склейка в файл с заданным именем
   .pipe(cssimport())
   .pipe(webpCss())
   .pipe(autoprefixer())
   .pipe(gulpGroupCssMediaQueries())                       //группировка медиа запросов
   .pipe(dest(path.css.dest, {sourcemaps: true}))
   .pipe(rename({suffix: ".min"}))
   .pipe(shorthand())                                      //оптимизация записи css
   .pipe(csso())                                                     //toZip
   .pipe(dest(path.css.dest, {sourcemaps: true}));
}


module.exports = css;