const {src, dest} = require('gulp')

//Config
const path = require('../config/path')
const config = require('../config/configs')



//Plagins
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')



//css

const js =()=> {
    return src(path.js.src, {sourcemaps:true})
     .pipe(plumber({
         errorHandler: notify.onError()
     }))
     .pipe(babel())
     .pipe(webpack(config.webpack))
   
     .pipe(dest(path.js.dest, {sourcemaps:true}))
 }

 module.exports = js