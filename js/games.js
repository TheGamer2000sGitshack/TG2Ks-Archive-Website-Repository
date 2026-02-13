// Simple ambient effects to make the page feel "alive"


// Fake server heartbeat
setInterval(() => {
const status = document.body;
status.style.filter = "brightness(1.02)";
setTimeout(() => {
status.style.filter = "brightness(1)";
}, 120);
}, 3000);


// Hover soundless pulse on list items
const items = document.querySelectorAll("ul li");
items.forEach(item => {
item.addEventListener("mouseenter", () => {
item.style.transform = "translateX(4px)";
});


item.addEventListener("mouseleave", () => {
item.style.transform = "translateX(0)";
});
});


// Count downloadable project files
function countDownloadableFiles() {
    const projectItems = document.querySelectorAll(".project-list li a");
    return projectItems.length;
}

window.addEventListener("DOMContentLoaded", () => {
    const count = document.querySelectorAll(".project-list li a").length;

    const counter = document.createElement("div");
    counter.className = "download-counter";
    counter.textContent = `Total Downloadable Projects: ${count}`;

    // Attach to the root of the document, not inside body animations
    document.documentElement.appendChild(counter);
});
