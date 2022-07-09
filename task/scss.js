const {src, dest} = require("gulp");//, watch, series, parallel
//const browsersync = require("browser-sync").create();


//configaration
const path = require("../config/path.js")
const app = require("../config/app.js")


const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const gulpGroupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const webpCss = require("gulp-webp-css");


//SCSS
const scss = () => {
   return src (path.scss.src, {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "SCSS",
         message: error.message,
      }))
   }))
   .pipe(sass())
   .pipe(webpCss())
   .pipe(autoprefixer())
   .pipe(gulpGroupCssMediaQueries())                       //группировка медиа запросов
   .pipe(dest(path.scss.dest, {sourcemaps: true}))
   .pipe(rename({suffix: ".min"}))
   .pipe(shorthand())                                      //оптимизация записи css
   .pipe(csso())                                                     //toZip
   .pipe(dest(path.scss.dest, {sourcemaps: true}));
}


module.exports = scss;