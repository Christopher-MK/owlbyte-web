/**
 * OlwByte component loader
 * Carga el header y footer como HTML modular y adapta las rutas para GitHub Pages / Netlify.
 */
(function () {
  const segments = window.location.pathname.split('/').filter(Boolean);
  const isGithubProjectSite = window.location.hostname.endsWith('github.io') && segments.length > 0;
  const basePath = isGithubProjectSite ? `/${segments[0]}/` : '/';

  const resolvePath = (path) => {
    if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
      return path;
    }
    return `${basePath}${path}`.replace(/([^:]\/)\/+/g, '$1');
  };

  window.OLWBYTE = {
    basePath,
    resolvePath
  };

  const applyResolvedPaths = (scope) => {
    scope.querySelectorAll('[data-base-href]').forEach((element) => {
      element.setAttribute('href', resolvePath(element.dataset.baseHref));
    });

    scope.querySelectorAll('[data-base-src]').forEach((element) => {
      element.setAttribute('src', resolvePath(element.dataset.baseSrc));
    });

    scope.querySelectorAll('[data-base-action]').forEach((element) => {
      element.setAttribute('action', resolvePath(element.dataset.baseAction));
    });
  };

  const setActiveNavigation = () => {
    const current = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const normalized = new URL(href, window.location.origin).pathname.replace(/index\.html$/, '').replace(/\/$/, '');
      if (normalized === current || (normalized === '' && current === '')) {
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  const loadSlot = async (selector, partial) => {
    const slot = document.querySelector(selector);
    if (!slot) return;

    slot.classList.add('loader-slot');
    slot.innerHTML = '<div class="loader-bar" aria-hidden="true"></div>';

    try {
      const response = await fetch(resolvePath(`partials/${partial}`));
      if (!response.ok) throw new Error(`No se pudo cargar ${partial}`);
      slot.innerHTML = await response.text();
      applyResolvedPaths(slot);
      slot.classList.remove('loader-slot');
      if (partial === 'footer.html') {
        const yearNode = slot.querySelector('[data-current-year]');
        if (yearNode) yearNode.textContent = String(new Date().getFullYear());
      }
      setActiveNavigation();
      document.dispatchEvent(new CustomEvent('olwbyte:componentLoaded', { detail: { partial } }));
    } catch (error) {
      console.error(error);
      slot.innerHTML = '';
    }
  };

  applyResolvedPaths(document);
  loadSlot('[data-partial="header"]', 'header.html');
  loadSlot('[data-partial="footer"]', 'footer.html');
})();