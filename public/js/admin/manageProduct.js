const addProductform = document.querySelector("#form-manage-product");

addProductform.addEventListener("submit", (e) => {
    e.preventDefault();

    let tensach = document.getElementById('manage-product-tensach').value;
    let theloai = document.getElementById('manage-product-theloai');
    let gia = document.getElementById('manage-product-gia').value;
    let giakhuyenmai = document.getElementById('manage-product-giakhuyenmai').value;
    let mota = document.getElementById('manage-product-mota').value;
    let soluong = document.getElementById('manage-product-soluong').value;
    let tacgia = document.getElementById('manage-product-tacgia').value;
    let noibat = document.getElementById('manage-product-noibat').checked;

    if (noibat) {
        noibat = 1;
    } else {
        noibat = 0;
    }
    var theloaiSelected = [...theloai.options]
    .filter(option => option.selected)
    .map(option => option.value);

    let data = new FormData(addProductform);

    data.append('tensach', tensach);
    data.append('theloai', theloaiSelected);
    data.append('gia', gia);
    data.append('giakhuyenmai', giakhuyenmai);
    data.append('mota', mota);
    data.append('soluong', soluong);
    data.append('tacgia', tacgia);
    data.append('noibat', noibat);

    axios.post('/upload-file', data)
    .then((response) => {
        // hủy bỏ error search manage product
        document.querySelector('#manage-product-notfound').style.display = 'none';
        document.querySelector('#manage-product-list').style.display = 'inline-block';
        if (response.data.success === true) {
            alert('Thêm sản phẩm thành công')

            document.getElementById('manage-product-tensach').value = "";
            document.getElementById('manage-product-theloai').value = "";
            document.getElementById('manage-product-gia').value = "";
            document.getElementById('manage-product-giakhuyenmai').value = "";
            document.getElementById('manage-product-mota').value = "";
            document.getElementById('manage-product-file-hinhanh').value = "";
            document.getElementById('manage-product-soluong').value = "";
            document.getElementById('manage-product-tacgia').value = "";

            document.getElementById('body-table-product').innerHTML = response.data.divTableProduct;
        } else {
            document.getElementById('manage-product-error-tensach').innerHTML = "";
            document.getElementById('manage-product-error-theloai').innerHTML = "";
            document.getElementById('manage-product-error-gia').innerHTML = "";
            document.getElementById('manage-product-error-giakhuyenmai').innerHTML = "";
            document.getElementById('manage-product-error-mota').innerHTML = "";
            document.getElementById('manage-product-error-file-hinhanh').innerHTML = "";
            document.getElementById('manage-product-error-soluong').innerHTML = "";
            document.getElementById('manage-product-error-tacgia').innerHTML = "";

            for(const [key, value] of Object.entries(response.data.errors)) {
                switch (key) {
                    case 'tensach':
                        for (const error of value) {
                            document.getElementById('manage-product-error-tensach').style.display = 'block';
                            document.getElementById('manage-product-error-tensach').innerHTML += error + "<br>";
                        }
                        break;
                    case 'theloai':
                        for (const error of value) {
                            document.getElementById('manage-product-error-theloai').style.display = 'block';
                            document.getElementById('manage-product-error-theloai').innerHTML += error + "<br>";
                        }
                        break;
                    case 'gia':
                        for (const error of value) {
                            document.getElementById('manage-product-error-gia').style.display = 'block';
                            document.getElementById('manage-product-error-gia').innerHTML += error + "<br>";
                        }
                        break;
                    case 'giakhuyenmai':
                        for (const error of value) {
                            document.getElementById('manage-product-error-giakhuyenmai').style.display = 'block';
                            document.getElementById('manage-product-error-giakhuyenmai').innerHTML += error + "<br>";
                        }
                        break;
                    case 'mota':
                        for (const error of value) {
                            document.getElementById('manage-product-error-mota').style.display = 'block';
                            document.getElementById('manage-product-error-mota').innerHTML += error + "<br>";
                        }
                        break;
                    case 'file-hinhanh':
                        for (const error of value) {
                            document.getElementById('manage-product-error-file-hinhanh').style.display = 'block';
                            document.getElementById('manage-product-error-file-hinhanh').innerHTML = error;
                        }
                        break;
                    case 'soluong':
                    for (const error of value) {
                        document.getElementById('manage-product-error-soluong').style.display = 'block';
                        document.getElementById('manage-product-error-soluong').innerHTML = error;
                    }
                    break;
                    case 'tacgia':
                        for (const error of value) {
                            document.getElementById('manage-product-error-tacgia').style.display = 'block';
                            document.getElementById('manage-product-error-tacgia').innerHTML += error + "<br>";
                        }
                        break;
                }
            }
        }
    })
})

