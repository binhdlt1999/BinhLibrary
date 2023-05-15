<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\chitietloaisach;
use Illuminate\Http\Request;
use App\Models\sach;
use App\Models\tacgia;
use App\Models\theloai;
use Illuminate\Support\Facades\Validator;

class ManageProductController extends Controller
{
    public function index()
    {
        $saches = sach::orderby('created_at', 'desc')->get();
        $theloais = theloai::all();
        return view('admin.pages.product.manageProduct')->with([
            'saches' => $saches,
            'theloais' => $theloais
        ]);
    }

    public function divTableProduct($request)
    {
        $div = '';
        $i = 1;
        if($request) {
            $saches = $request;
        } else {
            $saches = sach::orderby('created_at', 'desc')->get();
        }
        foreach ($saches as $sach) {
            $div .= '<tr onclick="showDetailProduct(' . $sach->id. ')">
                        <td class="py-1">
                            ' . $i++;
            $div .=     '</td>
                        <td class="py-1">
                            <img src="' . asset('images/books/' . $sach->hinhanh) . '" alt="image" />
                        ';
            if ($sach->trangthaikinhdoanh == 0) {
                $div .= '<button type="button" id="updateSach" class="btn mb-2" style="background-color: gray; border-color: none" disabled>Ngừng kinh doanh</button>';
            }
            $div .=     '</td>
                        <td>
                            ' . substr($sach->tensach, 0, 15) . '
                        </td>
                        <td>
                            <div class="progress">';
                                if($sach->soluong > 0 && $sach->soluong <= 10)
                                    $div .= '<div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">' . $sach->soluong . '</div>';
                                elseif($sach->soluong > 10 && $sach->soluong <= 50)
                                    $div .= '<div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">' . $sach->soluong . '</div>';
                                elseif($sach->soluong > 50 && $sach->soluong <= 200)
                                    $div .= '<div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">' . $sach->soluong . '</div>';
                                elseif($sach->soluong > 200)
                                    $div .= '<div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">' . $sach->soluong . '</div>';
                                else
                                    $div .= '<div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>';
            $div .=         '</div>
                        </td>
                        <td>' . date_format(date_create($sach->created_at), 'd/m/Y') .'
                        </td>
                    </tr>';
        }
        return $div;
    }
    public function validateInput($request)
    {
        $validator = Validator::make($request->all(), [
            'tensach' => ['required'],
            'theloai' => ['required'],
            'gia' => ['required', 'min:0', 'numeric'],
            'giakhuyenmai' => ['nullable', 'numeric', 'min:0', 'lt:gia'],
            'mota' => ['required'],
            'soluong' => ['required', 'min:0', 'numeric'],
            'tacgia' => ['required'],
        ], [
            'tensach.required' => 'Vui lòng nhập tên sách',
            'theloai.required' => 'Chọn thể loại',

            'gia.required' => 'Nhập giá sản phẩm',
            'gia.min' => 'Giá tiền phải là số dương',
            'gia.numeric' => 'Chỉ nhận các số từ 0-9',

            'giakhuyenmai.min' => 'Giá tiền phải là số dương',
            'giakhuyenmai.numeric' => 'Chỉ nhận các số từ 0-9',
            'giakhuyenmai.lt' => 'Giá khuyến mãi phải nhỏ hơn giá',

            'mota.required' => 'Nhập mô tả sản phẩm',

            'soluong.required' => 'Vui lòng nhập số lượng',
            'soluong.min' => 'Số lượng lớn hơn 0',
            'soluong.numeric' => 'Chỉ nhận các số từ 0-9',

            'tacgia.required' => 'Chưa chọn tác giả',
        ]);
 
        if ($validator->fails()) {
            return $validator->getMessageBag()->toArray();
        }
    }

    public function uploadFile(Request $request)
    {
        $validation = $this->validateInput($request);
        if (!empty($validation) || !$request->file('manage-product-file-hinhanh')) {
            if (!$request->file('manage-product-file-hinhanh')) {
                $validation['file-hinhanh'] = ['Chưa chọn ảnh sản phẩm'];
            }
            return response()->json([
                'success' => false,
                'errors' => $validation
            ]);
        }

        $created_at = date('Y-m-d H:i:s', time());

        $file = $request->file('manage-product-file-hinhanh')->store('public/images/books');
        $explode_file = explode('/', $file);
        $fileName = array_pop($explode_file);

        $theloaiArr = explode(",", $request->theloai);

        $tenloais = theloai::whereIn('id', $theloaiArr)->select('tenloai')->get();

        if (!$tenloais) {
            return Response()->json([
                "success" => false,
            ]);
        }
        $tenloaiKeyword = '';
        foreach ($tenloais as $tenloai) {
            $tenloaiKeyword .= $tenloai->tenloai . ',';
        }
        $tacgia = $request->tacgia;
        $keyword = "$request->tensach,$tacgia, $tenloaiKeyword";

        if (!empty($request->giakhuyenmai)) {
            $giakhuyenmai = $request->giakhuyenmai * 1000;
        } else {
            $giakhuyenmai = null;
        }

        $data = [
            'tacgia' => $request->tacgia,
            'tensach' => $request->tensach,
            'gia' => $request->gia * 1000,
            'giakhuyenmai' => $giakhuyenmai,
            'mota' => $request->mota,
            'diemdanhgia' => 0,
            'hinhanh' => $fileName,
            'noibat' => $request->noibat,
            'soluong' => $request->soluong,
            'keyword' => $keyword,
            'created_at' => $created_at,
            'trangthaikinhdoanh' => 1
        ];

        //store file into document folder
        sach::create($data);

        $id_s = sach::orderby('id', 'desc')->select('id')->first();
        foreach ($theloaiArr as $id_l) {
            chitietloaisach::create([
                'id_l' => $id_l,
                'id_s' => $id_s->id
            ]);
        }

        $divTableProduct = $this->divTableProduct(null);

        return Response()->json([
            "success" => true,
            "divTableProduct" => $divTableProduct
        ]);
    }

