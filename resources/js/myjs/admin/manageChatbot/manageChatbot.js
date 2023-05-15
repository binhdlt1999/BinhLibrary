function acceptKichban(id) {
    let idTraloi = 'manage-chatbot-answer' + id;
    let traloi = document.getElementById(idTraloi).value;
    axios.post('accept-chatbot', {
        id: id,
        traloi: traloi
    })
    .then((response) => {
        alert('Đã cập nhật câu trả lời cho Bot')
    })
}

function denyKichban(id) {
    axios.post('deny-chatbot', {
        id: id
    })
    .then((response) => {
        alert('Đã từ chối trả lời')
        document.getElementById('body-table-chatbot').innerHTML = response.data.div;
    })
}
