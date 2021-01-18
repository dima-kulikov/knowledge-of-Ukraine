let project_folder="dist";
let sourse_folder="#src";

let path={
  build:{
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src:{
    html: sourse_folder + "/*.html",
    css: sourse_folder + "/scss/style.scss",
    js: sourse_folder + "/js/script.js",
    img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: sourse_folder + "/fonts/*.ttf",
  },
  watch:{
    html: sourse_folder + "/**/*.html",
    css: sourse_folder + "/scss/**/*.scss",
    js: sourse_folder + "/js/**/*.js",
    img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/"
}

// Обьявление переменных, с которыми работает код
let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"), 
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  group_media = require("gulp-group-css-media-queries"),
  clean_css = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify-es").default,
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webphtml = require("gulp-webp-html"),
  svgSprite = require("gulp-svg-sprite");
  // webpcss = require("gulp-webpcss"); //-- не работает!!


function browserSync(params){
  browsersync.init({
    server:{
      baseDir: "./" + project_folder + "/"
    },
    port:3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
  .pipe(fileinclude()) 
  .pipe(webphtml())     
  .pipe(dest(path.build.html))
  .pipe(browsersync.stream())
}

// функция для сборки scss файлов
function css(){
  return src(path.src.css)
  .pipe(
    scss({
      outputStyle: "expanded"  //развернутый файл, не сжатый
    })
  )
  .pipe(
    group_media()
  )
  .pipe(
    autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    })
  )
  // .pipe(webpcss())    //--не работает!!!! 
  .pipe(dest(path.build.css))
  .pipe(clean_css())
  .pipe(
    rename({
      extname: ".min.css"
    })
  )
  .pipe(dest(path.build.css))
  .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
  .pipe(fileinclude())      
  .pipe(dest(path.build.js))
  .pipe(
    uglify()
  )
  .pipe(
    rename({
      extname: ".min.js"
    })
  )
  .pipe(dest(path.build.js))
  .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)  
  .pipe(
   webp({
    quality: 70
   }) 
  )
  .pipe(dest(path.build.img))
  .pipe(src(path.src.img) )
  .pipe(
    imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 3 //0 to 7
    })
  ) 
  .pipe(dest(path.build.img))
  .pipe(browsersync.stream())
}

gulp.task('svgSprite', function(){
  return gulp.src([sourse_folder + '/iconsprite/*.svg'])
  .pipe(svgSprite({
    mode:{
      stack:{
        sprite: "../icons/icons.svg", //sprite file name
        example: true //показывает результат соединения иконок
      }
    },
  }))
  .pipe(dest(path.build.img))
})

function watchFiles(params){
gulp.watch([path.watch.html], html);
gulp.watch([path.watch.css], css);
gulp.watch([path.watch.js], js);
gulp.watch([path.watch.img], images);
}

function clean(params){
  return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;