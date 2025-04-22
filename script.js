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

// Données de tes projets (à adapter selon tes besoins)
const projectDetails = [
  {
    title: "Site internet de Booki - agence immobilière",
    img: "./assets/projects/projet1.png",
    description: "Un site responsive pour la recherche de logements à louer",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
  },
  {
    title: "Site internet OhMyFood - réservation de menu en ligne",
    img: "./assets/projects/projet2.png",
    description:
      "Une expérience UX/UI de réservation de plats dans des restaurants",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
  },
  {
    title: "Site internet de l'architecte d'intérieur Sophie Bluel",
    img: "./assets/projects/projet3.png",
    description: "Une expérience JavaScript pour dynamiser un site web",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "Temps : 2 semaines",
    skills: "compétences, compétences",
    link: "https://",
  },
  {
    title: "Site internet Kasa - réservation de location",
    img: "./assets/projects/projet4.png",
    description: "Une expérience de création d'application web en React",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
  },
  {
    title: "Site internet de la photographe Nina Carducci",
    img: "./assets/projects/projet5.png",
    description:
      "Une expérience d'optimisation du référencement et d'optimisation de performances",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
  },
  {
    title: "Site internet de la photographe Robbie Lens",
    img: "./assets/projects/projet6.png",
    description: "Une expérience de création d'un site web en HTML et CSS",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
  },
  {
    title: "Site internet développeuse web Estelle Fouqueteau",
    img: "./assets/projects/projet7.png",
    description: "Une expérience de création de site web en React",
    stack: "HTML, CSS, JavaScript, API REST",
    time: "2 semaines",
    skills: "compétences softskills",
    link: "https://",
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
    modalLink.href = project.link;

    // Ajouter la stack sous forme de liste à puces
    const modalStack = document.getElementById("modal-stack");
    modalStack.innerHTML = ""; // Vider la liste avant d'ajouter de nouveaux éléments
    project.stack.split(", ").forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalStack.appendChild(li);
    });

    // Ajouter les softskills sous forme de liste à puces
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

// ***** Gestion Contact ***** //

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const formUrl = "https://formspree.io/f/mdkegjaa";
    fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        document.getElementById("form-status").textContent =
          "Message envoyé avec succès !";
        document.getElementById("contact-form").reset(); // Réinitialise le formulaire
      } else {
        document.getElementById("form-status").textContent =
          "Erreur lors de l'envoi. Réessayez plus tard.";
      }
    });
    //   .catch((error) => {
    //     document.getElementById("form-status").textContent =
    //       "Erreur de connexion. Veuillez réessayer plus tard.";
    //   });
  });
