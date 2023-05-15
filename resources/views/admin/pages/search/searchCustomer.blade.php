@extends('admin.layouts.app')

@section('main')
<form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search" id="form-search-customer">
  <input type="text" id="keyword-search-customer" class="form-control" placeholder="Nhập thông tin cần tìm">
</form>
<div class="col-lg-12 table-overflow grid-margin stretch-card" id="div-show-customer" style="max-height: 850px">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Hoverable Table</h4>
        </p>
        <div class="table-responsive">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Số điện thoại</th>
                <th>Họ đệm</th>
                <th>Tên</th>
                <th>Đơn hàng đã xử lý</th>
                <th>Đơn hàng đã hủy</th>
                <th>Loại thành viên</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody id="tr-show-customer">
                @php $i = 1 @endphp
                @foreach ($khachhang as $value)
                  @php
                    $vip = 0;
                    $huy = 0;
                    foreach ($value->donhang as $donhang) {
                        if ($donhang->trangthai == 8) {
                            $huy++;
                        } elseif ($donhang->trangthai == 4) {
                            $vip++;
                        }
                    }
                  @endphp
                <tr>
                    <td><a href="/detail-customer/{{ $value->id }}" class="text-decoration-none text-secondary">{{ $i++ }}</a></td>
                    <td><a href="/detail-customer/{{ $value->id }}" class="text-decoration-none text-secondary">{{ $value->sdt }}</a></td>
                    <td><a href="/detail-customer/{{ $value->id }}" class="text-decoration-none text-secondary">{{ $value->ho }}</a></td>
                    <td><a href="/detail-customer/{{ $value->id }}" class="text-decoration-none text-secondary">{{ $value->ten }}</a></td>
                    <td class="text-success" style="text-align: center"> {{ $vip }} </td>
                    <td class="text-danger" style="text-align: center"> {{ $huy }} </td>
                        @if($vip < 5)
                            <td><a href="/detail-customer/{{ $value->id }}"><label class="badge badge-success">Thường</label></a></td>
                        @elseif($vip >= 5 && $vip < 20)
                            <td><a href="/detail-customer/{{ $value->id }}"><label class="badge badge-info">Bạc</label></a></td>
                        @elseif($vip >= 20 && $vip < 50)
                            <td><a href="/detail-customer/{{ $value->id }}"><label class="badge badge-warning">Vàng</label></a></td>
                        @else
                            <td><a href="/detail-customer/{{ $value->id }}"><label class="badge badge-primary">Kim cương</label></a></td>
                        @endif
                    @if ($danhsachcam->contains('sdt', $value->sdt))
                    <td><button type="button" onclick='searchCustomerUnlock(" {{ $value->id }} ")' class="btn btn-warning mb-2">Mở Khóa</button></td>
                    @else
                    <td><button type="button" onclick='searchCustomerLockAccount("{{ $value->id }}")' class="btn btn-danger mb-2">Khóa</button></td>
                    @endif
                </tr>
                @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-12 grid-margin stretch-card" id="div-search-fail" style="display:none">
    <div class="card">
      <div class="card-body">
        Không tìm thấy khách hàng
      </div>
    </div>
  </div>
  <script src="{{ asset('js/admin/searchCustomer.js') }}"></script>
@endsection