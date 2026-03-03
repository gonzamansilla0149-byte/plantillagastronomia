async function loadStoreConfig() {

  console.log("STORE SCRIPT RUNNING");

  // 🔥 MOCK TEMPORAL
  const config = {
    name: "Mi Nueva Tienda",
    accentColor: "#ff3b3b",
    instagramHandle: "@mitienda",
    instagramUrl: "https://instagram.com/mitienda"
  };

  applyStoreConfig(config);
}

function applyStoreConfig(config) {

  // Título navegador
  document.title = config.name;

  // Cambiar título principal
  const mainTitle = document.querySelector(".landing-intro-top h1");
  if (mainTitle) {
    mainTitle.innerText = config.name;
  }

  // Cambiar color principal
  document.documentElement
    .style
    .setProperty("--accent", config.accentColor);

  // Cambiar Instagram
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
