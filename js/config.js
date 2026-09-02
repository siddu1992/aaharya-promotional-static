/**
 * Central Configuration for Anvayaa Promotional Website (Pure HTML/CSS/Bootstrap)
 * Modify variables here to update brand details, links, campaigns, and collections site-wide.
 */
const SITE_CONFIG = {
  // Central E-Commerce Store URL (Where all 'Shop Now' & cart interactions route)
  ECOMMERCE_URL: "https://shop.anvayaa.store/",

  brand: {
    name: "Anvayaa",
    tagline: "Where Heritage Elegance Meets AI Precision",
    shortDescription:
      "Anvayaa blends timeless Indian craftsmanship, regal silhouettes, and modern haute couture with breakthrough AI Virtual Try-On.",
    fullDescription:
      "Anvayaa is an avant-garde apparel house dedicated to reimagining contemporary fashion. We handcraft exquisite ethnic, fusion, and modern couture collections while empowering shoppers with intelligent AI Virtual Try-On and seamless garment inspection.",
    logoText: "ANVAYAA",
    logoSubtext: "HAUTE COUTURE & AI INNOVATION",
  },

  urls: {
    ecommerce: "https://shop.anvayaa.store",
    ecommerceShop: "https://shop.anvayaa.store/products",
    ecommerceAiTryOn: "https://shop.anvayaa.store/ai-try-ons",
    ecommerceWishlist: "https://shop.anvayaa.store/wishlist",
    ecommerceOrders: "https://shop.anvayaa.store/orders-list",
    instagram: "https://instagram.com/anvayaafashion",
    facebook: "https://facebook.com/anvayaafashion",
    youtube: "https://youtube.com/@anvayaafashion",
    linkedin: "https://linkedin.com/company/anvayaa-fashion",
  },

  contact: {
    email: "support@anvayaa.store",
    supportEmail: "support@anvayaa.store",
    pressEmail: "support@anvayaa.store",
    phone: "+91 98765 43210",
    supportHours: "Monday – Saturday: 10:00 AM – 8:00 PM IST",
    address: {
      line1: "Anvayaa Design Atelier, 4th Floor, Crescent Tower",
      line2: "Indiranagar 100 Feet Road",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560038",
      country: "India",
    },
  },

  campaigns: [
    {
      id: "festive-soiree-2026",
      title: "Royal Festive Soirée",
      subtitle: "Handcrafted Zari Silk & Velvet Ensembles",
      description:
        "Celebrate the festival of lights with opulent heritage silhouettes woven with pure silk, metallic zari embroideries, and intricate hand-embellished details.",
      code: "FESTIVE25",
      validUntil: "Limited Time Edition",
      badge: "Festive Exclusive",
      ctaText: "Shop Festive Edit",
      categorySlug: "festive",
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: "ai-luxe-preview",
      title: "Couture in 3D & AI Virtual Try-On",
      subtitle: "Hyper-Realistic Fit & Drape Simulation",
      description:
        "Experience fashion without fitting room doubts. Upload your photo or choose our curated avatars to see Anvayaa couture drape naturally on your silhouette.",
      badge: "AI Powered",
      ctaText: "Launch AI Studio",
      categorySlug: "ai-try-ons",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: "wedding-couture-launch",
      title: "The Grand Regal Bridal Edit",
      subtitle: "Timeless Masterpieces for Unforgettable Moments",
      description:
        "From ethereal raw silk lehengas to bespoke bandhgalas and regal sherwanis, discover couture designed for memorable grand entrances.",
      code: "BRIDALVOGUE",
      validUntil: "Wedding Season 2026",
      badge: "New Couture Launch",
      ctaText: "Explore Bridal Vault",
      categorySlug: "wedding",
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&auto=format&fit=crop&q=80",
    },
  ],

  collections: [
    {
      id: "royal-heritage-festive",
      name: "The Royal Festive Edit",
      subtitle: "Hand-Embroidered Anarkalis, Sarees & Zari Lehengas",
      description:
        "An ode to imperial courts and artisanal legacy. Featuring hand-dyed organza, mulberry silks, intricate resham threadwork, and opulent metallic zari borders.",
      season: "Autumn / Festive 2026",
      heroImage:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "women",
      badge: "Best Seller",
    },
    {
      id: "modern-fusion-pret",
      name: "Contemporary Fusion Prêt",
      subtitle: "Sculptural Capes, Drape Kurtis & Co-ord Sets",
      description:
        "Where East meets West in seamless harmony. Modern tailored jackets, asymmetric drape tunics, and structured co-ord ensembles built for high-profile evenings.",
      season: "Spring / Summer Prêt",
      heroImage:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "women",
      badge: "Trending Now",
    },
    {
      id: "mens-regal-tailoring",
      name: "Men's Imperial Tailoring",
      subtitle: "Bespoke Bandhgalas, Silk Kurtas & Tuxedos",
      description:
        "Impeccable fits and structured silhouettes crafted from Italian wools, raw silks, and hand-embroidered velvet lapels. Elevated men's attire for wedding ceremonies.",
      season: "Signature All-Season",
      heroImage:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "men",
      badge: "New Arrival",
    },
    {
      id: "statement-jewellery-accessories",
      name: "Statement Heirloom Jewellery",
      subtitle: "Kundan, Polki & Modern Gemstone Accents",
      description:
        "Exquisite adornments that complete your royal ensemble. Featuring handcrafted temple chokers, layered polki neckpieces, chandelier earrings, and heritage bracelets.",
      season: "Heirloom Edition",
      heroImage:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "jewellery",
      badge: "Artisanal",
    },
    {
      id: "wedding-couture-bridal",
      name: "The Bridal Heritage Vault",
      subtitle: "Masterpiece Crimson Lehengas & Hand-Woven Kanjeevarams",
      description:
        "Curated for the unforgettable walk down the aisle. Each ensemble represents up to 400 hours of artisanal hand-embroidery woven with pure gold zari.",
      season: "Bridal Couture",
      heroImage:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "women",
      badge: "Couture Edition",
    },
    {
      id: "artisan-everyday-luxe",
      name: "Artisan Everyday Luxe",
      subtitle: "Casual Silk Shirts, Breathable Trousers & Modern Kurtis",
      description:
        "Effortless elegance for your daily lifestyle. Soft block-printed modal, crisp linen shirting, and comfortable silhouettes designed for day-to-evening transitions.",
      season: "Everyday Collection",
      heroImage:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&auto=format&fit=crop&q=80",
      categorySlug: "women",
      badge: "Everyday Essential",
    },
  ],
};
