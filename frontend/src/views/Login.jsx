import { createRef, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Asegúrate de tener Bootstrap JS
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

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
    <>
        <div className="modal-dialog modal-lg custom-modal modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h5 className="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {/* Columna para la imagen */}
                <div className="col-md-6">
                  <img
                    src="img/imgregistro.png"
                    alt="Imagen de Registro"
                    className="img-fluid"
                  />
                </div>

                {/* Columna para el formulario */}
                <div className="col-md-6">
                  <form
                  onSubmit={handleSubmit}
                  noValidate
                  >
                    
                    { errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null }
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo Electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        ref={emailRef}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                        ref={passwordRef}
                      />
                    </div>

                    <div className="mb-3">
                      <label>¿No tienes cuenta? </label>
                      <Link to="/registrarse">
                        Regístrate
                      </Link>
                    </div>

                    <div className="adecuada">
                      <button
                        type="submit"
                        className="custom-button"
                      >
                        Ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
