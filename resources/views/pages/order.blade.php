@extends('layouts.app')
@section('menuBar')
@endsection
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout" style="background-color: #F5F5FA;">
    <div style="width: 45%; margin: 3% 2% 3% 8%; background-color: #FFFFFF; border-radius: 15px; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="heading cf" style="border-bottom: none; margin-left: 30%">
            <h1>Địa chỉ nhận hàng</h1>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Họ đệm</label>
            <div class="col-sm-8 form-address" id="contain-ho">
                @if (isset($ho))
                <input type="text" class="form-control" id="ho" value="{{ $ho }}">
                @else
                <input type="text" class="form-control" id="ho">
                @endif
                <ul style="display:none" class="error-address" id="error-ho">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Tên</label>
            <div class="col-sm-8 form-address" id="contain-ten">
                @if (isset($ten))
                <input type="text" class="form-control" id="ten" value="{{ $ten }}">
                @else
                <input type="text" class="form-control" id="ten">
                @endif
                <ul style="display:none" class="error-address" id="error-ten">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Điện thoại di động  (+84)</label>
            <div class="col-sm-8 form-address" id="contain-dtdd">
                @if (isset($dtdd))
                <input type="text" class="form-control" id="dtdd" value="{{ $dtdd }}">
                @else
                <input type="text" class="form-control" id="dtdd">
                @endif
                <ul style="display:none" class="error-address" id="error-dtdd">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Tỉnh/Thành phố</label>
            <div class="col-sm-8 form-address" id="contain-tinhthanhpho">
                <select class="form-control" id="tinhthanhpho" onchange="getDistrict()">
                    <option value="">Chọn tỉnh/thành phố</option>
                    @foreach ($tinhthanhpho as $value)
                        @if (isset($IdTinhthanhpho->matp) && $IdTinhthanhpho->matp == $value->matp)
                        <option value="{{ $value->matp }}" selected="selected">{{ $value->name }}</option>
                        @else
                        <option value="{{ $value->matp }}">{{ $value->name }}</option>
                        @endif
                    @endforeach
                </select>
                <ul style="display:none" class="error-address" id="error-tinhthanhpho">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Quận/Huyện</label>
            <div class="col-sm-8 form-address" id="contain-quanhuyen">
                <select class="form-control" id="quanhuyen" onchange="getWard()">
                    @if (Auth::check() && isset($IdQuanhuyen))
                        @foreach ($quanhuyen as $value)
                            @if ($IdQuanhuyen->maqh == $value->maqh)
                            <option value="{{ $value->maqh }}" selected="selected">{{ $value->name }}</option>
                            @else
                            <option value="{{ $value->maqh }}">{{ $value->name }}</option>
                            @endif
                        @endforeach
                    @else
                    <option disabled value="">Not Found</option>
                    @endif
                </select>
                <ul style="display:none" class="error-address" id="error-quanhuyen">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Phường/Xã</label>
            <div class="col-sm-8 form-address" id="contain-xaphuongthitran">
                <select class="form-control" id="xaphuongthitran" onchange="getShipCash()">
                    @if (Auth::check() && isset($IdXaphuongthitran))
                        @foreach ($xaphuongthitran as $value)
                            @if ($IdXaphuongthitran->xaid == $value->xaid)
                            <option value="{{ $value->xaid }}" selected="selected">{{ $value->name }}</option>
                            @else
                            <option value="{{ $value->xaid }}">{{ $value->name }}</option>
                            @endif
                        @endforeach
                    @else
                    <option disabled value="">Not Found</option>
                    @endif
                </select>
                <ul style="display:none" class="error-address" id="error-xaphuongthitran">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Địa chỉ</label>
            <div class="col-sm-8 form-address" id="contain-diachi">
                @if (isset($diachi))
                <textarea class="form-control" id="diachi" rows="2">{{ $diachi }}</textarea>
                @else
                <textarea class="form-control" id="diachi" rows="2"></textarea>
                @endif
                <ul style="display:none" class="error-address" id="error-diachi">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Loại địa chỉ</label>
            <div class="col-sm-8 form-address">
                <label class="radio-inline">
                    @if (isset($loaidiachi) && $loaidiachi == 1)
                    <input type="radio" name="loaidiachi" checked value="1"> Nhà riêng / Chung cư
                    @else
                    <input type="radio" name="loaidiachi" value="1"> Nhà riêng / Chung cư
                    @endif
                </label>
                <label class="radio-inline">
                    @if (isset($loaidiachi) && $loaidiachi == 2)
                    <input type="radio" name="loaidiachi" checked value="2"> Cơ quan / Công ty
                    @else
                    <input type="radio" name="loaidiachi" value="2"> Cơ quan / Công ty
                    @endif
                </label>
                <ul style="display:none" class="error-address" id="error-loaidiachi">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
    </div>
