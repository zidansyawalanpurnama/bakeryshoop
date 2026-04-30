function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " ditambahkan ke keranjang 🛒");
}

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let list = document.getElementById("cart-list");
    let total = 0;

    if (!list) return;

    list.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - Rp ${item.price}
            <button onclick="removeItem(${index})" style="float:right;">❌</button>
        `;

        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: Rp " + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Keranjang kosong 😢");
        return;
    }

    alert("Checkout berhasil 🎉");

    localStorage.removeItem("cart");
    renderCart();
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}