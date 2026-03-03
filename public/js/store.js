async function loadStoreConfig() {
  const params = new URLSearchParams(window.location.search);
  const storeId = params.get("store");

  if (!storeId) {
    console.warn("No storeId provided");
    return;
  }

  const res = await fetch(`https://TU-WORKER-CORE/api/store/${storeId}`);
  const config = await res.json();

  applyStoreConfig(config);
}

function applyStoreConfig(config) {
  document.title = config.name;

  document.documentElement
    .style
    .setProperty("--accent", config.accentColor);

  const insta = document.querySelector(".mini-banner .left a");
  if (insta) {
    insta.href = config.instagramUrl;
    insta.innerHTML = `
      <img src="images/LOGO.webp" class="logo">
      ${config.instagramHandle}
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadStoreConfig);
