import { createRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta';
import Layout from '../layouts/Layout';
import Logo from '../assets/Logo.svg';


export default function Registro() {

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

    try {
      const respuesta = await clienteAxios.post('/api/registro', datos);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error.response.data.errors));
    }
  }

  const modalRef = useRef(null);


  const handleCloseModal = () => {
    const modalElement = modalRef.current;
    if (modalElement) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };

  return (
    <>
      <div className="container my-5">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: '150px', marginRight: '50px' }} />
        </Link>
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="img/imgregistro.png"
              alt="Imagen de Registro"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6 mt-5" >
            <h3>Formulario de Registro</h3>
            <form onSubmit={handleSubmit} noValidate>
              {errores ? errores.map((error) => <Alerta key={error}>{error}</Alerta>) : null}

              <div className="mt-5">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
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
                <label htmlFor="lastname" className="form-label">
                  Apellido
                </label>
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
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
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
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
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
                <label htmlFor="confirmpassword" className="form-label">
                  Repetir Contraseña
                </label>
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
                <label>¿Ya tienes cuenta? - </label>
                <Link to="/login" onClick={handleCloseModal}>
                  Haz click aquí
                </Link>
              </div>

              <div className="adecuada mt-5">
                <button type="submit" className="custom-button">
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

