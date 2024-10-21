import React from "react";
import Logo from '../../assets/Logo.svg';
import LoginModal from "../Login/Login"; // Importa el modal de login
import RegistroModal from "../Registro/Registro"; // Importa el modal de registro
import "../../App";

export default function Nav() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img src={Logo}  alt="Logo" style={{ width: '100px', marginRight: '25px' }}/>
          <a className="navbar-brand" href="/">Perdidos</a>
          <a className="navbar-brand" href="/" >Adoptados</a>
          <a className="navbar-brand" href="/">Sobre Nosotros</a>
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
                  data-bs-toggle="modal"
                  data-bs-target="#registroModal"
                >
                  Registrarse
                </button>
              </li>
              <li className="nav-item ms-2">
                {/* Botón para abrir el modal de Iniciar Sesión */}
                <button
                  className="custom-button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Iniciar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal para Iniciar Sesión */}
      <LoginModal />

      {/* Modal para Registrarse */}
      <RegistroModal />
    </>
  );
}
