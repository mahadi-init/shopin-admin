import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
