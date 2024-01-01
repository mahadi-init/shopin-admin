import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar-navbar.css";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home/home";
import AddProduct from "../../pages/add-product/addProduct";
import { Button } from "react-bootstrap";
import { deleteCookie } from "cookies-next";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigte = useNavigate();

  const handleLogout = () => {
    deleteCookie("auth-token");
    navigte("/login");
  };

  return (
    <main className={show ? "space-toggle" : ""}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/add-product" className="nav-link active">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/hotel" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Hotel</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Gallery</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fas fa-dollar-sign nav-link-icon"></i>
                <span className="nav-link-name">Transaction</span>
              </Link>
            </div>
          </div>

          <Button
            id="logout-btn"
            onClick={handleLogout}
            className="nav-link"
            style={{ color: "red" }}
          >
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Button>
        </nav>
      </aside>
      <div className="check">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </main>
  );
};

export default Sidebar;
