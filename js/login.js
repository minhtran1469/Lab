document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload trang

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Lấy danh sách người dùng từ LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra đăng nhập
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'homeForm.html';
    } else {
        alert('Sai tài khoản hoặc mật khẩu!');
    }
});
