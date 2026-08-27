/**
 * 360 Degree Interactive Garment Viewer Logic
 */
(function () {
  const angles = [
    {
      angle: 0,
      label: "Front Silhouette",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&auto=format&fit=crop&q=80",
      description: "Royal zari neckline embroidery & hand-tailored flare.",
    },
    {
      angle: 90,
      label: "Side Profile",
      url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80",
      description: "Architectural drape flow and structured sleeve curvature.",
    },
    {
      angle: 180,
      label: "Artisanal Back Cut",
      url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900&auto=format&fit=crop&q=80",
      description: "Intricate handcrafted tassel doris and deep back neck embellishment.",
    },
    {
      angle: 270,
      label: "Motion & Hemline",
      url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&auto=format&fit=crop&q=80",
      description: "Multi-layered raw silk border with gold micro-sequin luster.",
    },
  ];

  let currentIdx = 0;
  let autoInterval = null;
  let isZoomed = false;

  window.init360Viewer = function () {
    const imgEl = document.getElementById("v360-image");
    const badgeEl = document.getElementById("v360-badge");
    const descEl = document.getElementById("v360-description");
    const prevBtn = document.getElementById("v360-prev");
    const nextBtn = document.getElementById("v360-next");
    const autoBtn = document.getElementById("v360-auto");
    const zoomBtn = document.getElementById("v360-zoom");

    if (!imgEl) return;

    function render() {
      const active = angles[currentIdx];
      imgEl.src = active.url;
      imgEl.alt = `Anvayaa Couture - ${active.label}`;
      if (badgeEl) badgeEl.innerText = `${active.angle}° • ${active.label}`;
      if (descEl) descEl.innerText = active.description;
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIdx = (currentIdx - 1 + angles.length) % angles.length;
        render();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIdx = (currentIdx + 1) % angles.length;
        render();
      });
    }

    if (autoBtn) {
      autoBtn.addEventListener("click", () => {
        if (autoInterval) {
          clearInterval(autoInterval);
          autoInterval = null;
          autoBtn.innerText = "Auto-Rotate 360°";
          autoBtn.classList.remove("btn-gold");
          autoBtn.classList.add("btn-gold-outline");
        } else {
          autoInterval = setInterval(() => {
            currentIdx = (currentIdx + 1) % angles.length;
            render();
          }, 2000);
          autoBtn.innerText = "Pause 360°";
          autoBtn.classList.remove("btn-gold-outline");
          autoBtn.classList.add("btn-gold");
        }
      });
    }

    if (zoomBtn && imgEl) {
      zoomBtn.addEventListener("click", () => {
        isZoomed = !isZoomed;
        if (isZoomed) imgEl.classList.add("zoomed");
        else imgEl.classList.remove("zoomed");
      });
    }

    render();
  };

  document.addEventListener("DOMContentLoaded", window.init360Viewer);
})();
