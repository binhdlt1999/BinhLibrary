const addVoucherform = document.querySelector("#form-manage-voucher");
addVoucherform.addEventListener("submit", (e) => {
    e.preventDefault();
});

const ElementBtnSubmitVoucher = document.querySelector("#submitVoucher");
ElementBtnSubmitVoucher.addEventListener("click", () => {
    let mavoucher = document.getElementById('manage-voucher-mavoucher').value;
    let tenvoucher = document.getElementById('manage-voucher-tenvoucher').value;
    let mucuudai = document.getElementById('manage-voucher-mucuudai').value;
    let dieukien = document.getElementById('manage-voucher-dieukien').value;
    let ngaybatdau = document.getElementById('manage-voucher-ngaybatdau').value;
    let ngayketthuc = document.getElementById('manage-voucher-ngayketthuc').value;
    let soluong = document.getElementById('manage-voucher-soluong').value;
    let cothequydoi = document.getElementById('manage-voucher-cothequydoi').value;
    let diemquydoi = document.getElementById('manage-voucher-diemquydoi').value;

    if (cothequydoi == 0) {
        diemquydoi = 0;
    }

    let data = {
        mavoucher: mavoucher,
        tenvoucher: tenvoucher,
        mucuudai: mucuudai,
        dieukien: dieukien,
        ngaybatdau: ngaybatdau,
        ngayketthuc: ngayketthuc,
        soluong: soluong,
        cothequydoi: cothequydoi,
        diemquydoi: diemquydoi
    }

    axios.post('/upload-voucher', data)
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-voucher-notfound').style.display = 'none';
        document.querySelector('#manage-voucher-table').style.display = 'inline-block';
        if (response.data.success === true) {
            alert('Thêm voucher thành công');

            document.getElementById('manage-voucher-mavoucher').value = "";
            document.getElementById('manage-voucher-tenvoucher').value = "";
            document.getElementById('manage-voucher-mucuudai').value = "";
            document.getElementById('manage-voucher-dieukien').value = "";
            document.getElementById('manage-voucher-ngaybatdau').value = "";
            document.getElementById('manage-voucher-ngayketthuc').value = "";
            document.getElementById('manage-voucher-soluong').value = "";
    
            document.getElementById('body-table-voucher').innerHTML = response.data.divTableVoucher;
        } else {
            document.getElementById('manage-voucher-error-mavoucher').innerHTML = "";
            document.getElementById('manage-voucher-error-tenvoucher').innerHTML = "";
            document.getElementById('manage-voucher-error-mucuudai').innerHTML = "";
            document.getElementById('manage-voucher-error-dieukien').innerHTML = "";
            document.getElementById('manage-voucher-error-ngaybatdau').innerHTML = "";
            document.getElementById('manage-voucher-error-ngayketthuc').innerHTML = "";
            document.getElementById('manage-voucher-error-soluong').innerHTML = "";

            for(const [key, value] of Object.entries(response.data.errors)) {
                switch (key) {
                    case 'mavoucher':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-mavoucher').style.display = 'block';
                            document.getElementById('manage-voucher-error-mavoucher').innerHTML += error + "<br>";
                        }
                        break;
                    case 'tenvoucher':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-tenvoucher').style.display = 'block';
                            document.getElementById('manage-voucher-error-tenvoucher').innerHTML += error + "<br>";
                        }
                        break;
                    case 'mucuudai':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-mucuudai').style.display = 'block';
                            document.getElementById('manage-voucher-error-mucuudai').innerHTML += error + "<br>";
                        }
                        break;
                    case 'dieukien':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-dieukien').style.display = 'block';
                            document.getElementById('manage-voucher-error-dieukien').innerHTML += error + "<br>";
                        }
                        break;
                    case 'ngaybatdau':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-ngaybatdau').style.display = 'block';
                            document.getElementById('manage-voucher-error-ngaybatdau').innerHTML = error;
                        }
                        break;
                    case 'ngayketthuc':
                        for (const error of value) {
                            document.getElementById('manage-voucher-error-ngayketthuc').style.display = 'block';
                            document.getElementById('manage-voucher-error-ngayketthuc').innerHTML = error;
                        }
                        break;
                    case 'soluong':
                    for (const error of value) {
                        document.getElementById('manage-voucher-error-soluong').style.display = 'block';
                        document.getElementById('manage-voucher-error-soluong').innerHTML = error;
                    }
                    case 'diemquydoi':
                    for (const error of value) {
                        document.getElementById('manage-voucher-error-diemquydoi').style.display = 'block';
                        document.getElementById('manage-voucher-error-diemquydoi').innerHTML = error;
                    }
                    break;
                }
            }
        }
    })
})

const ElementCoTheQuyDoi = document.querySelector("#manage-voucher-cothequydoi");
ElementCoTheQuyDoi.addEventListener("change", (event) => {
    let cothequydoi = event.target.value;
    if (cothequydoi == 1) {
        document.querySelector("#manage-voucher-div-diemquydoi").style.display = 'block';
        document.querySelector("#manage-voucher-diemquydoi").value = '';
    } else {
        document.querySelector("#manage-voucher-div-diemquydoi").style.display = 'none';
        document.querySelector("#manage-voucher-diemquydoi").value = 0;
    }
})

