function addVoucherToWallet(id_voucher, id_kh) {
    axios.post('add-voucher-to-wallet', {
        id_voucher: id_voucher,
        id_kh: id_kh
    })
    .then((response) => {
        console.log(response.data)
        if (response.data.success === true) {
            alert('Thêm voucher thành công');
            window.location.href="/manage-voucher-wallet";
        } else {
            alert('Không thể thêm voucher');
            window.location.href="/manage-voucher-wallet";
        }
    });
}