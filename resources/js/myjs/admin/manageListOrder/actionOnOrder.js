function showDetailOrder(id) {
    axios.get('/show-detail-order', {
        params: {
            id: id
        }
    })
    .then((response) => {
        document.getElementById('manage-list-order-form-detail').style.display = "block";
        let tableList = document.getElementById('manage-list-order-table-list');
        tableList.classList.remove('col-lg-12');
        tableList.classList.add('col-lg-7');

        let btnReady = document.getElementById('manage-list-order-btn-ready');
        let btnDeny = document.getElementById('manage-list-order-btn-deny');
        let btnDelivery = document.getElementById('manage-list-order-btn-delivery');
        let btnConfirmDeliverd = document.getElementById('manage-list-order-btn-confirm-delivered');
        let btnReaccept = document.getElementById('manage-list-order-btn-reaccept');
        let btnFail = document.getElementById('manage-list-order-btn-fail');

        btnReady.style.display = 'none';
        btnDeny.style.display = 'none';
        btnDelivery.style.display = 'none';
        btnConfirmDeliverd.style.display = 'none';
        btnReaccept.style.display = 'none';
        btnFail.style.display = 'none';

        if (response.data.success == true) {
            document.getElementById('manage-list-order-table-list-order').innerHTML = response.data.divDetailOrder;
            switch (response.data.trangthai) {
                case 1:
                    btnReady.style.display = 'inline-block';
                    btnDeny.style.display = 'inline-block';
                    break;
                case 2:
                    btnDelivery.style.display = 'inline-block';
                    break;
                case 3:
                    btnConfirmDeliverd.style.display = 'inline-block';
                    btnFail.style.display = 'inline-block';
                    break;
                case 7:
                    btnReaccept.style.display = 'inline-block';
                    break;
                case 8:
                    btnReaccept.style.display = 'inline-block';
                    break;
            }
        }
        document.getElementById('id-detail-order').value = id;
    })
}

// cancel form detail
const ElementCancelFormDetail = document.querySelector('#manage-list-order-cancel-form-detail');
ElementCancelFormDetail.addEventListener('click', () => {
    document.getElementById('manage-list-order-form-detail').style.display = "none";
    let tableList = document.getElementById('manage-list-order-table-list');
    tableList.classList.remove('col-lg-7');
    tableList.classList.add('col-lg-12');
})
