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