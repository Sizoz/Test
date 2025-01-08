// Lấy các phần tử form
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Lấy thông tin nhập từ form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');

// Hàm để lưu thông tin người dùng vào localStorage
function saveUserData(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Hàm kiểm tra tài khoản đã tồn tại chưa
function isUserExist(email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

// Hàm kiểm tra thông tin đăng nhập
function checkLogin(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email && user.password === password);
}

// Xử lý sự kiện đăng ký
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Kiểm tra tài khoản đã tồn tại chưa
    if (isUserExist(email)) {
        alert('Tài khoản đã tồn tại!');
    } else if (password.length < 6 || password.length > 20) {
        alert('Mật khẩu phải lớn hơn 6 ký tự và nhỏ hơn 20 ký tự!');
    } else {
        saveUserData(email, password);
        alert('Đăng ký thành công!');
    }

    // Reset form
    registerForm.reset();
});

// Xử lý sự kiện đăng nhập
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    // Kiểm tra thông tin đăng nhập
    if (checkLogin(email, password)) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Tài khoản hoặc mật khẩu không đúng!');
    }

    // Reset form
    loginForm.reset();
});
