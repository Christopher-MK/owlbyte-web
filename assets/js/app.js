document.addEventListener("DOMContentLoaded", () => {
  // ====== Menú móvil ======
  const toggle = document.querySelector(".mobile-toggle");
  const navMobile = document.getElementById("nav-mobile");

  if (toggle && navMobile) {
    toggle.addEventListener("click", () => {
      navMobile.classList.toggle("open");
    });
  }

  // ====== Tabs ======
  const tabs = document.querySelectorAll(".tab-btn");
  if (tabs.length) {
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // ====== Form CTA ======
  const form = document.querySelector(".cta-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector(".email-input");
      if (email && email.value.trim()) {
        alert(
          `¡Gracias por suscribirte! Confirmación enviada a: ${email.value.trim()}`
        );
        email.value = "";
      }
    });
  }

  // ====== Buscador Recursos (LOCAL + GLOBAL) ======
  const input = document.getElementById("resourceSearch");
  if (!input) return; // corre solo en recursos.html

  const cards = Array.from(document.querySelectorAll(".resource-card-alt"));
  const noResults = document.getElementById("noResults");

  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita tildes

  // Filtro LOCAL (esta página)
  const filterLocal = () => {
    const q = normalize(input.value.trim());
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector(".resource-title")?.innerText || "";
      const linksText = Array.from(card.querySelectorAll("a"))
        .map((a) => a.innerText)
        .join(" ");

      const haystack = normalize(`${title} ${linksText}`);
      const match = q === "" || haystack.includes(q);

      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  };

  // Filtra mientras escribe (LOCAL)
  input.addEventListener("input", filterLocal);

  // Enter => búsqueda GLOBAL (buscar.html usa search-index.json)
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim();
      if (!q) return;
      window.location.href = `buscar.html?q=${encodeURIComponent(q)}`;
    }

    // Opcional: ESC limpia el input y muestra todo
    if (e.key === "Escape") {
      input.value = "";
      filterLocal();
      input.blur();
    }
  });

  // Inicial
  filterLocal();
});
