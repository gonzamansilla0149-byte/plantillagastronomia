async function loadStoreConfig() {

  // 🔥 MOCK TEMPORAL
  const config = {
    name: "Mi Nueva Tienda",
    accentColor: "#ff3b3b",
    instagramHandle: "@mitienda",
    instagramUrl: "https://instagram.com/mitienda"
  };

  applyStoreConfig(config);
}

  const res = await fetch(`https://TU-WORKER-CORE/api/store/${storeId}`);
  const config = await res.json();

  applyStoreConfig(config);
}

function applyStoreConfig(config) {

  // Título navegador
  document.title = config.name;

  // Título principal si existe
  const mainTitle = document.querySelector(".landing-intro-top h1");
  if (mainTitle) {
    mainTitle.innerText = config.name;
  }

  // Color principal
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
