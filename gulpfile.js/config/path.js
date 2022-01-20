const pathSrc = './src'
const pathDest = './public'

module.exports = {
    root: pathDest,

    pug:{
        src:pathSrc + '/pages/*.pug',
        watch:pathSrc + '/pages/**/*.pug',
        dest:pathDest
    },
    css:{
        src:pathSrc + '/style/*.css',
        watch:pathSrc + '/style/*.css',
        dest:pathDest + '/css'
    },
    postcss:{
        src:pathSrc + '/style/*.css',
        dest:pathDest + '/css'
    },
    js:{
        src:pathSrc + '/js/*.js',
        watch:pathSrc + '/js/**/*.js',
        dest:pathDest + '/js'
    },
    img:{
        src:pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}',
        watch:pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        dest:pathDest + '/img'
    },
   fonts:{
        src:pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch:pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest:pathDest + '/fonts'
    }
}