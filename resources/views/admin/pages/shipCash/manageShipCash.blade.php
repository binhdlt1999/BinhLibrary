@extends('admin.layouts.app')

@section('main')
<div class="page-header">
    <h3 class="page-title"> Quản lý sản phẩm </h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active" aria-current="page">Form elements</li>
      </ol>
    </nav>
</div>
<div class="row">
    {{-- form --}}
    <div class="col-lg-4 grid-margin stretch-card" style="height: auto">
        <div class="card">
            <div class="card-body">
                    <button type="submit" id="cancel-modify-ship-cash" class="btn btn-danger mb-2 col-lg-2 offset-lg-10" style="display: none">X</button>
                    <form id="form-manage-ship-cash">
                    <h4 class="card-title">Thông tin phí vận chuyển</h4>
                    <p class="card-description"> Form cập nhật phí vận chuyển </p>
                    <div class="form-group">
                        <label>Tỉnh/Thành phố</label>
                        <select class="js-example-basic-single form-control" onchange="shipCashGetDistrict()" id="manage-ship-cash-tp" style="width:100%; color: white">
                            <option disabled selected value="">Chọn thành phố</option>
                            @foreach ($tinhthanhpho as $value)
                            <option value="{{ $value->matp }}">{{ $value->name }}</option>
                            @endforeach
                        </select>
                        <p class="card-description" id="manage-ship-cash-error-tp" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label>Quận/Huyện</label>
                        <select class="js-example-basic-single form-control" onchange="shipCashGetWard()" id="manage-ship-cash-qh" style="width:100%; color: white">
                            <option disabled selected value="">Not Found</option>
                        </select>
                        <p class="card-description" id="manage-ship-cash-error-qh" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label>Phường/Xã</label>
                        <select class="js-example-basic-single form-control" id="manage-ship-cash-px" style="width:100%; color: white">
                            <option disabled selected value="">Not Found</option>
                        </select>
                        <p class="card-description" id="manage-ship-cash-error-px" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Phí</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-primary text-white">$</span>
                            </div>
                            <input type="text" class="form-control" id="manage-ship-cash-phi" aria-label="Amount (to the nearest dollar)" style="color: white">
                            <div class="input-group-append">
                                <span class="input-group-text">.000</span>
                            </div>
                        </div>
                        <p class="card-description" id="manage-ship-cash-error-phi" style="color: red; display: none"></p>
                    </div>
                    <br>
                    <input type="hidden" id="id_px" value="">
                    <button type="submit" id="submitShipCash" class="btn btn-primary mb-2">Tạo</button>
                    <button type="button" id="updateShipCash" class="btn btn-warning mb-2" style="display: none">Cập nhật</button>
                    <button type="button" id="deleteShipCash" class="btn btn-danger mb-2" style="display: none">Ngừng hoạt động</button>
                    <button type="button" id="reuseShipCash" class="btn btn-info mb-2" style="display: none">Hoạt động</button>
                </form>
            </div>
        </div>
    </div>
    {{-- table --}}
    <div class="col-lg-8 table-overflow" style="overflow:scroll; height: auto; max-height: 1000px">
        <div class="grid-margin stretch-card">
            <div class="card">
                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search" id="manage-ship-cash-form-search">
                    <input type="text" id="manage-ship-cash-keyword" class="form-control" placeholder="Nhập thông tin cần tìm">
                </form>
                <div class="card-body" id="manage-ship-cash-list">
                    <h4 class="card-title">Danh sách sản phẩm</h4>
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-1"> STT </th>
                                <th class="col-3"> Tỉnh/Thành phố </th>
                                <th class="col-3"> Quận/Huyện </th>
                                <th class="col-2"> Phường/Xã </th>
                                <th class="col-2"> Phí </th>
                                <th class="col-1"> Trạng thái </th>
                            </tr>
                        </thead>
                        <tbody id="body-table-ship-cash">
                            @php
                                $i = 1;
                            @endphp
                            @foreach ($phivanchuyens as $phivanchuyen)
                            <tr onclick='showDetailShipCash("{{ $phivanchuyen->xaid }}")'>
                                <td>{{ $i++ }}</td>
                                <td>{{ $phivanchuyen->thanhpho }}</td>
                                <td>{{ $phivanchuyen->quanhuyen }}</td>
                                <td>{{ $phivanchuyen->phuongxa }}</td>
                                <td>{{ number_format($phivanchuyen->phi, 0, ',', '.') }}</td>
                                <td>
                                @if ($phivanchuyen->trangthaihoatdong == 1)
                                    <label class="badge badge-primary">Hoạt động</label>
                                @else
                                    <label class="badge badge-danger">Ngừng hoạt động</label>
                                @endif
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    </div>
                </div>
                <div  class="card-body" id="manage-ship-cash-notfound" style="display: none">
                    Không tìm thấy địa chỉ
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/admin/manageShipCash.js') }}"></script>
@endsection
