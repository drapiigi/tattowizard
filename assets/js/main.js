(() => {
  const root = document.documentElement;
  root.classList.add('js');

  // Sticky nav state
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

  // Reveal on scroll
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  // Portfolio filters
  const chips = document.querySelectorAll('.chip');
  const pieces = document.querySelectorAll('.piece');
  const applyFilter = (style) => {
    chips.forEach((c) => {
      const on = c.dataset.filter === style;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    pieces.forEach((p) => {
      const show = style === 'all' || p.dataset.style === style;
      if (show && p.classList.contains('is-hidden')) {
        p.classList.remove('is-hidden');
        p.classList.add('is-entering');
        requestAnimationFrame(() => requestAnimationFrame(() => p.classList.remove('is-entering')));
      } else if (!show) {
        p.classList.add('is-hidden');
      }
    });
  };
  chips.forEach((c) => c.addEventListener('click', () => applyFilter(c.dataset.filter)));
  document.querySelectorAll('[data-jump]').forEach((a) => a.addEventListener('click', () => applyFilter(a.dataset.jump)));

  // Demo form: validates locally, never sends or stores data
  const form = document.getElementById('book-form');
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach((f) => {
      const valid = f.type === 'checkbox' ? f.checked : f.checkValidity() && f.value.trim() !== '';
      f.classList.toggle('invalid', !valid);
      if (!valid) ok = false;
    });
    status.hidden = false;
    if (ok) {
      status.textContent = 'Thank you. In the live studio, we would reply within three working days. (Demo only: nothing was sent.)';
      form.reset();
    } else {
      status.textContent = 'Please add your name, a valid email and confirm you are 18 or older.';
    }
  });
})();
