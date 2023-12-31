const cart = [];
let total = 0;

let currentProductName = "";
let currentProductPrice = 0;

function openPopup(productName, productPrice) {
    currentProductName = productName;
    currentProductPrice = productPrice;
    document.getElementById("quantityPopup").style.display = "flex";
    updateSelectedItems();
}

function addToCartWithQuantity() {
    const quantity = parseInt(document.getElementById("quantity").value);

    if (quantity > 0) {
        const totalPrice = currentProductPrice * quantity;
        cart.push({ name: currentProductName, price: totalPrice });
        updateCartDisplay();
        total += totalPrice;
        updateTotalDisplay();
        updateSelectedItems();
        closePopup();
    }
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateTotalDisplay();
    updateSelectedItems();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = cart[i].name + " - R" + cart[i].price.toFixed(2);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromCart(i);
        };
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
    }
}

function updateTotalDisplay() {
    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = total.toFixed(2);
}

function updateSelectedItems() {
    const selectedItemsContainer = document.getElementById("selectedItems");
    selectedItemsContainer.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        const selectedItem = document.createElement("div");
        selectedItem.textContent = cart[i].name + " - R" + cart[i].price.toFixed(2);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromCart(i);
        };
        selectedItem.appendChild(removeButton);
        selectedItemsContainer.appendChild(selectedItem);
    }
}

function closePopup() {
    document.getElementById("quantityPopup").style.display = "none";
}

