// Theme Toggle
//const themeToggle = document.getElementById("themeToggle")
//const themeIcon = document.querySelector(".theme-icon")
const html = document.documentElement

const currentTheme = "dark"
html.setAttribute("data-theme", currentTheme)
//updateThemeIcon(currentTheme)

/*themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  //updateThemeIcon(newTheme)
})*/

/*function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "light" ? "🌙" : "☀️"
}*/

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const navHeight = document.querySelector(".nav").offsetHeight
      const targetPosition = target.offsetTop - navHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element)
})

// Add scroll effect to navigation
let lastScroll = 0
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    nav.style.boxShadow = "none"
  } else {
    nav.style.boxShadow = "var(--shadow-sm)"
  }

  lastScroll = currentScroll
})

// Parallax effect for hero section (subtle)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero-content")

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`
    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5
  }
})



// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})

const galleries = {
  1: ["img/4cows_login.png", "img/4cows_cowPage.png", "img/4cows_uso.png", "video/4cows.mp4"],
  2: ["img/scoreboard.jpg", "img/controlboardMenu.png", "img/controlboardInGame.png", "img/controlboardInGameDragDrop.png"],
  3: ["img/gs-server.png", "img/gs-serverContainer.png", "img/gs-serverSettings.png"],
  4: ["img/glacierSystems.png", "img/glacierSystems2.png"],
  5: ["img/pedro.png", "img/pedro2.png"],
  6: ["img/battista.png", "img/battista2.png"]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(id) {
  currentGallery = galleries[id] || [];
  currentIndex = 0;
  if (currentGallery.length === 0) return;

  document.body.style.overflow = 'hidden';
  const modal = document.getElementById('projectModal');
  updateMedia();
  modal.style.display = 'flex';
}

function closeGallery() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';

  // Pausar vídeo se estiver ativo
  const video = document.querySelector('#modalVideo');
  if (video) video.pause();
}

function nextImage() {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  updateMedia();
}

function prevImage() {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  updateMedia();
}

function updateMedia() {
  const container = document.querySelector('.modal-gallery');
  const currentFile = currentGallery[currentIndex];

  // limpar anterior
  container.querySelectorAll('img, video').forEach(el => el.remove());

  let mediaEl;
  if (currentFile.endsWith('.mp4') || currentFile.endsWith('.webm') || currentFile.endsWith('.mov')) {
    mediaEl = document.createElement('video');
    mediaEl.id = 'modalVideo';
    mediaEl.src = currentFile;
    mediaEl.controls = true;
    mediaEl.autoplay = true;
  } else {
    mediaEl = document.createElement('img');
    mediaEl.id = 'modalImage';
    mediaEl.src = currentFile;
    mediaEl.alt = 'Imagem do Projeto';
  }

  mediaEl.style.maxWidth = '100%';
  mediaEl.style.maxHeight = '80vh';
  mediaEl.style.borderRadius = '12px';
  mediaEl.style.objectFit = 'contain';
  mediaEl.style.display = 'block';
  mediaEl.style.margin = '0 auto';

  // inserir antes dos botões para manter ordem visual
  const prevBtn = container.querySelector('.prev-btn');
  container.insertBefore(mediaEl, prevBtn.nextSibling);
}

window.onclick = (event) => {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) {
    closeGallery();
  }
};

function openMedia(type, src) {
  const modal = document.getElementById('mediaModal');
  const container = document.getElementById('mediaContainer');
  container.innerHTML = '';

  if (type === 'img') {
    container.innerHTML = `<img src="${src}" alt="Media">`;
  } else {
    container.innerHTML = `
      <iframe 
        src="${src}" 
        frameborder="0" 
        allowfullscreen
        allow="autoplay; encrypted-media">
      </iframe>`;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('mediaModal').style.display = 'none';
  document.getElementById('mediaContainer').innerHTML = '';
}
// Console message for developers
console.log("%c👋 Olá, desenvolvedor!", "font-size: 20px; font-weight: bold; color: #0071e3;")
console.log("%cGostou do código? Vamos trabalhar juntos!", "font-size: 14px; color: #6e6e73;")
console.log("%cemanuel@example.com", "font-size: 14px; color: #0071e3;")
