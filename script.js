document.addEventListener("DOMContentLoaded", () => {
  const cvBtn = document.querySelector(".cv-btn");

  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      const href = cvBtn.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        alert("Add your resume file path to the Download Resume button.");
      }
    });
  }
});
