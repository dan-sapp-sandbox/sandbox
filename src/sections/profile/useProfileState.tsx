export const useProfileState = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const linkedInURL = "https://www.linkedin.com/in/dan-sapp-744145b6/";
  const resumeURL =
    "https://docs.google.com/document/d/e/2PACX-1vTxM5BOxqBemhI7wWHlvLhdaQ13Qbuw0GONkrww9KVQ3HAsuBHEwrHJuipAKfF5Tg/pub";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenLinkedInLink = () => {
    window.open(linkedInURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenResume = () => {
    window.open(resumeURL, "_blank", "noopener,noreferrer");
  };
  return {
    handleOpenGithubLink,
    handleOpenLinkedInLink,
    handleOpenResume,
  };
};
