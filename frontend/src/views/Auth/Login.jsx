import { createRef, useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../../components/Alerta';
import { useAuth } from '../../hooks/useAuth'

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([])
  const { login } = useAuth({
    middleware: 'guest',
    url: '/perfil/mis-mascotas'
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
      <div className=" mt-5" >
            <h3>Iniciar Sesión</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        noValidate
      >

        {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}

        <div className="my-5">
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

        <div className="my-3">
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
          <p>¿No tienes cuenta? <Link to="/auth/registrarse">Regístrate</Link>
          </p>
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
  );
}