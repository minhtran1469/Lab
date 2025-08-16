function validateInput(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const isEmailValid = emailPattern.test(email);

  return {
    emailValid: isEmailValid,
  };
}

// Example usage:
const result = validateInput("abc@example.com");
console.log(result);  // { emailValid: true,}
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    // Kiểm tra mật khẩu
    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    // Lấy danh sách người dùng đã đăng ký
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra username hoặc email đã tồn tại
    const isDuplicate = users.some(user => user.username === username || user.email === email);
    if (isDuplicate) {
        alert("Tên người dùng hoặc email đã tồn tại!");
        return;
    }
    
    // Thêm người dùng mới vào danh sách
    users.push({
        username: username,
        email: email,
        password: password
    });

    // Lưu lại vào LocalStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công!");
    window.location.href = 'loginForm.html';
});
