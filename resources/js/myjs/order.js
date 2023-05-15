function getDistrict() {
    document.getElementById('xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
    
    let matp = document.getElementById('tinhthanhpho').value;
    axios.get('/get-district', {
        params: {
            matp: matp
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('quanhuyen').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('quanhuyen').innerHTML = response.data.div;
        }
    })
}

function getWard() {
    let maqh = document.getElementById('quanhuyen').value;
    axios.get('/get-ward', {
        params: {
            maqh: maqh
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('xaphuongthitran').innerHTML = response.data.div;
        }
    })
}

function getShipCash() {
    let xaid = document.getElementById('xaphuongthitran').value;

    axios.get('/get-shipcash', {
        params: {
            xaid: xaid
        }
    })
    .then((response) => {
        let tamtinh = document.getElementById('tamtinh').value;
        let phivanchuyen = response.data.phivanchuyen
        let giagiam = document.getElementById('giagiam').value;
        let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen) - parseInt(giagiam);

        document.getElementById('phivanchuyen').value = response.data.phivanchuyen;
        document.getElementById('tongtien').value = newTongtien;

        document.getElementById('show_phivanchuyen').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.phivanchuyen);
        document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
    })
}

function addVoucher(id, mucuudai) {
    let tamtinh = document.getElementById('tamtinh').value;
    let phivanchuyen = document.getElementById('phivanchuyen').value;
    let giagiam = mucuudai;
    let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen) - parseInt(giagiam);
    if (newTongtien < 0) {
        newTongtien = 0;
    }
    document.getElementById('removeVoucher').disabled = false;
    document.getElementById('idVoucher').value = id;

    document.getElementById('giagiam').value = giagiam;
    document.getElementById('tongtien').value = newTongtien;

    document.getElementById('show_giagiam').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giagiam);
    document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
    // axios.get('/get-voucher', {
    //     params: {
    //         id: id
    //     }
    // })
    // .then((response) => {
    //     if (response.data.success == false) {
    //         alert("voucher đã hết lượt sử dụng, vui lòng thực hiện đặt hàng lại");
    //         window.location.href="/cart";
    //     } else {
    //         let tamtinh = document.getElementById('tamtinh').value;
    //         let phivanchuyen = document.getElementById('phivanchuyen').value;
    //         let giagiam = response.data.mucuudai;
    //         let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen) - parseInt(giagiam);
    //         if (newTongtien < 0) {
    //             newTongtien = 0;
    //         }
    //         document.getElementById('removeVoucher').disabled = false;
        
    //         document.getElementById('giagiam').value = giagiam;
    //         document.getElementById('tongtien').value = newTongtien;
        
    //         document.getElementById('show_giagiam').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giagiam);
    //         document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
    //     }
    // })
}

function addMyVoucher(id, mucuudai) {
    let tamtinh = document.getElementById('tamtinh').value;
    let phivanchuyen = document.getElementById('phivanchuyen').value;
    let giagiam = mucuudai;
    let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen) - parseInt(giagiam);
    if (newTongtien < 0) {
        newTongtien = 0;
    }
    document.getElementById('removeVoucher').disabled = false;
    document.getElementById('idVoucher').value = id;

    document.getElementById('giagiam').value = giagiam;
    document.getElementById('tongtien').value = newTongtien;

    document.getElementById('show_giagiam').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giagiam);
    document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
    // axios.get('/get-voucher', {
    //     params: {
    //         id: id
    //     }
    // })
    // .then((response) => {
    //     if (response.data.success == false) {
    //         alert("voucher đã hết lượt sử dụng, vui lòng thực hiện đặt hàng lại");
    //         window.location.href="/cart";
    //     } else {
    //         let tamtinh = document.getElementById('tamtinh').value;
    //         let phivanchuyen = document.getElementById('phivanchuyen').value;
    //         let giagiam = response.data.mucuudai;
    //         let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen) - parseInt(giagiam);
    //         if (newTongtien < 0) {
    //             newTongtien = 0;
    //         }
    //         document.getElementById('removeVoucher').disabled = false;
        
    //         document.getElementById('giagiam').value = giagiam;
    //         document.getElementById('tongtien').value = newTongtien;
        
    //         document.getElementById('show_giagiam').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giagiam);
    //         document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
    //     }
    // })
}

let ElementRemoveVoucher = document.getElementById('removeVoucher');
ElementRemoveVoucher.addEventListener('click', () => {
    let tamtinh = document.getElementById('tamtinh').value;
    let phivanchuyen = document.getElementById('phivanchuyen').value;

    let newTongtien = parseInt(tamtinh) + parseInt(phivanchuyen);
    if (newTongtien < 0) {
        newTongtien = 0;
    }
    setTimeout(() => {
        document.getElementById('removeVoucher').disabled = true;
    }, 500);

    document.getElementById('giagiam').value = 0;
    document.getElementById('tongtien').value = newTongtien;

    document.getElementById('show_giagiam').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(0);
    document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newTongtien);
})

