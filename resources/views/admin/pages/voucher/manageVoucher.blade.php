@extends('admin.layouts.app')

@section('main')
<div class="page-header">
    <h3 class="page-title"> Quản lý Voucher </h3>
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
                    <button type="submit" id="cancel-modify-voucher" class="btn btn-danger mb-2 col-lg-2 offset-lg-10" style="display: none">X</button>
                    <form id="form-manage-voucher">
                    <h4 class="card-title">Thông tin Voucher</h4>
                    <p class="card-description"> Form cập nhật Voucher </p>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Mã Voucher</label>
                        <input type="text" class="form-control" id="manage-voucher-mavoucher" aria-label="Amount (to the nearest dollar)" placeholder="Nhập mã voucher" style="color: white">
                        <p class="card-description" id="manage-voucher-error-mavoucher" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Tên Voucher</label>
                        <input type="text" class="form-control" id="manage-voucher-tenvoucher" aria-label="Amount (to the nearest dollar)" placeholder="Nhập tên voucher" style="color: white">
                        <p class="card-description" id="manage-voucher-error-tenvoucher" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Mức ưu đãi</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-primary text-white">$</span>
                            </div>
                            <input type="text"  class="form-control" id="manage-voucher-mucuudai" aria-label="Amount (to the nearest dollar)" style="color: white">
                            <div class="input-group-append">
                                <span class="input-group-text">.000</span>
                            </div>
                        </div>
                        <p class="card-description" id="manage-voucher-error-mucuudai" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Điều kiện</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-primary text-white">$</span>
                            </div>
                            <input type="text"  class="form-control" id="manage-voucher-dieukien" aria-label="Amount (to the nearest dollar)" style="color: white">
                            <div class="input-group-append">
                                <span class="input-group-text">.000</span>
                            </div>
                        </div>
                        <p class="card-description" id="manage-voucher-error-dieukien" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Ngày bắt đầu</label>
                        <input class="form-control" id="manage-voucher-ngaybatdau" placeholder="dd/mm/yyyy" style="width:100%; color: white"/>
                        <p class="card-description" id="manage-voucher-error-ngaybatdau" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Ngày kết thúc</label>
                        <input class="form-control" id="manage-voucher-ngayketthuc" placeholder="dd/mm/yyyy" style="width:100%; color: white"/>
                        <p class="card-description" id="manage-voucher-error-ngayketthuc" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Số lượng</label>
                        <input type="text"  class="form-control" id="manage-voucher-soluong" placeholder="Số lượng" style="width:100%; color: white">
                        <p class="card-description" id="manage-voucher-error-soluong" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Có thể quy đổi</label>
                        <select class="form-control" id="manage-voucher-cothequydoi" style="color: white">
                            <option value="0" selected style="color: white"> Không </option>
                            <option value="1" style="color: white"> Có </option>
                        </select>
                    </div>
                    <div class="form-group" id="manage-voucher-div-diemquydoi" style="display: none">
                        <label for="exampleInputUsername1">Điểm quy đổi</label>
                        <input type="text"  class="form-control" id="manage-voucher-diemquydoi" aria-label="Amount (to the nearest dollar)" style="color: white">
                        <p class="card-description" id="manage-voucher-error-diemquydoi" style="color: red; display: none"></p>
                    </div>
                    <input type="hidden" id="id_voucher" value="">
                    <button type="submit" id="submitVoucher" class="btn btn-primary mb-2">Tạo</button>
                    <button type="button" id="updateVoucher" class="btn btn-warning mb-2" style="display: none">Cập nhật</button>
                    <button type="button" id="deleteVoucher" class="btn btn-danger mb-2" style="display: none">Hủy</button>
                    <button type="button" id="reuseVoucher" class="btn btn-info mb-2" style="display: none">Tặng lại</button>
                </form>
            </div>
        </div>
    </div>
    {{-- table --}}
    <div class="table-overflow col-lg-8" style="overflow:auto; scrollbar-width: none; height: auto; max-height: 1000px">
        <div class="grid-margin stretch-card">
            <div class="card">
                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search" id="manage-voucher-form-search">
                    <input type="text" id="manage-voucher-keyword" class="form-control" placeholder="Nhập thông tin cần tìm">
                </form>
                <div class="card-body" id="manage-voucher-table">
                    <h4 class="card-title">Danh sách Voucher</h4>
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-1"> STT </th>
                                <th class="col-2"> Mã Voucher </th>
                                <th class="col-2"> Tên </th>
                                <th class="col-3"> Ngày bắt đầu </th>
                                <th class="col-3"> Ngày kết thúc </th>
                                <th class="col-1"> Trạng thái </th>
                            </tr>
                        </thead>
                        <tbody id="body-table-voucher">
                            @php
                                $i = 1;
                            @endphp
                            @foreach ($vouchers as $voucher)
                            <tr onclick='showDetailVoucher("{{ $voucher->id }}")'>
                                <td class="py-1">
                                    {{ $i++ }}
                                </td>
                                <td class="py-1">
                                    {{ $voucher->mavoucher }}
                                </td>
                                <td>
                                    {{ $voucher->tenvoucher }}
                                </td>
                                <td>
                                    {{ date_format(date_create($voucher->ngaybatdau), 'd/m/Y') }}
                                </td>
                                <td>
                                    {{ date_format(date_create($voucher->ngayketthuc), 'd/m/Y') }}
                                </td>
                                <td>
                                    @php
                                        $date_batdau = date_create($voucher->ngaybatdau);
                                        $date_ketthuc = date_create($voucher->ngayketthuc);
                                        $diff = date_diff($date_batdau,$date_ketthuc);
                                        $diffDate = $diff->format("%R%a");
                                    @endphp
                                    @if ($voucher->trangthai == 1 && $diffDate >= 0 && $voucher->conlai != 0)
                                        <label class="badge badge-primary">Hoạt động</label>
                                    @elseif ($voucher->trangthai == 0)
                                        <label class="badge badge-danger">Đã hủy</label>
                                    @elseif ($voucher->conlai == 0)
                                        <label class="badge badge-success">Hết lượt</label>
                                    @elseif ($diffDate < 0)
                                        <label class="badge badge-info">Đã hết hạn</label>
                                    @endif
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    </div>
                </div>
                <div  class="card-body" id="manage-voucher-notfound" style="display: none">
                    Không có sản phẩm
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/admin/manageVoucher.js') }}"></script>
@endsection
