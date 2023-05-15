<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\khachhang;
use Illuminate\Support\Facades\Auth;
use App\Models\tinhthanhpho;
use App\Models\xaphuongthitran;
use App\Models\quanhuyen;
use App\Rules\notExistInDanhsachcam;
use App\Rules\acceptDelivery;
use Illuminate\Support\Facades\Validator;

class ManageInfoController extends Controller
{
    public function index()
    {
        if (!Auth::check()) {
            return view('pages.404error');
        }

        $khachhang = khachhang::where('id_tk', Auth::id())->first();
        $IdXaphuongthitran = [];
        $IdQuanhuyen = [];
        $IdTinhthanhpho = [];

        $tinhthanhpho = tinhthanhpho::all();
        $quanhuyen = [];
        $xaphuongthitran = [];

        $IdXaphuongthitran = xaphuongthitran::where('xaid', $khachhang->xaid)->first();
        if (!empty($IdXaphuongthitran)) {
            $IdQuanhuyen = quanhuyen::where('maqh', $IdXaphuongthitran->maqh)->first();
            if ($IdQuanhuyen) {
                $IdTinhthanhpho = tinhthanhpho::where('matp', $IdQuanhuyen->matp)->first();
                $quanhuyen = quanhuyen::where('matp', $IdQuanhuyen->matp)->get();
                $xaphuongthitran = xaphuongthitran::where('maqh', $IdQuanhuyen->maqh)->get();
            }
        }
        return view('pages.manageInfo')->with([
            'idKhachhang' => $khachhang->id,
            'IdXaphuongthitran' => $IdXaphuongthitran,
            'IdQuanhuyen' => $IdQuanhuyen,
            'IdTinhthanhpho' => $IdTinhthanhpho,
            'xaphuongthitran' => $xaphuongthitran,
            'quanhuyen' => $quanhuyen,
            'tinhthanhpho' => $tinhthanhpho,
            'diachi' => $khachhang->diachi,
            'dtdd' => $khachhang->sdt,
            'ho' => $khachhang->ho,
            'ten' => $khachhang->ten,
            'loaidiachi' => $khachhang->loaidiachi
        ]);
    }

    public function submitInfoToChange(Request $request)
    {
        $validator = Validator::make([
            'ho' => $request->ho,
            'ten' => $request->ten,
            'dtdd' => $request->dtdd,
            'diachi' => $request->diachi,
            'loaidiachi' => $request->loaidiachi,
            'matp' => $request->matp,
            'maqh' => $request->maqh,
            'xaid' => $request->xaid,
        ], [
            'ho' => ['required', 'regex:/^[\pL\s\-]+$/u'],
            'ten' => ['required', 'regex:/^[\pL\s\-]+$/u'],
            'dtdd' => ['required', 'max: 10', new notExistInDanhsachcam, 'regex:/(0)[0-9]{9}/'],
            'diachi' => ['required'],
            'loaidiachi' => ['required'],
            'matp' => ['required'],
            'maqh' => ['required', 'not_in:0'],
            'xaid' => ['required', 'not_in:0'],
        ], [
            'ho.required' => 'Không được để trống họ đệm',
            'ten.required' => 'Không được để trống tên',
            'ho.regex' => 'Họ tên chỉ chấp nhận ký tự chữ cái',
            'ten.regex' => 'Họ tên chỉ chấp nhận ký tự chữ cái',
            'dtdd.required' => 'Không được để trống điện thoại di động',
            'dtdd.max' => 'Không được quá 10 số',
            'dtdd.regex' => 'Sai định dạng, vd: 0123xxxxxxx',
            'diachi.required' => 'Không được để trống địa chỉ',
            'loaidiachi.required' => 'Chưa chọn loại địa chỉ',
            'matp.required' => 'Chưa chọn tỉnh/thành phố',
            'maqh.required' => 'Chưa chọn quận/huyện',
            'maqh.not_in' => 'Chưa chọn quận/huyện',
            'xaid.required' => 'Chưa chọn Xã/Phường',
            'xaid.not_in' => 'Chưa chọn Xã/Phường',
        ]);
 
        if ($validator->fails()) {
            return response()->json(array(
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ));
        }

        $data = [
            'ho' => $request->ho,
            'ten' => $request->ten,
            'sdt' => $request->dtdd,
            'diachi' => $request->diachi,
            'loaidiachi' => $request->loaidiachi,
            'matp' => $request->matp,
            'maqh' => $request->maqh,
            'xaid' => $request->xaid,
        ];

        $khachhang = khachhang::where('id', $request->idKhachhang)->first();

        $khachhang->fill($data);
        $khachhang->save();

        return response()->json(array(
            'success' => true,
        ));
    }
}
