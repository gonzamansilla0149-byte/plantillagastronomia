async function loadStoreConfig() {

  const params = new URLSearchParams(window.location.search);
  const storeId = params.get("store") || "default";

  const stores = {
    default: {
      name: "Plantilla Gastronomía",
      accentColor: "#D3AE09",
      instagramHandle: "@plantilla.demo",
      instagramUrl: "https://instagram.com"
    },

    sabores: {
      name: "Sabores del Fogón",
      accentColor: "#D3AE09",
      instagramHandle: "@saboresfogon.ar",
      instagramUrl: "https://instagram.com/saboresfogon.ar"
    },

    mitienda: {
      name: "Mi Nueva Tienda",
      accentColor: "#ff3b3b",
      instagramHandle: "@mitienda",
      instagramUrl: "https://instagram.com/mitienda"
    }
  };

  const config = stores[storeId] || stores["default"];
  applyStoreConfig(config);
}
  const config = stores[storeId] || stores["default"];

  applyStoreConfig(config);
}

function applyStoreConfig(config) {

  // Título navegador
  document.title = config.name;

  // H1 principal
  const mainTitle = document.querySelector(".landing-intro-top h1");
  if (mainTitle) {
    mainTitle.innerText = config.name;
  }

  // Color principal dinámico
  document.documentElement
    .style
    .setProperty("--accent", config.accentColor);

  // Instagram
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
