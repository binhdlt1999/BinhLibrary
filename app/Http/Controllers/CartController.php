<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Rules\notExistInDanhsachcam;
use App\Rules\acceptDelivery;
use App\Models\donhang;
use App\Models\khachhang;
use App\Models\quanhuyen;
use App\Models\sach;
use App\Models\chitietdonhang;
use App\Models\phivanchuyen;
use App\Models\tinhthanhpho;
use App\Models\xaphuongthitran;
use App\Models\voucher;
use App\Models\vivoucher;

class CartController extends Controller
{
    public function index(Request $request) {
        $cookie = $request->cookie('cart');
        if ($cookie && !Auth::check()) {
            $data = json_decode($this->getPageProductWithCookie($cookie));
            
            if ($data->result) {
                return view('pages.cart')->with([
                    'saches' => $data->saches,
                    'donhang' => $data->donhang,
                ]);
            } else {
                return view('pages.404error');
            }
        } elseif (Auth::check()) {
            $data = json_decode($this->getPageProductWithIdUser());
            if ($data->result) {
                return view('pages.cart')->with([
                    'saches' => $data->saches,
                    'donhang' => $data->donhang
                ]);
            } else {
                return view('pages.404error');
            }
        } else {
            return view('pages.404error');
        }
    }

    public function getPageProductWithCookie($cookieGiohang) {
        $getIdDonhang = donhang::whereHas('khachhang', fn ($query) => 
                                    $query
                                        ->where('giohang', 'like', $cookieGiohang)
                                        ->where('trangthai', '0')
                                )
                                ->select('id')
                                ->first();
        if ($getIdDonhang) {
            $donhang = donhang::with('sach')->find($getIdDonhang->id);

            return json_encode([
                'result' => true,
                'saches' => $donhang->sach,
                'donhang' => $donhang
            ]);
        }
        else {
            return json_encode(['result' => false]);
        }
    }

    public function getPageProductWithIdUser() {
        $khachhang = khachhang::where('id_tk', Auth::id())->select('id')->first();
        $getIdDonhang = donhang::whereHas('khachhang', fn ($query) => 
                                    $query
                                        ->where('id_kh', $khachhang->id)
                                        ->where('trangthai', '0')  
                                )
                                ->select('id')
                                ->first();

        if ($getIdDonhang) {
            $donhang = donhang::with('sach')->find($getIdDonhang->id);

            return json_encode([
                'result' => true,
                'saches' => $donhang->sach,
                'donhang' => $donhang
            ]);
        }
        else {
            return json_encode(['result' => false]);
        }
    }

    public function orderPage(Request $request) {
        $cookie = $request->cookie('cart');
        $date = date('Y-m-d H:i:s', time());
        $vouchers = voucher::where('ngaybatdau', '<', $date)
                            ->where('ngayketthuc', '>', $date)
                            ->where('trangthai', 1)
                            ->where('conlai', '>', 0)
                            ->where('cothequydoi', 0)
                            ->get();

        if ($cookie && !Auth::check()) {
            $tinhthanhpho = tinhthanhpho::all();
        
            return view('pages.order')->with([
                'donhang' => $request,
                'tinhthanhpho' => $tinhthanhpho,
                'vouchers' => $vouchers,
                'phivanchuyen' => 0
            ]);
        } elseif (Auth::check()) {
            $khachhang = khachhang::where('id_tk', Auth::id())->first();
            $IdXaphuongthitran = [];
            $IdQuanhuyen = [];
            $IdTinhthanhpho = [];

            $tinhthanhpho = tinhthanhpho::all();
            $quanhuyen = [];
            $xaphuongthitran = [];

            $IdXaphuongthitran = xaphuongthitran::where('xaid', $khachhang->xaid)->first();
            if ($IdXaphuongthitran) {
                $IdQuanhuyen = quanhuyen::where('maqh', $IdXaphuongthitran->maqh)->first();
                if ($IdQuanhuyen) {
                    $IdTinhthanhpho = tinhthanhpho::where('matp', $IdQuanhuyen->matp)->first();
                    $quanhuyen = quanhuyen::where('matp', $IdQuanhuyen->matp)->get();
                    $xaphuongthitran = xaphuongthitran::where('maqh', $IdQuanhuyen->maqh)->get();
                }
            }
            $phivanchuyen = phivanchuyen::where('xaid', 'like', $IdXaphuongthitran->xaid)->first();

            $date = date('Y-m-d', time());
            $vivoucher = vivoucher::where('id_kh', $khachhang->id)
                                    ->where('soluong', '!=', 0)
                                    ->where('ngayketthuc', '>=', $date)
                                    ->get();
            $notInViVoucher = [];
            foreach ($vivoucher as $value) {
                array_push($notInViVoucher, $value->id_voucher);
            }
            $myVouchers = voucher::whereIn('id', $notInViVoucher)
                                ->get();

            return view('pages.order')->with([
                'donhang' => $request,
                'phivanchuyen' => $phivanchuyen->phi,
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
                'loaidiachi' => $khachhang->loaidiachi,
                'vouchers' => $vouchers,
                'myvouchers' => $myVouchers
            ]);
        } else {
            return view('pages.404error');
        }
    }

