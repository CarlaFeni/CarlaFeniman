document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({ top: 0, behavior: 'auto' });
  const langToggle = document.getElementById("langToggle");
  const langEsElements = document.querySelectorAll(".lang-es");
  const langEnElements = document.querySelectorAll(".lang-en");

  // Leer idioma guardado o usar español por defecto
  let currentLang = localStorage.getItem("lang") || "es";
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    langEsElements.forEach(el => el.style.display = lang === "es" ? "block" : "none");
    langEnElements.forEach(el => el.style.display = lang === "en" ? "block" : "none");
    if (langToggle) {
      langToggle.textContent = lang === "es" ? "EN" : "ES";
    }
  }
});
