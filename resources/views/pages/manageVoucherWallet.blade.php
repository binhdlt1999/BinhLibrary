@extends('layouts.app')
<!-- Main Start -->
@section('main')
<div id="tg-wrapper" class="tg-wrapper tg-haslayout" style="background-color: #F5F5FA;">
    <div style="width: 45%; margin: 3% 2% 3% 8%; background-color: #FFFFFF; border-radius: 15px; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="heading cf" style="border-bottom: none; margin-left: 30%">
            <h1>Danh sách voucher của cửa hàng</h1>
        </div>
        @if (isset($vouchers) && count($vouchers) > 0)
        <div style="margin: 0 3% 3% 3%">
            <table class="table table-hover" style="width: 100%">
                <tr class="success">
                    <td>Tên voucher</td>
                    <td>Mức ưu đãi</td>
                    <td>Điều kiện giảm</td>
                    <td>Điểm quy đổi</td>
                    <td colspan=2>Ngày kết thúc</td>
                </tr>
                @foreach ($vouchers as $voucher)
                <tr>
                    <td>{{ $voucher->tenvoucher }}</td>
                    <td>{{ number_format($voucher->mucuudai, 0, ',', '.') }}</td>
                    <td>{{ number_format($voucher->dieukien, 0, ',', '.') }}</td>
                    <td>{{ $voucher->diemquydoi }}</td>
                    <td>{{ $voucher->ngayketthuc }}</td>
                    @if ($diemthuong > $voucher->diemquydoi)
                    <td><button type="button" class="btn btn-success" onclick='addVoucherToWallet("{{ $voucher->id }}", "{{ $id_kh }}")' style="border:none">Thêm voucher</button></td>
                    @else
                    <td><button type="button" disabled class="btn" style="border:none">Thêm voucher</button></td>
                    @endif
                </tr>
                @endforeach
            </table>
        </div>
        @else
        <div style="margin: 0 3% 3% 3%">
            <h5>Cửa hàng hiện tại không có voucher để đổi</h5>
        </div>
        @endif
    </div>
    <div style="width: 35%; margin: 3% 8% 3% 2%; background-color: #FFFFFF; border-radius: 15px; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="heading cf" style="border-bottom: none; margin: 0 3% 3% 3%">
            <h1>Ví voucher</h1>
            <table class="table table-hover" style="width: 100%">
                <tr class="info">
                    <td>Tên voucher</td>
                    <td>Mức ưu đãi</td>
                    <td>Điều kiện giảm</td>
                    <td>Điểm quy đổi</td>
                    <td colspan=2>Ngày kết thúc</td>
                </tr>
                <tr>
                    @foreach ($myVoucher as $voucher)
                    <tr>
                        <td>{{ $voucher->tenvoucher }}</td>
                        <td>{{ number_format($voucher->mucuudai, 0, ',', '.') }}</td>
                        <td>{{ number_format($voucher->dieukien, 0, ',', '.') }}</td>
                        <td>{{ $voucher->diemquydoi }}</td>
                        <td>{{ $voucher->ngayketthuc }}</td>
                    </tr>
                    @endforeach
                </tr>
            </table>
        </div>
    </div>
</div>
<script src="{{ asset('js/voucherWallet.js') }}"></script>
@endsection