const {src, dest} = require('gulp')

//Config
const path = require('../config/path')

//Plugins
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')


const postcssTask = ()=> { 
    return src(path.postcss.src) 
    .pipe(postcss([ 
         tailwindcss('./tailwind.config.js'), 
         autoprefixer(),
         cssnano()
     ] )) 
         .pipe(dest(path.postcss.dest)) 
    }

    module.exports = postcssTask