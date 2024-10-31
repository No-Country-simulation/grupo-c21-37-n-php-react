import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react";

export default function NavUser() {
      // Estado de autenticación
  const { user, logout } = useAuth({
  })

  // Estado para controlar el dropdown del perfil
  const [showDropdown, setShowDropdown] = useState(false);

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    return (
        
        <>
            <span className="d-flex align-items-center">¡Hola {user?.name}!</span>
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
        </>
    )
}
