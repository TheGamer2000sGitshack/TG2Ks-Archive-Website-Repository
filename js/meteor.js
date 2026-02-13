document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-effects");
  if (!btn) return;

  let effectsOn = true;

  const updateLabel = () => {
    btn.textContent = effectsOn ? "Turn Off Star Effects" : "Turn On Star Effects";
  };

  btn.addEventListener("click", () => {
    effectsOn = !effectsOn;

    if (effectsOn) {
      document.body.classList.remove("no-effects");
    } else {
      document.body.classList.add("no-effects");
    }

    updateLabel();
  });

  updateLabel();
});
