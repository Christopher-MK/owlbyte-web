<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OwlByte | Recursos Gaming, Tutoriales y Descargas</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="assets/css/styles.css" />

  <!-- Modales: CSS mínimo (puedes moverlo luego a styles.css) -->
  <style>
    .ob-modal{ position:fixed; inset:0; display:none; z-index:1200; }
    .ob-modal.show{ display:block; }
    .ob-modal__overlay{ position:absolute; inset:0; background:rgba(0,0,0,.6); backdrop-filter: blur(6px); }
    .ob-modal__panel{
      position:relative;
      width:min(520px, 92vw);
      margin:10vh auto;
      background:rgba(10,15,30,.92);
      border:1px solid rgba(255,255,255,.10);
      border-radius:18px;
      overflow:hidden;
      color:#fff;
    }
    .ob-modal__header{
      display:flex; align-items:center; justify-content:space-between;
      padding:14px 16px;
      border-bottom:1px solid rgba(255,255,255,.08);
    }
    .ob-modal__close{ background:transparent; border:0; color:#fff; font-size:18px; cursor:pointer; }
    .ob-modal__body{ padding:16px; display:flex; flex-direction:column; gap:10px; }
    .ob-modal__input{
      width:100%; padding:12px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.06);
      color:#fff; outline:none;
    }
    .ob-modal__input:focus{ border-color:rgba(124,58,237,.5); }
    .ob-modal__btn{
      padding:12px; border-radius:12px; border:0; cursor:pointer;
      background:linear-gradient(135deg, rgba(124,58,237,.95), rgba(59,130,246,.85));
      color:#fff; font-weight:700;
    }
    .ob-modal__hint{ opacity:.7; font-size:13px; }
  </style>
</head>

