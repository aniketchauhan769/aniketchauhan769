document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const button = e.target.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Inquiry Sent ✓';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    e.target.reset();
  }, 1800);
});
