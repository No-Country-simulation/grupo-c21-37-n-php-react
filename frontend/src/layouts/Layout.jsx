import { Outlet, Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import NavGuest from "../components/NavGuest";
import NavUser from "../components/NavUser";

export default function Layout() {
  // Estado de autenticación
  const { user } = useAuth({
    middleware: 'guest'
  })
  
  // Estado para controlar el dropdown del perfil
  const [showDropdown, setShowDropdown] = useState(false);

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <img src={Logo} alt="Logo" style={{ width: '100px', marginRight: '25px' }} />
          </Link>
          <Link className="navbar-brand" to="/perdidos">Perdidos</Link>
          <Link className="navbar-brand" to="/">Adoptados</Link>
          <Link className="navbar-brand" to="/nosotros">Sobre nosotros</Link>
          <Link className="navbar-brand" to="/">Casos de éxito</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!user ? (
                <NavGuest />
              ) : (
                <NavUser />
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <nav className="custom-button" data-bs-theme="dark">
          <h5>Contáctanos</h5>
        </nav>
        <nav className="custom-button" data-bs-theme="dark">
          <h6>Correo</h6>
        </nav>
        <nav className="custom-button" data-bs-theme="dark">
          <h6>Teléfono</h6>
        </nav>
      </footer>
    </>
  );
}
