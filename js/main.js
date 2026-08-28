/**
 * Main application script for Anvayaa Promotional Website (Pure HTML/CSS/Bootstrap)
 */
document.addEventListener("DOMContentLoaded", () => {
  // Update all elements with data-ecommerce-link attribute
  const shopNowButtons = document.querySelectorAll("[data-ecommerce-link]");
  shopNowButtons.forEach((btn) => {
    const linkType = btn.getAttribute("data-ecommerce-link") || "shop";
    if (linkType === "shop") btn.href = SITE_CONFIG.urls.ecommerceShop;
    else if (linkType === "ai-try-on") btn.href = SITE_CONFIG.urls.ecommerceAiTryOn;
    else if (linkType === "orders") btn.href = SITE_CONFIG.urls.ecommerceOrders;
    else btn.href = SITE_CONFIG.urls.ecommerce;
  });

  // Sticky Navbar background blur transition
  const navbar = document.querySelector(".navbar-luxury");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // VIP Newsletter Form Handling
  const vipForm = document.getElementById("vip-newsletter-form");
  if (vipForm) {
    vipForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = vipForm.querySelector('input[type="email"]');
      const responseContainer = document.getElementById("vip-form-response");

      if (emailInput && emailInput.value.trim()) {
        if (responseContainer) {
          responseContainer.innerHTML = `
            <div class="p-3 rounded-xl bg-success-subtle text-success border border-success-subtle text-xs">
              <strong>Thank you for subscribing!</strong> You will now receive updates on our latest collections and offers.
            </div>
          `;
        }
        emailInput.value = "";
      }
    });
  }
});
