import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Asegúrate de tener Bootstrap JS

export default function Login() {
  const modalRef = useRef(null); // Creamos una referencia al modal

  // Función para cerrar el modal
  const handleCloseModal = () => {
    const modalElement = modalRef.current;
    if (modalElement) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide(); // Cierra el modal
      }
    }
  };

  return (
    <>
      {/* Modal para iniciar sesión */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
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
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo Electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
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
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>¿No tienes cuenta? </label>
                      <Link to="/register" onClick={handleCloseModal}>
                        Regístrate
                      </Link>
                    </div>

                    <div className="d-grid">
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
      </div>
    </>
  );
}
