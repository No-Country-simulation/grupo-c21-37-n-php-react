import { Outlet, Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function PerfilLayout() {
  // Estado de autenticación
  const { user, logout } = useAuth({
    middleware: 'auth',
    url: '/'
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
<li className="nav-item ms-3">
  <Link to="/messages" className="nav-link d-flex align-items-center">
    <i className="bi bi-envelope fs-4"></i> {/* Icono de mensajes */}
  </Link>
</li>

<li className="nav-item ms-3">
  <Link to="/notifications" className="nav-link d-flex align-items-center">
    <i className="bi bi-bell fs-4"></i> {/* Icono de notificaciones */}
  </Link>
</li>

<li className="nav-item ms-3 dropdown">
  {/* Icono de perfil con dropdown */}
  <a
    onClick={toggleDropdown}
    className="nav-link dropdown-toggle d-flex align-items-center"
    href="#"
    role="button"
    id="dropdownMenuLink"
    aria-expanded={showDropdown ? "true" : "false"}
    style={{ cursor: 'pointer' }}
  >
    <i className="bi bi-person fs-4"></i> {/* Icono de perfil */}
  </a>

  {/* Dropdown visible cuando el estado showDropdown es true */}
  {showDropdown && (
    <ul
      className="dropdown-menu dropdown-menu-end show"
      aria-labelledby="dropdownMenuLink"
      style={{ right: 0 }} // Alinea el dropdown con el borde derecho del contenedor
    >
      <li>
        <Link to="/perfil/mis-datos" className="dropdown-item">Mis datos</Link>
      </li>
      <li>
        <Link to="/perfil/mis-mascotas" className="dropdown-item">Mis mascotas</Link>
      </li>
      <li>
        <Link to="/perfil/reportar-mascota" className="dropdown-item">Reportar Mascota</Link>
      </li>
      <li>
        <button onClick={logout} className="dropdown-item" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          Cerrar sesión
        </button>
      </li>
    </ul>
  )}
</li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <nav className="custom-button" data-bs-theme="dark">
          <h6>Contáctanos</h6>
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
