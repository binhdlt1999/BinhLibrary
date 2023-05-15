const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .styles([
        'resources/css/bootstrap.min.css',
        'resources/css/normalize.css',
        'resources/css/font-awesome.min.css',
        'resources/css/icomoon.css',
        'resources/css/jquery-ui.css',
        'resources/css/owl.carousel.css',
        'resources/css/transitions.css',
        'resources/css/main.css',
        'resources/css/color.css',
        'resources/css/responsive.css',
        'resources/css/cart.css',
    ], 'public/css/all.css')
    .styles('resources/css/login.css', 'public/css/login.css')
    .scripts([
        'resources/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
        'resources/js/vendor/jquery-library.js',
        'resources/js/vendor/bootstrap.min.js',
        'resources/js/owl.carousel.min.js',
        'resources/js/jquery.vide.min.js',
        'resources/js/countdown.js',
        'resources/js/jquery-ui.js',
        'resources/js/parallax.js',
        'resources/js/countTo.js',
        'resources/js/appear.js',
        'resources/js/gmap3.js',
        'resources/js/main.js',
        'resources/js/myjs/product.js',
        'resources/js/myjs/account.js',
        'resources/js/myjs/detailOrder.js',
    ], 'public/js/all.js')
    .scripts([
        'resources/js/myjs/order.js',
    ], 'public/js/order.js')
    .scripts([
        'resources/js/myjs/login.js',
    ], 'public/js/login.js')
    .scripts([
        'resources/js/myjs/comment.js',
    ], 'public/js/comment.js')
    .scripts([
        'resources/js/myjs/voucherWallet.js',
    ], 'public/js/voucherWallet.js')
    .scripts([
        'resources/js/myjs/cart.js',
    ], 'public/js/cart.js')
    // admin
    .js('resources/js/myjs/admin/all.js', 'public/js/admin/all.js')
    .scripts([
        'resources/js/myjs/admin/searchCustomer/searchCustomer.js',
        'resources/js/myjs/admin/searchCustomer/lockAccount.js'
    ], 'public/js/admin/searchCustomer.js')
    .scripts([
        'resources/js/myjs/admin/manageProduct/addProduct.js',
        'resources/js/myjs/admin/manageProduct/updateProduct.js',
        'resources/js/myjs/admin/manageProduct/searchProduct.js'
    ], 'public/js/admin/manageProduct.js')
    .scripts([
        'resources/js/myjs/admin/manageListOrder/actionOnOrder.js',
        'resources/js/myjs/admin/manageListOrder/updateBtnState.js',
        'resources/js/myjs/admin/manageListOrder/searchOrder.js'
    ], 'public/js/admin/manageListOrder.js')
    .scripts([
        'resources/js/myjs/admin/manageVoucher/addVoucher.js',
        'resources/js/myjs/admin/manageVoucher/updateVoucher.js'
    ], 'public/js/admin/manageVoucher.js')
    .scripts([
        'resources/js/myjs/admin/login/login.js',
    ], 'public/js/admin/login.js')
    .scripts([
        'resources/js/myjs/admin/logout/logout.js',
    ], 'public/js/admin/logout.js')
    .scripts([
        'resources/js/myjs/admin/manageShipCash/addShipCash.js',
        'resources/js/myjs/admin/manageShipCash/updateShipCash.js'
    ], 'public/js/admin/manageShipCash.js')
    .scripts([
        'resources/js/myjs/admin/statistics/chart.js',
    ], 'public/js/admin/chart.js')
    .scripts([
        'resources/js/myjs/admin/manageChatbot/manageChatbot.js',
    ], 'public/js/admin/manageChatbot.js')
    .sourceMaps();
    