let mix = require('laravel-mix')

mix.js('src/index.js', 'dist/proton.js')

mix.webpackConfig({
    output: {
        libraryTarget: 'umd'
    }
})