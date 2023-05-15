@extends('admin.layouts.app')

@section('main')
<div class="page-header">
    <h3 class="page-title"> Quản lý đơn hàng</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active" aria-current="page">Form elements</li>
      </ol>
    </nav>
</div>
<div class="row">
    {{-- form --}}
    <div class="col-lg-5 grid-margin stretch-card" id="manage-list-order-form-detail" style="height: auto; display: none">
        <div class="card">
            <div class="card-body">
                <button type="submit" id="manage-list-order-cancel-form-detail" class="btn btn-danger mb-2 col-lg-2 offset-lg-10">X</button>
                <h4 class="card-title">Chi tiết đơn hàng</h4>
                <div class="table-responsive">
                    <table class="table table-contextual" id="manage-list-order-table-list-order">
                        <button type="button" id="manage-list-order-btn-ready" class="btn btn-primary mb-2" style="width: 100%">Xác nhận đơn</button>
                        <button type="button" id="manage-list-order-btn-deny" class="btn btn-danger mb-2" style="width: 100%">Từ chối</button>

                        <button type="button" id="manage-list-order-btn-delivery" class="btn btn-primary mb-2" style="width: 100%">Giao hàng</button>

                        <button type="button" id="manage-list-order-btn-confirm-delivered" class="btn btn-primary mb-2" style="width: 100%">Đã giao</button>

                        <button type="button" id="manage-list-order-btn-fail" class="btn btn-danger mb-2" style="width: 100%">Giao hàng thất bại</button>
                        <button type="button" id="manage-list-order-btn-reaccept" class="btn btn-warning mb-2" style="width: 100%">Chấp nhận lại đơn</button>
                    </table>
                </div>
                <input type="hidden" id="id_s" value="">
            </div>
        </div>
    </div>
    {{-- table --}}
    <div class="col-lg-12 table-overflow" id="manage-list-order-table-list" style="overflow:scroll; height: auto; max-height: 1000px">
        <div class="grid-margin stretch-card">
            <div class="card">
                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search" id="manage-list-order-form-search">
                    <input type="text" id="manage-list-order-input-search" class="form-control" placeholder="Nhập thông tin cần tìm">
                </form>
                <div class="card-body" id="manage-list-order-list">
                    <h4 class="card-title">Danh sách đơn hàng</h4>
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-1"> STT </th>
                                <th class="col-1"> Mã đơn hàng </th>
                                <th class="col-2"> Tên khách hàng </th>
                                <th class="col-1"> Tổng tiền </th>
                                <th class="col-2"> Ngày tạo </th>
                                <th class="col-3 text-center"> Quá trình </th>
                                <th class="col-2"> Trạng thái </th>
                            </tr>
                        </thead>
                        <tbody id="body-table-product">
                            @php
                                $i = 1;
                            @endphp
                            @foreach ($donhangs as $donhang)
                            <tr onclick='showDetailOrder("{{ $donhang->id }}")'>
                                <td class="py-1">
                                    {{ $i++ }}
                                </td>
                                <td class="py-1">
                                    {{ $donhang->madonhang }}
                                </td>
                                <td class="py-1">
                                    {{ $donhang->khachhang->ho }} {{ $donhang->khachhang->ten }}
                                </td>
                                <td>
                                    {{ number_format($donhang->tongtien, 0, '.', ',') }}
                                </td>
                                <td>
                                    {{ date_format(date_create($donhang->thoigiantao), 'd/m/Y H:i:s') }}
                                </td>
                                <td>
                                    <div class="progress">
                                        @if($donhang->trangthai == 1)
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">Đang chờ</div>
                                        @elseif($donhang->trangthai == 2)
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">Đang chuẩn bị hàng</div>
                                        @elseif($donhang->trangthai == 3)
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Đang giao</div>
                                        @elseif($donhang->trangthai == 4)
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Đã giao</div>
                                        @elseif($donhang->trangthai == 5)
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Hoàn thành</div>
                                        @elseif($donhang->trangthai == 6)
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Khách hủy đơn</div>
                                        @elseif($donhang->trangthai == 8)
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Giao hàng thất bại</div>
                                        @else
                                            <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Từ chối đơn</div>
                                        @endif
                                    </div>
                                </td>
                                <td>
                                    @if($donhang->trangthai == 1)
                                       <label class="badge badge-warning">Đang chờ</label>
                                    @elseif($donhang->trangthai == 2)
                                       <label class="badge badge-primary">Đang chuẩn bị</label>
                                    @elseif($donhang->trangthai == 3)
                                       <label class="badge badge-primary">Đang giao</label>
                                    @elseif($donhang->trangthai == 4)
                                       <label class="badge badge-primary">Đã giao</label>
                                    @elseif($donhang->trangthai == 5)
                                       <label class="badge badge-success">Hoàn thành</label>
                                    @elseif($donhang->trangthai == 6)
                                       <label class="badge badge-danger">Khách hủy đơn</label>
                                    @elseif($donhang->trangthai == 8)
                                       <label class="badge badge-danger">Giao hàng thất bại</label>
                                    @else
                                       <label class="badge badge-info">Từ chối</label>
                                    @endif
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                        <input type="hidden" id="id-detail-order" value="">
                    </table>
                    </div>
                </div>
                <div  class="card-body" id="manage-list-order-notfound" style="display: none">
                    Không tìm thấy đơn hàng
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/admin/manageListOrder.js') }}"></script>
@endsection
