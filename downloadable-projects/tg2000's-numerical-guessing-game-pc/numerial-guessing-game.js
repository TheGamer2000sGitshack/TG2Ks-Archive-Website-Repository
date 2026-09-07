const versionSelect = document.getElementById("versionSelect");
const downloadBtn = document.getElementById("downloadBtn");

updateDownload();

versionSelect.addEventListener("change", updateDownload);

function updateDownload() {
    const file = versionSelect.value;
    const size = versionSelect.selectedOptions[0].dataset.size;

    downloadBtn.href = file;
    downloadBtn.textContent = `DOWNLOAD (${size})`;
}


document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// ESC key triggers the back button
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        window.location.href = "../../../downloadable-projects.html"; 
    }
});

function disableUI() {
    // Disable download button
    downloadBtn.classList.add("disabled");
    downloadBtn.setAttribute("aria-disabled", "true");
    downloadBtn.style.pointerEvents = "none";
    downloadBtn.style.opacity = "0.5";

    // Disable dropdown
    versionSelect.disabled = true;
    versionSelect.style.opacity = "0.5";
}

function enableUI() {
    // Enable download button
    downloadBtn.classList.remove("disabled");
    downloadBtn.removeAttribute("aria-disabled");
    downloadBtn.style.pointerEvents = "auto";
    downloadBtn.style.opacity = "1";

    // Enable dropdown
    versionSelect.disabled = false;
    versionSelect.style.opacity = "1";
}

enableUI();