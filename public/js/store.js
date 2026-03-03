async function loadStoreConfig() {

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("store");

  if (!slug) {
    console.warn("No store slug provided");
    return;
  }

  try {

    const response = await fetch(
      `https://creatutienda.gonzamansilla0149.workers.dev/api/store/${slug}`
    );

    if (!response.ok) {
      throw new Error("Store not found");
    }

    const config = await response.json();

    // Guardamos global
    window.STORE_CONFIG = config;

    applyStoreConfig(config);

  } catch (error) {
    console.error("Error loading store config:", error);
  }
}

function applyStoreConfig(config) {

  document.title = config.name || "Tienda";

  const mainTitle = document.querySelector(".landing-intro-top h1");
  if (mainTitle) {
    mainTitle.innerText = config.name || "";
  }

  if (config.accentColor) {
    document.documentElement
      .style
      .setProperty("--accent", config.accentColor);
  }

  const instaLink = document.querySelector(".mini-banner .left a");
  if (instaLink && config.instagramUrl) {
    instaLink.href = config.instagramUrl;
    instaLink.innerHTML = `
      <img src="images/LOGO.webp" class="logo">
      ${config.instagramHandle || ""}
    `;
  }

  // 🔥 Flags dinámicos futuros
  if (config.showInfoOperativa === false) {
    const section = document.querySelector(".info-operativa");
    if (section) section.style.display = "none";
  }

  if (config.showReassurance === false) {
    const section = document.querySelector(".reassurance");
    if (section) section.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", loadStoreConfig);
