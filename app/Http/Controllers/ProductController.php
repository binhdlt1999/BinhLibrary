<?php

namespace App\Http\Controllers;

use App\Models\chitietdonhang;
use App\Models\donhang;
use App\Models\khachhang;
use App\Models\sach;
use Illuminate\Http\Request;
use App\Models\comment;
use App\Models\theloai;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public $productPerPage = 16;
    
    public function allProduct() {
        $allProducts = sach::with('theloai')
                        ->orderby('created_at', 'desc')
                        ->paginate($this->productPerPage);
        $totalOfProducts = DB::table('saches')->count();
        $totalPage = ceil($totalOfProducts/$this->productPerPage);
        $theloais = theloai::all();

        return view('pages.allProduct')->with(['allProducts' => $allProducts,
                                                'totalPage' => $totalPage,
                                                'theloais' => $theloais,
                                                'search' => null,
                                            ]);
    }

    public function detailProduct($id) {
        $comments = comment::where('id_s', $id)
                            ->orderBy('created_at', 'desc')
                            ->limit(10)
                            ->get();

        $sach = sach::where('id', $id)
                    ->with('theloai')
                    ->first();
        $theloais = theloai::all();

        return view('pages.detailProduct')->with([
            'sach' => $sach,
            'theloais' => $theloais,
            'comments' => $comments
        ]);
    }

    /**
     * Search
     */

    // tim kiem don gian chi 1 loai 1 lan
    // vd: chi author hoac la genre
    public function search(Request $request) {
        if (isset($request->keyword)) {
            return $this->searchKeyword($request->keyword);
        } elseif(isset($request->genre)) {
            return $this->searchGenre($request->genre);
        } else {
            return $this->allProduct();
        }
    }

    public function searchKeyword($keyword)
    {
        $arrKeyword = explode(" ", $keyword);
        $keyword = '%' .implode('%', $arrKeyword). '%';
        $allProducts = sach::with('theloai')
                        ->where('keyword', 'like', $keyword)
                        ->orderby('created_at', 'desc')
                        ->paginate($this->productPerPage);
        if ($allProducts->isEmpty()) {
            return $this->allProduct();
        }
        $totalOfProducts = sach::where('keyword', 'like', $keyword)
                        ->count();
        $totalPage = ceil($totalOfProducts/$this->productPerPage);
        $theloais = theloai::all();

        return view('pages.allProduct')->with(['allProducts' => $allProducts,
                                                'totalPage' => $totalPage,
                                                'search' => 'keyword=' . $keyword,
                                                'theloais' => $theloais
                                            ]);
    }

    public function searchGenre($idGenre) {
        $allProducts = sach::with(['theloai' => fn($query) => $query->where('theloais.id', $idGenre)])
                        ->whereHas('theloai', fn ($query) => 
                            $query->where('theloais.id', $idGenre)
                        )
                        ->orderby('created_at', 'desc')
                        ->paginate($this->productPerPage);
        $totalOfProducts = sach::whereHas('theloai', fn ($query) => 
                                    $query->where('theloais.id', $idGenre)
                                )
                            ->count();
        $totalPage = ceil($totalOfProducts/$this->productPerPage);
        $theloais = theloai::all();

        return view('pages.allProduct')->with(['allProducts' => $allProducts,
                                                'totalPage' => $totalPage,
                                                'search' => '&genre=' . $idGenre,
                                                'theloais' => $theloais
                                            ]);
    }


    /**
     * Add to cart
     */
    public function getIdLastKhachHang() {
        $lastKhachHang = khachhang::select('id')->orderBy('id', 'desc')->first();

        if (!$lastKhachHang)
            $idKhachHang = 1;
        else
            $idKhachHang = ++$lastKhachHang->id;

        return $idKhachHang;
    }

    // them san pham vao gio hang
    public function addProductToCart(Request $request) {
        if (!Auth::check()) {
        //     $cookieCart = $request->cookie('cart');

        //     if ($cookieCart) {
        //         $donhang = donhang::whereHas('khachhang', fn ($query) => 
        //             $query->where('giohang', 'like', $cookieCart)
        //         )
        //         ->where('trangthai', 0)
        //         ->first();

        //         if ($donhang) {
        //             $khachhang = khachhang::where('giohang', 'like', $cookieCart)->select('id')->first();
        //             $id_kh = $khachhang->id;
        //             return $this->updateCart($request->idProduct, $id_kh);
        //         }
        //         else {
        //             $idKhachHang = $this->getIdLastKhachHang();
        //             return $this->newCartForNoAccount($request->idProduct, $idKhachHang);
        //         }
        //     }
        //     else {
        //         $idKhachHang = $this->getIdLastKhachHang();
        //         return $this->newCartForNoAccount($request->idProduct, $idKhachHang);
        //     }
        }
        else {
            $khachhang = khachhang::where('id_tk', Auth::id())->select('id')->first();
            $donhang = donhang::whereHas('khachhang', fn ($query) => 
                $query->where('id_kh', $khachhang->id)
            )
            ->where('trangthai', 0)
            ->first();

            if ($donhang) {
                return $this->updateCart($request->idProduct, $khachhang->id);
            }
            else {
                return $this->newCartForNoAccount($request->idProduct, $khachhang->id);
            }
            
        }
        
    }

    public function newCartForNoAccount($idProduct, $idKhachHang) {
        $khachhang = new khachhang();
        $donhang = new donhang();
        
        $sach = sach::where('id', $idProduct)->first();
        if ($sach->soluong <= 0) {
            return response()->json([
                'success' => false,
                'action' => 'failToCreateCart'
            ]);
        }

        if(!Auth::check()) {
            $value = 'customer'.$idKhachHang;
            $cookieVal = cookie('cart', $value, 2592000);
    
            $khachhang->loaikhachhang = 0;
            $khachhang->giohang = $value;
            $khachhang->save();

            $getIdKhachhang = khachhang::where('giohang', 'like', $value)->first();
            $idKhachHang = $getIdKhachhang->id;
        }
        
        $dataDonhang = [
            'id_kh' => $idKhachHang,
            'trangthai' => 0,
            'trangthaithanhtoan' => 0,
            'thoigiantao' => date('Y-m-d H:i:s', time())
        ];
        
        donhang::create($dataDonhang);
        //or
        // $donhang->fill($dataDonhang);
        // $donhang->save();
        //----------------------
        
        $idDonhang = donhang::select('id')->orderBy('id', 'desc')->first();

        $this->addChitietDonHang($idDonhang->id, $idProduct, 1);
        
        $divCartMini = $this->addDivCartMini($sach);

        if (!Auth::check()) {
            return response()
            ->json([
                'success' => true,
                'action' => 'add',
                'divCartMini' => $divCartMini
            ], 200)
            ->cookie($cookieVal);
        }
        else {
            return response()
            ->json([
                'success' => true,
                'action' => 'add',
                'divCartMini' => $divCartMini
            ], 200);
        }
        
    }

    public function updateCart($idProduct, $id_kh) {
        $donhang = donhang::where('id_kh', $id_kh)
                            ->where('trangthai', 0)
                            ->select('id')
                            ->first();

        $id_dh = $donhang->id;
        $checkSachInCart = chitietdonhang::where('id_dh', $id_dh)
                            ->where('id_s', $idProduct)
                            ->first();

        $sach = sach::where('id', $idProduct)->first();
        $soluongSachStore = $sach->soluong;        
                
        if ($checkSachInCart) {
            $soluongSachCart = $checkSachInCart->soluong;
            if ($soluongSachStore == 0) {
                $checkSachInCart->delete();

                return response()->json([
                    'success' => false,
                    'action' => 'removeFromCart',
                    'soluong' => $soluongSachStore
                ]);
            } elseif ($soluongSachStore <= $soluongSachCart) {
                $checkSachInCart->soluong = $soluongSachStore;
                $checkSachInCart->save();

                return response()->json([
                    'success' => false,
                    'action' => 'decreaseFromCart',
                    'soluong' => $soluongSachStore
                ]);
            } else {
                $checkSachInCart->soluong += 1;
                $checkSachInCart->save();
    
                return response()
                ->json([
                    'success' => true,
                    'action' => 'increase',
                ], 200);
            }
        } else {
            if ($sach->soluong <= 0) {
                return response()->json([
                    'success' => false,
                    'action' => 'failToAddToCart'
                ]);
            } else {
                $this->addChitietDonHang($id_dh, $idProduct, 1);

                $divCartMini = $this->addDivCartMini($sach);
                return response()
                        ->json([
                            'success' => true,
                            'action' => 'add',
                            'divCartMini' => $divCartMini
                        ], 200);
            }
        }
    }

    public function addChitietDonHang($id_dh, $idProduct, $soluong) {
        $donhang = donhang::find($id_dh);
        $donhang->sach()->attach($idProduct, ['soluong' => $soluong]);
    }

    public function addDivCartMini($sach) {
        $div = '<div class="tg-minicarproduct">
                        <figure>
                            <img src="'.asset('images/books/'.$sach->hinhanh).'" alt="image description" style="height: 100px; width: 80px">
                        </figure>
                        <div class="tg-minicarproductdata">
                            <h5><a href="/detail-product/'.$sach->id.'">'.$sach->tensach.'</a></h5>';
        if (!empty($sach->giakhuyenmai)) {
            $div .=             '<h6><a href="/detail-product/'.$sach->id.'">'.number_format($sach->giakhuyenmai, 0, ',', '.').' ₫</a></h6>';
        } else {
            $div .=             '<h6><a href="/detail-product/'.$sach->id.'">'.number_format($sach->gia, 0, ',', '.').' ₫</a></h6>';
        }

        $div .='         </div>
                </div>';
        return $div;
    }
    
    // mini cart
    public function getTotalProductInCart(Request $request) {
        $cookie = $request->cookie('cart');

        if ($cookie && !Auth::check()) {
            return $this->getProductWithCookie($cookie);
        }
        else if (Auth::check()) {
            return $this->getProductWithIdUser();
        }
        else {
            return response()->json(['result' => false], 200);
        }
    }

    public function getProductWithCookie($cookieGiohang) {
        $getIdDonhang = donhang::whereHas('khachhang', fn ($query) => 
                                    $query
                                        ->where('giohang', 'like', $cookieGiohang)
                                        ->where('trangthai', '0')
                                )
                                ->select('id')
                                ->first();
        if ($getIdDonhang) {
            $donhang = donhang::with('sach')->find($getIdDonhang->id);

            $divCartMini = $this->getDivCartMini($donhang->sach);

            $soluong = 0;
            foreach($donhang->sach as $sach) {
                $soluong += $sach->pivot->soluong;
            }
            
            return response()->json([
                'result' => true,
                'soluong' => $soluong,
                'divCartMini' => $divCartMini
            ], 200);
        }
        else {
            return response()->json(['result' => false], 200);
        }
    }

    public function getProductWithIdUser() {
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

            $divCartMini = $this->getDivCartMini($donhang->sach);

            $soluong = 0;
            foreach($donhang->sach as $sach) {
                $soluong += $sach->pivot->soluong;
            }
            
            return response()->json([
                'result' => true,
                'soluong' => $soluong,
                'divCartMini' => $divCartMini
            ], 200);
        }
        else {
            return response()->json(['result' => false], 200);
        }
    }

    public function getDivCartMini($totalSach) {
        $div = '';

        foreach($totalSach as $sach) {
            if (!empty($sach->giakhuyenmai)) {
                if ($sach->giakhuyenmai < $sach->gia) {
                    $giaban = $sach->giakhuyenmai;
                } else {
                    $giaban = $sach->gia;
                }
            } else {
                $giaban = $sach->gia;
            }
            $div .= '<div class="tg-minicarproduct">
                        <figure>
                            <img src="'.asset('images/books/'.$sach->hinhanh).'" alt="image description" style="height: 100px; width: 80px">
                        </figure>
                        <div class="tg-minicarproductdata">
                            <h5><a href="/detail-product/'.$sach->id.'">'.$sach->tensach.'</a></h5>
                            <h6><a href="/detail-product/'.$sach->id.'">'.number_format($giaban, 0, ',', '.' ).' ₫</a></h6>
                        </div>
                    </div>';
        }
        return $div;
    }
}
