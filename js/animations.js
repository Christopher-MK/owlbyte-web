/**
 * OlwByte animations
 * Revela bloques al hacer scroll y anima métricas clave una sola vez.
 */
(function () {
  const numberFormatter = new Intl.NumberFormat('es-ES');

  const animateCounter = (element) => {
    const target = Number(element.dataset.counter || 0);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = Number(element.dataset.duration || 1400);
    let startedAt = null;

    const tick = (timestamp) => {
      if (!startedAt) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = `${prefix}${numberFormatter.format(value)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const initAnimations = () => {
    const revealItems = document.querySelectorAll('.reveal, .reveal-scale');
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');

        const counters = entry.target.matches('[data-counter]')
          ? [entry.target]
          : Array.from(entry.target.querySelectorAll('[data-counter]'));

        counters.forEach((counter) => {
          if (counter.dataset.counted === 'true') return;
          counter.dataset.counted = 'true';
          animateCounter(counter);
        });

        obs.unobserve(entry.target);
      });
    }, { threshold: .14, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item) => observer.observe(item));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  document.addEventListener('olwbyte:componentLoaded', initAnimations);
})();