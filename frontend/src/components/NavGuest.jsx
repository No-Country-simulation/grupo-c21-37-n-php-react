import { Link } from "react-router-dom"

export default function NavGuest() {
    return (<>
        <li className="nav-item ms-3">
            <Link to="/auth/registrarse">
                <button className="custom-button">
                    Regístrate
                </button>
            </Link>
        </li>
        <li className="nav-item ms-2">
            <Link to="/auth/login">
                <button className="custom-button">
                    Iniciar sesión
                </button>
            </Link>
        </li>
    </>
    )
}