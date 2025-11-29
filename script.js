// Theme toggle and smooth nav scrolling
(function(){
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', toggleTheme);

  function toggleTheme(){
    document.body.classList.toggle('dark');
    const now = document.body.classList.contains('dark') ? 'dark' : 'light';
    try { localStorage.setItem('prasad_theme', now); } catch(e) {}
  }

  // restore theme preference
  try {
    const saved = localStorage.getItem('prasad_theme');
    if(saved === 'dark') document.body.classList.add('dark');
  } catch(e){}

  // smooth scroll for nav links
  document.querySelectorAll('.top-nav a, .cta .btn').forEach(el => {
    el.addEventListener('click', (ev) => {
      const href = el.getAttribute('href');
      if(!href || href === '#') return;
      ev.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
