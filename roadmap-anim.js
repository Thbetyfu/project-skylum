// Animasi scroll reveal untuk roadmap zigzag
function revealRoadmapZigzag() {
  const items = document.querySelectorAll('.roadmap-phase-zigzag');
  const windowHeight = window.innerHeight;
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < windowHeight - 80) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealRoadmapZigzag);
window.addEventListener('resize', revealRoadmapZigzag);
document.addEventListener('DOMContentLoaded', revealRoadmapZigzag);
