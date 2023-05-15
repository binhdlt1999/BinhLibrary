function searchCustomerLockAccount(id) {
    axios.post('/lock-customer', {
        id: id
    })
    .then((response) => {
        document.getElementById('tr-show-customer').innerHTML = response.data.div;
    })
}

function searchCustomerUnlock(id) {
    axios.post('/unlock-customer', {
        id: id
    })
    .then((response) => {
        document.getElementById('tr-show-customer').innerHTML = response.data.div;
    })
}