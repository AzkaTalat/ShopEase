
/* ========== SHOP EASE PRODUCTS ========== */

const products = [
    {id:1, name:"Wireless Headphones", category:"Electronics", price:2499, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"},
    {id:2, name:"Smart Watch", category:"Electronics", price:3999, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"},
    {id:3, name:"Red Running Shoes", category:"Sports", price:3299, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"},
    {id:4, name:"Elegant Handbag", category:"Accessories", price:2799, image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"},
    {id:5, name:"Modern Table Lamp", category:"Home", price:1999, image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80"},
    {id:6, name:"Makeup Essentials", category:"Beauty", price:1599, image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"},
    {id:7, name:"Travel Backpack", category:"Accessories", price:1899, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"},
    {id:8, name:"Casual T-Shirt", category:"Fashion", price:1299, image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"},
    {id:9, name:"White Sneakers", category:"Sports", price:2499, image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=500&q=80"},
    {id:10, name:"Fashion Outfit", category:"Fashion", price:2499, image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80"},
    {id:11, name:"Digital Camera", category:"Electronics", price:18999, image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"},
    {id:12, name:"Stylish Sunglasses", category:"Accessories", price:1299, image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"},
    {id:13, name:"Skincare Collection", category:"Beauty", price:1899, image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80"},
    {id:14, name:"Decorative Cushion", category:"Home", price:799, image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80"},
    {id:15, name:"Sports Water Bottle", category:"Sports", price:599, image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80"},
    {id:16, name:"Running Sportswear", category:"Sports", price:1799, image:"https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=500&q=80"},
    {id:17, name:"Coffee Mug", category:"Home", price:499, image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80"},
    {id:18, name:"Bluetooth Speaker", category:"Electronics", price:2799, image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"},
    {id:19, name:"Classic Wallet", category:"Accessories", price:899, image:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"},
    {id:20, name:"Everyday Sneakers", category:"Fashion", price:2999, image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80"},
    {id:21, name:"Women's Handbag", category:"Accessories", price:3199, image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=500&q=80"},
    {id:22, name:"Perfume Bottle", category:"Beauty", price:2199, image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"},
    {id:23, name:"Home Decor Vase", category:"Home", price:1199, image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=500&q=80"},
    {id:24, name:"Gaming Headset", category:"Electronics", price:4299, image:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=500&q=80"},
    {id:25, name:"Casual Jacket", category:"Fashion", price:3499, image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80"},
    {id:26, name:"Yoga Mat", category:"Sports", price:1499, image:"https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=80"},
    {id:27, name:"Desk Organizer", category:"Home", price:999, image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80"},
    {id:28, name:"Beauty Brush Set", category:"Beauty", price:1299, image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"}
];

/* ========== CART DATA ========== */

let cart = [];
let selectedCategory = "All";

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const totalElement = document.getElementById("total");
const checkoutButton = document.getElementById("checkoutButton");

function money(amount) {
    return "Rs. " + amount.toLocaleString("en-PK");
}

/* ========== DISPLAY PRODUCTS ========== */

function displayProducts() {
    const term = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(function(product) {
        const matchesSearch =
            product.name.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = "";
    productCount.textContent = filtered.length + " products";
    emptyMessage.hidden = filtered.length !== 0;

    filtered.forEach(function(product) {
        const card = document.createElement("article");
        card.className = "product-card";

        const imageBox = document.createElement("div");
        imageBox.className = "product-image";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("p");
        category.className = "product-category";
        category.textContent = product.category;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = "A great choice for everyday use.";

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = money(product.price);

        const button = document.createElement("button");
        button.className = "add-to-cart";
        button.textContent = "Add to Cart";
        button.addEventListener("click", function() {
            addToCart(product.id);
        });

        imageBox.appendChild(image);
        info.append(category, name, description, price, button);
        card.append(imageBox, info);
        productGrid.appendChild(card);
    });
}

/* ========== CATEGORY FILTER ========== */

document.querySelectorAll(".category-card").forEach(function(button) {
    button.addEventListener("click", function() {
        selectedCategory = button.dataset.category;

        document.querySelectorAll(".category-card").forEach(function(card) {
            card.classList.remove("active");
        });

        button.classList.add("active");
        displayProducts();
    });
});

/* ========== SEARCH ========== */

searchInput.addEventListener("input", displayProducts);

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    displayProducts();
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

/* ========== ADD TO CART ========== */

function addToCart(id) {
    const existing = cart.find(function(item) {
        return item.id === id;
    });

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({id: id, quantity: 1});
    }

    updateCart();
}

/* ========== CHANGE QUANTITY ========== */

function changeQuantity(id, amount) {
    const item = cart.find(function(entry) {
        return entry.id === id;
    });

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(function(item) {
        return item.id !== id;
    });

    updateCart();
}

/* ========== UPDATE CART ========== */

function updateCart() {
    cartItems.innerHTML = "";

    let subtotal = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {
        const message = document.createElement("p");
        message.textContent = "Your cart is empty. Start shopping!";
        cartItems.appendChild(message);
    }

    cart.forEach(function(item) {
        const product = products.find(function(p) {
            return p.id === item.id;
        });

        if (!product) return;

        subtotal += product.price * item.quantity;
        totalQuantity += item.quantity;

        const row = document.createElement("div");
        row.className = "cart-item";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = money(product.price * item.quantity);

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");
        minus.addEventListener("click", function() {
            changeQuantity(product.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");
        plus.addEventListener("click", function() {
            changeQuantity(product.id, 1);
        });

        controls.append(minus, quantity, plus);
        info.append(name, price, controls);

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = "Remove";
        remove.addEventListener("click", function() {
            removeFromCart(product.id);
        });

        row.append(image, info, remove);
        cartItems.appendChild(row);
    });

    const delivery = subtotal === 0 || subtotal >= 5000 ? 0 : 200;

    cartCount.textContent = totalQuantity;
    subtotalElement.textContent = money(subtotal);
    deliveryElement.textContent = money(delivery);
    totalElement.textContent = money(subtotal + delivery);
}

/* ========== CHECKOUT DEMO ========== */

checkoutButton.addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add a product first.");
        return;
    }

    alert(
        "Your order total is " + totalElement.textContent +
        ". This is a demo checkout. Online payments are not connected."
    );
});

/* ========== AI-STYLE SHOPPING ASSISTANT ========== */

const aiForm = document.getElementById("aiForm");
const aiCategory = document.getElementById("aiCategory");
const aiBudget = document.getElementById("aiBudget");
const aiMessage = document.getElementById("aiMessage");
const aiResults = document.getElementById("aiResults");

aiForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const budget = Number(aiBudget.value);
    const category = aiCategory.value;

    aiResults.innerHTML = "";
    aiMessage.textContent = "";

    if (!Number.isFinite(budget) || budget <= 0) {
        aiMessage.textContent = "Please enter a valid budget.";
        return;
    }

    const matches = products
        .filter(function(product) {
            const fitsBudget = product.price <= budget;
            const fitsCategory =
                category === "All" || product.category === category;

            return fitsBudget && fitsCategory;
        })
        .sort(function(a, b) {
            return a.price - b.price;
        })
        .slice(0, 6);

    if (matches.length === 0) {
        aiMessage.textContent =
            "No matching products found. Try another category or a higher budget.";
        return;
    }

    aiMessage.textContent =
        "Here are " + matches.length +
        " suggestions that match your budget and category:";

    matches.forEach(function(product) {
        const card = document.createElement("article");
        card.className = "ai-result";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = money(product.price);

        const reason = document.createElement("small");
        reason.textContent = "Fits your selected budget";

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", function() {
            addToCart(product.id);
        });

        card.append(image, name, price, reason, button);
        aiResults.appendChild(card);
    });
});

/* ========== START WEBSITE ========== */

displayProducts();
updateCart();
