@extends('layouts.app')
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
<div style="margin: 2%">
    <div style="width: 100%">
        @if ($donhang->trangthai == 1)
        <div class="heading cf" style="border-bottom: none" id="cancel-button">
            <button type="button" onclick='cancelOrder("{{ $donhang->id }}")' style="width: 100%; height: 5rem; border-radius: 15px; font-size: 1.5rem" class="btn-danger btn">Hủy đơn hàng</button>
        </div>
        @endif
        <div class="cart">
            <ul class="cartWrap">
                <li class="items even" style="font-size: 1.6rem; border: 1px solid #F7F7F9; border-radius: 20px; background-color: #F7F7F9">
                    <div class="infoWrap"> 
                        <div class="cartSection" style="width: 30%; text-align: center">
                            <h3>Sản phẩm</h3>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%; border-left: 5px solid white">
                            <p>Số lượng</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%; border-left: 5px solid white">
                            <p>Giá</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; border-left: 5px solid white">
                            <p>Tổng cộng</p>
                        </div>
                    </div>
                </li>
                <br>
                @foreach ($donhang->sach as $sach)
                <li class="items even" style="border: 1px solid #F7F7F9; border-radius: 20px; background-color: #F7F7F9">
                    <div class="infoWrap"> 
                        <div class="cartSection" style="width: 10%">
                            <img src="{{ asset('images/books/' . $sach->hinhanh) }}" alt="" class="itemImg" />
                        </div>
                        <div class="cartSection" style="width: 20%; text-align: justify">
                            <h3>{{ $sach->tensach }}</h3>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%; border-left: 5px solid white">
                            <p>{{ $sach->pivot->soluong }}</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%; border-left: 5px solid white">
                            <p>{{ number_format($sach->pivot->gia, 0, ',', '.') }} ₫</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; border-left: 5px solid white">
                            <p>{{ number_format($sach->pivot->thanhtien, 0, ',', '.') }} ₫</p>
                        </div>
                    </div>
                </li>
                <br>
                @endforeach
                <hr>
                <li class="items even" style="border: 1px solid #F7F7F9; border-radius: 20px; background-color: #F7F7F9">
                    <div class="infoWrap">
                        <div class="cartSection" style="width: 10%">
                        </div>
                        <div class="cartSection" style="width: 20%; text-align: justify">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%">
                            <p>Tạm tính:</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; margin-right: 8%">
                            <p>{{ number_format($donhang->tamtinh, 0, ',', '.') }} ₫</p>
                        </div>
                    </div>
                    <div class="infoWrap">
                        <div class="cartSection" style="width: 10%">
                        </div>
                        <div class="cartSection" style="width: 20%; text-align: justify">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%">
                            <p>Phí vận chuyển:</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; margin-right: 8%">
                            <p>{{ number_format($donhang->phivanchuyen, 0, ',', '.') }} ₫</p>
                        </div>
                    </div>
                    <div class="infoWrap">
                        <div class="cartSection" style="width: 10%">
                        </div>
                        <div class="cartSection" style="width: 20%; text-align: justify">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%">
                            <p>Giảm giá:</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; margin-right: 8%">
                            <p>{{ number_format($donhang->giagiam, 0, ',', '.') }} ₫</p>
                        </div>
                    </div>
                    <div class="infoWrap">
                        <div class="cartSection" style="width: 10%">
                        </div>
                        <div class="cartSection" style="width: 20%; text-align: justify">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 15%">
                        </div>
                        <div class="prodTotal cartSection"  style="width: 30%">
                            <p>Tổng tiền phải thanh toán:</p>
                        </div>
                        <div class="prodTotal cartSection"  style="width: 25%; margin-right: 8%">
                            <p>{{ number_format($donhang->tongtien, 0, ',', '.') }} ₫</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
@endsection