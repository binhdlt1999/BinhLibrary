function signUp() {
    let username = document.getElementById('sign-up-username').value;
    let password = document.getElementById('sign-up-password').value;
    let rePassword = document.getElementById('sign-up-re-password').value;
    
    axios.post('/sign-up', {
        'username': username,
        'password': password,
        'rePassword': rePassword,
    })
    .then((response) => {
        if(response.data.success === false) {
            let errors = response.data.errors;
            document.getElementById("contain-success").style.setProperty('display', 'none');
            document.getElementById("contain-login-fail").style.setProperty('display', 'none');
            document.getElementById("contain-errors").style.setProperty('display', 'block');
            document.getElementById('error-username').innerHTML = "";
            document.getElementById('error-password').innerHTML = "";
            document.getElementById('error-re-password').innerHTML = "";

            for(const [key, value] of Object.entries(errors)) {
                switch (key) {
                    case 'username':
                        for (const error of value) {
                            document.getElementById('error-username').innerHTML += "<li>- " + error + "</li>";
                        }
                        break;
                    case 'password':
                        for (const error of value) {
                            document.getElementById('error-password').innerHTML += "<li>- " + error + "</li>";
                        }
                        break;
                    case 'rePassword':
                        for (const error of value) {
                            document.getElementById('error-re-password').innerHTML += "<li>- " + error + "</li>";
                        }
                        break;
                }
            }
        }
        else {
            document.getElementById("contain-errors").style.setProperty('display', 'none');
            document.getElementById("contain-login-fail").style.setProperty('display', 'none');
            document.getElementById("contain-success").style.setProperty('display', 'block');

            document.getElementById('sign-up-username').value = "";
            document.getElementById('sign-up-password').value = "";
            document.getElementById('sign-up-re-password').value = "";
        }
    })
}

function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    axios.post('/login', {
        'username': username,
        'password': password,
    })
    .then((response) => {
        if (response.data.validate === false) {
            let errors = response.data.errors;
            document.getElementById("contain-success").style.setProperty('display', 'none');
            document.getElementById("contain-login-fail").style.setProperty('display', 'none');
            document.getElementById("contain-errors").style.setProperty('display', 'block');
            document.getElementById('error-username').innerHTML = "";
            document.getElementById('error-password').innerHTML = "";
            document.getElementById('error-re-password').innerHTML = "";

            for(const [key, value] of Object.entries(errors)) {
                switch (key) {
                    case 'username':
                        for (const error of value) {
                            document.getElementById('error-username').innerHTML += "<li>- " + error + "</li>";
                        }
                        break;
                    case 'password':
                        for (const error of value) {
                            document.getElementById('error-password').innerHTML += "<li>- " + error + "</li>";
                        }
                        break;
                }
            }
        }
        else if (response.data.validate === true && response.data.login === false) {
            document.getElementById("contain-errors").style.setProperty('display', 'none');
            document.getElementById("contain-success").style.setProperty('display', 'none');
            document.getElementById("contain-login-fail").style.setProperty('display', 'block');
        }
        else if (response.data.validate === true && response.data.login === true) {
            window.location.replace("/");
        }
    })
}
