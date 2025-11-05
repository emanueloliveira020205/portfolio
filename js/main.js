// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const themeIcon = document.querySelector(".theme-icon")
const html = document.documentElement

const currentTheme = localStorage.getItem("theme") || "dark"
html.setAttribute("data-theme", currentTheme)
updateThemeIcon(currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "light" ? "🌙" : "☀️"
}

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

// Console message for developers
console.log("%c👋 Olá, desenvolvedor!", "font-size: 20px; font-weight: bold; color: #0071e3;")
console.log("%cGostou do código? Vamos trabalhar juntos!", "font-size: 14px; color: #6e6e73;")
console.log("%cemanuel@example.com", "font-size: 14px; color: #0071e3;")
