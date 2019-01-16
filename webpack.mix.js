const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/index.js', 'dist/proton.js')
    .sass('src/sass/proton.scss', 'dist/proton.css')
    .sass('src/sass/_preflight.scss', 'dist/proton-preflight.css')
    .sass('src/sass/_components.scss', 'dist/proton-components.css')
    .sass('src/sass/_utilities.scss', 'dist/proton-utilities.css')
    .copy('dist/proton-preflight.css', 'docs/.vuepress/public')
    .copy('dist/proton-components.css', 'docs/.vuepress/public')
    .copy('dist/proton-utilities.css', 'docs/.vuepress/public')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
