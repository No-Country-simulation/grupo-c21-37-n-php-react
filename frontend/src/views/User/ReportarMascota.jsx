import React, { useState, createRef } from 'react';
import { useMascota } from "../../hooks/useMascota";
import Alerta from "../../components/Alerta"
import { useAuth } from '../../hooks/useAuth';

const ReportarMascota = () => {
  const nombreRef = createRef();
  const especieRef = createRef();
  const razaRef = createRef();
  const sexoRef = createRef();
  const edadRef = createRef();
  const microchipRef = createRef();
  const castradoRef = createRef();
  const fecha_desaparicionRef = createRef();
  const hora_desaparicionRef = createRef();
  const ubicacionRef = createRef();
  const descripcionRef = createRef();
  const fotosRef = createRef();

  const { registrarMascota } = useMascota();
  const { user } = useAuth({});

  const [images, setImages] = useState([]);
  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      nombre: nombreRef.current.value,
      especie: especieRef.current.value,
      raza: razaRef.current.value,
      sexo: sexoRef.current.value,
      edad: edadRef.current.value,
      microchip: microchipRef.current.value,
      castrado: castradoRef.current.value,  
      fecha_hora_desaparicion: `${fecha_desaparicionRef.current.value} ${hora_desaparicionRef.current.value}`,
      ubicacion: ubicacionRef.current.value,
      descripcion: descripcionRef.current.value,
      user_id: user?.id,
      fotos: fotosRef.current.files,
    };
    const formData = new FormData();
    Object.keys(datos).forEach(key => formData.append(key, datos[key]));

    // Agregar las fotos
    const fotos = fotosRef.current.files;
    for (let i = 0; i < fotos.length; i++) {
        formData.append("fotos[]", fotos[i]);
    }
  
    registrarMascota(formData, setErrores);
  };

  const SelectConRango = () => {
    return (
      <select name="edad" ref={edadRef} className="form-control">
        {[...Array(21).keys()].map((i) => (
          <option key={i} value={i}>
            {i === 20 ? "+20" : i}
          </option>
        ))}
      </select>
    );
  };

  const barrios = [
    "Belgrano", "Palermo", "Recoleta", "Caballito", "Villa Urquiza",
    "Villa Devoto", "San Telmo", "Almagro", "Flores", "Villa Crespo",
    "Montserrat", "Balvanera", "Retiro", "Chacarita", "Villa Lugano",
    "Mataderos", "Nuñez", "Constitución", "Barracas", "La Boca",
    "Paternal", "Parque Patricios", "Liniers", "Colegiales", "Parque Chacabuco"
  ];

  function SelectBarrio() {
    return (
      <div className="form-group">
        <label>Selecciona un barrio:</label>
        <select name="barrio" ref={ubicacionRef} className="form-control">
          {barrios.map((barrio) => (
            <option key={barrio} value={barrio}>
              {barrio}
            </option>
          ))}
        </select>
      </div>
    );
  }

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages].slice(0, 3)); // Limitar a 3 imágenes
  };

  return (
    <div className="reportar-mascota-container mt-5">
      <h2>Reportar Mascota</h2>

      {/* Contenedor de errores en el ancho completo */}
      {errores && (
        <div className="error-container mb-4">
          {errores.map((error, idx) => <Alerta key={idx}>{error}</Alerta>)}
        </div>
      )}

      {/* Formulario */}
      <form className="form-container-perdido" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Contenedor de imágenes */}
        <div className="fotos-container">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img src={image} alt={`preview-${index}`} />
            </div>
          ))}
          {images.length < 3 && (
            <label className="upload-label">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                name='fotos[]'
                ref={fotosRef}
              />
              <div className="add-image">Agregar 3 más</div>
            </label>
          )}
        </div>

        {/* Información General */}
        <div className="informacion-general">
          <h3>Información General</h3>
          <div className="form-group">
            <label>Fecha y hora de desaparición (aproximada)</label>
            <input type="date" name="fecha_desaparicion" ref={fecha_desaparicionRef} className="form-control" /><br />
            <input type="time" name="hora_desaparicion" ref={hora_desaparicionRef} className="form-control" />
          </div>

<input type="hidden" ref={castradoRef} name="castrado" value='false' /> {/* Valor por defecto */}
<div className="form-group">
  <label>Castrado</label>
  <div className="radio-group">
    <label>
      <input type="radio" name="castrado" value='true' /> Sí
    </label>
    <label>
      <input type="radio" name="castrado" value='false' /> No
    </label>
  </div>
</div>
{/* Botones al final del formulario en ancho completo ..*/}
<div className="form-buttons mt-4">
      <button type="button" className="btn btn-secondary me-3">Cancelar</button>
      <button type="submit" className="btn btn-primary">Guardar cambios</button>
    </div>
</div>

    
  </form>
</div>


  );
}

export default ReportarMascota;