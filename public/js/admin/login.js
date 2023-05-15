const adminLoginform = document.querySelector("#login-form");

adminLoginform.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById('admin-login-username').value;
    let password = document.getElementById('admin-login-password').value;

    axios.post('/admin-login', {
        username: username,
        password: password
    })
    .then((response) => {
        document.getElementById('admin-login-fail').innerHTML = '';
        document.getElementById('admin-login-error-username').innerHTML = "";
        document.getElementById('admin-login-error-password').innerHTML = "";
        if (response.data.validate == false) {
            for(const [key, value] of Object.entries(response.data.errors)) {
                switch (key) {
                    case 'username':
                        for (const error of value) {
                            document.getElementById('admin-login-error-username').style.display = 'block';
                            document.getElementById('admin-login-error-username').innerHTML += error + "<br>";
                        }
                        break;
                    case 'password':
                        for (const error of value) {
                            document.getElementById('admin-login-error-password').style.display = 'block';
                            document.getElementById('admin-login-error-password').innerHTML += error + "<br>";
                        }
                        break;
                }
            }
        } else {
            switch (response.data.login) {
                case true:
                    window.location.href="/search-people/customer";
                    break;
                case false:
                    document.getElementById('admin-login-fail').style.display = 'block';
                    document.getElementById('admin-login-fail').innerHTML = 'Sai tên đăng nhập hoặc mật khẩu';
                    break;
            }
        }
    })
});
