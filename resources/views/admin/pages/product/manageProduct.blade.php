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
                    <button type="submit" id="cancel-modify" class="btn btn-danger mb-2 col-lg-2 offset-lg-10" style="display: none">X</button>
                    <form id="form-manage-product">
                    <h4 class="card-title">Thông tin sản phẩm</h4>
                    <p class="card-description"> Form cập nhật sản phẩm </p>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Tên sách</label>
                        <input type="text" class="form-control" id="manage-product-tensach" aria-label="Amount (to the nearest dollar)" placeholder="Nhập tên sách" style="color: white">
                        <p class="card-description" id="manage-product-error-tensach" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label>Thể loại</label>
                        <select class="js-example-basic-multiple form-control" multiple="multiple" id="manage-product-theloai" style="width:100%; color: white">
                            @foreach ($theloais as $theloai)
                            <option value="{{ $theloai->id }}">{{ $theloai->tenloai }}</option>
                            @endforeach
                        </select>
                        <p class="card-description" id="manage-product-error-theloai" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Giá</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-primary text-white">$</span>
                            </div>
                            <input type="text"  class="form-control" id="manage-product-gia" aria-label="Amount (to the nearest dollar)" style="color: white">
                            <div class="input-group-append">
                                <span class="input-group-text">.000</span>
                            </div>
                        </div>
                        <p class="card-description" id="manage-product-error-gia" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Giá khuyến mãi</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-primary text-white">$</span>
                            </div>
                            <input type="text" class="form-control" id="manage-product-giakhuyenmai" aria-label="Amount (to the nearest dollar)" style="color: white">
                            <div class="input-group-append">
                                <span class="input-group-text">.000</span>
                            </div>
                        </div>
                        <p class="card-description" id="manage-product-error-giakhuyenmai" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Mô tả</label>
                            <textarea class="form-control" id="manage-product-mota" rows="4" style="color: white" placeholder="Viết gì đó..."></textarea>
                            <p class="card-description" id="manage-product-error-mota" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Hình ảnh</label>
                        <div class="input-group col-xs-12">
                            <input type="file" name="manage-product-file-hinhanh" id="manage-product-file-hinhanh" class="form-control" accept=".jpg, .png" placeholder="Upload hình ảnh">
                            {{-- <span class="input-group-append">
                                <button class="file-upload-browse btn btn-primary" type="button" accept=".jpg, .png">Upload</button>
                            </span> --}}
                        </div>
                        <p class="card-description" id="manage-product-error-file-hinhanh" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Số lượng</label>
                        <input type="text"  class="form-control" id="manage-product-soluong" placeholder="Số lượng" style="width:100%; color: white">
                        <p class="card-description" id="manage-product-error-soluong" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group">
                        <label>Tác giả</label>
                        <input type="text"  class="form-control" id="manage-product-tacgia" placeholder="Tác giả" style="width:100%; color: white">
                        <p class="card-description" id="manage-product-error-tacgia" style="color: red; display: none"></p>
                    </div>
                    <div class="form-group" id="form-submit">
                        <div class="form-check mx-sm-2">
                            <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="manage-product-noibat" id="manage-product-noibat"> Sản phẩm nổi bật </label>
                        </div>
                    </div>
                    <input type="hidden" id="id_s" value="">
                    <button type="submit" id="submitSach" class="btn btn-primary mb-2">Tạo</button>
                    <button type="button" id="updateSach" class="btn btn-warning mb-2" style="display: none">Cập nhật</button>
                    <button type="button" id="deleteSach" class="btn btn-danger mb-2" style="display: none">Ngừng kinh doanh</button>
                    <button type="button" id="resaleSach" class="btn btn-info mb-2" style="display: none">Kinh doanh</button>
                </form>
            </div>
        </div>
    </div>
    {{-- table --}}
    <div class="col-lg-8 table-overflow" style="overflow:scroll; height: auto; max-height: 1000px">
        <div class="grid-margin stretch-card">
            <div class="card">
                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search" id="manage-product-form-search">
                    <input type="text" id="manage-product-keyword-search-product" class="form-control" placeholder="Nhập thông tin cần tìm">
                </form>
                <div class="card-body" id="manage-product-list">
                    <h4 class="card-title">Danh sách sản phẩm</h4>
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-1"> STT </th>
                                <th class="col-2"> Hình ảnh </th>
                                <th class="col-4"> Tên </th>
                                <th class="col-3"> Số lượng </th>
                                <th class="col-2"> Ngày mở bán </th>
                            </tr>
                        </thead>
                        <tbody id="body-table-product">
                            @php
                                $i = 1;
                            @endphp
                            @foreach ($saches as $sach)
                            <tr onclick='showDetailProduct("{{ $sach->id }}")'>
                                <td class="py-1">
                                    {{ $i++ }}
                                </td>
                                <td class="py-1">
                                    <img src="{{ asset('images/books/' . $sach->hinhanh) }}" alt="image" />
                                    @if ($sach->trangthaikinhdoanh == 0)
                                    <button type="button" id="updateSach" class="btn mb-2" style="background-color: gray; border-color: none" disabled>Ngừng kinh doanh</button>
                                    @endif
                                </td>
                                <td>
                                    {{ substr($sach->tensach, 0, 15) }}
                                </td>
                                <td>
                                    <div class="progress">
                                        @if($sach->soluong > 0 && $sach->soluong <= 10)
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ $sach->soluong }}</div>
                                        @elseif($sach->soluong > 10 && $sach->soluong <= 50)
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{ $sach->soluong }}</div>
                                        @elseif($sach->soluong > 50 && $sach->soluong <= 200)
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{{ $sach->soluong }}</div>
                                        @elseif($sach->soluong > 200)
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{{ $sach->soluong }}</div>
                                        @else
                                            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        @endif
                                    </div>
                                </td>
                                <td>
                                    {{ date_format(date_create($sach->created_at), 'd/m/Y') }}
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    </div>
                </div>
                <div  class="card-body" id="manage-product-notfound" style="display: none">
                    Không có sản phẩm
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/admin/manageProduct.js') }}"></script>
@endsection
