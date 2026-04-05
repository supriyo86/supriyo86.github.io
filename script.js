document.addEventListener("DOMContentLoaded", () => {
  const resumeButton = document.querySelector(".btn");
  const moonIcon = document.querySelector(".fa-moon");
  const searchIcon = document.querySelector(".fa-search");

  if (resumeButton) {
    resumeButton.addEventListener("click", (event) => {
      const href = resumeButton.getAttribute("href");

      if (!href || href === "#") {
        event.preventDefault();
        alert("Add your resume file link in the button href.");
      }
    });
  }

  if (moonIcon) {
    moonIcon.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", () => {
      const query = prompt("Search section: Bio, Experience, Projects, Skills, Contact");

      if (!query) return;

      const text = query.trim().toLowerCase();
      const navLinks = document.querySelectorAll(".nav-center a");

      let matched = false;

      navLinks.forEach((link) => {
        if (link.textContent.trim().toLowerCase() === text) {
          link.click();
          matched = true;
        }
      });

      if (!matched) {
        alert("No matching section found.");
      }
    });
  }
});
