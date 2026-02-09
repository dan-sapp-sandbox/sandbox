export const useProfileState = () => {
  const resumeURL =
    "https://docs.google.com/document/d/e/2PACX-1vTxM5BOxqBemhI7wWHlvLhdaQ13Qbuw0GONkrww9KVQ3HAsuBHEwrHJuipAKfF5Tg/pub";
  const handleOpenResume = () => {
    window.open(resumeURL, "_blank", "noopener,noreferrer");
  };
  return {
    handleOpenResume,
  };
};
