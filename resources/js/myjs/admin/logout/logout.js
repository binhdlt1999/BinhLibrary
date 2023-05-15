const ElementAdminBtnLogout = document.querySelector("#admin-logout");

ElementAdminBtnLogout.addEventListener("click", () => {
    axios.post('/admin-logout')
    .then((response) => {
        window.location.reload();
    })
})