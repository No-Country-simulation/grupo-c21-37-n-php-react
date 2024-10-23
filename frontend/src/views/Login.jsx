import { createRef, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Asegúrate de tener Bootstrap JS
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/Logo.svg';

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([])
  const { login } = useAuth ({
    middleware: 'guest',
    url: '/dashboard'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)

  }

    return (
      <div className="container my-5">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: '150px', marginRight: '50px' }} />
        </Link>
        <div className="row mt-5">
          {/* Columna para la imagen */}
          <div className="col-md-6">
            <img
              src="img/imgregistro.png"
              alt="Imagen de Registro"
              className="img-fluid"
            />
          </div>
  
          {/* Columna para el formulario */}
          <div className="col-md-6 mt-5" >
            <h3>Iniciar Sesión</h3>
            <form onSubmit={handleSubmit} noValidate>
              {/* Mostrar errores si existen */}
              {errores ? errores.map((error) => <Alerta key={error}>{error}</Alerta>) : null}
  
              <div className="mt-5">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  ref={emailRef}
                />
              </div>
  
              <div className="mt-5">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  ref={passwordRef}
                />
              </div>
  
              <div className="mt-3">
                <label>¿No tienes cuenta? - </label>
                <Link to="/registrarse"> Regístrate</Link>
              </div>
  
              <div className="adecuada mt-5">
                <button type="submit" className="custom-button">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