    public function getDistrict(Request $request) {
        $quanhuyen = quanhuyen::where('matp', $request->matp)
                                ->orderBy('maqh', 'asc')
                                ->get();
        if (count($quanhuyen) == 0) {
            return response()->json([
                'div' => false
            ]);
        }
        $div = "<option value='0'>Chọn Quận/Huyện</option>";
        foreach($quanhuyen as $value) {
            $div .= "<option value='$value->maqh'>$value->name</option>";
        }

        return response()->json([
            'div' => $div
        ]);
    }

    public function getWard(Request $request) {
        $xaphuongthitran = xaphuongthitran::where('maqh', $request->maqh)
                            ->orderBy('xaid', 'asc')
                            ->get();
        $div = "<option value='0'>Chọn Phường/Xã</option>";
        foreach($xaphuongthitran as $value) {
            $div .= "<option value='$value->xaid'>$value->name</option>";
        }

        return response()->json([
            'div' => $div,
        ]);
    }

    public function getShipCash(Request $request) {
        $phivanchuyen = phivanchuyen::where('xaid', $request->xaid)->first();
        $phi = 0;
        if(!empty($phivanchuyen)) {
            $phi = $phivanchuyen->phi;
        }

        return response()->json([
            'phivanchuyen' => $phi
        ]);
    }

    public function getVoucher(Request $request) {
        $voucher = voucher::where('id', $request->id)
                            ->where('conlai', '>', 0)
                            ->first();
        if(!empty($voucher)) {
            $mucuudai = $voucher->mucuudai;
            return response()->json([
                'success' => true,
                'mucuudai' => $mucuudai
            ]);
        } else {
            return response()->json([
                'success' => false
            ]);
        }
    }

