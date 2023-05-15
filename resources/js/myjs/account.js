// function enableButtonSubmitInfoToChange(value, type) {
//     let oldValue = value;
//     let newValue = document.getElementById(type).value;
//     if (oldValue != newValue) {
//         document.getElementById('button-change-info').disabled = false;
//         document.getElementById('button-change-info').style.backgroundColor = "";
//     } else {
//         document.getElementById('button-change-info').disabled = true;
//         document.getElementById('button-change-info').style.backgroundColor = "gray";
//     }
// }

// function enableButtomSubmitInfoToChangeRadioType(oldValue) {
//     let elemLoaidiachi = document.getElementsByName("loaidiachi");
//     let newValue;
//     for(var elem in elemLoaidiachi)
//     {
//         if(elemLoaidiachi[elem].checked)
//         {
//             if(elemLoaidiachi[elem].value == 1)
//                 newValue = 1;
//             else if(elemLoaidiachi[elem].value == 2)
//                 newValue = 2;
//             break;
//         }
//     }
//     if (oldValue != newValue) {
//         document.getElementById('button-change-info').disabled = false;
//         document.getElementById('button-change-info').style.backgroundColor = "";
//     } else {
//         document.getElementById('button-change-info').disabled = true;
//         document.getElementById('button-change-info').style.backgroundColor = "gray";
//     }
// }

function submitInfoToChange(idKhachhang) {
    let ho = document.getElementById('manage-ho').value;
    let ten = document.getElementById('manage-ten').value;
    let dtdd = document.getElementById('manage-dtdd').value;

    let matp = document.getElementById('manage-tinhthanhpho').value;
    let maqh = document.getElementById('manage-quanhuyen').value;
    let xaid = document.getElementById('manage-xaphuongthitran').value;
    let diachi = document.getElementById('manage-diachi').value;
    let loaidiachi;
    var ele = document.getElementsByName('manage-loaidiachi');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            loaidiachi = ele[i].value;
        }
    }
    axios.post('/submit-info-to-change', {
        idKhachhang: idKhachhang,
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
                alert('Cập nhật thành công');
                window.location.href="/manage-info";
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
                                document.getElementById("manage-error-ho").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-ho").classList.add("has-error");
                                document.getElementById('manage-error-ho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'ten':
                            for (const error of value) {
                                document.getElementById("manage-error-ten").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-ten").classList.add("has-error");
                                document.getElementById('manage-error-ten').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'dtdd':
                            for (const error of value) {
                                document.getElementById("manage-error-dtdd").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-dtdd").classList.add("has-error");
                                document.getElementById('manage-error-dtdd').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'diachi':
                            for (const error of value) {
                                document.getElementById("manage-error-diachi").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-diachi").classList.add("has-error");
                                document.getElementById('manage-manage-error-diachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'matp':
                            for (const error of value) {
                                document.getElementById("manage-error-tinhthanhpho").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-tinhthanhpho").classList.add("has-error");
                                document.getElementById('manage-error-tinhthanhpho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'maqh':
                            for (const error of value) {
                                document.getElementById("manage-error-quanhuyen").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-quanhuyen").classList.add("has-error");
                                document.getElementById('manage-error-quanhuyen').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'xaid':
                            for (const error of value) {
                                document.getElementById("manage-error-xaphuongthitran").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-xaphuongthitran").classList.add("has-error");
                                document.getElementById('manage-error-xaphuongthitran').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'loaidiachi':
                            for (const error of value) {
                                document.getElementById("manage-error-loaidiachi").style.setProperty('display', 'block');
                                document.getElementById("manage-error-loaidiachi").classList.add("has-error");
                                document.getElementById('manage-error-loaidiachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                    }
                }
                break;
        }
    })
}

function manageGetDistrict() {
    document.getElementById('manage-xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
    
    let matp = document.getElementById('manage-tinhthanhpho').value;
    axios.get('/get-district', {
        params: {
            matp: matp
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-quanhuyen').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-quanhuyen').innerHTML = response.data.div;
        }
    })
}

function manageGetWard() {
    let maqh = document.getElementById('manage-quanhuyen').value;
    axios.get('/get-ward', {
        params: {
            maqh: maqh
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-xaphuongthitran').innerHTML = response.data.div;
        }
    })
}
