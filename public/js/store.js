async function loadStoreConfig() {

  const params = new URLSearchParams(window.location.search);
  const storeId = params.get("store") || "default";

  const stores = {
    default: {
      name: "Plantilla Gastronomía",
      accentColor: "#D3AE09",
      instagramHandle: "@plantilla.demo",
      instagramUrl: "https://instagram.com",

      // 🔥 Flags futuras
      showInfoOperativa: true,
      showReassurance: true
    },

    sabores: {
      name: "Sabores del Fogón",
      accentColor: "#D3AE09",
      instagramHandle: "@saboresfogon.ar",
      instagramUrl: "https://instagram.com/saboresfogon.ar",

      showInfoOperativa: true,
      showReassurance: true
    },

    mitienda: {
      name: "Mi Nueva Tienda",
      accentColor: "#ff3b3b",
      instagramHandle: "@mitienda",
      instagramUrl: "https://instagram.com/mitienda",

      showInfoOperativa: false,
      showReassurance: false
    }
  };

  const config = stores[storeId] || stores["default"];

  // 🔥 Guardamos globalmente para que el motor lo pueda usar
  window.STORE_CONFIG = config;

  applyStoreConfig(config);
}

function applyStoreConfig(config) {

  document.title = config.name;

  const mainTitle = document.querySelector(".landing-intro-top h1");
  if (mainTitle) {
    mainTitle.innerText = config.name;
  }

  document.documentElement
    .style
    .setProperty("--accent", config.accentColor);

  const instaLink = document.querySelector(".mini-banner .left a");
  if (instaLink) {
    instaLink.href = config.instagramUrl;
    instaLink.innerHTML = `
      <img src="images/LOGO.webp" class="logo">
      ${config.instagramHandle}
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadStoreConfig);
