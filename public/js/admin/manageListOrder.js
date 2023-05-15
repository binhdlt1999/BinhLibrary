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

// ready form detail
const ElementBtnReady = document.querySelector('#manage-list-order-btn-ready');
ElementBtnReady.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-ready', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
            switch (response.data.trangthai) {
                case 2:
                    btnDelivery.style.display = 'inline-block';
                    break;
            }
        }
    })
})
// deny form detail
const ElementBtnDeny = document.querySelector('#manage-list-order-btn-deny');
ElementBtnDeny.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-deny', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
            switch (response.data.trangthai) {
                case 7:
                    btnReaccept.style.display = 'inline-block';
                    break;
            }
        }
    })
})
// delivery form detail
const ElementBtnDelivery = document.querySelector('#manage-list-order-btn-delivery');
ElementBtnDelivery.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-delivery', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
            switch (response.data.trangthai) {
                case 3:
                    btnFail.style.display = 'inline-block';
                    btnConfirmDeliverd.style.display = 'inline-block';
                    break;
            }
        }
    })
})
// confirm delivered form detail
const ElementBtnConfirmDelivered = document.querySelector('#manage-list-order-btn-confirm-delivered');
ElementBtnConfirmDelivered.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-confirm-delivered', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
        }
    })
})
// fail form detail
const ElementBtnFail = document.querySelector('#manage-list-order-btn-fail');
ElementBtnFail.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-fail', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
            switch (response.data.trangthai) {
                case 8:
                    btnReaccept.style.display = 'inline-block';
                    break;
            }
        }
    })
})
// reaccept form detail
const ElementBtnReaccept = document.querySelector('#manage-list-order-btn-reaccept');
ElementBtnReaccept.addEventListener('click', () => {
    let id = document.getElementById('id-detail-order').value;
    axios.post('/update-state-to-reaccept', {
        id: id
    })
    .then((response) => {
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
            document.getElementById('body-table-product').innerHTML = response.data.divTable;
            switch (response.data.trangthai) {
                case 1:
                    btnReady.style.display = 'inline-block';
                    btnDeny.style.display = 'inline-block';
                    break;
            }
        }
    })
})


let ElementManageListOrderSearchForm = document.getElementById('manage-list-order-form-search');
ElementManageListOrderSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

let MangeListOrdertimer = null;
let ElementManageListOrderInputSearch = document.getElementById('manage-list-order-input-search');
ElementManageListOrderInputSearch.addEventListener('keyup', () => {
    let keyword = ElementManageListOrderInputSearch.value;

    clearTimeout(MangeListOrdertimer);
    MangeListOrdertimer = setTimeout(() => {
        ManageListOrderSearch(keyword);
    }, 500);
});

const ManageListOrderSearch = (keyword) => {
    axios.post('/get-list-order-by-keyword', {
        keyword: keyword
    })
    .then((response) => {
        document.querySelector('#manage-list-order-list').style.display = 'none';
        document.querySelector('#manage-list-order-notfound').style.display = 'none';

        switch (response.data.success) {
            case true:
                document.querySelector('#manage-list-order-list').style.display = 'block';
                document.querySelector('#body-table-product').innerHTML = response.data.divTable;
                break;
            case false:
                document.querySelector('#manage-list-order-notfound').style.display = 'block';
                break;
        }
    });
}
