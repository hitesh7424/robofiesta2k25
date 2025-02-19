document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
  });
  