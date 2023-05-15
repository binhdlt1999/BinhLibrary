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


function showDetailVoucher(id) {
    document.getElementById('manage-voucher-error-mavoucher').style.display = "none";
    document.getElementById('manage-voucher-error-tenvoucher').style.display = "none";
    document.getElementById('manage-voucher-error-mucuudai').style.display = "none";
    document.getElementById('manage-voucher-error-dieukien').style.display = "none";
    document.getElementById('manage-voucher-error-ngaybatdau').style.display = "none";
    document.getElementById('manage-voucher-error-ngayketthuc').style.display = "none";
    document.getElementById('manage-voucher-error-soluong').style.display = "none";
    document.getElementById('manage-voucher-error-diemquydoi').style.display = "none";

    document.getElementById('cancel-modify-voucher').style.display = 'inline-block';
    document.getElementById('submitVoucher').style.display = 'none';
    document.getElementById('updateVoucher').style.display = 'none';
    document.getElementById('deleteVoucher').style.display = 'none';
    document.getElementById('reuseVoucher').style.display = 'none';

    axios.get('/show-detail-voucher', {
        params: {
            id: id
        }
    })
    .then((response) => {
        if (response.data.success == true) {
            document.getElementById('id_voucher').value = id;
            document.getElementById('manage-voucher-mavoucher').value = response.data.voucher.mavoucher;
            document.getElementById('manage-voucher-tenvoucher').value = response.data.voucher.tenvoucher;
            document.getElementById('manage-voucher-mucuudai').value = parseInt(response.data.voucher.mucuudai);
            document.getElementById('manage-voucher-dieukien').value = parseInt(response.data.voucher.dieukien);
            document.getElementById('manage-voucher-ngaybatdau').value = response.data.voucher.ngaybatdau;
            document.getElementById('manage-voucher-ngayketthuc').value = response.data.voucher.ngayketthuc;
            document.getElementById('manage-voucher-soluong').value = response.data.voucher.soluong;
            document.getElementById('manage-voucher-diemquydoi').value = response.data.voucher.diemquydoi;
            let cothequydoi = document.getElementById('manage-voucher-cothequydoi')[response.data.voucher.cothequydoi];
            cothequydoi.selected = true;

            if (document.getElementById('manage-voucher-cothequydoi').value == 1) {
                document.querySelector("#manage-voucher-div-diemquydoi").style.display = 'block';
            } else {
                document.querySelector("#manage-voucher-div-diemquydoi").style.display = 'none';
            }

            // display button
            if (response.data.voucher.conlai != 0) {
                if (response.data.voucher.trangthai == 1) {
                    if (!response.data.dadoi) {
                        document.getElementById('updateVoucher').style.display = 'inline-block';
                        document.getElementById('deleteVoucher').style.display = 'inline-block';
                    }
                } else {
                    document.getElementById('reuseVoucher').style.display = 'inline-block';
                }
            }
        }
    })
}

// cancel button
const cancelBtnVoucher = document.querySelector("#cancel-modify-voucher");

cancelBtnVoucher.addEventListener("click", () => {
    // tắt error
    document.getElementById('manage-voucher-error-mavoucher').style.display = "none";
    document.getElementById('manage-voucher-error-tenvoucher').style.display = "none";
    document.getElementById('manage-voucher-error-mucuudai').style.display = "none";
    document.getElementById('manage-voucher-error-dieukien').style.display = "none";
    document.getElementById('manage-voucher-error-ngaybatdau').style.display = "none";
    document.getElementById('manage-voucher-error-ngayketthuc').style.display = "none";
    document.getElementById('manage-voucher-error-soluong').style.display = "none";
    document.getElementById('manage-voucher-error-diemquydoi').style.display = "none";

    // tắt button update, delete
    document.getElementById('cancel-modify-voucher').style.display = 'none';
    document.getElementById('submitVoucher').style.display = 'inline-block';
    document.getElementById('updateVoucher').style.display = 'none';
    document.getElementById('deleteVoucher').style.display = 'none';
    document.getElementById('reuseVoucher').style.display = 'none';
    document.getElementById('manage-voucher-cothequydoi')[0].selected = true;
    document.getElementById('manage-voucher-diemquydoi').value = 0;
    document.getElementById('manage-voucher-div-diemquydoi').style.display = "none";

    // set value input null
    // set id_voucher = null do khong con chon voucher nao
    document.getElementById('id_voucher').value = '';
    document.getElementById('manage-voucher-mavoucher').value = "";
    document.getElementById('manage-voucher-tenvoucher').value = "";
    document.getElementById('manage-voucher-mucuudai').value = "";
    document.getElementById('manage-voucher-dieukien').value = "";
    document.getElementById('manage-voucher-ngaybatdau').value = "";
    document.getElementById('manage-voucher-ngayketthuc').value = "";
    document.getElementById('manage-voucher-soluong').value = "";
});

