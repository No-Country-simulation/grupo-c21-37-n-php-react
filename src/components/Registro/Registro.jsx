import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegúrate de tener Bootstrap JS

export default function Registro() {
  const modalRef = useRef(null); // Referencia para el modal

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
      {/* Modal de Registro */}
      <div
        className="modal fade"
        id="registroModal"
        tabIndex="-1"
        aria-labelledby="registroModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-lg custom-modal modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h5 className="modal-title" id="registroModalLabel">Formulario de Registro</h5>
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
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
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
                      <label htmlFor="repeatPassword" className="form-label">Repetir Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="repeatPassword"
                        name="repeatPassword"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>¿Ya tienes cuenta? </label>
                      <Link to="/login" onClick={handleCloseModal}>
                        Haz click aquí
                      </Link>
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="custom-button"
                      >
                        Registrarme
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