    public function showDetailProduct(Request $request)
    {
        $id = $request->id;
        $sach = sach::find($id);
        $chitietloaisach = chitietloaisach::where('id_s', $id)->select('id_l')->get();
        $id_theloai = [];
        foreach ($chitietloaisach as $value) {
            array_push($id_theloai, $value->id_l);
        }

        $div = $this->divTheloai($id_theloai);
        return response()->json([
            'success' => true,
            'sach' => $sach,
            'theloai' => $div
        ]);
    }

    public function divTheloai($id_theloai)
    {
        $theloai = theloai::all();
        $div = '';
        foreach ($theloai as $value) {
            if (in_array($value->id, $id_theloai)) {
                $div .= "<option value=$value->id selected>$value->tenloai</option>";
            } else {
                $div .= "<option value=$value->id>$value->tenloai</option>";
            }
        }
        return $div;
    }

    public function updateProduct(Request $request)
    {
        $validation = $this->validateInput($request);
        if (!empty($validation)) {
            return response()->json([
                'success' => false,
                'errors' => $validation
            ]);
        }

        $theloaiArr = explode(",", $request->theloai);

        $tenloais = theloai::whereIn('id', $theloaiArr)->select('tenloai')->get();

        if (empty($tenloais)) {
            return Response()->json([
                "success" => false,
          ]);
        }

        $tenloaiKeyword = '';
        foreach ($tenloais as $tenloai) {
            $tenloaiKeyword .= $tenloai->tenloai . ',';
        }

        if (!empty($request->giakhuyenmai)) {
            $giakhuyenmai = $request->giakhuyenmai * 1000;
        } else {
            $giakhuyenmai = null;
        }

        $sach = sach::find($request->id_s);
        $sach->tensach = $request->tensach;
        $sach->gia = $request->gia * 1000;
        $sach->giakhuyenmai = $giakhuyenmai;
        $sach->mota = $request->mota;
        $sach->soluong = $request->soluong;
        $sach->noibat = $request->noibat;
        $sach->tacgia = $request->tacgia;

        chitietloaisach::where('id_s', $request->id_s)->delete();
        foreach ($theloaiArr as $id_l) {
            chitietloaisach::create([
                'id_l' => $id_l,
                'id_s' => $request->id_s
            ]);
        }

        if ($request->file('manage-product-file-hinhanh')) {
            $file = $request->file('manage-product-file-hinhanh')->store('public/images/books');
            $explode_file = explode('/', $file);
            $fileName = array_pop($explode_file);
            $sach->hinhanh = $fileName;
        }
        $sach->save();
        $divTableProduct = $this->divTableProduct(null);
        return response()->json([
            'success' => true,
            'divTableProduct' => $divTableProduct
        ]);
    }

    public function deleteProduct(Request $request)
    {
        $id_s = $request->id_s;
        $sach = sach::find($id_s);
        $sach->trangthaikinhdoanh = 0;
        $sach->save();

        $divTableProduct = $this->divTableProduct(null);
        return response()->json([
            'divTableProduct' => $divTableProduct
        ]);
    }

    public function getProductByKeyword(Request $request)
    {
        $keyword = strtolower($request->keyword);
        if (!$keyword) {
            $saches = sach::orderby('created_at', 'desc')->get();
        } else {
            $saches = sach::query();
            $saches = $saches->orwhere('tensach', 'like', "%$keyword%");
            $arrayNgungKinhDoanh = ['ngung', 'ngung kinh', 'ngung kinh doanh'];
            $arrayKinhDoanh = ['kinh', 'kinh doanh'];
            if (in_array($keyword, $arrayNgungKinhDoanh)) {
                $saches = $saches->orwhere('trangthaikinhdoanh', 0);
            } elseif (in_array($keyword, $arrayKinhDoanh)) {
                $saches = $saches->orwhere('trangthaikinhdoanh', 1);
            }
            // $date = DateTime::createFromFormat('Y-m-d', $keyword);
            // $date = date("Y-m-d", strtotime($keyword));
            // try {
            //     $date = Carbon::createFromFormat('Y/m/d', $keyword)->format('Y-m-d');
            // }
            // catch(Exception $e) {
            //     $date = Carbon::createFromFormat('d/m/Y', $keyword)->format('Y-m-d');
            // }
            // catch(Exception $e) {
            //     $date = Carbon::createFromFormat('d-m-Y', $keyword)->format('Y-m-d');
            // }
            // catch(Exception $e) {
            //     $date = Carbon::createFromFormat('Y-m-d', $keyword)->format('Y-m-d');
            // }
            // catch(Exception $e) {
            //     $date = Carbon::now();
            // }

            // $saches = $saches->orwhereDate('created_at', '>=', $date);
            $saches = $saches->get();
        }
        if ($saches->isEmpty()) {
            return response()->json([
                'success' => false,
            ]);
        }

        $divTableProduct = $this->divTableProduct($saches);
        return response()->json([
            'success' => true,
            'divTableProduct' => $divTableProduct
        ]);
    }

    public function resaleProduct(Request $request)
    {
        $id_s = $request->id_s;
        $sach = sach::find($id_s);
        $sach->trangthaikinhdoanh = 1;
        $sach->save();

        $divTableProduct = $this->divTableProduct(null);
        return response()->json([
            'divTableProduct' => $divTableProduct
        ]);
    }
}
