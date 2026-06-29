export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Shashank Yadav Resume.pdf";
  link.download = "Shashank'sResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
