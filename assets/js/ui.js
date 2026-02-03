(function () {
  const routes = [
    { href: "index.html",     label: "Inicio",      icon: "fa-home" },
    { href: "descargas.html", label: "Descargas",   icon: "fa-download" },
    { href: "tutoriales.html",label: "Tutoriales",  icon: "fa-book-open" },
    { href: "juegos.html",    label: "Juegos",      icon: "fa-gamepad" },
    { href: "cursos.html",    label: "Cursos",      icon: "fa-graduation-cap" },
    { href: "herramientas.html", label: "Herramientas", icon: "fa-tools" },
    { href: "pdf.html",       label: "PDFs",        icon: "fa-file-pdf" },
  ];

  function getCurrentFile() {
    const path = window.location.pathname;
    const last = path.split("/").pop() || "index.html";
    // Si usas URLs tipo /pdf (sin .html), adapta aquí si quieres
    return last.includes(".") ? last : (last === "" ? "index.html" : last + ".html");
  }

  function buildHeader(activeHref) {
    const navItems = routes.map(r => {
      const active = r.href === activeHref ? "active" : "";
      return `<li><a class="${active}" href="${r.href}"><i class="fas ${r.icon}"></i> ${r.label}</a></li>`;
    }).join("");

    return `
<header class="main-header" role="banner">
  <div class="container header-content">
    <a class="logo-container" href="index.html" aria-label="Ir al inicio de OwlByte">
      <div class="logo-icon" aria-hidden="true">OB</div>
      <div>
        <div class="logo-text">OwlByte</div>
        <div class="logo-tagline">Recursos Gaming &amp; Tech</div>
      </div>
    </a>

    <div class="nav-buttons">
      <button class="btn-search" id="openSearch" type="button"><i class="fas fa-search"></i> <span>Buscar</span></button>
      <button class="btn-login" id="openLogin" type="button"><i class="fas fa-user"></i> <span>Acceder</span></button>
      <button class="mobile-toggle" id="openDrawer" type="button" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</header>

<div class="drawer-backdrop" id="drawerBackdrop" aria-hidden="true"></div>

<aside class="drawer" id="drawer" aria-label="Menú">
  <div class="drawer-header">
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="logo-icon" style="width:40px;height:40px;">OB</div>
      <div>
        <div class="logo-text">OwlByte</div>
        <div class="logo-tagline">Gaming &amp; Tech</div>
      </div>
    </div>
    <button class="drawer-close" id="closeDrawer" aria-label="Cerrar menú">
      <i class="fas fa-times"></i>
    </button>
  </div>

  <ul class="drawer-nav">
    ${navItems}
  </ul>

  <div class="drawer-actions">
    <button class="btn-search" id="openSearch2" type="button"><i class="fas fa-search"></i> <span>Buscar</span></button>
    <button class="btn-login" id="openLogin2" type="button"><i class="fas fa-user"></i> <span>Acceder</span></button>
  </div>
</aside>

<div class="modal-backdrop" id="modalBackdrop" aria-hidden="true"></div>

<section class="modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Buscar">
  <div class="modal-header">
    <h3 class="modal-title">Buscar</h3>
    <button class="modal-close" data-close="all" aria-label="Cerrar"><i class="fas fa-times"></i></button>
  </div>
  <div style="margin-top:12px;">
    <input type="text" placeholder="Escribe para buscar..."
      style="width:100%; padding:12px 14px; border-radius:12px; outline:none; border:1px solid rgba(45,156,245,.22); background:rgba(13,13,26,.6); color:var(--light-text);" />
    <p style="opacity:.7; margin-top:10px; font-size:13px;">Luego lo conectamos a un buscador real.</p>
  </div>
</section>

<section class="modal" id="loginModal" role="dialog" aria-modal="true" aria-label="Acceder">
  <div class="modal-header">
    <h3 class="modal-title">Acceder</h3>
    <button class="modal-close" data-close="all" aria-label="Cerrar"><i class="fas fa-times"></i></button>
  </div>
  <div style="margin-top:12px; display:grid; gap:10px;">
    <input type="email" placeholder="Correo"
      style="width:100%; padding:12px 14px; border-radius:12px; outline:none; border:1px solid rgba(45,156,245,.22); background:rgba(13,13,26,.6); color:var(--light-text);">
    <input type="password" placeholder="Contraseña"
      style="width:100%; padding:12px 14px; border-radius:12px; outline:none; border:1px solid rgba(45,156,245,.22); background:rgba(13,13,26,.6); color:var(--light-text);">
    <button class="btn-login" type="button" style="justify-content:center;">Entrar</button>
    <p style="opacity:.7; font-size:13px; margin:0;">(UI por ahora. Luego lo conectamos.)</p>
  </div>
</section>
    `;
  }

  function wireUI() {
    const openDrawerBtn = document.getElementById('openDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('drawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    const modalBackdrop = document.getElementById('modalBackdrop');
    const searchModal = document.getElementById('searchModal');
    const loginModal = document.getElementById('loginModal');

    function openDrawer() {
      drawer.classList.add('open');
      drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    function openModal(which) {
      modalBackdrop.classList.add('open');
      if (which === 'search') searchModal.classList.add('open');
      if (which === 'login') loginModal.classList.add('open');
      closeDrawer();
      document.body.style.overflow = 'hidden';
    }
    function closeModals() {
      modalBackdrop.classList.remove('open');
      searchModal.classList.remove('open');
      loginModal.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Drawer events
    openDrawerBtn?.addEventListener('click', openDrawer);
    closeDrawerBtn?.addEventListener('click', closeDrawer);
    drawerBackdrop?.addEventListener('click', closeDrawer);

    // Modal events
    document.getElementById('openSearch')?.addEventListener('click', () => openModal('search'));
    document.getElementById('openLogin')?.addEventListener('click', () => openModal('login'));
    document.getElementById('openSearch2')?.addEventListener('click', () => openModal('search'));
    document.getElementById('openLogin2')?.addEventListener('click', () => openModal('login'));

    modalBackdrop?.addEventListener('click', closeModals);
    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeModals));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        closeModals();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const active = getCurrentFile();
    mount.innerHTML = buildHeader(active);
    wireUI();
  });
})();
