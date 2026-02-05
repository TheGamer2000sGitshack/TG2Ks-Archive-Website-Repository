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