function showDetailProduct(id) {
    document.getElementById('manage-product-error-tensach').innerHTML = "";
    document.getElementById('manage-product-error-theloai').innerHTML = "";
    document.getElementById('manage-product-error-gia').innerHTML = "";
    document.getElementById('manage-product-error-giakhuyenmai').innerHTML = "";
    document.getElementById('manage-product-error-mota').innerHTML = "";
    document.getElementById('manage-product-error-file-hinhanh').innerHTML = "";
    document.getElementById('manage-product-error-soluong').innerHTML = "";
    document.getElementById('manage-product-error-tacgia').innerHTML = "";

    document.getElementById('cancel-modify').style.display = 'inline-block';
    document.getElementById('submitSach').style.display = 'none';
    document.getElementById('updateSach').style.display = 'inline-block';

    axios.get('/show-detail-product', {
        params: {
            id: id
        }
    })
    .then((response) => {
        switch(response.data.success) {
            case true:
                let giakhuyenmai = null;
                document.getElementById('manage-product-tensach').value = response.data.sach.tensach;
                document.getElementById('manage-product-gia').value = parseInt(response.data.sach.gia)/1000;
                if(response.data.sach.giakhuyenmai !== null) {
                    giakhuyenmai = parseFloat(response.data.sach.giakhuyenmai)/1000 
                }
                document.getElementById('manage-product-giakhuyenmai').value = giakhuyenmai;
                document.getElementById('manage-product-mota').value = response.data.sach.mota;
                document.getElementById('manage-product-soluong').value = response.data.sach.soluong;
                document.getElementById('manage-product-theloai').innerHTML = response.data.theloai;
                document.getElementById('id_s').value = response.data.sach.id;

                //   noi bat
                if (response.data.sach.noibat === 1) {
                    document.getElementById('manage-product-noibat').checked = true;
                } else {
                    document.getElementById('manage-product-noibat').checked = false;
                }
                //   tac gia
                document.getElementById('manage-product-tacgia').value = response.data.sach.tacgia;
                //   kinh doanh hay khong
                if (parseInt(response.data.sach.trangthaikinhdoanh) === 0) {
                    document.getElementById('deleteSach').style.display = 'none';
                    document.getElementById('resaleSach').style.display = 'inline-block';
                } else {
                    document.getElementById('resaleSach').style.display = 'none';
                    document.getElementById('deleteSach').style.display = 'inline-block';
                }
                break;
        }
    })
}

// cancel button
const cancelBtn = document.querySelector("#cancel-modify");

