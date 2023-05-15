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
