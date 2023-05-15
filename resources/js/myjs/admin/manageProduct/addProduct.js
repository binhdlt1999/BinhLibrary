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
