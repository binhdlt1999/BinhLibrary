@extends('admin.layouts.app')

@section('main')
<div class="page-header">
    <h3 class="page-title"> Quản lý Kịch bản trả lời</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active" aria-current="page">Form elements</li>
      </ol>
    </nav>
</div>
<div class="row">
    {{-- table --}}
    <div class="col-lg-12 table-overflow" id="manage-list-order-table-list" style="overflow:scroll; height: auto; max-height: 1000px">
        <div class="grid-margin stretch-card">
            <div class="card">
                <div class="card-body" id="manage-list-order-list">
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="col-1"> STT </th>
                                <th class="col-5"> Khách hàng nói </th>
                                <th class="col-5"> Trả lời </th>
                                <th class="col-1"></th>
                            </tr>
                        </thead>
                        <tbody id="body-table-chatbot">
                            @php
                                $i = 1;
                            @endphp
                            @foreach ($kichban as $value)
                            <tr>
                                <td>
                                    {{ $i++ }}
                                </td>
                                <td>
                                    {{ $value->cauhoi }}
                                </td>
                                <td>
                                    @if ($value->traloi != null)
                                    <input type="text" id="manage-chatbot-answer{{ $value->id }}" class="form-control" value="{{ $value->traloi }}" placeholder="Nhập câu trả lời">
                                    @else
                                    <input type="text" id="manage-chatbot-answer{{ $value->id }}" class="form-control" placeholder="Nhập câu trả lời">
                                    @endif
                                </td>
                                <td>
                                    <button type="button" id="manage-chatbot-btn-accept" onclick='acceptKichban("{{ $value->id }}")' class="btn btn-primary mb-2">Xác nhận</button>
                                    <button type="button" id="manage-chatbot-btn-deny" onclick='denyKichban("{{ $value->id }}")' class="btn btn-danger mb-2">Từ chối</button>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                        <input type="hidden" id="id-detail-order" value="">
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/admin/manageChatbot.js') }}"></script>
@endsection
