// Cards compétences
const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

// ***** Carousel projets ***** //

const wrapper = document.querySelector(".projects-wrapper");
const allCards = Array.from(wrapper.children);
const carousel = document.querySelector(".projects-carousel");

// Dupliquer les projets pour un défilement infini fluide
allCards.forEach((card) => {
  const clone = card.cloneNode(true);
  wrapper.appendChild(clone);
});

carousel.addEventListener("mouseenter", () => {
  wrapper.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
  wrapper.style.animationPlayState = "running";
});

// ***** Gestion modal projets ***** //

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalTime = document.getElementById("modal-time");
const modalLink = document.getElementById("modal-link");
const closeModal = document.querySelector(".close-modal");

// Données des projets
const projectDetails = [
  {
    title: "Site internet de Booki - agence de voyage",
    img: "./assets/projects/projet1.png",
    description:
      "Agence de voyage pour la recherche de logements à louer et activités partout en France",
    stack: "HTML, CSS, responsive",
    time: "1 semaine",
    skills:
      "Implémenter une interface responsive avec HTML et CSS, Installer un environnement de développement front-end, Intégrer du contenu conformément à une maquette avec HTML et CSS",
    link: "",
  },
  {
    title: "Site internet OhMyFood - réservation de menu en ligne",
    img: "./assets/projects/projet2.png",
    description: "Une expérience UX/UI avec intégration d'animations",
    stack: "HTML, CSS, Sass, Mobile first",
    time: "2 semaines",
    skills:
      "Intégrer une maquette en mobile-first, Mettre en œuvre des animations CSS, Versionner le projet avec Git et Github",
    link: "https://estelle-fqt.github.io/Projet4-OhMyFood/",
  },
  {
    title: "Site internet de l'architecte d'intérieur Sophie Bluel",
    img: "./assets/projects/projet3.png",
    description: "Une expérience JavaScript pour dynamiser un site web",
    stack: "HTML CSS, JavaScript, API REST",
    time: "2 semaines",
    skills:
      "Récupérer les données utilisateurs dans le JavaScript via des formulaires, Gérer les événements utilisateurs avec JavaScript, Manipuler les éléments du DOM avec JavaScript",
    link: "",
  },
  {
    title: "Site internet Kasa - réservation de location",
    img: "./assets/projects/projet4.png",
    description: "Une expérience de création d'application web en React",
    stack: "HTML CSS, React, Node.js",
    time: "2 semaines",
    skills:
      "Intégrer una application avec React et Vite, Configurer la navigation entre les pages avec React Router, Mettre en œuvre des animations CSS, Développer une interface web avec Sass",
    link: "",
  },
  {
    title: "Site internet de la photographe Nina Carducci",
    img: "./assets/projects/projet5.png",
    description:
      "Une expérience d'optimisation du référencement et d'optimisation de performances",
    stack:
      "SEO, audit LightHouse, accessibilité, performance, rapport d'optimisation",
    time: "1 semaine",
    skills: "Optimiser la performance d'un site web",
    link: "https://estelle-fqt.github.io/Projet8-Referencement/",
  },
  {
    title: "Site internet de la photographe Robbie Lens",
    img: "./assets/projects/projet6.png",
    description: "Une expérience de création d'un site web en HTML et CSS",
    stack: "HTML, CSS",
    time: "1 semaine",
    skills: "Intégration de l'interface d'un site web",
    link: "https://estelle-fqt.github.io/Photographe-RobbieLens/",
  },
  {
    title: "Site internet développeuse web Estelle Fouqueteau",
    img: "./assets/projects/projet7.png",
    description: "Création de mon site web en tant que freelance",
    stack: "HTML, CSS, React",
    time: "2 semaines",
    skills: "Intégration d'un site web dynamique en React.js",
    link: "https://espritdev.com/",
  },
  {
    title: "Site internet de l'agence événementielle 724events'",
    img: "./assets/projects/projet8.png",
    description: "Une expérience de debogage d'un site web",
    stack:
      "Tests unitaires, Tests fonctionnels, React Developer Tools, Yarn, Node.js",
    time: "1 semaine",
    skills:
      "Débugger un site web grâce aux Chrome DevTools, Rédiger un cahier de recette pour tester un site",
    link: "https://github.com/estelle-fqt/Projet9-Debugger-un-site",
  },
  {
    title: "Site internet de la banque ArgentBank'",
    img: "./assets/projects/projet9.png",
    description: "Intégration en React et gestion d'état avec Redux",
    stack: "React.js, Redux Toolkit, API REST et Swagger, Node.js",
    time: "2 semaines",
    skills:
      "Afficher les données du backend sur l'interface via des appels API, Configurer des routes API pour la communication client / serveur, Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front",
    link: "https://github.com/estelle-fqt/Project-10-Bank-API",
  },
];

// Ajout des événements au clic sur chaque carte
document.querySelectorAll(".project-card").forEach((card) => {
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
      modalLink.style.display = "inline-block"; // ou "flex" selon ton CSS
    } else {
      modalLink.style.display = "none";
    }

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
