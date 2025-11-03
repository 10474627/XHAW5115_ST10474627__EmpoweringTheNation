document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const clearCartButton = document.getElementById('clear-cart-button');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let total = 0;

        if (cart.length === 0) {
            cartEmptyMessage.style.display = 'block';
        } else {
            cartEmptyMessage.style.display = 'none';
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="item-details">
                        <h2>${item.name}</h2>
                        <span class="duration">${item.duration}</span>
                    </div>
                    <span class="price">R${item.price}</span>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
                total += item.price;
            });
        }
        cartTotalAmount.textContent = `R${total}`;
    }

    clearCartButton.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    renderCart();
});

function addItemToCart(name, duration, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, duration, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
