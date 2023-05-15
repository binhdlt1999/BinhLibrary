let ElementSubmitComment = document.getElementById('submitComment');
ElementSubmitComment.addEventListener('click', () => {
    let content = document.getElementById('content-comment').value;
    let detail_idSach = document.getElementById('detail_idSach').value;
    axios.post('/submit-comment', {
        content: content,
        detail_idSach: detail_idSach
    })
    .then((response) => {
        if(response.data.success === true) {
            alert('Đã đăng bình luận');
            document.getElementById("contain-comment").innerHTML = response.data.div;
            document.getElementById('content-comment').value = "";
        } else {
            alert('Đăng bình luận không thành công');
        }
    })
})
