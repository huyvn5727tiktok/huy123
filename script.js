// Xử lý chuyển đổi giữa đăng nhập và đăng ký
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Đăng nhập với:\nTên đăng nhập: ${username}\nMật khẩu: ${password}`);
});

// Xử lý đăng ký
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    alert(`Đăng ký thành công với:\nTên đăng nhập: ${username}\nEmail: ${email}\nMật khẩu: ${password}`);
});

// Xử lý xóa sản phẩm khỏi giỏ hàng
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cartItem = button.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
    });
});

// Cập nhật tổng giá
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const priceText = item.querySelector('p').textContent;
        const price = parseInt(priceText.replace(/\D/g, ''), 10);
        total += price;
    });
    document.getElementById('total-price').textContent = `${total.toLocaleString()}đ`;
}