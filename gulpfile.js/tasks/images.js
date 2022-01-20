const {src, dest} = require('gulp')

//Config
const path = require('../config/path')
const config = require('../config/configs')



//Plagins
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')




//css

const img =()=> {
    return src(path.img.src)
     .pipe(plumber({
         errorHandler: notify.onError()
     }))
     .pipe(newer(path.img.dest))
     .pipe(webp())
     .pipe(dest(path.img.dest))
     .pipe(src(path.img.src))
     .pipe(newer(path.img.dest))
     .pipe(imagemin(config.img))
     .pipe(dest(path.img.dest))
 }

 module.exports = img