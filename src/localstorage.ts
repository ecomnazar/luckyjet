export const getAccessToken = () => localStorage.getItem("rmAccessToken");
export const setAccessToken = () =>
  localStorage.setItem("rmAccessToken", "true");
