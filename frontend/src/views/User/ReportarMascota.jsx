import React, { useState, useEffect } from 'react';

const ReportarMascota = () => {
  const [images, setImages] = useState([]);
  const [zonas, setZonas] = useState([]);
  const [ubicacion, setUbicacion] = useState('');

  useEffect(() => {
    const zonasBsAs = [
      "Belgrano", "Palermo", "Recoleta", "Caballito", "Villa Urquiza",
      "Villa Devoto", "San Telmo", "Almagro", "Flores", "Villa Crespo",
      "Montserrat", "Balvanera", "Retiro", "Chacarita", "Villa Lugano",
      "Mataderos", "Nuñez", "Constitución", "Barracas", "La Boca",
      "Paternal", "Parque Patricios", "Liniers", "Colegiales", "Parque Chacabuco"
    ];
    setZonas(zonasBsAs); // Cargar las zonas al estado
  }, []);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages].slice(0, 3)); // Limitar a 3 imágenes
  };

  return (

    <div className="reportar-mascota-container mt-5">
      <h2>Reportar Mascotas</h2>
<div className='cargar-imagen-perdidos'>
<h6>Cargar Imagen</h6>
</div>
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
            />
            <div className="add-image">Agregar 3 más</div>
            
          </label>
          
        )}
        
      </div>

      <div className="form-container-perdido">
        <div className="informacion-general">
          <h3>Información General</h3>
          <div className="form-group">
            <label>¿Eres el dueño de la mascota?</label>
            <div className="radio-group">
              <label> Sí<input type="radio" name="dueno" /></label>
              <label> No<input type="radio" name="dueno" /></label>
            </div>
          </div>

          <div className="form-group">
            <label>¿Tienes autorización del dueño para publicar?</label>
            <div className="radio-group">
              <label> Sí estoy autorizado<input type="radio" name="autorizacion" /> </label>
              <label>No estoy autorizado<input type="radio" name="autorizacion" /> </label>
            </div>
          </div>

          <div className="form-group">
            <label>Fecha de última vez visto</label>
            <input type="date" className="form-control" />
          </div>

          <div className="form-group">
            <label>Zona de pérdida</label>
            <select
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="form-control"
            >
              <option value="">Seleccionar una zona</option>
              {zonas.map((zona, index) => (
                <option key={index} value={zona}>{zona}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Descripción Adicional</label>
            <textarea className="form-control" placeholder="Descripción adicional" maxLength="100"></textarea>
          </div>
        </div>
       
       

        <div className="informacion-mascota">
          <h3>Información Mascota</h3>
          <div className="form-group">
            <label>Nombre Mascota</label>
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>

          <div className="form-group">
            <label>Edad</label>
            <div className="radio-group">
              <label>Cachorro<input type="radio" name="edad" /> </label>
              <label> Joven<input type="radio" name="edad" /></label>
              <label>Adulto<input type="radio" name="edad" /> </label>
            </div>
          </div>

          <div className="form-group">
            <label>Color</label>
            <select className="form-control">
              <option>Seleccionar color</option>
              <option>Blanco</option>
              <option>Negro</option>
              <option>Marron</option>
            </select>
          </div>

          <div className="form-group">
            <label>Raza</label>
            <input type="text" className="form-control" placeholder="Raza" />
          </div>

          <div className="form-group">
            <label>Sexo</label>
            <div className="radio-group">
              <label>Hembra<input type="radio" name="sexo" /> </label>
              <label>Macho<input type="radio" name="sexo" /> </label>
            </div>
          </div>

          <div className="form-group">
            <label>Microchip</label>
            <div className="radio-group">
              <label> Sí<input type="radio" name="microchip" /></label>
              <label>No<input type="radio" name="microchip" /> </label>
            </div>
          </div>

          <div className="form-group">
            <label>Castrado</label>
            <div className="radio-group">
              <label> Sí<input type="radio" name="castrado" /></label>
              <label> No<input type="radio" name="castrado" /></label>
            </div>
          </div>
          </div>
          </div>

         

        <div className="buttons">
          <button className="cancel-button">Cancelar</button>
          <button className="submit-button">Guardar Cambios</button>
        </div>
      </div>
     
      );

              }
      export default ReportarMascota;
