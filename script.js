document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', () => {
      // simple feedback
      form.querySelector('input[type="submit"]').value = 'Enviando…';
      form.querySelector('input[type="submit"]').disabled = true;
    });
  });
});
