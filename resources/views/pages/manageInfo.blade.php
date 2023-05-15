@extends('layouts.app')
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout" style="background-color: #F5F5FA;">
    <div style="width: 50%; margin: 3% 25%; background-color: #FFFFFF; border-radius: 15px; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="heading cf" style="border-bottom: none; margin-left: 30%">
            <h1>Thông tin tài khoản</h1>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Họ đệm</label>
            <div class="col-sm-8 form-address" id="manage-contain-ho">
                <input type="text" class="form-control" id="manage-ho"  value="{{ $ho }}">
                <ul style="display:none" class="error-address" id="manage-error-ho">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Tên</label>
            <div class="col-sm-8 form-address" id="manage-contain-ten">
                <input type="text" class="form-control" id="manage-ten"  value="{{ $ten }}">
                <ul style="display:none" class="error-address" id="manage-error-ten">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Điện thoại di động  (+84)</label>
            <div class="col-sm-8 form-address" id="manage-contain-dtdd">
                <input type="text" class="form-control" id="manage-dtdd"  value="{{ $dtdd }}">
                <ul style="display:none" class="error-address" id="manage-error-dtdd">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Tỉnh/Thành phố</label>
            <div class="col-sm-8 form-address" id="manage-contain-tinhthanhpho">
                <select class="form-control" id="manage-tinhthanhpho" onchange='manageGetDistrict()'>
                    <option value="">Chọn tỉnh/thành phố</option>
                    @foreach ($tinhthanhpho as $value)
                        @if (isset($IdTinhthanhpho->matp) && $IdTinhthanhpho->matp == $value->matp)
                        <option value="{{ $value->matp }}" selected="selected">{{ $value->name }}</option>
                        @else
                        <option value="{{ $value->matp }}">{{ $value->name }}</option>
                        @endif
                    @endforeach
                </select>
                <ul style="display:none" class="error-address" id="manage-error-tinhthanhpho">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Quận/Huyện</label>
            <div class="col-sm-8 form-address" id="manage-contain-quanhuyen">
                <select class="form-control" id="manage-quanhuyen" onchange='manageGetWard()'>
                    @if (Auth::check() && $IdQuanhuyen)
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
                <ul style="display:none" class="error-address" id="manage-error-quanhuyen">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Phường/Xã</label>
            <div class="col-sm-8 form-address" id="manage-contain-xaphuongthitran">
                <select class="form-control" id="manage-xaphuongthitran">
                    @if (Auth::check() && $IdXaphuongthitran)
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
                <ul style="display:none" class="error-address" id="manage-error-xaphuongthitran">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Địa chỉ</label>
            <div class="col-sm-8 form-address" id="manage-contain-diachi">
                @if (isset($diachi))
                <textarea class="form-control" id="manage-diachi" rows="2" style="text-transform: none">{{ $diachi }}</textarea>
                @else
                <textarea class="form-control" id="manage-diachi" rows="2" style="text-transform: none"></textarea>
                @endif
                <ul style="display:none" class="error-address" id="manage-error-diachi">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-3 control-label">Loại địa chỉ</label>
            <div class="col-sm-8 form-address">
                <label class="radio-inline">
                    @if (isset($loaidiachi) && $loaidiachi == 1)
                    <input type="radio" name="manage-loaidiachi" checked id="loaidiachi" value="1"> Nhà riêng / Chung cư
                    @else
                    <input type="radio" name="manage-loaidiachi" id="loaidiachi" value="1"> Nhà riêng / Chung cư
                    @endif
                </label>
                <label class="radio-inline">
                    @if (isset($loaidiachi) && $loaidiachi == 2)
                    <input type="radio" name="manage-loaidiachi" checked id="loaidiachi" value="2"> Cơ quan / Công ty
                    @else
                    <input type="radio" name="manage-loaidiachi" id="loaidiachi" value="2"> Cơ quan / Công ty
                    @endif
                </label>
                <ul style="display:none" class="error-address" id="manage-error-loaidiachi">
                    <li class="help-block"></li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-4 col-sm-8">
                <button type="button" onclick="submitInfoToChange({{ $idKhachhang }})" id="button-change-info" class="btn btn-success" style="border: none">Cập nhật thông tin</button>
            </div>
        </div>
    </div>
</div>
@endsection