cancelBtn.addEventListener("click", () => {
    // huy cac hang errror
    document.getElementById('manage-product-error-tensach').innerHTML = "";
    document.getElementById('manage-product-error-theloai').innerHTML = "";
    document.getElementById('manage-product-error-gia').innerHTML = "";
    document.getElementById('manage-product-error-giakhuyenmai').innerHTML = "";
    document.getElementById('manage-product-error-mota').innerHTML = "";
    document.getElementById('manage-product-error-file-hinhanh').innerHTML = "";
    document.getElementById('manage-product-error-soluong').innerHTML = "";
    document.getElementById('manage-product-error-tacgia').innerHTML = "";

    // tắt button update, delete
    document.getElementById('cancel-modify').style.display = 'none';
    document.getElementById('submitSach').style.display = 'inline-block';
    document.getElementById('updateSach').style.display = 'none';
    document.getElementById('deleteSach').style.display = 'none';

    // set id sách = rỗng, do không còn chọn sách
    // set giá trị các input là rỗng do không còn chọn sách
    document.getElementById('id_s').value = '';
    document.getElementById('manage-product-tensach').value = '';
    document.getElementById('manage-product-gia').value = '';
    document.getElementById('manage-product-giakhuyenmai').value =  '';
    document.getElementById('manage-product-mota').value = '';
    document.getElementById('manage-product-soluong').value = '';
    document.getElementById('manage-product-tacgia').value = '';
    $("#manage-product-theloai").val(null).trigger("change"); 
})

// update button
const updateBtn = document.querySelector("#updateSach");
const formUpdate = document.querySelector("#form-manage-product");

updateBtn.addEventListener("click", () => {
    // hủy bỏ error search manage product
    document.getElementById('manage-product-error-tensach').style.display = 'none';
    document.getElementById('manage-product-error-theloai').style.display = 'none';
    document.getElementById('manage-product-error-gia').style.display = 'none';
    document.getElementById('manage-product-error-giakhuyenmai').style.display = 'none';
    document.getElementById('manage-product-error-mota').style.display = 'none';
    document.getElementById('manage-product-error-soluong').style.display = 'none';
    document.getElementById('manage-product-error-tacgia').style.display = 'none';
    document.querySelector('#manage-product-notfound').style.display = 'none';
    document.querySelector('#manage-product-list').style.display = 'inline-block';

    let id_s = document.getElementById('id_s').value;
    let tensach = document.getElementById('manage-product-tensach').value;
    let theloai = document.getElementById('manage-product-theloai');
    let gia = document.getElementById('manage-product-gia').value;
    let giakhuyenmai = document.getElementById('manage-product-giakhuyenmai').value;
    let mota = document.getElementById('manage-product-mota').value;
    let soluong = document.getElementById('manage-product-soluong').value;
    let tacgia = document.getElementById('manage-product-tacgia').value;
    let noibat = document.getElementById('manage-product-noibat').checked;

    if (noibat) {
        noibat = 1;
    } else {
        noibat = 0;
    }
    var theloaiSelected = [...theloai.options]
    .filter(option => option.selected)
    .map(option => option.value);

    let data = new FormData(formUpdate);

    data.append('id_s', id_s);
    data.append('tensach', tensach);
    data.append('theloai', theloaiSelected);
    data.append('gia', gia);
    data.append('giakhuyenmai', giakhuyenmai);
    data.append('mota', mota);
    data.append('soluong', soluong);
    data.append('tacgia', tacgia);
    data.append('noibat', noibat);

    axios.post('/update-product', data)
    .then((response) => {
        if (response.data.success === true) {
            alert('Cập nhật thành công')
            document.getElementById('body-table-product').innerHTML = response.data.divTableProduct;
        } else {
            // hủy cac hàng errror
            document.getElementById('manage-product-error-tensach').innerHTML = "";
            document.getElementById('manage-product-error-theloai').innerHTML = "";
            document.getElementById('manage-product-error-gia').innerHTML = "";
            document.getElementById('manage-product-error-giakhuyenmai').innerHTML = "";
            document.getElementById('manage-product-error-mota').innerHTML = "";
            document.getElementById('manage-product-error-file-hinhanh').innerHTML = "";
            document.getElementById('manage-product-error-soluong').innerHTML = "";
            document.getElementById('manage-product-error-tacgia').innerHTML = "";

            for(const [key, value] of Object.entries(response.data.errors)) {
                switch (key) {
                    case 'tensach':
                        for (const error of value) {
                            document.getElementById('manage-product-error-tensach').style.display = 'block';
                            document.getElementById('manage-product-error-tensach').innerHTML += error + "<br>";
                        }
                        break;
                    case 'theloai':
                        for (const error of value) {
                            document.getElementById('manage-product-error-theloai').style.display = 'block';
                            document.getElementById('manage-product-error-theloai').innerHTML += error + "<br>";
                        }
                        break;
                    case 'gia':
                        for (const error of value) {
                            document.getElementById('manage-product-error-gia').style.display = 'block';
                            document.getElementById('manage-product-error-gia').innerHTML += error + "<br>";
                        }
                        break;
                    case 'giakhuyenmai':
                        for (const error of value) {
                            document.getElementById('manage-product-error-giakhuyenmai').style.display = 'block';
                            document.getElementById('manage-product-error-giakhuyenmai').innerHTML += error + "<br>";
                        }
                        break;
                    case 'mota':
                        for (const error of value) {
                            document.getElementById('manage-product-error-mota').style.display = 'block';
                            document.getElementById('manage-product-error-mota').innerHTML += error + "<br>";
                        }
                        break;
                    case 'soluong':
                    for (const error of value) {
                        document.getElementById('manage-product-error-soluong').style.display = 'block';
                        document.getElementById('manage-product-error-soluong').innerHTML = error;
                    }
                    break;
                    case 'tacgia':
                        for (const error of value) {
                            document.getElementById('manage-product-error-tacgia').style.display = 'block';
                            document.getElementById('manage-product-error-tacgia').innerHTML += error + "<br>";
                        }
                        break;
                }
            }
        }
    })
})

