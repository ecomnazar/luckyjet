export const getAccessToken = () => sessionStorage.getItem("rmAccessToken");
export const setAccessToken = () =>
  sessionStorage.setItem("rmAccessToken", "true");
