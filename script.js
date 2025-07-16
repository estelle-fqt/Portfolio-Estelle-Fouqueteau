// Animation écriture bannière
document.addEventListener("DOMContentLoaded", function () {
  // eslint-disable-next-line no-undef
  new Typed("#typed-text", {
    strings: ["Développeuse web", "Orientée frontend", "À votre écoute"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

// menu
// eslint-disable-next-line no-undef
const burgerIcon = lottie.loadAnimation({
  container: document.getElementById("lottie-list"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./assets/icons/List.json",
});

const icon = document.getElementById("lottie-list");
const mobileMenu = document.getElementById("mobile-menu");
let isMenuOpen = false; //var d'état pr savoir si menu ouvert ou fermé

// Ouvre et ferme le menu
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  burgerIcon.setDirection(isMenuOpen ? 1 : -1);
  burgerIcon.play();

  mobileMenu.classList.toggle("open", isMenuOpen);
  document.body.classList.toggle("noscroll", isMenuOpen);
}

// Clic sur l’icône menu
icon.addEventListener("click", (e) => {
  e.stopPropagation(); // évite que le clic sur l’icône ferme directement le menu
  toggleMenu();
});

// Clic à l’extérieur du menu → fermeture
document.addEventListener("click", (e) => {
  const clickOutsideMenu =
    !mobileMenu.contains(e.target) && !icon.contains(e.target);
  if (isMenuOpen && clickOutsideMenu) {
    toggleMenu();
  }
});

// Clic sur un lien du menu → fermeture
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

// *** Cards compétences *** //
const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const front = card.querySelector(".card__title");

    const flipDuration = 258;

    if (!card.classList.contains("is-flipped")) {
      // Si la carte est en front et qu'on va vers le back
      card.classList.add("is-flipped");

      // Attendre que le flip soit terminé avant de cacher le titre
      setTimeout(() => {
        front.classList.add("hidden");
      }, flipDuration);
    } else {
      // Si on revient en front
      card.classList.remove("is-flipped");

      // Attendre la fin du retour pour afficher le titre
      setTimeout(() => {
        front.classList.remove("hidden");
      }, flipDuration);
    }
  });
});

// ***** Gestion modal projets ***** //
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalTime = document.getElementById("modal-time");
const modalLink = document.getElementById("modal-link");
const modalGithub = document.getElementById("modal-github");
const closeModal = document.querySelector(".close-modal");

// Données des projets
const projectDetails = [
  {
    title: "Site internet OhMyFood - réservation de menu en ligne",
    img: "./assets/projects/projet2.webp",
    description: "Une expérience UX/UI avec intégration d'animations",
    stack: "HTML, CSS, Sass, Mobile first",
    time: "2 semaines",
    skills:
      "Intégrer une maquette en mobile-first, Mettre en œuvre des animations CSS, Versionner le projet avec Git et Github",
    link: "https://estelle-fqt.github.io/Projet4-OhMyFood/",
    github: "https://github.com/estelle-fqt/Projet4-OhMyFood",
  },
  {
    title: "Site internet de l'architecte d'intérieur Sophie Bluel",
    img: "./assets/projects/projet3.webp",
    description: "Une expérience JavaScript pour dynamiser un site web",
    stack: "HTML CSS, JavaScript, API REST",
    time: "2 semaines",
    skills:
      "Récupérer les données utilisateurs dans le JavaScript via des formulaires, Gérer les événements utilisateurs avec JavaScript, Manipuler les éléments du DOM avec JavaScript",
    link: "",
    github: "https://github.com/estelle-fqt/Projet6-architecte-sophie-bluel",
  },
  {
    title: "Site internet Kasa - réservation de location",
    img: "./assets/projects/projet4.webp",
    description: "Une expérience de création d'application web en React",
    stack: "HTML CSS, React, Node.js",
    time: "2 semaines",
    skills:
      "Intégrer una application avec React et Vite, Configurer la navigation entre les pages avec React Router, Mettre en œuvre des animations CSS, Développer une interface web avec Sass",
    link: "",
    github: "https://github.com/estelle-fqt/Projet7-Kasa",
  },
  {
    title: "Site internet de la photographe Nina Carducci",
    img: "./assets/projects/projet5.webp",
    description:
      "Une expérience d'optimisation du référencement et d'optimisation de performances",
    stack:
      "SEO, audit LightHouse, accessibilité, performance, rapport d'optimisation",
    time: "1 semaine",
    skills: "Optimiser la performance d'un site web",
    link: "https://estelle-fqt.github.io/Projet8-Referencement/",
    github: "https://github.com/estelle-fqt/Projet8-Referencement",
  },
  {
    title: "Site internet développeuse web Estelle Fouqueteau",
    img: "./assets/projects/projet7.webp",
    description: "Création de mon site web en tant que freelance",
    stack: "HTML, CSS, React",
    time: "2 semaines",
    skills: "Intégration d'un site web dynamique en React.js",
    link: "https://espritdev.com/",
    github: "https://github.com/estelle-fqt/Esprit-dev",
  },
  {
    title: "Site internet de la banque ArgentBank",
    img: "./assets/projects/projet9.webp",
    description: "Intégration en React et gestion d'état avec Redux",
    stack: "React.js, Redux Toolkit, API REST et Swagger, Node.js",
    time: "2 semaines",
    skills:
      "Afficher les données du backend sur l'interface via des appels API, Configurer des routes API pour la communication client / serveur, Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front",
    link: "https://github.com/estelle-fqt/Project-10-Bank-API",
    github: "https://github.com/estelle-fqt/Project-10-Bank-API",
  },
];

// Ouverture de la modale
document.querySelectorAll(".show-details").forEach((card) => {
  card.addEventListener("click", () => {
    const index = card.dataset.project;
    const project = projectDetails[index];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalImg.src = project.img;
    modalImg.alt = `aperçu du projet ${project.title}`;
    modalDescription.textContent = project.description;
    modalTime.textContent = project.time;
    //gestion du bouton "voir le projet"
    if (project.link && project.link.trim() !== "") {
      modalLink.href = project.link;
      modalLink.style.display = "inline-block";
    } else {
      modalLink.style.display = "none";
    }
    modalGithub.href = project.github;

    // Ajoute la stack sous forme de liste à puces
    const modalStack = document.getElementById("modal-stack");
    modalStack.innerHTML = ""; // Vider la liste avant d'ajouter de nouveaux éléments
    project.stack.split(", ").forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalStack.appendChild(li);
    });

    // Ajoute les softskills sous forme de liste à puces
    const modalSkills = document.getElementById("modal-skills");
    modalSkills.innerHTML = ""; // Vider la liste avant d'ajouter de nouveaux éléments
    project.skills.split(", ").forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalSkills.appendChild(li);
    });

    modal.classList.add("show");
  });
});

// Fermeture de la modale
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fermeture en cliquant en dehors du contenu
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
