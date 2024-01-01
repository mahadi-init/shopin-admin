import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/auth/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./pages/sidebar-navbar/sidebarNavbar";

function App() {
  const location = useLocation();

  // Check if the current path is '/login'
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {/* Conditionally render Sidebar */}
      {!isLoginPage && <Sidebar />}

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
