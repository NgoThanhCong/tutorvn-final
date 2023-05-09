
export const isLogin = () => {
  if (typeof window !== "undefined") {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) return true;
    else return false;
  }
};
