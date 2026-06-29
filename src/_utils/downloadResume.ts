export const downloadResume = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault();
  alert("Thanks🙂 for downloading📩 my resume.📄");
  const link = document.createElement("a");
  link.href = "/Shashank Yadav Resume.pdf";
  link.download = "Shashank'sResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
