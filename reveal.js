// Animasi Scroll Reveal dan Timeline Slide-in dengan dukungan animasi custom (zoom-out)
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 80;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
      // Otomatis tambahkan class zoom-out jika ada data-reveal="zoom-out"
      if (el.dataset.reveal === 'zoom-out') {
        el.classList.add('zoom-out');
      }
    } else {
      el.classList.remove('active');
      if (el.dataset.reveal === 'zoom-out') {
        el.classList.remove('zoom-out');
      }
    }
  }
  const timelines = document.querySelectorAll('.timeline-item');
  for (const el of timelines) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 80;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  // Paksa semua timeline-item langsung visible saat load (agar tidak perlu scroll)
  document.querySelectorAll('.timeline-item').forEach(el => {
    el.classList.add('visible');
  });
  setTimeout(revealOnScroll, 100); // trigger ulang jika ada layout shift
});

// FAQ Interaktif Accordion
const faqBtns = document.querySelectorAll('.faq-question');
faqBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    // Tutup FAQ lain jika ingin hanya satu terbuka
    faqBtns.forEach(otherBtn => {
      if (otherBtn !== this) {
        otherBtn.parentElement.classList.remove('open');
      }
    });
  });
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Ganti icon
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    localStorage.setItem('skylum-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });
  // Load preferensi
  if (localStorage.getItem('skylum-theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  }
}

// Progress Bar Roadmap (otomatis berdasarkan fase)
const roadmapBar = document.getElementById('roadmapBar');
const roadmapLabel = document.getElementById('roadmapLabel');
// Ganti sesuai progres nyata
const phase = 2; // 1=Fondasi, 2=Pembangunan, 3=Testnet, 4=Genesis
const total = 4;
const percent = Math.round((phase/total)*100);
if (roadmapBar) roadmapBar.style.width = percent + '%';
if (roadmapLabel) roadmapLabel.textContent = `Fase ${phase}/${total}: Pembangunan Internal`;
