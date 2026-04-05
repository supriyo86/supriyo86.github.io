document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links a");
  const cvButton = document.querySelector(".cv-button");
  const statusBadge = document.querySelector(".status-badge");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "transform 0.2s ease, color 0.2s ease, opacity 0.2s ease";
    });
  });

  if (cvButton) {
    cvButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Replace the CV link in index.html with your actual resume file URL.");
    });
  }

  if (statusBadge) {
    statusBadge.addEventListener("click", () => {
      alert("You can replace this icon with an online/offline badge, availability status, or profile action.");
    });
  }
});
