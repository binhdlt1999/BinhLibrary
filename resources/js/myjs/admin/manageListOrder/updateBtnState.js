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

