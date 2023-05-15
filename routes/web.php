<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Carbon;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ManageInfoController;
use App\Http\Controllers\ProductController;

// admin
use App\Http\Controllers\Admin\AdminHomeController;
use App\Http\Controllers\Admin\SearchCustomerController;
use App\Http\Controllers\Admin\ManageOrderController;
use App\Http\Controllers\Admin\ManageProductController;
use App\Http\Controllers\Admin\ActionButtonController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\ManageShipCashController;
use App\Http\Controllers\Admin\ManageVoucherController;
use App\Http\Controllers\Admin\ShowDetailVoucherController;
use App\Http\Controllers\BotmanController;
use App\Http\Controllers\manageVoucherWallet;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\AlertController;
use App\Http\Controllers\ManageChatbotController;
use App\Models\donhang;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
date_default_timezone_set('Asia/Ho_Chi_Minh');
/**
 * method to get current date time:
 * date('Y-m-d H:i:s', time())
 * ₫
 */
Carbon::setLocale('vi');

// show product
Route::get('/', [HomeController::class, 'showBestSelling'])->name('home');

Route::get('all', [ProductController::class, 'allProduct']);
Route::get('search', [ProductController::class, 'search']);

Route::get('detail-product/{id}', [ProductController::class, 'detailProduct']);

Route::get('get-total-product-in-cart', [ProductController::class, 'getTotalProductInCart']);
Route::post('add-product-to-cart', [ProductController::class, 'addProductToCart']);

// login
Route::get('login-page', [AccountController::class, 'index']);
Route::post('sign-up', [AccountController::class, 'signUp']);
Route::post('login', [AccountController::class, 'login']);
Route::post('logout', [AccountController::class, 'logout']);

// cart
Route::get('cart', [CartController::class, 'index']);
Route::post('change-amount', [CartController::class, 'changeAmount']);
Route::post('remove-product-in-cart', [CartController::class, 'removeProductInCart']);

// Route::get('test', [ProductController::class, 'addProductToCart']);

// order
Route::post('address-order', ['before' => 'csrf', CartController::class, 'orderPage']);
Route::get('get-district', [CartController::class, 'getDistrict']);
Route::get('get-ward', [CartController::class, 'getWard']);
Route::get('get-shipcash', [CartController::class, 'getShipCash']);
Route::get('get-voucher', [CartController::class, 'getVoucher']);
Route::post('submit-address', ['before' => 'csrf', CartController::class, 'submitAddress']);
Route::get('ipn', [CartController::class, 'ipn']);

// manage order
Route::get('list-order', [OrderController::class, 'index']);
Route::get('detail-order/{id}', [OrderController::class, 'detailIndex']);
Route::post('detail-order/cancel-order', ['before' => 'csrf', OrderController::class, 'cancelOrder']);
Route::post('submit-comment', ['before' => 'csrf', CommentController::class, 'submitComment']);

Route::get('manage-info', [ManageInfoController::class, 'index']);
Route::post('submit-info-to-change', ['before' => 'csrf', ManageInfoController::class, 'submitInfoToChange']);

// voucher wallet
Route::get('manage-voucher-wallet', [manageVoucherWallet::class, 'index']);
Route::post('add-voucher-to-wallet', [manageVoucherWallet::class, 'addVoucherToWallet']);

Route::get('alert/{trangthai}', [AlertController::class, 'alert']);

/**
 * Admin Route
 */
Route::get('login', [LoginController::class, 'index'])->name('login');
Route::post('admin-login', [LoginController::class, 'login']);

