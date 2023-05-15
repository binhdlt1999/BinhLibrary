<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\voucher;
use Illuminate\Support\Facades\Validator;
use DateTime;
use Laravel\Ui\Presets\React;

class ManageVoucherController extends Controller
{
    public function index()
    {
        $vouchers = voucher::orderby('created_at', 'desc')->get();

        return view('admin.pages.voucher.manageVoucher')->with(['vouchers' => $vouchers]);
    }

    public function divTableVoucher()
    {
        $i = 1;
        $div = '';
        $vouchers = voucher::orderby('created_at', 'desc')->get();

        foreach ($vouchers as $voucher) {
            $div .= '<tr onclick="showDetailVoucher(' . $voucher->id . ')">';
            $div .= '<td class="py-1">' . $i++ . '</td>';
            $div .= '<td class="py-1">' . $voucher->mavoucher . '</td>';
            $div .= '<td class="py-1">' . $voucher->tenvoucher . '</td>';
            $div .= '<td class="py-1">' . date_format(date_create($voucher->ngaybatdau), 'd/m/Y') . '</td>';
            $div .= '<td class="py-1">' . date_format(date_create($voucher->ngayketthuc), 'd/m/Y') . '</td>';
            $div .= '<td>';
            $date_batdau = date_create($voucher->ngaybatdau);
            $date_ketthuc = date_create($voucher->ngayketthuc);
            $diff = date_diff($date_batdau,$date_ketthuc);
            $diffDate = $diff->format("%R%a");

            if ($voucher->trangthai == 1 && $diffDate >= 0 && $voucher->conlai != 0) {
                $div .= '<label class="badge badge-primary">Hoạt động</label>';
            } elseif ($voucher->trangthai == 0) {
                $div .= '<label class="badge badge-danger">Đã hủy</label>';
            } elseif ($voucher->conlai == 0) {
                $div .= '<label class="badge badge-success">Hết lượt</label>';
            } elseif ($diffDate < 0) {
                $div .= '<label class="badge badge-info">Đã hết hạn</label>';
            }
            $div .= '</td></tr>';
        }

        return $div;
    }

    public function validateInput($request)
    {
        $validator = Validator::make($request->all(), [
            'mavoucher' => ['required'],
            'tenvoucher' => ['required'],
            'mucuudai' => ['required', 'min:0', 'numeric'],
            'dieukien' => ['required', 'numeric', 'min:0'],
            'ngaybatdau' => ['required', 'date_format:d/m/Y', 'after_or_equal:today'],
            'ngayketthuc' => ['required', 'date_format:d/m/Y', 'after_or_equal:ngaybatdau'],
            'soluong' => ['required', 'min:0', 'numeric'],
            'diemquydoi' => ['required', 'min:0', 'numeric'],
        ], [
            'mavoucher.required' => 'Vui lòng nhập mã voucher',
            'tenvoucher.required' => 'Vui lòng nhập tên voucher',

            'mucuudai.required' => 'Nhập mức ưu đãi',
            'mucuudai.min' => 'Lớn hơn hoặc bằng 0',
            'mucuudai.numeric' => 'Chỉ nhận các số từ 0-9', 

            'dieukien.required' => 'Nhập điều kiện để giảm giá',
            'dieukien.min' => 'Lớn hơn hoặc bằng 0',
            'dieukien.numeric' => 'Chỉ nhận các số từ 0-9', 

            'ngaybatdau.required' => 'Chưa chọn ngày bắt đầu',
            'ngaybatdau.date_format' => 'sai định dạng, vd: 01/01/2020',
            'ngaybatdau.after_or_equal' => 'Ngày bắt đầu phải từ ngày hôm nay',

            'ngayketthuc.required' => 'Chưa chọn ngày kết thúc',
            'ngayketthuc.date_format' => 'sai định dạng, vd: 01/01/2020',
            'ngayketthuc.after_or_equal' => 'ngày kết thúc phải sau ngày bắt đầu',

            'soluong.required' => 'Vui lòng nhập số lượng',
            'soluong.min' => 'Số lượng lớn hơn hoặc bằng 0',
            'soluong.numeric' => 'Chỉ nhận các số từ 0-9',

            'diemquydoi.required' => 'Vui lòng nhập điểm quy đổi',
            'diemquydoi.min' => 'Điểm quy đổi phải lớn hơn hoặc bằng 0',
            'diemquydoi.numeric' => 'Chỉ nhận các số từ 0-9',
        ]);
 
        if ($validator->fails()) {
            return $validator->getMessageBag()->toArray();
        }
    }

