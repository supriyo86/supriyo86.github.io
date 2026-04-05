const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    alert("Add your CV file link here.");
  downloadBtn.addEventListener("click", () => {
    const cvFile = "assets/chien-shiung-wu-cv.txt";
    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "chien-shiung-wu-cv.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
