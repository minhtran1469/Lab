document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutBtn = document.querySelector(".checkout-btn");
    const paymentForm = document.getElementById("payment-form");
    const cancelBtn = document.getElementById("cancelPayment");

    function renderCart() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="padding: 20px; color: #555;">Chưa có sản phẩm nào trong giỏ hàng.</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.style.backgroundColor = '#f9f9f9';
                cartItem.style.padding = '15px';
                cartItem.style.borderRadius = '8px';
                cartItem.style.marginBottom = '20px';

                cartItem.innerHTML = `
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="item-specs">Sản phẩm chất lượng</p>
                        <div class="item-price">${item.price.toLocaleString('vi-VN')}đ</div>
                    </div>
                    <div class="item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="number" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="item-total">
                        <span>${item.price.toLocaleString('vi-VN')}đ</span> x 
                        <span>${item.quantity}</span> 
                    </div>
                    <button class="remove-btn" onclick="removeItem(${index})">
                        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="remove">
                    </button>
                `;

                cartItemsContainer.appendChild(cartItem);
            });
        }

        updateCartSummary();
    }

    function updateCartSummary() {
        let subtotal = 0;
        cart.forEach(item => subtotal += item.price * item.quantity);

        document.getElementById('subtotal').textContent = subtotal.toLocaleString('vi-VN') + 'đ';
        document.getElementById('discount').textContent = '0đ';
        document.getElementById('total').textContent = subtotal.toLocaleString('vi-VN') + 'đ';
    }

    window.updateQuantity = function(index, change) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    //  Xử lý hiển thị form thanh toán
    checkoutBtn.addEventListener("click", function () {
        paymentForm.style.display = "flex";
    });

    cancelBtn.addEventListener("click", function () {
        paymentForm.style.display = "none";
    });

    document.getElementById("checkoutForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đang được xử lý.");
        paymentForm.style.display = "none";
 
    });

    renderCart();
});
