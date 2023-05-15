@extends('layouts.app')
<!-- Main Start -->
@section('main')
<!-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
<!-- <script src='//production-assets.codepen.io/assets/editor/live/console_runner-079c09a0e3b9ff743e39ee2d5637b9216b3545af0de366d4b9aad9dc87e26bfd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/events_runner-73716630c22bbc8cff4bd0f07b135f00a0bdc5d14629260c3ec49e5606f98fdd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/css_live_reload_init-2c0dc5167d60a5af3ee189d570b1835129687ea2a61bee3513dee3a50c115a77.js'></script><meta charset='UTF-8'><meta name="robots" content="noindex"><link rel="shortcut icon" type="image/x-icon" href="//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico" /><link rel="mask-icon" type="" href="//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg" color="#111" /><link rel="canonical" href="https://codepen.io/alex_rodrigues/pen/ABGdg?depth=everything&order=popularity&page=32&q=product&show_forks=false" />
<script src="https://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script> -->
<!------ Include the above in your HEAD tag ---------->
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
<div class="wrap cf">
    <div>
        <div class="heading cf" style="border-bottom: none">
            <a href="/" class="continue">Tiếp tục mua sắm</a>
        </div>
        <div class="cart">
            <ul class="cartWrap">
                @php
                    $tamtinh = 0;
                    $tongtien = 0;
                @endphp
                @for ($i = 0; $i < count($saches); $i++)
                    @if ($saches[$i]->pivot->soluong == 0)
                    <li class="items even" id="rowSach{{ $saches[$i]->id }}" style="border: 1px solid #F7F7F9; border-radius: 20px; background-color: #d9534f">
                    @else
                    <li class="items even" id="rowSach{{ $saches[$i]->id }}" style="border: 1px solid #F7F7F9; border-radius: 20px; background-color: #e7e9eb">
                    @endif
                        <div class="infoWrap">
                            <div class="cartSection">
                                <img src="{{ asset('images/books/' . $saches[$i]->hinhanh) }}" alt="" class="itemImg" style="width:150px; height: 200px"/>
                                <p class="itemNumber"></p>
                                <h3>{{ $saches[$i]->tensach }}</h3>
                                @php
                                    if (isset($saches[$i]->giakhuyenmai))
                                        $giaban = $saches[$i]->giakhuyenmai;
                                    else
                                        $giaban = $saches[$i]->gia;
                                    
                                    $tamtinhsanpham = $saches[$i]->pivot->soluong * $giaban;
                                    $tamtinh += $tamtinhsanpham;
                                @endphp
                                </p>
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <input type="hidden" id="sach{{ $saches[$i]->id }}-in-cart" value="{{ $saches[$i]->id }}">

                                        <input type="button" class="btn btn-danger" data-type="minus" value="-"  style="border: none" />
                                        <input type="tel" id="amount{{ $saches[$i]->id }}" onchange="changeAmount('{{ $saches[$i]->id }}')" value="{{ $saches[$i]->pivot->soluong }}" pattern="[a-z]{1,15}" style="width: 80px; height: 33px" title="Username should only contain lowercase letters. e.g. john">>
                                        <input type="button" class="btn btn-success" data-type="plus" value="+"  style="border: none" />
                                    </span>
                                </div>
                            </div>  
                        <div class="prodTotal cartSection" id="tamtinhsanpham{{ $saches[$i]->id }}">
                            <p>{{ number_format($tamtinhsanpham, 0, ',', '.') }} ₫</p>
                        </div>
                            <div class="cartSection removeWrap">
                                <button class="remove" onclick="removeSachInCart('{{ $saches[$i]->id }}')" type="button" style="border-radius: 15px; width: 100%">x</button>
                            </div>
                        </div>
                    </li>
                    <br>
                @endfor
            </ul>
        </div>

        <br><br><br><hr>
        {{-- <div class="promoCode">
            <label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
            <a href="#" class="btn"></a>
        </div> --}}
        
        <div class="subtotal cf">
            <ul>
                <form action="/address-order" method="POST">
                    @csrf
                    @php
                    $tongtien = $tamtinh - $donhang->giagiam;
                    @endphp
                    <input type="hidden" name="idDonhang" id="idDonhang" value="{{ $donhang->id }}">
                    <input type="hidden" name="tamtinh" id="tamtinh" value="{{ $tamtinh }}">
                    <input type="hidden" name="giagiam" id="giagiam" value="{{ $donhang->giagiam }}">
                    <input type="hidden" name="tongtien" id="tongtien" value="{{ $tongtien }}">

                     <li class="totalRow" style="list-style-type: none"><span class="label">Tạm tính</span><span class="value" id="show_tamtinh">{{ number_format($tamtinh, 0, ',', '.') }} ₫</span></li>
                    <li class="totalRow" style="list-style-type: none"><span class="label">Giảm giá</span><span class="value"id="show_giagiam">{{ number_format($donhang->giagiam, 0, ',', '.') }} ₫</span></li> 
                    <hr>
                    <li class="totalRow final" style="list-style-type: none"><span class="label">Tổng tiền</span><span class="value" id="show_tongtien">{{ number_format($tongtien, 0, ',', '.') }} ₫</span></li>
                    <li class="totalRow" style="list-style-type: none">
                        <button type="submit" class="btn continue btn-success" style="width: 100%; border: none">Đặt hàng</button>
                    </li>
                </form>
            </ul>
        </div>
    </div>
</div>
<script src="{{ asset('js/cart.js') }}"></script>
</div>
@endsection