    public function uploadVoucher(Request $request)
    {
        $validation = $this->validateInput($request);
        if (!empty($validation)) {
            return response()->json([
                'success' => false,
                'errors' => $validation
            ]);
        }
        $datetime = new DateTime();
        $ngaybatdau = $datetime->createFromFormat('d/m/Y', $request->ngaybatdau); 
        $ngayketthuc = $datetime->createFromFormat('d/m/Y', $request->ngayketthuc); 
        $created_at = date('Y-m-d H:i:s', time());

        $newVoucher = voucher::create([
            'mavoucher' => $request->mavoucher,
            'tenvoucher' => $request->tenvoucher,
            'mucuudai' => $request->mucuudai * 1000,
            'dieukien' => $request->dieukien * 1000,
            'soluong' => $request->soluong,
            'conlai' => $request->soluong,
            'trangthai' => 1,
            'ngaybatdau' => $ngaybatdau,
            'ngayketthuc' => $ngayketthuc,
            'created_at' => $created_at,
            'cothequydoi' => $request->cothequydoi,
            'diemquydoi' => $request->diemquydoi
        ]);

        if (!$newVoucher) {
            return response()->json([
                'success' => false,
            ]);
        }

        $divTableVoucher = $this->divTableVoucher();

        return response()->json([
            'success' => true,
            'divTableVoucher' => $divTableVoucher
        ]);
    }

    public function updateVoucher(Request $request)
    {
        $validation = $this->validateInput($request);
        if (!empty($validation)) {
            return response()->json([
                'success' => false,
                'errors' => $validation
            ]);
        }

        $datetime = new DateTime();
        $ngaybatdau = $datetime->createFromFormat('d/m/Y', $request->ngaybatdau); 
        $ngayketthuc = $datetime->createFromFormat('d/m/Y', $request->ngayketthuc);

        $idVoucher = $request->id;

        $voucher = voucher::find($idVoucher);

        $voucher->mavoucher = $request->mavoucher;
        $voucher->tenvoucher = $request->tenvoucher;
        $voucher->mucuudai = $request->mucuudai*1000;
        $voucher->dieukien = $request->dieukien*1000;
        $voucher->ngaybatdau = $ngaybatdau;
        $voucher->ngayketthuc = $ngayketthuc;
        $voucher->soluong = $request->soluong;
        $voucher->cothequydoi = $request->cothequydoi;
        $voucher->diemquydoi = $request->diemquydoi;

        $voucher->save();
        $divTableVoucher = $this->divTableVoucher();
        return response()->json([
            'success' => true,
            'divTableVoucher' => $divTableVoucher
        ]);
    }

    public function deleteVoucher(Request $request)
    {
        $voucher = voucher::find($request->id);
        $voucher->trangthai = 0;
        $voucher->save();
        $divTableVoucher = $this->divTableVoucher();
        return response()->json([
            'success' => true,
            'divTableVoucher' => $divTableVoucher
        ]);
    }

    public function reuseVoucher(Request $request)
    {
        $voucher = voucher::find($request->id);
        $voucher->trangthai = 1;
        $voucher->save();
        $divTableVoucher = $this->divTableVoucher();
        return response()->json([
            'success' => true,
            'divTableVoucher' => $divTableVoucher
        ]);
    }
}
