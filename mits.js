// Simple Slideshow
let index = 0;
const slides = document.getElementById('slides');

setInterval(() => {
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// Stats Counter Animation
const counters = [document.getElementById('stat1'), document.getElementById('stat2'), document.getElementById('stat3'), document.getElementById('stat4')];
const goals = [1200, 80, 300, 15000];

function animateCounters() {
  counters.forEach((counter, i) => {
    let current = 0;
    const increment = goals[i] / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= goals[i]) {
        current = goals[i];
        clearInterval(interval);
      }
      counter.textContent = Math.floor(current);
    }, 20);
  });
}

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

const banner = document.getElementById("stickyBanner");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    banner.classList.remove("hidden");
  } else {
    banner.classList.add("hidden");
  }
  lastScroll = currentScroll;
});


window.onload = animateCounters;