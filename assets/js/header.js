document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});
