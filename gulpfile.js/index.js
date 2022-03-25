const {watch,series,parallel} = require('gulp')
const browserSync = require('browser-sync').create()

//Конфигурация
const path = require('./config/path')

//Задачи
const clear = require('./tasks/clear')
const pug = require('./tasks/pug')
const sass = require('./tasks/scss')

const js = require('./tasks/script')
const img = require('./tasks/images')
const fonts = require('./tasks/fonts')

//Сервер
const server =() =>{
    browserSync.init({
        server:{
            baseDir:path.root
        }
    })
}

//Наблюдение
const watcher = () =>{
    watch(path.pug.watch, series(pug)).on('all',browserSync.reload)
    watch(path.scss.watch, sass).on('all',browserSync.reload)
    watch(path.js.watch, js).on('all',browserSync.reload)
    watch(path.img.watch, img).on('all',browserSync.reload)
    watch(path.fonts.watch, fonts).on('all',browserSync.reload)
}



//задачи
exports.pug = pug
exports.watcher = watcher
exports.clear = clear
exports.sass = sass

exports.js = js
exports.img = img
exports.fonts = fonts


//Prod

const prod = series(
    clear, 
    parallel(pug, sass, js, img, fonts), 
)

const dev = series(
    prod,
    parallel(watcher,server) 
)

//Сборка
exports.dev = dev
//Prod
exports.prod = prod