const autoprefixer = require('autoprefixer');
const {src, dest} = require('gulp')

//Config
const path = require('../config/path')



//Plugins
const SASS = require('gulp-sass')(require('sass'));

//pug

const sass =()=> {
    return src(path.scss.src)
    .pipe(SASS())
     .pipe(dest(path.scss.dest))
 }

 module.exports = sass