// update voucher
const ElementBtnUpdateVoucher = document.querySelector("#updateVoucher");
ElementBtnUpdateVoucher.addEventListener("click", () => {
    let id = document.getElementById('id_voucher').value;
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
        id: id,
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

    axios.post('/update-voucher', data)
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-voucher-notfound').style.display = 'none';
        document.querySelector('#manage-voucher-table').style.display = 'inline-block';

        document.getElementById('manage-voucher-error-mavoucher').innerHTML = "";
        document.getElementById('manage-voucher-error-tenvoucher').innerHTML = "";
        document.getElementById('manage-voucher-error-mucuudai').innerHTML = "";
        document.getElementById('manage-voucher-error-dieukien').innerHTML = "";
        document.getElementById('manage-voucher-error-ngaybatdau').innerHTML = "";
        document.getElementById('manage-voucher-error-ngayketthuc').innerHTML = "";
        document.getElementById('manage-voucher-error-soluong').innerHTML = "";
        document.getElementById('manage-voucher-error-diemquydoi').innerHTML = "";

        if (response.data.success === true) {
            alert('Cập nhật voucher thành công');

            document.getElementById('manage-voucher-mavoucher').value = "";
            document.getElementById('manage-voucher-tenvoucher').value = "";
            document.getElementById('manage-voucher-mucuudai').value = "";
            document.getElementById('manage-voucher-dieukien').value = "";
            document.getElementById('manage-voucher-ngaybatdau').value = "";
            document.getElementById('manage-voucher-ngayketthuc').value = "";
            document.getElementById('manage-voucher-soluong').value = "";
            document.getElementById('manage-voucher-cothequydoi')[0].selected = true;
            document.getElementById('manage-voucher-diemquydoi').value = 0;
            document.getElementById('manage-voucher-div-diemquydoi').style.display = "none";

            // tắt button update, delete
            document.getElementById('cancel-modify-voucher').style.display = 'none';
            document.getElementById('submitVoucher').style.display = 'inline-block';
            document.getElementById('updateVoucher').style.display = 'none';
            document.getElementById('deleteVoucher').style.display = 'none';
            document.getElementById('reuseVoucher').style.display = 'none';

            document.getElementById('body-table-voucher').innerHTML = response.data.divTableVoucher;
        } else {
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
                    break;
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
});

//delete Voucher
const ElementBtnDeleteVoucher = document.querySelector("#deleteVoucher");

ElementBtnDeleteVoucher.addEventListener("click", () => {
    let id = document.getElementById('id_voucher').value;

    let data = {
        id: id,
    }

    axios.post('/delete-voucher', data)
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-voucher-notfound').style.display = 'none';
        document.querySelector('#manage-voucher-table').style.display = 'inline-block';
        if (response.data.success === true) {
            alert('Đã hủy voucher');

            // tắt button update, delete
            document.getElementById('cancel-modify-voucher').style.display = 'none';
            document.getElementById('submitVoucher').style.display = 'inline-block';
            document.getElementById('updateVoucher').style.display = 'none';
            document.getElementById('deleteVoucher').style.display = 'none';
            document.getElementById('reuseVoucher').style.display = 'none';

            document.getElementById('manage-voucher-mavoucher').value = "";
            document.getElementById('manage-voucher-tenvoucher').value = "";
            document.getElementById('manage-voucher-mucuudai').value = "";
            document.getElementById('manage-voucher-dieukien').value = "";
            document.getElementById('manage-voucher-ngaybatdau').value = "";
            document.getElementById('manage-voucher-ngayketthuc').value = "";
            document.getElementById('manage-voucher-soluong').value = "";
            document.getElementById('manage-voucher-cothequydoi')[0].selected = true;
            document.getElementById('manage-voucher-diemquydoi').value = 0;
            document.getElementById('manage-voucher-div-diemquydoi').style.display = "none";

            document.getElementById('body-table-voucher').innerHTML = response.data.divTableVoucher;
        }
    })
});

//reuse Voucher
const ElementBtnReuseVoucher = document.querySelector("#reuseVoucher");
ElementBtnReuseVoucher.addEventListener("click", () => {
    let id = document.getElementById('id_voucher').value;

    let data = {
        id: id,
    }

    axios.post('/reuse-voucher', data)
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-voucher-notfound').style.display = 'none';
        document.querySelector('#manage-voucher-table').style.display = 'inline-block';
        if (response.data.success === true) {
            alert('Voucher đã hoạt động');

            // tắt button update, delete
            document.getElementById('cancel-modify-voucher').style.display = 'none';
            document.getElementById('submitVoucher').style.display = 'inline-block';
            document.getElementById('updateVoucher').style.display = 'none';
            document.getElementById('deleteVoucher').style.display = 'none';
            document.getElementById('reuseVoucher').style.display = 'none';

            document.getElementById('manage-voucher-mavoucher').value = "";
            document.getElementById('manage-voucher-tenvoucher').value = "";
            document.getElementById('manage-voucher-mucuudai').value = "";
            document.getElementById('manage-voucher-dieukien').value = "";
            document.getElementById('manage-voucher-ngaybatdau').value = "";
            document.getElementById('manage-voucher-ngayketthuc').value = "";
            document.getElementById('manage-voucher-soluong').value = "";
            document.getElementById('manage-voucher-cothequydoi')[0].selected = true;
            document.getElementById('manage-voucher-diemquydoi').value = 0;
            document.getElementById('manage-voucher-div-diemquydoi').style.display = "none";

            document.getElementById('body-table-voucher').innerHTML = response.data.divTableVoucher;
        }
    })
});