    public function submitAddress(Request $request) {
        // $request contain (idVoucher, idDonhang, tongtien, giagiam, tamtinh)
        $validator = Validator::make($request->all(), [
            'ho' => ['required', 'regex:/^[\pL\s\-]+$/u'],
            'ten' => ['required', 'regex:/^[\pL\s\-]+$/u'],
            'dtdd' => ['required', 'max: 10', new notExistInDanhsachcam, 'regex:/(0)[0-9]{9}/'],
            'diachi' => ['required'],
            'loaidiachi' => ['required'],
            'matp' => ['required'],
            'maqh' => ['required', 'not_in:0'],
            'xaid' => ['required', 'not_in:0', new acceptDelivery],
            'phuongthucthanhtoan' => ['required']
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
            'phuongthucthanhtoan.required' => 'Chưa chọn phương thức thanh toán'
        ]);

        if ($request->tamtinh <= 0) {
            return response()->json(array(
                'success' => 'null',
                'link' => "/cart"
            ));
        }

        if ($validator->fails()) {
            return response()->json(array(
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ));
        }

        $chitietdonhang = chitietdonhang::where('id_dh', $request->idDonhang)
                                            ->orderBy('id_s', 'asc')
                                            ->get();
        for ($i = 0; $i < count($chitietdonhang); $i++) {
            if ($chitietdonhang[$i]->soluong == '0') {
                chitietdonhang::where('id_dh', $request->idDonhang)
                                ->where('id_s', $chitietdonhang[$i]->id_s)->delete();
            }
        }
        $idSach = [];
        foreach ($chitietdonhang as $value) {
            array_push($idSach, $value->id_s);
        }

        $sach = sach::whereIn('id', $idSach)
                        ->orderBy('id', 'asc')
                        ->get();

        if ($request->phuongthucthanhtoan == 2) {
            for ($i = 0; $i < count($chitietdonhang); $i++) {
                if ($chitietdonhang[$i]->id_s == $sach[$i]->id) {
                    $soluongconlai = $sach[$i]->soluong - $chitietdonhang[$i]->soluong;
                    if ($soluongconlai < 0) {
                        $chitietdonhang[$i]->soluong = $sach[$i]->soluong;
                        $chitietdonhang[$i]->save();
                        for ($j = --$i; $j >= 0; $j--) {
                            $soluongbandau = $sach[$j]->soluong + $chitietdonhang[$j]->soluong;
                            $sach[$j]->soluong = $soluongbandau;
                            $sach[$j]->save();
                        }
                        return response()->json(array(
                            'success' => 'overStorehouse',
                            'link' => "/cart"
                        ));
                    } else {
                        $sach[$i]->soluong = $soluongconlai;
                        $sach[$i]->save();
                    }
                }
            }
        }
        for ($i = 0; $i < count($chitietdonhang); $i++) {
            if ($chitietdonhang[$i]->id_s == $sach[$i]->id) {
                if (!empty($sach[$i]->giakhuyenmai) &&
                    $sach[$i]->giakhuyenmai < $sach[$i]->gia
                ) {
                    $chitietdonhang[$i]->gia = $sach[$i]->giakhuyenmai;
                    $chitietdonhang[$i]->thanhtien = $sach[$i]->giakhuyenmai*$chitietdonhang[$i]->soluong;
                } else {
                    $chitietdonhang[$i]->gia = $sach[$i]->gia;
                    $chitietdonhang[$i]->thanhtien = $sach[$i]->gia*$chitietdonhang[$i]->soluong;
                }
                $chitietdonhang[$i]->save();
            }
        }
        $donhang = donhang::where('id', $request->idDonhang)->first();
        $donhang->madonhang = rand(100000000, 999999999);
        $donhang->id_voucher = $request->idVoucher;
        $donhang->tamtinh = $request->tamtinh;
        $donhang->phivanchuyen = $request->phivanchuyen;
        $donhang->giagiam = $request->giagiam;
        $donhang->tongtien = $request->tongtien;
        $donhang->thoigiantao = date('Y-m-d H:i:s', time());
        $donhang->save();

        if ($request->idVoucher != null) {
            $date = date('Y-m-d', time());
            $voucher = voucher::where('id', $request->idVoucher)->first();
            if ($voucher->cothequydoi == 1) {
                $myVoucher = vivoucher::where('id_kh', $donhang->id_kh)
                                        ->where('id_voucher', $request->idVoucher)
                                        ->where('soluong', 1)
                                        ->where('ngayketthuc', '>=', $date)
                                        ->first();
                $myVoucher->soluong = 0;
                $myVoucher->save();
            } else {
                $voucher->conlai = $voucher->conlai - 1;
                $voucher->save();
            }
        }

        $cookie = $request->cookie('cart');
        if ($cookie && !Auth::check()) {
            $khachhang = khachhang::where('giohang', 'like', $cookie)->first();
            $khachhang->ho = $request->ho;
            $khachhang->ten = $request->ten;
            $khachhang->sdt = $request->dtdd;
            $khachhang->diachi = $request->diachi;
            $khachhang->loaidiachi = $request->loaidiachi;
            $khachhang->xaid = $request->xaid;
            $khachhang->save();
        }
        if ($request->phuongthucthanhtoan == 2) {
            $donhangtocreate = donhang::where('id', $request->idDonhang)->first();
            return response()->json(array(
                'success' => true,
                'link' => $this->create($donhangtocreate)
            ));
        } else {
            $donhang->trangthai = 1;
            $donhang->save();

            return response()->json(array(
                'success' => true,
                'link' => "/"
            ));
        }
    }


