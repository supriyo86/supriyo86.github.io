document.addEventListener("DOMContentLoaded", () => {
  const resumeButton = document.querySelector(".btn");
  const socialLinks = document.querySelectorAll(".icons a");

  if (resumeButton) {
    resumeButton.addEventListener("click", (event) => {
      const href = resumeButton.getAttribute("href");
      if (!href || href === "#") {
        event.preventDefault();
        alert("Add your resume file path to the button href.");
      }
    });
  }

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });
});