// delete button
const deleteBtn = document.querySelector("#deleteSach");

deleteBtn.addEventListener("click", () => {
    let id_s = document.getElementById('id_s').value;
    axios.post('/delete-product', {
        id_s: id_s
    })
    .then((response) => {
        alert('Đã ngừng kinh doanh sản phẩm');
        document.getElementById('body-table-product').innerHTML = response.data.divTableProduct;
        // kinh doanh hay khong
        document.getElementById('deleteSach').style.display = 'none';
        document.getElementById('resaleSach').style.display = 'inline-block';
    })
})

// resale button
const resaleBtn = document.querySelector("#resaleSach");

resaleBtn.addEventListener("click", () => {
    let id_s = document.getElementById('id_s').value;
    axios.post('/resale-product', {
        id_s: id_s
    })
    .then((response) => {
        alert('Sản phẩm đã đã được bày bán');
        document.getElementById('body-table-product').innerHTML = response.data.divTableProduct;
        // kinh doanh hay khong
        document.getElementById('resaleSach').style.display = 'none';
        document.getElementById('deleteSach').style.display = 'inline-block';
    })
})
const ElementFormSearchProduct = document.querySelector('#manage-product-form-search');
ElementFormSearchProduct.addEventListener('submit', (event) => {
    event.preventDefault();
})

let manageProductTimer = null;
const ElementManageProductInputSearch = document.getElementById('manage-product-keyword-search-product');

ElementManageProductInputSearch.addEventListener('keyup', (e) => {
    let keyword = document.getElementById('manage-product-keyword-search-product').value;
    clearTimeout(manageProductTimer);
    manageProductTimer = setTimeout(() => {
        getManageProductByKeyword(keyword);
    }, 500);
});

const getManageProductByKeyword = (keyword) => {
    axios.post('/get-manage-product-by-keyword', {
        keyword: keyword
    })
    .then((response) => {
        console.log(response)
        switch (response.data.success) {
            case true:
                document.getElementById('body-table-product').innerHTML = response.data.divTableProduct;
                document.querySelector('#manage-product-notfound').style.display = 'none';
                document.querySelector('#manage-product-list').style.display = 'inline-block';
                break;
            case false:
                document.querySelector('#manage-product-notfound').style.display = 'inline-block';
                document.querySelector('#manage-product-list').style.display = 'none';
                break;
        }
    });
}