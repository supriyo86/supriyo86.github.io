document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", (event) => {
      const href = btn.getAttribute("href");
      if (!href || href === "#") {
        event.preventDefault();
        alert("Add your resume file path to the button href.");
      }
    });
  }
});
