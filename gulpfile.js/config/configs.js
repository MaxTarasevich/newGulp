const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports = {
    isProd:isProd,
    isDev:isDev,

    pug:{
        pretty:!isProd,
        data: {
            news:require('../data/news.json')
        }
    },
    webpack:{
        mode: isProd ? "production" : "development"
    },
    img:{
        verbose:true
    },
    fonts:{
        formats:["woff"]
    }
}