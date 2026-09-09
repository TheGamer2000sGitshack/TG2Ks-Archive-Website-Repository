function updateLayout() {
  const compact = window.innerWidth < 900;
  document.body.classList.toggle("compact", compact);
}

window.addEventListener("resize", updateLayout);
window.addEventListener("load", updateLayout);
