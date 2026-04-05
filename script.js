const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    alert("Add your CV file link here.");
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    const resume = `
Chien Shiung Wu - Curriculum Vitae\n
Role: Chief Scientist, OpenAI\n
Highlights\n- Distributed robotics and autonomous systems research\n- Mobile computing and programmable matter\n- Robotic Neurobiology group lead\n`;

    link.href = URL.createObjectURL(new Blob([resume], { type: "text/plain" }));
    link.download = "chien-shiung-wu-cv.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  });
}
