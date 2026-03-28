import { useEffect } from "react";
import { useSuggestions } from "./SuggestionsContext";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isLogin, setIsLogin } = useSuggestions();

  useEffect(() => {
    const pass = localStorage.getItem("tokenPassword");
    if (pass) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return <Outlet />;
}

export default ProtectedRoute;
