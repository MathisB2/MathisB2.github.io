document.addEventListener("DOMContentLoaded", () => {


  // Gestion de la galerie d'images
  setupImageGallery()

  // Animation d'entrée pour les éléments de la page
  animateContent()
})


// Fonction pour gérer la galerie d'images
function setupImageGallery() {
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.querySelector(".main-media img")

  if (!thumbnails.length || !mainImage) return

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Mettre à jour l'image principale
      const thumbnailImg = this.querySelector("img")
      mainImage.src = thumbnailImg.src

      // Mettre à jour la classe active
      thumbnails.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // Animation de transition
      mainImage.style.opacity = "0"
      setTimeout(() => {
        mainImage.style.opacity = "1"
      }, 100)
    })
  })

  // Ajouter des effets de survol pour les images
  mainImage.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.02)"
  })

  mainImage.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
}

// Fonction pour animer l'entrée des éléments de contenu
function animateContent() {
  // Sélectionner les éléments à animer
  const elements = [".project-header", ".project-gallery", ".project-description", ".project-sidebar", ".next-project"]

  // Observer l'intersection pour déclencher les animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observer chaque élément
  elements.forEach((selector) => {
    const element = document.querySelector(selector)
    if (element) {
      // Ajouter des styles initiaux
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"

      // Ajouter une classe pour les animations
      element.classList.add("animate-ready")

      // Observer l'élément
      observer.observe(element)
    }
  })

  // Ajouter une classe pour indiquer que l'animation est terminée
  document.addEventListener("animationend", (e) => {
    if (e.target.classList.contains("animate-in")) {
      e.target.classList.add("animate-done")
    }
  })
}

// Ajouter une classe CSS pour les éléments animés
document.addEventListener("DOMContentLoaded", () => {
  // Ajouter des styles pour les animations
  const style = document.createElement("style")
  style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(20px);
        }
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `
  document.head.appendChild(style)
})

