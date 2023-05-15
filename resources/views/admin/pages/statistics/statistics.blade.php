@extends('admin.layouts.app')

@section('main')
<div class="col-12 grid-margin stretch-card">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Thống kê</h4>
      <form class="form-inline">
        <select class="form-control mb-2 mr-sm-2" id="loaithongke">
          <option value="0" selected>Chọn loại thống kê</option>
          <option value="1" style="color: white">Đơn hàng</option>
          <option value="2" style="color: white">Sách tồn kho</option>
          <option value="3" style="color: white">Đơn hủy theo số điện thoại</option>
          <option value="4" style="color: white">Doanh thu theo thể loại sách</option>
        </select>
        {{-- thong ke doanh thu theo thoi gian --}}
        <div id="loai_1" style="display: none">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngaybatdau" style="color: white">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngayketthuc" style="color: white">
          <button type="button" id="submitDateChart" class="btn btn-primary mb-2">Thống kê</button>
        </div>
        {{-- thong ke so luong ton --}}
        <div id="loai_2" style="display: none">
          <input type="number" min="0" max="1000" step="1" class="form-control mb-2 mr-sm-2" id="soluongtoithieu" style="color: white">
          <button type="button" id="submitMinVolume" class="btn btn-primary mb-2">Thống kê</button>
        </div>
        {{-- thong ke so dien thoai huy don hang nhieu nhat --}}
        <div id="loai_3" style="display: none">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngaybatdauSDT" style="color: white">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngayketthucSDT" style="color: white">
          <button type="button" id="submitMaxCancleOrder" class="btn btn-primary mb-2">Thống kê</button>
        </div>
        {{-- thong ke doanh thu theo the loai sach --}}
        <div id="loai_4" style="display: none">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngaybatdauDoanhthu" style="color: white">
          <input type="date" class="form-control mb-2 mr-sm-2" id="ngayketthucDoanhthu" style="color: white">
          <button type="button" id="submitAvenueByGenre" class="btn btn-primary mb-2">Thống kê</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div class="col-lg-12 grid-margin stretch-card">
  <div class="card">
    <div class="card-body" id="show-chart">
      <canvas id="barChart" style="display: none"></canvas>
        {{--  --}}
      <div class="col-lg-12 table-responsive" id="table-soluong" style="display: none">
        <table class="table table-striped">
          <thead>
              <tr>
                  <th class="col-1"> STT </th>
                  <th class="col-2"> Hình ảnh </th>
                  <th class="col-4"> Tên </th>
                  <th class="col-3"> Số lượng </th>
              </tr>
          </thead>
          <tbody id="body-table-soluong">
            {{--  --}}
          </tbody>
        </table>
      </div>
      {{--  --}}
    </div>
  </div>
</div>
<script src="{{ asset('assets/vendors/js/vendor.bundle.base.js') }}"></script>
<script src="{{ asset('js/admin/chart.js') }}"></script>
@endsection
