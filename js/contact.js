/**
 * OlwByte contact
 * Validación en tiempo real, filtro de emails genéricos y toast de confirmación.
 */
(function () {
  const publicDomains = [
    'gmail.com', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'yahoo.com'
  ];

  const createToast = (title, message) => {
    let stack = document.querySelector('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }

    const toast = document.createElement('div');
    toast.className = 'toast toast--success';
    toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
    stack.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('is-visible'));

    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 240);
    }, 4200);
  };

  const validateEmail = (value) => {
    const normalized = value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return 'Introduce un email válido.';
    }

    const domain = normalized.split('@')[1];
    if (publicDomains.includes(domain)) {
      return 'Necesitamos un email corporativo para preparar el diagnóstico.';
    }

    return '';
  };

  const validateRequired = (value, message) => value.trim() ? '' : message;

  const setFieldState = (field, error) => {
    const container = field.closest('.field');
    const errorNode = container?.querySelector('.field-error');
    container?.classList.toggle('is-invalid', Boolean(error));
    if (errorNode) errorNode.textContent = error;
  };

  const initContactForm = () => {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    const fields = {
      name: form.querySelector('#nombre'),
      email: form.querySelector('#email'),
      budget: form.querySelector('#presupuesto'),
      challenge: form.querySelector('#desafio')
    };

    const validators = {
      name: (field) => validateRequired(field.value, 'Indica tu nombre.'),
      email: (field) => validateEmail(field.value),
      budget: (field) => validateRequired(field.value, 'Selecciona un rango de inversión.'),
      challenge: (field) => validateRequired(field.value, 'Cuéntanos tu mayor desafío.')
    };

    Object.entries(fields).forEach(([key, field]) => {
      if (!field) return;
      field.addEventListener('input', () => setFieldState(field, validators[key](field)));
      field.addEventListener('blur', () => setFieldState(field, validators[key](field)));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const errors = Object.entries(fields).map(([key, field]) => {
        const error = validators[key](field);
        setFieldState(field, error);
        return error;
      }).filter(Boolean);

      if (errors.length) {
        createToast('Revisa el formulario', 'Faltan algunos datos para preparar el diagnóstico.');
        return;
      }

      form.reset();
      Object.values(fields).forEach((field) => setFieldState(field, ''));
      createToast(
        'Solicitud enviada',
        'Hemos registrado tu diagnóstico gratuito. El siguiente paso es reservar una llamada de 20 minutos.'
      );
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();