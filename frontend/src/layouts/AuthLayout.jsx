import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container mt-5 full-page-container">
    <div className="row">
      {/* Columna para la imagen */}
      <div className="col-md-6">
        <img
          src="../img/imgregistro.png"
          alt="Imagen de Registro"
          className="img-fluid img-auth"
        />
      </div>
  
      {/* Columna para el formulario */}
      <div className="col-md-6">
        <Outlet />
      </div>
    </div>
  </div>
  
  )
}