    public function create($donhang) {

        //-----------------------dl test 1
        $vnp_TmnCode = "EL699STV"; //Website ID in VNPAY System
        $vnp_HashSecret = "NJPELURNRUGWYPYSEUHZRNHDJTBPUMSE"; //Secret key

        //-----------------------dl test 2
        // $vnp_TmnCode = "DURSJHST"; //Website ID in VNPAY System
        // $vnp_HashSecret = "LHWVNMITRALGGRNTHOSFXAIMXBCMMBUN"; //Secret key
        //----------------------------------

        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://127.0.0.1:8000/ipn";
        $vnp_apiUrl = "http://sandbox.vnpayment.vn/merchant_webapi/merchant.html";

        $vnp_TxnRef = $donhang->madonhang; //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = 'Noi dung thanh toan';
        $vnp_OrderType = "Thanh toán hóa đơn";
        $vnp_Amount = $donhang->tongtien * 100;
        $vnp_Locale = 'VN';
        $vnp_BankCode = 'NCB';
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        if (isset($vnp_Bill_State) && $vnp_Bill_State != "") {
            $inputData['vnp_Bill_State'] = $vnp_Bill_State;
        }

        //var_dump($inputData);
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        return $vnp_Url;
    }

    public function ipn()
    {
        $vnp_HashSecret = "NJPELURNRUGWYPYSEUHZRNHDJTBPUMSE"; //Secret key

        $inputData = array();
        $returnData = array();
        foreach ($_GET as $key => $value) {
                    if (substr($key, 0, 4) == "vnp_") {
                        $inputData[$key] = $value;
                    }
                }

        $vnp_SecureHash = $inputData['vnp_SecureHash'];
        unset($inputData['vnp_SecureHash']);
        ksort($inputData);
        $i = 0;
        $hashData = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashData = $hashData . '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashData = $hashData . urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
        }

        $secureHash = hash_hmac('sha512', $hashData, $vnp_HashSecret);
        $vnpTranId = $inputData['vnp_TransactionNo']; //Mã giao dịch tại VNPAY
        $vnp_BankCode = $inputData['vnp_BankCode']; //Ngân hàng thanh toán
        $vnp_Amount = $inputData['vnp_Amount']/100; // Số tiền thanh toán VNPAY phản hồi

        $Status = 0; // Là trạng thái thanh toán của giao dịch chưa có IPN lưu tại hệ thống của merchant chiều khởi tạo URL thanh toán.
        $orderId = $inputData['vnp_TxnRef'];

