// Global image loader for Nexona
async function loadImage(query, elementId) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=YOUR_ACCESS_KEY`
    );
    const data = await response.json();
    document.getElementById(elementId).src = data.urls.regular;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Page-specific calls
function initImages() {
  // Homepage
  if (document.getElementById("hero-img")) {
    loadImage("kenya landscape", "hero-img");
  }
  if (document.getElementById("kenya-img")) {
    loadImage("kenya news landscape", "kenya-img");
  }
  if (document.getElementById("global-img")) {
    loadImage("international city skyline", "global-img");
  }
  if (document.getElementById("voices-img")) {
    loadImage("community people voices", "voices-img");
  }

  // Kenya page
  if (document.getElementById("kenya-banner")) {
    loadImage("kenya landscape", "kenya-banner");
  }

  // Global page
  if (document.getElementById("global-banner")) {
    loadImage("international city skyline", "global-banner");
  }

  // Voices page
  if (document.getElementById("voices-banner")) {
    loadImage("community people gathering", "voices-banner");
  }

  // Contribute page
  if (document.getElementById("contribute-banner")) {
    loadImage("microphone journalism community", "contribute-banner");
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", initImages);