<body>

  <!-- Header (SIN NAV ARRIBA) -->
  <header class="main-header">
    <div class="container header-content">
      <div class="logo-container">
        <div class="logo-icon">OB</div>
        <div>
          <div class="logo-text">OwlByte</div>
          <div class="logo-tagline">Recursos Gaming & Tech</div>
        </div>
      </div>
    </div>
  </header>

  <!-- SIDEBAR (con Buscar/Acceder aquí) -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-top">
      <a class="sidebar-brand" href="index.html" aria-label="OwlByte Home">
        <span class="sb-logo">OB</span>
        <span class="sb-title">OwlByte</span>
      </a>

      <button class="sidebar-toggle" id="sidebarToggle" type="button" aria-label="Abrir/cerrar menú">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <nav class="sidebar-nav">
      <a class="s-item active" href="index.html"><i class="fas fa-home"></i><span>Inicio</span></a>
      <a class="s-item" href="descargas.html"><i class="fas fa-download"></i><span>Descargas</span></a>
      <a class="s-item" href="tutoriales.html"><i class="fas fa-book-open"></i><span>Tutoriales</span></a>
      <a class="s-item" href="juegos.html"><i class="fas fa-gamepad"></i><span>Juegos</span></a>
      <a class="s-item" href="cursos.html"><i class="fas fa-graduation-cap"></i><span>Cursos</span></a>
      <a class="s-item" href="herramientas.html"><i class="fas fa-tools"></i><span>Herramientas</span></a>
    </nav>

    <div class="sidebar-actions">
      <button class="s-item" type="button" id="btnSearch">
        <i class="fas fa-search"></i><span>Buscar</span>
      </button>

      <button class="s-item" type="button" id="btnLogin">
        <i class="fas fa-user"></i><span>Acceder</span>
      </button>
    </div>
  </aside>

  <!-- Overlay para móvil (si tu CSS ya lo maneja, esto ayuda) -->
  <div class="sidebar-overlay" id="sidebarOverlay" aria-hidden="true"></div>

  <!-- CONTENIDO PRINCIPAL -->
  <main class="page" id="page">

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-title">El Hub Definitivo para <span>Gamers y Developers</span></h1>
          <p class="hero-subtitle">
            Accede a recursos, tutoriales, herramientas y descargas exclusivas.
            Optimiza tu experiencia gaming y mejora tus proyectos.
          </p>

          <div class="hero-buttons">
            <a href="recursos.html" class="btn-primary"><i class="fas fa-rocket"></i> Explorar Recursos</a>
            <a href="tutoriales.html" class="btn-secondary"><i class="fas fa-play-circle"></i> Ver Tutoriales</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-container">
            <div class="hexagon-grid">
              <a class="hexagon" href="pdf.html">
                <i class="fas fa-file-pdf"></i>
                <span>PDFs</span>
              </a>
              <a class="hexagon" href="descargas.html">
                <i class="fas fa-download"></i>
                <span>Descargas</span>
              </a>
              <a class="hexagon" href="juegos.html">
                <i class="fas fa-gamepad"></i>
                <span>Juegos</span>
              </a>
              <a class="hexagon" href="herramientas.html">
                <i class="fas fa-tools"></i>
                <span>Herramientas</span>
              </a>
              <a class="hexagon" href="tutoriales.html">
                <i class="fas fa-video"></i>
                <span>Tutoriales</span>
              </a>
              <a class="hexagon" href="cursos.html">
                <i class="fas fa-graduation-cap"></i>
                <span>Cursos</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Recursos -->
    <section class="resources-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recursos Destacados</h2>
          <p class="section-subtitle">Contenido popular seleccionado por la comunidad</p>
        </div>

        <div class="resource-tabs">
          <button class="tab-btn active"><i class="fas fa-star"></i> Destacados</button>
          <button class="tab-btn"><i class="fas fa-download"></i> Más Descargados</button>
          <button class="tab-btn"><i class="fas fa-gamepad"></i> Gaming</button>
          <button class="tab-btn"><i class="fas fa-code"></i> Desarrollo</button>
          <button class="tab-btn"><i class="fas fa-wrench"></i> Herramientas</button>
        </div>

        <div class="resources-grid">
          <div class="resource-card-alt">
            <div class="resource-badge">Nuevo</div>
            <div class="resource-header">
              <div class="resource-icon"><i class="fas fa-cogs"></i></div>
            </div>
            <div class="resource-content">
              <h3 class="resource-title">Optimizador Gaming Pro 2024</h3>
              <p class="resource-description">
                Suite de herramientas para optimizar Windows y rendimiento gaming.
              </p>
              <div class="resource-meta">
                <span><i class="fas fa-hdd"></i> 85 MB</span>
                <span><i class="fas fa-download"></i> 3,245</span>
                <span><i class="fas fa-calendar"></i> Mar 2024</span>
              </div>
              <a href="descargas.html" class="resource-download"><i class="fas fa-arrow-down"></i> Descargar ahora</a>
            </div>
          </div>

          <div class="resource-card-alt">
            <div class="resource-badge">Premium</div>
            <div class="resource-header">
              <div class="resource-icon"><i class="fas fa-book"></i></div>
            </div>
            <div class="resource-content">
              <h3 class="resource-title">Guía Completa de Shaders</h3>
              <p class="resource-description">
                Manual avanzado sobre shaders, optimización y técnicas gráficas.
              </p>
              <div class="resource-meta">
                <span><i class="far fa-file-pdf"></i> PDF</span>
                <span><i class="fas fa-download"></i> 1,879</span>
                <span><i class="fas fa-calendar"></i> Feb 2024</span>
              </div>
              <a href="pdf.html" class="resource-download"><i class="fas fa-arrow-down"></i> Descargar PDF</a>
            </div>
          </div>

          <div class="resource-card-alt">
            <div class="resource-header">
              <div class="resource-icon"><i class="fas fa-code-branch"></i></div>
            </div>
            <div class="resource-content">
              <h3 class="resource-title">Scripts de Automatización</h3>
              <p class="resource-description">
                Colección de scripts para automatizar tareas comunes.
              </p>
              <div class="resource-meta">
                <span><i class="fab fa-python"></i> Python</span>
                <span><i class="fas fa-download"></i> 2,541</span>
                <span><i class="fas fa-calendar"></i> Ene 2024</span>
              </div>
              <a href="descargas.html" class="resource-download"><i class="fas fa-arrow-down"></i> Descargar scripts</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-container">
        <h2 class="cta-title">No te pierdas los nuevos recursos</h2>
        <p class="cta-text">
          Suscríbete para recibir notificaciones sobre nuevos tutoriales, herramientas y descargas.
          Sin spam: solo lo mejor.
        </p>

        <form class="cta-form">
          <input type="email" class="email-input" placeholder="Tu correo electrónico" required />
          <button type="submit" class="submit-btn">Suscribirse</button>
        </form>

        <p class="section-subtitle">Únete a miles de usuarios que ya aprovechan nuestros recursos</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3>OwlByte</h3>
            <p>Plataforma de recursos gaming, desarrollo y tecnología. Contenido útil para mejorar tu rendimiento y proyectos.</p>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-discord"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h3>Recursos</h3>
            <ul class="footer-links-alt">
              <li><a href="descargas.html"><i class="fas fa-chevron-right"></i> Descargas</a></li>
              <li><a href="tutoriales.html"><i class="fas fa-chevron-right"></i> Tutoriales</a></li>
              <li><a href="pdf.html"><i class="fas fa-chevron-right"></i> Guías PDF</a></li>
              <li><a href="herramientas.html"><i class="fas fa-chevron-right"></i> Herramientas</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Comunidad</h3>
            <ul class="footer-links-alt">
              <li><a href="#"><i class="fas fa-chevron-right"></i> Foros</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Eventos</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Ranking</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Contribuir</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Soporte</h3>
            <ul class="footer-links-alt">
              <li><a href="#"><i class="fas fa-chevron-right"></i> Centro de ayuda</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Contacto</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Reportar problema</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Privacidad</a></li>
              <li><a href="#"><i class="fas fa-chevron-right"></i> Términos</a></li>
            </ul>
          </div>
        </div>

        <div class="copyright-bar">
          <p>&copy; 2026 OwlByte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

  </main>

  <!-- MODAL: BUSCAR -->
  <div class="ob-modal" id="searchModal" aria-hidden="true">
    <div class="ob-modal__overlay" data-close="search"></div>
    <div class="ob-modal__panel">
      <div class="ob-modal__header">
        <h3>Buscar</h3>
        <button class="ob-modal__close" type="button" data-close="search">✕</button>
      </div>
      <div class="ob-modal__body">
        <input class="ob-modal__input" type="text" placeholder="Buscar recursos..." />
        <p class="ob-modal__hint">Tip: luego conectamos esto a un buscador real.</p>
      </div>
    </div>
  </div>

  <!-- MODAL: ACCEDER -->
  <div class="ob-modal" id="loginModal" aria-hidden="true">
    <div class="ob-modal__overlay" data-close="login"></div>
    <div class="ob-modal__panel">
      <div class="ob-modal__header">
        <h3>Acceder</h3>
        <button class="ob-modal__close" type="button" data-close="login">✕</button>
      </div>
      <div class="ob-modal__body">
        <input class="ob-modal__input" type="email" placeholder="Correo" />
        <input class="ob-modal__input" type="password" placeholder="Contraseña" />
        <button class="ob-modal__btn" type="button">Entrar</button>
      </div>
    </div>
  </div>

  <!-- JS local (si ya tienes app.js, mantenlo; esto garantiza que modales funcionen en todas) -->
  <script>
    (function () {
      const btnSearch = document.getElementById('btnSearch');
      const btnLogin  = document.getElementById('btnLogin');

      const searchModal = document.getElementById('searchModal');
      const loginModal  = document.getElementById('loginModal');

      function openModal(modal){
        if(!modal) return;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
      }

      function closeModal(modal){
        if(!modal) return;
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
      }

      if(btnSearch) btnSearch.addEventListener('click', () => openModal(searchModal));
      if(btnLogin)  btnLogin.addEventListener('click', () => openModal(loginModal));

      document.addEventListener('click', (e) => {
        const close = e.target.closest('[data-close]');
        if(!close) return;

        const type = close.getAttribute('data-close');
        if(type === 'search') closeModal(searchModal);
        if(type === 'login')  closeModal(loginModal);
      });

      document.addEventListener('keydown', (e) => {
        if(e.key !== 'Escape') return;
        closeModal(searchModal);
        closeModal(loginModal);
      });

      // Sidebar toggle (si tu app.js ya lo hace, esto no estorba)
      const sidebar = document.getElementById('sidebar');
      const toggle  = document.getElementById('sidebarToggle');
      const overlay = document.getElementById('sidebarOverlay');

      function openSidebar(){
        if(!sidebar) return;
        sidebar.classList.add('open');
        if(overlay){ overlay.classList.add('show'); overlay.setAttribute('aria-hidden','false'); }
      }
      function closeSidebar(){
        if(!sidebar) return;
        sidebar.classList.remove('open');
        if(overlay){ overlay.classList.remove('show'); overlay.setAttribute('aria-hidden','true'); }
      }

      if(toggle) toggle.addEventListener('click', () => {
        if(sidebar && sidebar.classList.contains('open')) closeSidebar();
        else openSidebar();
      });
      if(overlay) overlay.addEventListener('click', closeSidebar);
    })();
  </script>

  <script src="assets/js/app.js" defer></script>
</body>
</html>
```0