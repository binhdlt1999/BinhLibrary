function shipCashGetDistrict() {
    document.getElementById('manage-ship-cash-px').innerHTML = "<option disabled value=''>Not Found</option>";
    
    let matp = document.getElementById('manage-ship-cash-tp').value;
    axios.get('/get-district', {
        params: {
            matp: matp
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-ship-cash-qh').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-ship-cash-qh').innerHTML = response.data.div;
        }
    })
}

function shipCashGetWard() {
    let maqh = document.getElementById('manage-ship-cash-qh').value;
    axios.get('/get-ward', {
        params: {
            maqh: maqh
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-ship-cash-px').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-ship-cash-px').innerHTML = response.data.div;
        }
    })
}

const addShipCashform = document.querySelector("#form-manage-ship-cash");

addShipCashform.addEventListener("submit", (e) => {
    e.preventDefault();
});

const ElementBtnSubmitShipCash = document.querySelector("#submitShipCash");
ElementBtnSubmitShipCash.addEventListener("click", () => {
    let xaid = document.getElementById('manage-ship-cash-px').value;
    let maqh = document.getElementById('manage-ship-cash-qh').value;
    let matp = document.getElementById('manage-ship-cash-tp').value;
    let phi = document.getElementById('manage-ship-cash-phi').value;
    if(matp != "") {
        matp = String(matp).padStart(2, '0');
    }
    if(maqh != "") {
        maqh = String(maqh).padStart(3, '0');
    }
    if(xaid != "") {
        xaid = String(xaid).padStart(5, '0');
    }
    axios.post('/upload-shipcash', {
        matp: matp,
        maqh: maqh,
        xaid: xaid,
        phi: phi
    })
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-ship-cash-notfound').style.display = 'none';
        document.querySelector('#manage-ship-cash-list').style.display = 'inline-block';
        document.getElementById('manage-ship-cash-error-tp').style.display = 'none';
        document.getElementById('manage-ship-cash-error-qh').style.display = 'none';
        document.getElementById('manage-ship-cash-error-px').style.display = 'none';
        document.getElementById('manage-ship-cash-error-phi').style.display = 'none';

        if (response.data.success === true) {
            alert('Thêm phí vận chuyển thành công');
            document.getElementById('manage-ship-cash-phi').value = '';
            document.getElementById('manage-ship-cash-qh').innerHTML = "<option disabled value=''>Not Found</option>";
            document.getElementById('manage-ship-cash-px').innerHTML = "<option disabled value=''>Not Found</option>";
            $('#manage-ship-cash-tp').val('').trigger('change');
            $('#manage-ship-cash-qh').val('').trigger('change');
            $('#manage-ship-cash-px').val('').trigger('change');
            document.getElementById('body-table-ship-cash').innerHTML = response.data.divShipCash;
        } else {
            document.querySelector('#manage-ship-cash-list').style.display = 'inline-block';
            document.getElementById('manage-ship-cash-error-tp').style.display = 'inline-block';
            document.getElementById('manage-ship-cash-error-qh').style.display = 'inline-block';
            document.getElementById('manage-ship-cash-error-px').style.display = 'inline-block';
            document.getElementById('manage-ship-cash-error-phi').style.display = 'inline-block';

            for(const [key, value] of Object.entries(response.data.errors)) {
                switch (key) {
                    case 'matp':
                        for (const error of value) {
                            document.getElementById('manage-ship-cash-error-tp').style.display = 'block';
                            document.getElementById('manage-ship-cash-error-tp').innerHTML = error + "<br>";
                        }
                    break;
                    case 'maqh':
                        for (const error of value) {
                            document.getElementById('manage-ship-cash-error-qh').style.display = 'block';
                            document.getElementById('manage-ship-cash-error-qh').innerHTML = error + "<br>";
                        }
                    break;
                    case 'xaid':
                        for (const error of value) {
                            document.getElementById('manage-ship-cash-error-px').style.display = 'block';
                            document.getElementById('manage-ship-cash-error-px').innerHTML = error + "<br>";
                        }
                    break;
                    case 'phi':
                        for (const error of value) {
                            document.getElementById('manage-ship-cash-error-phi').style.display = 'block';
                            document.getElementById('manage-ship-cash-error-phi').innerHTML = error + "<br>";
                        }
                    break;
                }
            }
        }
    })
});
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
