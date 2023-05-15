<?php

namespace App\Http\Controllers;

use App\Models\donhang;
use App\Models\khachhang;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $khachhang = khachhang::where('id_tk', Auth::id())->first();
        $id_kh = $khachhang->id;
        $donhang = donhang::with('sach')
                ->where('id_kh', $id_kh)
                ->where('trangthai', '!=', '0')
                ->orderBy('id', 'desc')
                ->get();
        foreach ($donhang as $value) {
            switch($value->trangthai) {
                case 1:
                    $value->trangthai = "Đang chờ xác nhận";
                    break;
                case 2:
                    $value->trangthai = "Đang chuẩn bị hàng";
                    break;
                case 3:
                    $value->trangthai = "Đang giao";
                    break;
                case 4:
                    $value->trangthai = "Đã giao";
                    break;
                case 5:
                    $value->trangthai = "Đã nhận hàng";
                    break;
                case 6:
                    $value->trangthai = "Bạn đã hủy đơn";
                    break;
                case 7:
                    $value->trangthai = "Cửa hàng từ chối đơn";
                    break;
                case 9:
                    $value->trangthai = "Thanh toán trực tuyến không thành công";
                    break;
            }
        }
        if ($donhang == null) {
            return view('pages.404error');
        }
        return view('pages.listOrder')->with(['donhang' => $donhang]);
    }

    public function detailIndex(Request $request, $id)
    {
        $donhang = donhang::with('sach')
                ->where('id', $id)
                ->where('trangthai', '!=', '0')
                ->first();
        return view('pages.detailOrder')->with(['donhang' => $donhang]);
    }

    public function cancelOrder(Request $request)
    {
        $donhang = donhang::find($request->idDonhang);
        $donhang->trangthai = 6;
        if (!$donhang->save()) {
            return response()->json([
                'success' => false
            ]);
        }
    }
}
