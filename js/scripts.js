// scripts.js - Validación básica del formulario de contacto con mensajes claros y accesibles

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;
      // Validar nombre
      const nombre = form.nombre;
      if (!nombre.value.trim()) {
        nombre.classList.add('is-invalid');
        valid = false;
      } else {
        nombre.classList.remove('is-invalid');
      }
      // Validar email
      const email = form.email;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
      } else {
        email.classList.remove('is-invalid');
      }
      // Validar mensaje
      const mensaje = form.mensaje;
      if (!mensaje.value.trim()) {
        mensaje.classList.add('is-invalid');
        valid = false;
      } else {
        mensaje.classList.remove('is-invalid');
      }
      if (!valid) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
    // Quitar mensaje de error al escribir
    ['nombre', 'email', 'mensaje'].forEach(function (campo) {
      const input = form[campo];
      input.addEventListener('input', function () {
        input.classList.remove('is-invalid');
      });
    });
  }
});

// Decisiones de accesibilidad:
// - Mensajes de error claros y visibles (Bootstrap .invalid-feedback)
// - Se previene el envío si hay errores, evitando confusión
// - Se usa outline visible para navegación por teclado
