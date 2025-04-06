export function setupMobileMenu() {
    const menuToggle = document.querySelector(".mobile-menu-toggle")
    const nav = document.querySelector("nav")

    // Créer un overlay pour le menu mobile
    const menuOverlay = document.createElement("div")
    menuOverlay.classList.add("menu-overlay")
    document.body.appendChild(menuOverlay)

    // Fonction pour basculer le menu
    function toggleMenu() {
        menuToggle.classList.toggle("active")
        nav.classList.toggle("active")
        menuOverlay.classList.toggle("active")

        // Empêcher le défilement du body quand le menu est ouvert
        // if (nav.classList.contains("active")) {
        //   document.body.style.overflow = "hidden"
        // } else {
        //   document.body.style.overflow = ""
        // }
    }

    // Ajouter les écouteurs d'événements
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu)
    }

    // Fermer le menu quand on clique sur l'overlay
    menuOverlay.addEventListener("click", toggleMenu)

    // Fermer le menu quand on clique sur un lien
    const navLinks = nav.querySelectorAll("a")
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("active")) {
                toggleMenu()
            }
        })
    })

    // Fermer le menu quand on redimensionne la fenêtre au-dessus de 768px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && nav.classList.contains("active")) {
            toggleMenu()
        }
    })
}