        try {
            //Check Orderid    
            //Kiểm tra checksum của dữ liệu
            if ($secureHash == $vnp_SecureHash) {
                //Lấy thông tin đơn hàng lưu trong Database và kiểm tra trạng thái của đơn hàng, mã đơn hàng là: $orderId            
                //Việc kiểm tra trạng thái của đơn hàng giúp hệ thống không xử lý trùng lặp, xử lý nhiều lần một giao dịch
                //Giả sử: $order = mysqli_fetch_assoc($result);   

                $order = donhang::where('madonhang', $orderId)->first();
                if ($order != NULL) {
                    if($order->tongtien == $vnp_Amount) //Kiểm tra số tiền thanh toán của giao dịch: giả sử số tiền kiểm tra là đúng. //$order["Amount"] == $vnp_Amount
                    {
                        if ($order->trangthaithanhtoan !== NULL && $order->trangthaithanhtoan == 0) {
                            if ($inputData['vnp_ResponseCode'] == '00' && $inputData['vnp_TransactionStatus'] == '00') {
                                $trangthai = 1;
                                $Status = 1; // Trạng thái thanh toán thành công
                            } else {
                                $trangthai = 0;
                                $Status = 0; // Trạng thái thanh toán thất bại / lỗi

                                $voucher = voucher::where('id', $order->id_voucher)->first();
                                if (!empty($voucher)) {
                                    $date = date('Y-m-d', time());
                                    if ($voucher->cothequydoi == 1) {
                                        $myVoucher = vivoucher::where('id_kh', $order->id_kh)
                                                                ->where('id_voucher', $order->id_voucher)
                                                                ->where('ngayketthuc', '>=', $date)
                                                                ->where('soluong', 0)
                                                                ->first();
                                        $myVoucher->soluong = 1;
                                        $myVoucher->save();
                                    } else {
                                        $voucher->conlai = $voucher->conlai + 1;
                                        $voucher->save();
                                    }
                                }

                                $order->id_voucher = null;
                                $order->tamtinh = null;
                                $order->phivanchuyen = null;
                                $order->giagiam = null;
                                $order->tongtien = null;
                                $order->madonhang = null;
                                $order->save();

                                $chitietdonhang = chitietdonhang::where('id_dh', $order->id)
                                                                        ->orderBy('id_s', 'asc')
                                                                        ->get();

                                $idSach = [];
                                foreach ($chitietdonhang as $value) {
                                    array_push($idSach, $value->id_s);
                                }

                                $sach = sach::whereIn('id', $idSach)
                                                ->orderBy('id', 'asc')
                                                ->get();

                                for ($i = 0; $i < count($chitietdonhang); $i++) {
                                    if ($chitietdonhang[$i]->id_s == $sach[$i]->id) {
                                        $sach[$i]->soluong = $sach[$i]->soluong + $chitietdonhang[$i]->soluong;
                                        $sach[$i]->save();
                                        $chitietdonhang[$i]->gia = null;
                                        $chitietdonhang[$i]->thanhtien = null;
                                        $chitietdonhang[$i]->save();
                                    }
                                }
                                // foreach ($chitietdonhang as $value) {
                                //     $sachUpdate = sach::where('id', $value->id_s)->first();
                                //     $sachUpdate->soluong = $sachUpdate->soluong + $value->soluong;
                                //     $sachUpdate->save();
                                //     $chitietdonhangUpdate = chitietdonhang::where('id', $value->id)
                                //                                             ->first();
                                //     $chitietdonhangUpdate->gia = null;
                                //     $chitietdonhangUpdate->thanhtien = null;
                                //     $chitietdonhangUpdate->save();
                                // }
                            }
                            //Cài đặt Code cập nhật kết quả thanh toán, tình trạng đơn hàng vào DB
                            $order->trangthai = $trangthai;
                            $order->trangthaithanhtoan = $Status;
                            $order->save();
                            //Trả kết quả về cho VNPAY: Website/APP TMĐT ghi nhận yêu cầu thành công                
                            $returnData['RspCode'] = '00';
                            $returnData['Message'] = 'Confirm Success';
                            return redirect("alert/" . $trangthai);
                        } else {
                            return '2';
                            $returnData['RspCode'] = '02';
                            $returnData['Message'] = 'Order already confirmed';
                        }
                    }
                    else {
                        $returnData['RspCode'] = '04';
                        $returnData['Message'] = 'invalid amount';
                    }
                } else {
                    $returnData['RspCode'] = '01';
                    $returnData['Message'] = 'Order not found';
                }
            } else {
                $returnData['RspCode'] = '97';
                $returnData['Message'] = 'Invalid signature';
            }
        } 
        catch (Exception $e) {
            $returnData['RspCode'] = '99';
            $returnData['Message'] = 'Unknow error';
        }
        //Trả lại VNPAY theo định dạng JSON
        // return redirect("/");
    }

    // thay doi so luong don hang
    // public function changeAmount(Request $request)
    // {
    //     // $request contain (idSach, idDonhang, amount)
    //     $sach = sach::find($request->idSach);
    //     $storeHouse = $sach->soluong;
    //     $afterBuy = $storeHouse - $request->amount;
    //     $canIncrease = true;
    //     $soluong = $request->amount;
    //     if ($afterBuy < 0) {
    //         return response()->json([
    //             'success' => false
    //         ]);
    //         $canIncrease = false;
    //         $soluong = $storeHouse;
    //     }

    //     $chitietdonhang = chitietdonhang::where('id_dh', $request->idDonhang)
    //                                         ->where('id_s', $request->idSach)
    //                                         ->first();

    //     $chitietdonhang->soluong = $soluong;
    //     $chitietdonhang->save();
    //     if (!empty($sach->giakhuyenmai)) {
    //         $tamtinhsanpham = $sach->giakhuyenmai * $soluong;
    //     } else {
    //         $tamtinhsanpham = $sach->gia * $soluong;
    //     }

    //     $tamtinh = 0;
    //     $donhang = donhang::with('sach')
    //                         ->where('id', $request->idDonhang)
    //                         ->first();
    //     foreach ($donhang->sach as $valueSach) {
    //         if (!empty($valueSach->giakhuyenmai)) {
    //             $temp = $valueSach->giakhuyenmai * $valueSach->pivot->soluong;
    //         } else {
    //             $temp = $valueSach->gia * $valueSach->pivot->soluong;
    //         }
    //         $tamtinh += $temp;
    //     }
    //     // xu ly gia giam o day
    //     $giagiam = 0;
    //     ///////////////////////
    //     $tongtien = $tamtinh - $giagiam;
    //     return response()->json([
    //         'success' => true,
    //         'tamtinhsanpham' => $tamtinhsanpham,
    //         'giagiam' => $giagiam,
    //         'tamtinh' => $tamtinh,
    //         'tongtien' => $tongtien
    //     ]);
    // }

    public function changeAmount(Request $request)
    {
        // $request contain (idSach, idDonhang, amount)
        $overAmount = false;
        if ($request->amount > 10) {
            $request->amount = 10;
            $overAmount = true;
        }
        $sach = sach::find($request->idSach);
        $storeHouse = $sach->soluong;
        $afterBuy = $storeHouse - $request->amount;
        $success = true;
        $canIncrease = true;
        $soluong = $request->amount;
        if ($afterBuy < 0) {
            $canIncrease = false;
            $soluong = $storeHouse;

            if ($soluong <= 0) {
                $success = false;
            }
        }

        $chitietdonhang = chitietdonhang::where('id_dh', $request->idDonhang)
                                            ->where('id_s', $request->idSach)
                                            ->first();

        $chitietdonhang->soluong = $soluong;
        $chitietdonhang->save();

        if (!empty($sach->giakhuyenmai)) {
            $tamtinhsanpham = $sach->giakhuyenmai * $soluong;
        } else {
            $tamtinhsanpham = $sach->gia * $soluong;
        }

        $tongtien = 0;
        $donhang = donhang::with('sach')
                            ->where('id', $request->idDonhang)
                            ->first();
        foreach ($donhang->sach as $valueSach) {
            if (!empty($valueSach->giakhuyenmai)) {
                $temp = $valueSach->giakhuyenmai * $valueSach->pivot->soluong;
            } else {
                $temp = $valueSach->gia * $valueSach->pivot->soluong;
            }
            $tongtien += $temp;
        }
        return response()->json([
            'success' => $success,
            'canIncrease' => $canIncrease,
            'tamtinhsanpham' => $tamtinhsanpham,
            'soluong' => $soluong,
            'overAmount' => $overAmount,
            'tongtien' => $tongtien
        ]);
    }

    public function removeProductInCart(Request $request)
    {
        $chitietdonhang = chitietdonhang::where('id_dh', $request->idDonhang)
                            ->where('id_s', $request->idSach)
                            ->first();
        if(!$chitietdonhang->delete()) {
            return response()->json([
                'success' => false
            ]);
        }

        $tamtinh = 0;
        $donhang = donhang::with('sach')
                            ->where('id', $request->idDonhang)
                            ->first();
        foreach ($donhang->sach as $valueSach) {
            if (!empty($valueSach->giakhuyenmai)) {
                $temp = $valueSach->giakhuyenmai * $valueSach->pivot->soluong;
            } else {
                $temp = $valueSach->gia * $valueSach->pivot->soluong;
            }
            $tamtinh += $temp;
        }
        // xu ly gia giam o day
        $giagiam = 0;
        ///////////////////////
        $tongtien = $tamtinh - $giagiam;

        return response()->json([
            'success' => true,
            'giagiam' => $giagiam,
            'tamtinh' => $tamtinh,
            'tongtien' => $tongtien
        ]);
    }
}
