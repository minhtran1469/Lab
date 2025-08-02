
    // Dropdown menu toggle
        document.querySelector('.icon-menu img').onclick = function(e) {
            e.stopPropagation();
            var menu = document.getElementById('dropdown-menu');
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        };
        // Hide dropdown when clicking outside
        document.body.onclick = function() {
            var menu = document.getElementById('dropdown-menu');
            if(menu) menu.style.display = 'none';
        };
   function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra xem sản phẩm đã có chưa
        const index = cart.findIndex(item => item.name === name);
        if (index > -1) {
            cart[index].quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Đã thêm vào giỏ hàng!');
    }
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cartCount");
  if (countElement) {
    countElement.textContent = totalCount;
  }
}
 document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});
   