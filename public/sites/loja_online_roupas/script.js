const state = {
    cart: new Map(),
    cartOpen: false,
    modalOpen: false,
    lastFocusedElement: null,
};

const el = {
    openCart: document.getElementById("openCart"),
    closeCart: document.getElementById("closeCart"),
    heroCheckout: document.getElementById("heroCheckout"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartItems: document.getElementById("cartItems"),
    cartCount: document.getElementById("cartCount"),
    cartTotal: document.getElementById("cartTotal"),
    clearCart: document.getElementById("clearCart"),
    goCheckout: document.getElementById("goCheckout"),
    overlay: document.getElementById("overlay"),
    checkoutModal: document.getElementById("checkoutModal"),
    closeCheckout: document.getElementById("closeCheckout"),
    checkoutForm: document.getElementById("checkoutForm"),
    checkoutSummary: document.getElementById("checkoutSummary"),
    checkoutMessage: document.getElementById("checkoutMessage"),
};

const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

function lockBodyScroll(lock) {
    document.body.classList.toggle("no-scroll", lock);
}

function updateOverlay() {
    const shouldShow = state.cartOpen || state.modalOpen;
    el.overlay.hidden = !shouldShow;
    lockBodyScroll(shouldShow);
}

function cartSummary() {
    let items = 0;
    let total = 0;

    state.cart.forEach((product) => {
        items += product.qty;
        total += product.price * product.qty;
    });

    return { items, total };
}

function updateCheckoutSummary() {
    const summary = cartSummary();
    const label = `${summary.items} item${summary.items === 1 ? "" : "s"} - ${currency.format(summary.total)}`;
    el.checkoutSummary.textContent = label;
}

function setCheckoutButtonState() {
    const { items } = cartSummary();
    el.goCheckout.disabled = items === 0;
    el.goCheckout.style.opacity = items === 0 ? "0.5" : "1";
    el.goCheckout.style.cursor = items === 0 ? "not-allowed" : "pointer";
}

function renderCart() {
    el.cartItems.innerHTML = "";

    if (state.cart.size === 0) {
        el.cartItems.innerHTML = '<p class="empty-cart">Seu carrinho esta vazio.</p>';
    } else {
        state.cart.forEach((item, id) => {
            const card = document.createElement("article");
            card.className = "cart-item";
            card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${currency.format(item.price)} x ${item.qty}</p>
        <div class="cart-actions">
          <button class="qty-btn" data-action="decrease" data-id="${id}" type="button">-</button>
          <button class="qty-btn" data-action="increase" data-id="${id}" type="button">+</button>
          <button class="remove-btn" data-action="remove" data-id="${id}" type="button">Remover</button>
        </div>
      `;
            el.cartItems.appendChild(card);
        });
    }

    const summary = cartSummary();
    el.cartCount.textContent = String(summary.items);
    el.cartTotal.textContent = currency.format(summary.total);

    updateCheckoutSummary();
    setCheckoutButtonState();
}

function openCart() {
    state.cartOpen = true;
    el.cartDrawer.classList.add("open");
    el.cartDrawer.setAttribute("aria-hidden", "false");
    updateOverlay();
}

function closeCart() {
    state.cartOpen = false;
    el.cartDrawer.classList.remove("open");
    el.cartDrawer.setAttribute("aria-hidden", "true");
    updateOverlay();
}

function openCheckout() {
    console.log("Opening checkout modal");
    state.lastFocusedElement = document.activeElement;
    state.modalOpen = true;
    el.checkoutModal.classList.remove("hidden");
    el.checkoutModal.hidden = false;
    el.checkoutModal.classList.add("modal");
    el.checkoutModal.setAttribute("aria-hidden", "false");
    el.checkoutMessage.textContent = "";
    updateCheckoutSummary();
    updateOverlay();

    const firstField = el.checkoutForm.querySelector("input, select, button");
    if (firstField instanceof HTMLElement) {
        firstField.focus();
    }
}

function closeCheckout() {
    state.modalOpen = false;
    el.checkoutModal.hidden = true;
    el.checkoutModal.classList.add("hidden");
    el.checkoutModal.classList.remove("modal");
    el.checkoutModal.setAttribute("aria-hidden", "true");
    el.checkoutMessage.textContent = "";
    updateOverlay();

    if (state.lastFocusedElement instanceof HTMLElement) {
        state.lastFocusedElement.focus();
    }
}

function addToCart(card) {
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = Number(card.dataset.price);

    if (!id || !name || Number.isNaN(price)) {
        return;
    }

    const existing = state.cart.get(id);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.set(id, { id, name, price, qty: 1 });
    }

    renderCart();
    openCart();
}

function updateItem(action, id) {
    const item = state.cart.get(id);
    if (!item) {
        return;
    }

    if (action === "increase") {
        item.qty += 1;
    }

    if (action === "decrease") {
        item.qty -= 1;
        if (item.qty <= 0) {
            state.cart.delete(id);
        }
    }

    if (action === "remove") {
        state.cart.delete(id);
    }

    renderCart();
}

function onCartBodyClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
        return;
    }

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) {
        return;
    }

    updateItem(action, id);
}

function onSubmitCheckout(event) {
    event.preventDefault();

    const { items } = cartSummary();
    if (items === 0) {
        el.checkoutMessage.textContent = "Adicione ao menos 1 produto antes de finalizar.";
        el.checkoutMessage.style.color = "#b42318";
        return;
    }

    if (!el.checkoutForm.reportValidity()) {
        return;
    }

    el.checkoutMessage.textContent = "Processando pedido ficticio...";
    el.checkoutMessage.style.color = "#315d55";

    window.setTimeout(() => {
        el.checkoutMessage.textContent = "Pedido confirmado em modo demonstracao.";
        el.checkoutMessage.style.color = "#1f3a35";

        state.cart.clear();
        renderCart();
        el.checkoutForm.reset();

        window.setTimeout(() => {
            closeCheckout();
            closeCart();
        }, 700);
    }, 900);
}

function trapFocusInsideModal(event) {
    if (!state.modalOpen || event.key !== "Tab") {
        return;
    }

    const focusable = el.checkoutModal.querySelectorAll(
        'button:not([disabled]), input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length === 0) {
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        if (last instanceof HTMLElement) {
            last.focus();
        }
    }

    if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        if (first instanceof HTMLElement) {
            first.focus();
        }
    }
}

function bindEvents() {
    document.querySelectorAll("[data-add-cart]").forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".product-card");
            if (card instanceof HTMLElement) {
                addToCart(card);
            }
        });
    });

    el.openCart.addEventListener("click", openCart);
    el.closeCart.addEventListener("click", closeCart);

    el.heroCheckout.addEventListener("click", () => {
        openCart();
        openCheckout();
    });

    el.goCheckout.addEventListener("click", () => {
        if (cartSummary().items > 0) {
            openCheckout();
        }
    });

    el.clearCart.addEventListener("click", () => {
        state.cart.clear();
        renderCart();
    });

    el.closeCheckout.addEventListener("click", closeCheckout);
    el.checkoutForm.addEventListener("submit", onSubmitCheckout);
    el.cartItems.addEventListener("click", onCartBodyClick);

    el.overlay.addEventListener("click", () => {
        if (state.modalOpen) {
            closeCheckout();
        }
        if (state.cartOpen) {
            closeCart();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (state.modalOpen) {
                closeCheckout();
                return;
            }
            if (state.cartOpen) {
                closeCart();
            }
        }

        trapFocusInsideModal(event);
    });
}

bindEvents();
renderCart();
