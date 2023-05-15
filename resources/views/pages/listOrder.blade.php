@extends('layouts.app')
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <div style="margin: 2% 5% 5% 5%">
        <table class="table table-bordered" style="font-size: 1.8rem">
            <tr>
                <th class="success" style="width: 8%; font-family: Arial, Helvetica, sans-serif"><b>STT</b></th>
                <th class="success" style="width: 42%; font-family: Arial, Helvetica, sans-serif"><b>Sản phẩm</p></th>
                <th class="success" style="width: 25%; font-family: Arial, Helvetica, sans-serif"><b>Trạng thái đơn hàng</b></th>
                <th class="success" style="width: 15%; font-family: Arial, Helvetica, sans-serif"><b>Chi tiết đơn hàng</b></th>
            </tr>
            @php
                $i = 1;
            @endphp
            @foreach ($donhang as $value)
            <tr>
                <td>{{ $i++ }}</td>
                @foreach ($value->sach as $sach)
                <td style="text-align: left">
                    <img src="{{ asset('images/books/' . $sach->hinhanh) }}" style="width: 120px; height: 150px; margin-left: 5%">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {{ $sach->tensach }}
                </td>
                @break;
                @endforeach
                <td>{{ $value->trangthai }}</td>
                <td><a href="/detail-order/{{ $value->id }}">Chi tiết đơn hàng</a></td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection