import { Outlet } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: '100px', marginRight: '25px' }} />
        </Link>
          <a className="navbar-brand" href="/dashboard">Perdidos</a>
          <a className="navbar-brand" href="/" >Adoptados</a>
          <a className="navbar-brand" href="/nosotros">Sobre Nosotros</a>
          <a className="navbar-brand" href="/">Casos de Éxito</a>
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
              <li className="nav-item">
                {/* Botón para abrir el modal de Registro */}
                <button
                  className="custom-button"
                >
                  <a href="/registrarse" className="custom-button" data-bs-theme="dark">
                    Regístrate
                  </a>
                </button>
              </li>
              <li className="nav-item ms-2">
                {/* Botón para abrir el modal de Iniciar Sesión */}
                <button
                  className="custom-button"
                >
                  <a href="/login" className="custom-button" data-bs-theme="dark">
                    Iniciar Sesión
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <a href="/nosotros" className="custom-button" data-bs-theme="dark">
          <h6>Contáctanos</h6>
        </a>
        <a href="/nosotros" className="custom-button" data-bs-theme="dark">
          <h6>Correo</h6>
        </a>
        <a href="/nosotros" className="custom-button" data-bs-theme="dark">
          <h6>Teléfono</h6>
        </a>
      </footer>
    </>
  );
}