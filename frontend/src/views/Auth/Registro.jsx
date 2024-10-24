import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../../components/Alerta';
import { useAuth } from "../../hooks/useAuth";

export default function Registro() {

  const { registro } = useAuth({
    middleware: 'guest',
    url: '/perfil/mis-mascotas'
  })

  const nameRef = createRef();
  const lastnameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmpasswordRef = createRef();

  const [errores, setErrores] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      lastname: lastnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmpassword: confirmpasswordRef.current.value
    }
  
    registro(datos, setErrores)
  }

  return (
    <div className="container my-5">
      <div className=" mt-5" >
            <h3>Formulario de Registro</h3>
      </div>
      <form
        onSubmit={handleSubmit} noValidate
      >

        {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}


        <div className="container my-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            ref={nameRef}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            ref={lastnameRef}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={emailRef}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">Repetir Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword"
            name="confirmpassword"
            ref={confirmpasswordRef}
            required
          />
        </div>
        <div className="mb-3">
          <p>¿Ya tienes cuenta? <Link to="/auth/login">Haz click aquí</Link></p>
        </div>

        <div className="adecuada">
          <button
            type="submit"
            className="custom-button"
          >
            Registrarme
          </button>
        </div>
       
      </form>
    </div>
  );
}