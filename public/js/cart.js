function changeAmount(id) {
    let nameRowSach = "rowSach"+id;
    let nameElementInputSachInCart = "sach"+id+"-in-cart";
    let nameElementInputAmount = "amount"+id;
    let tamtinhsanpham = "tamtinhsanpham"+id;

    let idDonhang = document.getElementById("idDonhang").value;
    let idSachInCart = document.getElementById(nameElementInputSachInCart).value;
    let amount = document.getElementById(nameElementInputAmount).value;
    let rowsach = document.getElementById(nameRowSach);

    if (amount == null || amount == '') {
        amount = 0;
    } else {
        amount = parseInt(amount);
    }

    axios.post('/change-amount', {
        idDonhang: idDonhang,
        idSach: idSachInCart,
        amount: amount
    })
    .then((response) => {
        console.log(amount)
        if (response.data.overAmount && response.data.canIncrease && response.data.success === true) {
            alert('Cửa hàng chỉ cho phép mua tối đa 10 quyển trên mỗi đầu sách');
            document.getElementById(nameElementInputAmount).value = response.data.soluong;
        } else if (response.data.canIncrease === false && response.data.success === true) {
            alert('Cửa hàng không đủ số lượng sản phẩm này, tối đa là ' + response.data.soluong + ' sản phẩm');
            document.getElementById(nameElementInputAmount).value = response.data.soluong;
            rowsach.style.backgroundColor = "#e7e9eb";
        } else if (response.data.success === false) {
            alert('Cửa hàng không còn cung cấp sản phẩm này, xóa nếu bạn muốn!');
            rowsach.style.backgroundColor = "#d9534f";
            document.getElementById(nameElementInputAmount).value = response.data.soluong;
        } else if (amount === 0) {
            rowsach.style.backgroundColor = "#d9534f";
        } else {
            rowsach.style.backgroundColor = "#e7e9eb";
        }
        document.getElementById(tamtinhsanpham).innerHTML = "<p>" + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.tamtinhsanpham) + "</p>";
        document.getElementById('tamtinh').value = response.data.tongtien;
        document.getElementById('tongtien').value = response.data.tongtien;
        document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.tongtien);
    })
}

function removeSachInCart(id) {
    let idDonhang = document.getElementById("idDonhang").value;
    let nameElementInputSachInCart = "sach"+id+"-in-cart";
    let elementSachInCart = document.getElementById(nameElementInputSachInCart);
    
    axios.post('/remove-product-in-cart', {
        idDonhang: idDonhang,
        idSach: elementSachInCart.value
    })
    .then((response) => {
        if (response.data.success === false) {
            alert('không thể xóa');
        } else {
            document.getElementById('tamtinh').value = response.data.tamtinh;
            document.getElementById('tongtien').value = response.data.tongtien;

            document.getElementById('show_tongtien').innerHTML = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(response.data.tongtien);
        }
    })
}
