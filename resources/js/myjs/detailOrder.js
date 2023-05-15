function cancelOrder(idDonhang) {
    axios.post('/detail-order/cancel-order', {
        idDonhang: idDonhang
    })
    .then((response) => {
        if (response.data.success === false) {
            alert('Hủy đơn hàng thất bại');
        } else {
            document.getElementById('cancel-button').style.display = "none";
        }
    })
}