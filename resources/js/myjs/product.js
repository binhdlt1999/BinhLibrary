function addProduct($id) {
    axios.post('/add-product-to-cart', {
        idProduct: $id
    })
    .then((response) => {
        if (response.data.success === false) {
            switch (response.data.action) {
                case 'failToCreateCart':
                    alert('Cửa hàng không đủ số lượng để cung cấp sản phẩm này');
                    break;
                case 'removeFromCart':
                    alert('Sản phẩm này sẽ bị xóa khỏi giỏ hàng của bạn do cửa hàng không còn đủ số lượng');
                    window.location.href="/";
                    break;
                case 'decreaseFromCart':
                    alert('Số lượng của sản phẩm này trong giỏ hàng của bạn sẽ bị giảm do vượt quá khả năng của cửa hàng.');
                    window.location.href="/";
                    break;
                case 'failToAddToCart':
                    alert('Cửa hàng không đủ số lượng để cung cấp sản phẩm này');
                    break;
            }
        } else {
            alert('Đã thêm sản phẩm vào giỏ hàng');
            const value = $('#value-number-cart').val();
            var totalProductInCart = parseInt(value);
            ++totalProductInCart;
    
            $('#show-number-cart').html(totalProductInCart);
            $('#value-number-cart').val(totalProductInCart);
    
            if(response.data.action === 'add') {
                $('#product-minicart').append(response.data.divCartMini);
            }
        }
    })
}
