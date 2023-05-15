function showDetailShipCash(xaid) {
    document.getElementById('submitShipCash').style.display = 'none';
    document.getElementById('updateShipCash').style.display = 'none';
    document.getElementById('deleteShipCash').style.display = 'none';

    document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
    document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
    document.getElementById('manage-ship-cash-error-px').style.display = 'none';
    document.getElementById('manage-ship-cash-error-phi').style.display = 'none';
    axios.get('/show-detail-shipcash', {
        params: {
            xaid: String(xaid).padStart(5, '0')
        }
    })
    .then((response) => {
        document.getElementById('cancel-modify-ship-cash').style.display = 'inline-block';
        document.getElementById('manage-ship-cash-phi').value = response.data.phi;
        document.getElementById('id_px').value = xaid;
        $('#manage-ship-cash-tp').val(response.data.matp).trigger('change');
        setTimeout(() => {
            $('#manage-ship-cash-qh').val(response.data.maqh).trigger('change');
        }, 500);
        setTimeout(() => {
            $('#manage-ship-cash-px').val(response.data.xaid).trigger('change');
        }, 1000);
        
        document.getElementById('manage-ship-cash-tp').disabled = true;
        document.getElementById('manage-ship-cash-qh').disabled = true;
        document.getElementById('manage-ship-cash-px').disabled = true;
        if (response.data.trangthaihoatdong == 0) {
            document.getElementById('submitShipCash').style.display = 'none';
            document.getElementById('updateShipCash').style.display = 'none';
            document.getElementById('deleteShipCash').style.display = 'none';
            document.getElementById('reuseShipCash').style.display = 'inline-block';
        } else {
            document.getElementById('submitShipCash').style.display = 'none';
            document.getElementById('updateShipCash').style.display = 'inline-block';
            document.getElementById('deleteShipCash').style.display = 'inline-block';
            document.getElementById('reuseShipCash').style.display = 'none';
        }
    })
}

let ElementBtnDeleteShipCash = document.getElementById('deleteShipCash');
ElementBtnDeleteShipCash.addEventListener('click', () => {
    let xaid = document.getElementById('id_px').value;
    axios.post('/delete-shipcash', {
        xaid: String(xaid).padStart(5, '0')
    })
    .then((response) => {
        alert('Đã ngừng hoạt động');
        document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
        document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
        document.getElementById('manage-ship-cash-error-px').style.display = 'none';
        document.getElementById('manage-ship-cash-error-phi').style.display = 'none';

        document.getElementById('submitShipCash').style.display = 'none';
        document.getElementById('updateShipCash').style.display = 'none';
        document.getElementById('deleteShipCash').style.display = 'none';
        document.getElementById('reuseShipCash').style.display = 'inline-block';

        document.getElementById('body-table-ship-cash').innerHTML = response.data.divShipCash;
    })
})

let ElementBtnUpdateShipCash = document.getElementById('updateShipCash');
ElementBtnUpdateShipCash.addEventListener('click', () => {
    let xaid = document.getElementById('id_px').value;
    let phi = document.getElementById('manage-ship-cash-phi').value;

    axios.post('/update-shipcash', {
        xaid: String(xaid).padStart(5, '0'),
        phi: phi
    })
    .then((response) => {
        alert('Cập nhật thành công')
        document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
        document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
        document.getElementById('manage-ship-cash-error-px').style.display = 'none';
        document.getElementById('manage-ship-cash-error-phi').style.display = 'none';

        document.getElementById('body-table-ship-cash').innerHTML = response.data.divShipCash;
    })
})

let ElementBtnReuseShipCash = document.getElementById('reuseShipCash');
ElementBtnReuseShipCash.addEventListener('click', () => {
    let xaid = document.getElementById('id_px').value;

    axios.post('/reuse-shipcash', {
        xaid: String(xaid).padStart(5, '0'),
    })
    .then((response) => {
        alert('Đã hoạt động trở lại')
        document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
        document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
        document.getElementById('manage-ship-cash-error-px').style.display = 'none';
        document.getElementById('manage-ship-cash-error-phi').style.display = 'none';

        document.getElementById('submitShipCash').style.display = 'none';
        document.getElementById('updateShipCash').style.display = 'inline-block';
        document.getElementById('deleteShipCash').style.display = 'inline-block';
        document.getElementById('reuseShipCash').style.display = 'none';

        document.getElementById('body-table-ship-cash').innerHTML = response.data.divShipCash;
    })
})

let ElementCancelModifyShipCash = document.getElementById('cancel-modify-ship-cash');
ElementCancelModifyShipCash.addEventListener('click', () => {
    document.getElementById('submitShipCash').style.display = 'inline-block';
    document.getElementById('updateShipCash').style.display = 'none';
    document.getElementById('deleteShipCash').style.display = 'none';
    ElementCancelModifyShipCash.style.display = 'none';

    document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
    document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
    document.getElementById('manage-ship-cash-error-px').style.display = 'none';
    document.getElementById('manage-ship-cash-error-phi').style.display = 'none';

    document.getElementById('manage-ship-cash-tp').disabled = false;
    document.getElementById('manage-ship-cash-qh').disabled = false;
    document.getElementById('manage-ship-cash-px').disabled = false;

    document.getElementById('manage-ship-cash-phi').value = '';
    document.getElementById('manage-ship-cash-qh').innerHTML = "<option disabled value=''>Not Found</option>";
    document.getElementById('manage-ship-cash-px').innerHTML = "<option disabled value=''>Not Found</option>";
    $('#manage-ship-cash-tp').val('').trigger('change');
    $('#manage-ship-cash-qh').val('').trigger('change');
    $('#manage-ship-cash-px').val('').trigger('change');
})
