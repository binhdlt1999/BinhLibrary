<?php

namespace App\Http\Controllers;

use App\Models\donhang;
use App\Models\khachhang;
use App\Models\vivoucher;
use App\Models\voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class manageVoucherWallet extends Controller
{
    public function index()
    {
        $khachhang = khachhang::where('id_tk', Auth::id())->first();
        $donhangs = donhang::where('id_kh', $khachhang->id)
                            ->where('trangthai', '!=', 0)
                            ->get();
        $tongtien = 0;
        if (!$donhangs->isEmpty()) {
            foreach ($donhangs as $value) {
                $tongtien += $value->tongtien;
            }
        }
        $diemthuong = $tongtien/10000;
        $date = date('Y-m-d', time());
        $vivoucher = vivoucher::where('id_kh', $khachhang->id)
                                ->where('soluong', '!=', 0)
                                ->where('ngayketthuc', '>=', $date)
                                ->get();

        $notInViVoucher = [];
        foreach ($vivoucher as $value) {
            array_push($notInViVoucher, $value->id_voucher);
        }

        $vouchers = voucher::where('ngaybatdau', '<=', $date)
                            ->where('ngayketthuc', '>=', $date)
                            ->where('trangthai', 1)
                            ->where('cothequydoi', 1)
                            ->whereNotIn('id', $notInViVoucher)
                            ->get();
        $myVoucher = voucher::whereIn('id', $notInViVoucher)
                                ->get();
        return view('pages.manageVoucherWallet')->with([
            'vouchers' => $vouchers,
            'myVoucher' => $myVoucher,
            'id_kh' => $khachhang->id,
            'diemthuong' => $diemthuong
        ]);
    }

    public function addVoucherToWallet(Request $request)
    {
        $voucher = voucher::where('id', $request->id_voucher)->first();
        if ($voucher->soluong <= 0) {
            return response()->json(['success' => false]);
        } else {
            $voucher->conlai = $voucher->conlai - 1;
            $voucher->save();
        }

        $vivoucher = vivoucher::create([
            'id_voucher' => $request->id_voucher,
            'id_kh' => $request->id_kh,
            'soluong' => 1,
            'ngayketthuc' => $voucher->ngayketthuc
        ]);
        if ($vivoucher) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    }
}