function submitAddress() {
    let ho = document.getElementById('ho').value;
    let ten = document.getElementById('ten').value;
    let dtdd = document.getElementById('dtdd').value;

    let matp = document.getElementById('tinhthanhpho').value;
    let maqh = document.getElementById('quanhuyen').value;
    let xaid = document.getElementById('xaphuongthitran').value;
    let diachi = document.getElementById('diachi').value;

    let idDonhang = document.getElementById('idDonhang').value;
    let idVoucher = document.getElementById('idVoucher').value;
    let tamtinh = document.getElementById('tamtinh').value;
    let phivanchuyen = document.getElementById('phivanchuyen').value;
    let giagiam = document.getElementById('giagiam').value;
    let tongtien = document.getElementById('tongtien').value;

    let loaidiachi;
    var ele = document.getElementsByName('loaidiachi');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            loaidiachi = ele[i].value;
        }
    }

    let phuongthucthanhtoan;
    var ele2 = document.getElementsByName('phuongthucthanhtoan');
    for(i = 0; i < ele2.length; i++) {
        if(ele2[i].checked) {
            phuongthucthanhtoan = ele2[i].value;
        }
    }

    axios.post('/submit-address', {
        idDonhang: idDonhang,
        idVoucher: idVoucher,
        tamtinh: tamtinh,
        phivanchuyen: phivanchuyen,
        giagiam: giagiam,
        tongtien: tongtien,
        phuongthucthanhtoan: phuongthucthanhtoan,
        ho: ho,
        ten: ten,
        dtdd: dtdd,
        diachi: diachi,
        loaidiachi: loaidiachi,
        matp: matp,
        maqh: maqh,
        xaid: xaid,
    })
    .then((response) => {
        switch(response.data.success) {
            case true:
                if(phuongthucthanhtoan === 1) {
                    alert('Đặt hàng thành công');
                }
                window.location.href = response.data.link;
                break;
            case false:
                let errors = response.data.errors;
                let errorAddress = document.getElementsByClassName("error-address");
                let formAddress = document.getElementsByClassName("form-address");

                for (let i = 0; i < errorAddress.length; i++) {
                    errorAddress[i].style.setProperty('display', 'none');
                    errorAddress[i].innerHTML = "";
                    formAddress[i].classList.remove("has-error");
                }

                for(const [key, value] of Object.entries(errors)) {
                    switch (key) {
                        case 'ho':
                            for (const error of value) {
                                document.getElementById("error-ho").style.setProperty('display', 'block');
                                document.getElementById("contain-ho").classList.add("has-error");
                                document.getElementById('error-ho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'ten':
                            for (const error of value) {
                                document.getElementById("error-ten").style.setProperty('display', 'block');
                                document.getElementById("contain-ten").classList.add("has-error");
                                document.getElementById('error-ten').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'dtdd':
                            for (const error of value) {
                                document.getElementById("error-dtdd").style.setProperty('display', 'block');
                                document.getElementById("contain-dtdd").classList.add("has-error");
                                document.getElementById('error-dtdd').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'diachi':
                            for (const error of value) {
                                document.getElementById("error-diachi").style.setProperty('display', 'block');
                                document.getElementById("contain-diachi").classList.add("has-error");
                                document.getElementById('error-diachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'matp':
                            for (const error of value) {
                                document.getElementById("error-tinhthanhpho").style.setProperty('display', 'block');
                                document.getElementById("contain-tinhthanhpho").classList.add("has-error");
                                document.getElementById('error-tinhthanhpho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'maqh':
                            for (const error of value) {
                                document.getElementById("error-quanhuyen").style.setProperty('display', 'block');
                                document.getElementById("contain-quanhuyen").classList.add("has-error");
                                document.getElementById('error-quanhuyen').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'xaid':
                            for (const error of value) {
                                document.getElementById("error-xaphuongthitran").style.setProperty('display', 'block');
                                document.getElementById("contain-xaphuongthitran").classList.add("has-error");
                                document.getElementById('error-xaphuongthitran').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'loaidiachi':
                            for (const error of value) {
                                document.getElementById("error-loaidiachi").style.setProperty('display', 'block');
                                document.getElementById("error-loaidiachi").classList.add("has-error");
                                document.getElementById('error-loaidiachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'phuongthucthanhtoan':
                            for (const error of value) {
                                document.getElementById("error-phuongthucthanhtoan").style.setProperty('display', 'block');
                                document.getElementById("error-phuongthucthanhtoan").classList.add("has-error");
                                document.getElementById('error-phuongthucthanhtoan').innerHTML = "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                    }
                }
                break;
            case 'null':
                alert('Vui lòng chọn sản phẩm và thanh toán');
                window.location.href = response.data.link;
                break;
            default:
                alert('số lượng không đáp ứng được, vui lòng giảm xuống');
                window.location.href = response.data.link;
                break;
        }
    })
}
