const {src, dest} = require('gulp')

//Config
const path = require('../config/path')
const config = require('../config/configs')



//Plagins
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')






const fonts =()=> {
    return src(path.fonts.src)
     .pipe(plumber({
         errorHandler: notify.onError()
     }))
     .pipe(newer(path.fonts.dest))
     .pipe(fonter(config.fonts))
     .pipe(dest(path.fonts.dest))
     .pipe(ttf2woff2())
     .pipe(dest(path.fonts.dest))
 }

 module.exports = fonts