/**
 * AI Virtual Try-On Simulator Interactive Script
 */
(function () {
  const sampleGarments = [
    {
      id: "g1",
      title: "Zari Crimson Lehengas",
      category: "Royal Festive Edit",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
      resultImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "g2",
      title: "Modern Silk Drape Kurti",
      category: "Fusion Prêt",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
      resultImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "g3",
      title: "Imperial Velvet Bandhgala",
      category: "Men's Tailoring",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
      resultImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80",
    },
  ];

  window.initAiTryOnSimulator = function () {
    const simBtn = document.getElementById("ai-sim-trigger");
    const canvasImg = document.getElementById("ai-canvas-img");
    const loadingOverlay = document.getElementById("ai-sim-loading");
    const resultBadge = document.getElementById("ai-result-badge");
    const garmentTitleEl = document.getElementById("ai-result-title");

    let selectedGarment = sampleGarments[0];
    let isGenerated = false;

    // Garment selection buttons
    const garmentBtns = document.querySelectorAll("[data-garment-idx]");
    garmentBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-garment-idx") || "0", 10);
        selectedGarment = sampleGarments[idx] || sampleGarments[0];
        
        garmentBtns.forEach((b) => b.classList.remove("border-warning", "bg-warning-subtle"));
        btn.classList.add("border-warning", "bg-warning-subtle");

        if (isGenerated && canvasImg) {
          canvasImg.src = selectedGarment.resultImage;
          if (garmentTitleEl) garmentTitleEl.innerText = selectedGarment.title;
        }
      });
    });

    if (simBtn) {
      simBtn.addEventListener("click", () => {
        if (loadingOverlay) loadingOverlay.classList.remove("d-none");
        simBtn.disabled = true;

        setTimeout(() => {
          if (loadingOverlay) loadingOverlay.classList.add("d-none");
          simBtn.disabled = false;
          isGenerated = true;

          if (canvasImg) canvasImg.src = selectedGarment.resultImage;
          if (resultBadge) resultBadge.innerText = "AI Virtual Fitting Result";
          if (garmentTitleEl) garmentTitleEl.innerText = selectedGarment.title;
        }, 1200);
      });
    }
  };

  document.addEventListener("DOMContentLoaded", window.initAiTryOnSimulator);
})();
