let mix = require('laravel-mix')

mix.js('resources/js/app.js','public/js/app.js').sass('resources/scss/app.scss','public/css/app.css')
mix.js('resources/js/admin.js','public/js/admin.js').sass('resources/scss/adminhome.scss','public/css/adminhome.css')





// mix.babelConfig({
//     "plugins": ["@babel/plugin-praposal-class-properties"]
// })