Route::middleware(['authAdmin'])->group(function() {
    Route::post('admin-logout', [LoginController::class, 'logout']);
    Route::get('admin', [AdminHomeController::class, 'index']);

    // search customer
    Route::get('search-people/customer', [SearchCustomerController::class, 'index']);
    Route::post('get-customer-by-keyword', [SearchCustomerController::class, 'search']);
    Route::post('lock-customer', [SearchCustomerController::class, 'lockCustomer']);
    Route::post('unlock-customer', [SearchCustomerController::class, 'unlockCustomer']);

    // manage product
    Route::get('manage-product', [ManageProductController::class, 'index']);
    Route::post('upload-file', [ManageProductController::class, 'uploadFile']);

    Route::get('show-detail-product', [ManageProductController::class, 'showDetailProduct']);
    Route::post('update-product', [ManageProductController::class, 'updateProduct']);
    Route::post('delete-product', [ManageProductController::class, 'deleteProduct']);
    Route::post('resale-product', [ManageProductController::class, 'resaleProduct']);
    Route::post('get-manage-product-by-keyword', ['before' => 'csrf', ManageProductController::class, 'getProductByKeyword']);

    // manage order
    Route::get('manage-order', [ManageOrderController::class, 'index']);
    Route::get('show-detail-order', [ManageOrderController::class, 'showDetailOrder']);

    // button order
    Route::post('update-state-to-ready', [ActionButtonController::class, 'updateToReady']);
    Route::post('update-state-to-deny', [ActionButtonController::class, 'updateToDeny']);
    Route::post('update-state-to-delivery', [ActionButtonController::class, 'updateToDelivery']);
    Route::post('update-state-to-confirm-delivered', [ActionButtonController::class, 'updateToConfirmDelivered']);
    Route::post('update-state-to-fail', [ActionButtonController::class, 'updateToFail']);
    Route::post('update-state-to-reaccept', [ActionButtonController::class, 'updateToReaccept']);

    Route::post('get-list-order-by-keyword', ['before' => 'csrf', ActionButtonController::class, 'getListOrderByKeyword']);

    // manage voucher
    Route::get('manage-voucher', [ManageVoucherController::class, 'index']);
    Route::post('upload-voucher', [ManageVoucherController::class, 'uploadVoucher']);

    Route::get('show-detail-voucher', [ShowDetailVoucherController::class, 'showDetailVoucher']);
    Route::post('update-voucher', [ManageVoucherController::class, 'updateVoucher']);
    Route::post('delete-voucher', [ManageVoucherController::class, 'deleteVoucher']);
    Route::post('reuse-voucher', [ManageVoucherController::class, 'reuseVoucher']);

    // manage ship cash
    Route::get('manage-ship-cash', [ManageShipCashController::class, 'index']);

    Route::get('show-detail-shipcash', [ManageShipCashController::class, 'showDetailShipCash']);
    Route::post('upload-shipcash', [ManageShipCashController::class, 'uploadShipCash']);
    Route::post('delete-shipcash', [ManageShipCashController::class, 'deleteShipCash']);
    Route::post('update-shipcash', [ManageShipCashController::class, 'updateShipCash']);
    Route::post('reuse-shipcash', [ManageShipCashController::class, 'reuseShipCash']);

    //statistic
    Route::get('statistics', [StatisticsController::class, 'index']);
    Route::get('get-date-chart', [StatisticsController::class, 'dateChart']);
    Route::get('get-min-volume', [StatisticsController::class, 'minVolume']);
    Route::get('get-max-cancle-order', [StatisticsController::class, 'maxCancleOrder']);
    Route::get('get-avenue-by-genre', [StatisticsController::class, 'avenueByGenre']);

    // manage chatbot
    Route::get('manage-chatbot', [ManageChatbotController::class, 'index']);
    Route::post('accept-chatbot', [ManageChatbotController::class, 'accept']);
    Route::post('deny-chatbot', [ManageChatbotController::class, 'deny']);

});

// chatbot
Route::get('chatbot', function () {
    return view('botman');
});
Route::match(['get', 'post'], 'botman', [BotmanController::class, 'handle']);

// qr code

// use vendor\simplesoftwareio\simpleqrcode\src\Facades\QrCode;
// Route::get('qrcode', function () {
//     return view('qrcode');
// });

//svm test
// route::view('svm','testsvm');