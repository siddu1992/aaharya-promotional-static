# Anvayaa Promotional Website - Pure HTML5, CSS3 & Bootstrap 5

This is a standalone, lightweight, ultra-luxury promotional website for the **Anvayaa** apparel brand built purely with **HTML5, CSS3, Bootstrap 5, and JavaScript**.

It contains **zero Node.js/Next.js framework overhead** and can be served directly from any static host or web server.

---

## Folder Structure

```
aaharya-promotional-static/
├── index.html                  # Main Promotional Homepage
├── about.html                  # Brand Story & Heritage
├── collections.html            # Editorial Lookbook Showcase
├── ai-try-on.html              # AI Virtual Try-On Studio & Simulator
├── contact.html                # Atelier Concierge & Inquiries
├── privacy-policy.html         # Privacy Safeguards
├── terms.html                  # Terms & Conditions
├── shipping-policy.html        # Shipping & Fulfillment Info
├── return-refund-policy.html   # Returns & Exchange Guidelines
├── render.yaml                 # Render 1-Click Deployment Blueprint
├── sitemap.xml                 # Search Engine XML Sitemap
├── robots.txt                  # Search Crawler Directives
├── css/
│   └── styles.css              # Custom Luxury Gold & Dark Theme Tokens
└── js/
    ├── config.js               # Central Configuration (ECOMMERCE_URL, Brand Info)
    ├── main.js                 # Navbar, Mobile Offcanvas, Form validation
    ├── 360-viewer.js           # Interactive 360° product rotation simulator
    └── ai-try-on.js            # Interactive AI fitting room simulator
```

---

## How to Configure the E-Commerce Store Link

To update the e-commerce destination URL (for all "SHOP NOW" buttons site-wide), open [`js/config.js`](js/config.js) and change:

```javascript
const SITE_CONFIG = {
  ECOMMERCE_URL: "http://localhost:8100", // Change to your deployed e-commerce domain
  // ...
};
```

---

## How to Deploy on Render

1. Create a repository on GitHub containing this folder.
2. Go to your [Render Dashboard](https://dashboard.render.com/) → Click **New +** → Select **Blueprint**.
3. Select this repository. Render will automatically read `render.yaml` and deploy your static website for **100% FREE** with instant SSL!
