import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/auth/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar-navbar/sidebarNavbar";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const authToken = getCookie("auth-token") as string;
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  return (
    <div>
      {!isLoginPage && <Sidebar />}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
