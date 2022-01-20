const {src, dest} = require('gulp')

//Config
const path = require('../config/path')
const config = require('../config/configs')


//Plugins
const pugToHtml = require('gulp-pug')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const webpHtml = require('gulp-webp-html')


//pug

const pug =()=> {
    return src(path.pug.src)
     .pipe(plumber({
         errorHandler: notify.onError()
     }))
     .pipe(pugToHtml(config.pug))
     //.pipe(webpHtml())
     .pipe(dest(path.pug.dest))
 }

 module.exports = pug