const ElementFormSearchCustomer = document.querySelector('#form-search-customer');
ElementFormSearchCustomer.addEventListener('submit', (event) => {
    event.preventDefault();
})

let timer = null;
const ElementInputSearch = document.getElementById('keyword-search-customer');

ElementInputSearch.addEventListener('keyup', (e) => {
    let keyword = document.getElementById('keyword-search-customer').value;
    clearTimeout(timer);
    timer = setTimeout(() => {
        getCustomer(keyword);
    }, 500);
});

const getCustomer = (keyword) => {
    axios.post('/get-customer-by-keyword', {
        keyword: keyword
    })
    .then((response) => {
        switch (response.data.success) {
            case true:
                document.querySelector('#div-search-fail').style.display = 'none';
                document.querySelector('#div-show-customer').style.display = 'block';
                document.querySelector('#tr-show-customer').innerHTML = response.data.div;
                break;
            case false:
                document.querySelector('#div-show-customer').style.display = 'none';
                document.querySelector('#div-search-fail').style.display = 'block';
                break;
        }
    });
}