<!-- thanh toan -->
    <div style="width: 35%; margin: 3% 8% 3% 2%; background-color: #FFFFFF; border-radius: 15px; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="heading cf" style="border-bottom: none; margin-left: 5%">
            <h1>Đơn hàng</h1>
        </div>
        <div class="form-group">
            <div class="radio col-sm-offset-1 col-sm-11">
                <label for="" class="col-sm-8 control-label">Tạm tính</label>
                <div class="col-sm-4 form-address" id="show_tamtinh">
                    {{ number_format($donhang->tamtinh, 0, ',', '.') }} ₫
                </div>
            </div>
            <hr>
            <div class="radio col-sm-offset-1 col-sm-11">
                <label for="" class="col-sm-8 control-label">Phí giao hàng</label>
                <div class="col-sm-4 form-address" id="show_phivanchuyen">
                    {{ number_format($phivanchuyen, 0, ',', '.') }} ₫
                </div>
            </div>
            <hr>
            <div class="radio col-sm-offset-1 col-sm-11">
                <label for="" class="col-sm-8 control-label">Giảm giá</label>
                <div class="col-sm-4 form-address" id="show_giagiam">
                    {{ number_format($donhang->giagiam, 0, ',', '.') }} ₫
                </div>
            </div>
            <hr>
            <div class="radio col-sm-offset-1 col-sm-11">
                <label for="" class="col-sm-8 control-label">Tổng tiền phải thanh toán</label>
                <div class="col-sm-4 form-address" id="show_tongtien">
                    {{ number_format($donhang->tongtien + $phivanchuyen, 0, ',', '.') }} ₫
                </div>
            </div>
        </div>
        <div class="heading cf" style="border-bottom: none; margin-left: 5%">
            <h1>Phương thức thanh toán</h1>
        </div>
        <input type="hidden" name="idDonhang" id="idDonhang" value="{{ $donhang->idDonhang }}">
        <input type="hidden" name="idVoucher" id="idVoucher" value="">
        <input type="hidden" name="tamtinh" id="tamtinh" value="{{ $donhang->tamtinh }}">
        <input type="hidden" name="phigiaohang" id="phivanchuyen" value="{{ $phivanchuyen }}">
        <input type="hidden" name="giagiam" id="giagiam" value="{{ $donhang->giagiam }}">
        <input type="hidden" name="tongtien" id="tongtien" value="{{ $donhang->tongtien + $phivanchuyen}}">
        
        <div class="form-group">
            <div class="radio col-sm-offset-1 col-sm-11">
                <label>
                    <input type="radio" name="phuongthucthanhtoan" value="1">
                    Thanh toán khi nhận hàng
                </label>
            </div>
        </div>
        <div class="form-group">
            <div class="radio col-sm-offset-1 col-sm-11">
                <label>
                    <input type="radio" name="phuongthucthanhtoan" value="2">
                    Thanh toán online
                </label>
            </div>
        </div>
        <ul style="display:none" class="error-phuongthucthanhtoan" id="error-phuongthucthanhtoan">
            <li class="help-block"></li>
        </ul>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-8">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style="border: none">
                    Thêm voucher
                </button>
                <button type="button" onclick="submitAddress()" class="btn btn-success" style="border: none">Giao đến địa chỉ này</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
            <div style="overflow: scroll; max-height: 350px" class="table-overflow">
                <table class="table table-hover">
                    <tr class="success">
                        <td>Tên voucher</td>
                        <td>Mức ưu đãi</td>
                        <td>Điều kiện giảm</td>
                        <td colspan=2>Ngày kết thúc</td>
                    </tr>
                    @if (isset($myvouchers))
                    @foreach ($myvouchers as $voucher)
                    <tr class="info">
                        <td>{{ $voucher->tenvoucher }}</td>
                        <td>{{ number_format($voucher->mucuudai, 0, ',', '.') }}</td>
                        <td>{{ number_format($voucher->dieukien, 0, ',', '.') }}</td>
                        <td>{{ $voucher->ngayketthuc }}</td>
                        @if ($donhang->tongtien >= $voucher->dieukien)
                        <td><button type="button" data-dismiss="modal" class="btn btn-success" onclick='addMyVoucher("{{ $voucher->id }}", "{{ $voucher->mucuudai }}")' style="border:none">Thêm voucher</button></td>
                        @else
                        <td><button type="button" disabled class="btn" style="border:none">Thêm voucher</button></td>
                        @endif
                    </tr>
                    @endforeach
                    @endif
                    @foreach ($vouchers as $voucher)
                    <tr>
                        <td>{{ $voucher->tenvoucher }}</td>
                        <td>{{ number_format($voucher->mucuudai, 0, ',', '.') }}</td>
                        <td>{{ number_format($voucher->dieukien, 0, ',', '.') }}</td>
                        <td>{{ $voucher->ngayketthuc }}</td>
                        @if ($donhang->tongtien >= $voucher->dieukien)
                        <td><button type="button" data-dismiss="modal" class="btn btn-success" onclick='addVoucher("{{ $voucher->id }}", "{{ $voucher->mucuudai }}")' style="border:none">Thêm voucher</button></td>
                        @else
                        <td><button type="button" disabled class="btn" style="border:none">Thêm voucher</button></td>
                        @endif
                    </tr>
                    @endforeach
                </table>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" id="removeVoucher" disabled class="btn btn-danger" data-dismiss="modal" style="border:none">Xóa voucher</button>
        </div>
    </div>
    </div>
</div>
<script src="{{ asset('js/order.js') }}"></script>
@endsection