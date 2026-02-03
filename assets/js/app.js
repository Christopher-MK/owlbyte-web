document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const navMobile = document.getElementById("nav-mobile");

  if (toggle && navMobile) {
    toggle.addEventListener("click", () => {
      navMobile.classList.toggle("open");
    });
  }

  const tabs = document.querySelectorAll(".tab-btn");
  if (tabs.length) {
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  const form = document.querySelector(".cta-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector(".email-input");
      if (email && email.value.trim()) {
        alert(`¡Gracias por suscribirte! Confirmación enviada a: ${email.value.trim()}`);
        email.value = "";
      }
    });
  }
});
