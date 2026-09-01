const images = [...document.querySelectorAll('.gallery img')];
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
  currentIndex = index;

  
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';

  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-arrow left">&#10094;</span>
      <img src="${images[index].src}">
      <span class="lightbox-arrow right">&#10095;</span>
    </div>
  `;

  document.body.appendChild(lightbox);
  document.body.classList.add('no-scroll');

  
  const imgElement = lightbox.querySelector('img');

  
  if (imgElement) {
    requestAnimationFrame(() => {
      addPinchZoom(imgElement);
    });
  }

  // 4. Swipe support
  addSwipeSupport(lightbox);

  // 5. Close on click outside
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.remove();
      document.body.classList.remove('no-scroll');
    }
  });

  // 6. Arrow navigation
  lightbox.querySelector('.left').addEventListener('click', e => {
    e.stopPropagation();
    navigate(-1);
  });

  lightbox.querySelector('.right').addEventListener('click', e => {
    e.stopPropagation();
    navigate(1);
  });

  // 7. ESC key closes
  document.addEventListener('keydown', escClose);
}


function navigate(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.querySelector('.lightbox img').src = images[currentIndex].src;
}

let startX = 0;
let endX = 0;

function addSwipeSupport(lightbox) {
  lightbox.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

function handleSwipe() {
  // If zoomed in → block swipe navigation
  if (currentScale > 1.02) return;

  const swipeDistance = endX - startX;

  if (swipeDistance > 50) navigate(-1);
  if (swipeDistance < -50) navigate(1);
}


function escClose(e) {
  if (e.key === 'Escape') {
    const lb = document.querySelector('.lightbox');
    if (lb) lb.remove();
    document.removeEventListener('keydown', escClose);
  }
}

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });
});

let currentScale = 1;

function addPinchZoom(img) {
  let startDistance = 0;

  img.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      startDistance = getDistance(e.touches[0], e.touches[1]);
    }
  });

  img.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      currentScale = Math.min(Math.max(newDistance / startDistance, 1), 4); // clamp 1–4
      img.style.transform = `scale(${currentScale})`;
    }
  });
}

function getDistance(t1, t2) {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.sqrt(dx*dx + dy*dy);
}

const galleryImages = [
    "ArtPlants.webp","Balloon.webp","BoardWalk.webp","BK.webp","BoatLaunch.webp",
    "Boston.webp","CCST.webp","CerBBG.webp","Clutter.webp","Dawn.webp","Elk.webp",
    "FairHill.webp","Glass.webp","Harvard.webp","Lights.webp","Macro.webp","Mall.webp",
    "MIT.webp","NewarkDE.webp","NorthEast.webp","Phone.webp","Playground.webp","Sky.webp",
    "Stairs.webp","Trees.webp","UD.webp","Utensils.webp","Woods.webp","Colonnade.webp",
    "Tank.webp","Autumn.webp","Bloom.webp","CCity.webp","CoveredBridge.webp","Creek.webp",
    "Elkton.webp","MiddletownDE.webp","Philadelphia.webp","Plant.webp","StairHall.webp",
    "Victorian.webp","Beach.webp","BelAirMD.webp","Canal.webp","Church.webp","DeadMall.webp",
    "Fountain.webp","LadyPeace.webp","NCCourthouse.webp","NewCastleDE.webp","Pond.webp",
    "WillPenn.webp","Library.webp"
];

galleryImages.forEach(img => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = `Gallery photos only/${img}`;
    document.head.appendChild(link);
});

document.querySelector('.page-back').addEventListener('click', () => {
  window.location.href = "index.html";
});
