// Show message when button is clicked
function showMessage() {
    alert("Hello! Welcome to Durgesh Rajbhar's Personal Profile Website.");
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Change header color when scrolling
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "#222";
    }
});
