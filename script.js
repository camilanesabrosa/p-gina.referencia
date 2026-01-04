/* =========================
   DATOS
========================= */

const novedadesData = [
  {
    category: "Novedades",
    title: "Sucursales",
    excerpt: "Visitá cualquiera de nuestras 8 sucursales en Mendoza y disfrutá del mejor pan artesanal.",
    link: "sucursales.html",
    linkText: "Ver sucursales",
    cardClass: "card-sucursales",
    icon: "location",
    image: "images/espiga sucursal.jpg"
  },
  {
    category: "Novedades",
    title: "Gift Card",
    excerpt: "El regalo perfecto para cualquier ocasión. Sorprendé a quien más querés con el sabor de lo artesanal.",
    link: "comprar-giftcard.html",
    linkText: "Comprar gift card",
    cardClass: "card-giftcard",
    icon: "gift"
  },
  {
    category: "Novedades",
    title: "Cumpleaños",
    excerpt: "Celebrá tu día especial con nuestras tortas artesanales y el ambiente más cálido de Mendoza.",
    link: "#",
    linkText: "Consultar",
    cardClass: "card-cumple",
    icon: "cake"
  }
];


const deliciasData = [
  { category: "Nuestras delicias", title: "Tortas", excerpt: "Clásicas y artesanales." },
  { category: "Nuestras delicias", title: "Tartas", excerpt: "Dulces y saladas." },
  { category: "Nuestras delicias", title: "Sandwiches", excerpt: "Preparados al momento." },
  { category: "Nuestras delicias", title: "Croissant", excerpt: "Recién horneados." }
];

/* =========================
   ICONOS SVG
========================= */
const icons = {
  location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.828 3.025ZM12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
  gift: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.193c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6a2.25 2.25 0 0 0 2.25-2.25v-6.75h-8.25Z" /></svg>`,
  cake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" /></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`
};

/* =========================
   RENDER NOVEDADES CARDS (NEW DESIGN)
========================= */

function renderNovedadesCards() {
  const container = document.getElementById("slider-novedades");
  if (!container) return;

  container.innerHTML = "";

  novedadesData.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("novedad-card");
    if (item.cardClass) card.classList.add(item.cardClass);

    const imageContent = item.image
      ? `<img src="${item.image}" alt="${item.title}">`
      : `<div class="novedad-card-icon">${icons[item.icon] || ''}</div>`;

    card.innerHTML = `
      <div class="novedad-card-image">
        ${imageContent}
      </div>
      <div class="novedad-card-content">
        <span class="novedad-card-tag">${item.category}</span>
        <h3 class="novedad-card-title">${item.title}</h3>
        <p class="novedad-card-excerpt">${item.excerpt}</p>
        <a href="${item.link || '#'}" class="novedad-card-cta">
          ${item.linkText || 'Ver más'}
          ${icons.arrow}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

/* =========================
   RENDER DELICIAS CARDS (ORIGINAL)
========================= */

function renderCards(data, sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  slider.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("news-card");

  let linkText = "Ver más";
  card.innerHTML = `
    <span class="news-category">${item.category}</span>
    <h3 class="news-title">${item.title}</h3>
    <p class="news-excerpt">${item.excerpt}</p>
    <a href="${item.link || '#'}" class="news-link">${linkText}</a>
  `;

    if (item.title === "Tortas") {
      card.classList.add("card-tortas");
      card.innerHTML += `
        <div class="tortas-carousel">
          <img src="images/torta4.jpg">
          <img src="images/torta2.jpg">
          <img src="images/torta3.jpg">
        </div>
      `;
    }

    if (item.title === "Tartas") {
      card.classList.add("card-tartas");
      card.innerHTML += `
        <div class="tartas-carousel">
          <img src="images/tarta1.jpg">
          <img src="images/tarta2.jpg">
          <img src="images/tarta3.jpg">
        </div>
      `;
    }

    slider.appendChild(card);

    if (card.classList.contains("card-tortas")) {
      const carousel = card.querySelector(".tortas-carousel");
      let interval;

      card.addEventListener("mouseenter", () => {
        let index = 0;
        interval = setInterval(() => {
          index = (index + 1) % carousel.children.length;
          carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 1200);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(interval);
        carousel.style.transform = "translateX(0)";
      });
    }

    if (card.classList.contains("card-tartas")) {
      const carousel = card.querySelector(".tartas-carousel");
      let interval;

      card.addEventListener("mouseenter", () => {
        let index = 0;
        interval = setInterval(() => {
          index = (index + 1) % carousel.children.length;
          carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 1600);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(interval);
        carousel.style.transform = "translateX(0)";
      });
    }
  });
}

/* =========================
   INIT
========================= */

renderNovedadesCards();
renderCards(deliciasData, "slider-delicias");

/* =========================
   SLIDERS
========================= */

// Old style arrows (for delicias section)
document.querySelectorAll(".arrow").forEach(button => {
  button.addEventListener("click", () => {
    let sliderId = null;

    if (button.dataset.slider === "delicias") {
      sliderId = "slider-delicias";
    }

    if (button.dataset.slider === "sucursales") {
      sliderId = "slider-sucursales";
    }

    if (!sliderId) return;

    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const direction = button.classList.contains("arrow-right") ? 1 : -1;
    slider.scrollLeft += direction * 320;
  });
});

/* =========================
   PAGE NAVIGATION
========================= */

const pages = [
  { name: "Inicio", url: "index.html" },
  { name: "Sucursales", url: "sucursales.html" },
  { name: "Productos", url: "productos.html" },
  { name: "Sabores", url: "sabores.html" },
  { name: "Empresa", url: "empresa.html" },
  { name: "Novedades", url: "novedades.html" }
];

// Detectar página actual
function getCurrentPageIndex() {
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';

  const index = pages.findIndex(page => page.url === currentFile);
  return index >= 0 ? index : 0;
}

// Inicializar navegación de páginas
function initPageNav() {
  const label = document.querySelector('.page-nav-label');
  const prevBtn = document.querySelector('.page-nav-prev');
  const nextBtn = document.querySelector('.page-nav-next');

  if (!label || !prevBtn || !nextBtn) return;

  let currentIndex = getCurrentPageIndex();

  // Actualizar label inicial
  label.textContent = pages[currentIndex].name;

  // Actualizar estado de botones
  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === pages.length - 1;
  }

  updateButtons();

  // Navegar a página anterior
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      label.classList.add('changing');
      setTimeout(() => {
        window.location.href = pages[currentIndex - 1].url;
      }, 150);
    }
  });

  // Navegar a página siguiente
  nextBtn.addEventListener('click', () => {
    if (currentIndex < pages.length - 1) {
      label.classList.add('changing');
      setTimeout(() => {
        window.location.href = pages[currentIndex + 1].url;
      }, 150);
    }
  });
}

// Inicializar cuando el DOM esté listo
initPageNav();







