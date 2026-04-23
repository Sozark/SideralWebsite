/* ── Sidéral | main.js ─────────────────────────────────── */

/* ── Grab the three menu elements ── */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay    = document.getElementById("overlay");

/* ── Open Menu function ── */
function openMenu() {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  hamburger.setAttribute("aria-expanded", "true");
}

/* ── Close Menu function ── */
function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  hamburger.setAttribute("aria-expanded", "false");
}

/* ── Hamburger click toggle ── */
hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
});

/* ── Keyboard support ── */
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
  }
});

/* ── Click overlay to close ── */
overlay.addEventListener("click", closeMenu);

/* ── Escape key to close ── */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
    closeCart();
  }
});

/* ── Click anywhere outside menu to close ── */
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

/* ── Scroll Reveal ── */
/* threshold: 0 triggers as soon as any pixel enters the screen */
/* rootMargin fires the reveal 80px before the element hits the bottom */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px"
});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════════
   CART SYSTEM
   Stores items in memory, updates the badge on the cart
   icon, and opens/closes a slide-out cart panel
═══════════════════════════════════════════════════════ */

/* ── Cart state — lives in memory for this session ── */
let cart = [];

/* ── Open and close the cart panel ── */
function openCart() {
  const panel = document.getElementById("cartPanel");
  const cartOverlay = document.getElementById("cartOverlay");
  if (!panel) return;
  panel.classList.add("active");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  renderCart();
}

function closeCart() {
  const panel = document.getElementById("cartPanel");
  const cartOverlay = document.getElementById("cartOverlay");
  if (!panel) return;
  panel.classList.remove("active");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

/* ── Add an item to the cart ── */
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartBadge();
  showAddedToast(name);
}

/* ── Remove an item from the cart ── */
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartBadge();
  renderCart();
}

/* ── Update the number badge on the cart icon ── */
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

/* ── Render cart items inside the panel ── */
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your bag is empty.</p>';
    cartTotal.textContent = "$0";
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__info">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price">$${item.price} × ${item.qty}</p>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart('${item.name}')" aria-label="Remove">✕</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  cartTotal.textContent = `$${total}`;
}

/* ── Brief toast notification when item is added ── */
function showAddedToast(name) {
  const toast = document.getElementById("addedToast");
  if (!toast) return;
  toast.textContent = `${name} added to bag`;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2200);
}

/* ── Wire up the cart icon click ── */
const cartIcon = document.querySelector(".cart-icon");
if (cartIcon) {
  cartIcon.addEventListener("click", openCart);
}

/* ── Wire up Add to Bag buttons on the products page ── */
/* Wrapped in a check so it only runs on the Products page */
const productGrid = document.querySelector(".products-grid");
if (productGrid) {

  /* ── Filter feature ── */
  /* FIX: filter variable was declared outside the click handler */
  /* It must be read INSIDE the handler so it gets the clicked button's value */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      /* FIX: filter is now read here, inside the click handler */
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const show = filter === "all" || card.dataset.category === filter;
        card.style.opacity       = show ? "1"        : "0";
        card.style.transform     = show ? "scale(1)" : "scale(0.95)";
        card.style.pointerEvents = show ? "auto"     : "none";
        card.style.position      = show ? "relative" : "absolute";
        card.classList.toggle("product-card--hidden", !show);
      });
    });
  });

  /* ── Wishlist heart toggle ── */
  document.querySelectorAll(".product-card__wishlist").forEach(btn => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector("i");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");
      btn.classList.toggle("product-card__wishlist--active");
    });
  });

  /* ── Add to Bag buttons ── */
  document.querySelectorAll(".product-card__add").forEach(btn => {
    btn.addEventListener("click", () => {
      const card  = btn.closest(".product-card");
      const name  = card.querySelector(".product-card__name").textContent;
      const priceText = card.querySelector(".product-card__price").textContent;
      /* Strip the dollar sign and convert to a number */
      const price = parseFloat(priceText.replace("$", ""));
      addToCart(name, price);
    });
  });
}