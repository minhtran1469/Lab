document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Ẩn dropdown khi click ra ngoài
    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
    });

    // Ngăn dropdown bị ẩn khi click bên trong
    dropdownMenu.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

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
   