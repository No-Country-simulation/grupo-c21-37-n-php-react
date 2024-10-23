import { useState, useEffect } from "react";
import mascota1 from "../assets/images/mascota1.jpg";
import mascota2 from "../assets/images/mascota2.jpg";
import mascota3 from "../assets/images/mascota3.jpg";

export default function Feed() {
    // Estado para los filtros
    const [filters, setFilters] = useState({
        species: "",
        size: "",
        color: "",
        ubicacion: "" // Agregamos ubicacion al estado
    });

    // Estado para las zonas
    const [zonas, setZonas] = useState([]);

    // Cargar zonas dinámicamente al montar el componente
    useEffect(() => {
        const zonasBsAs = [
            "Belgrano", "Palermo", "Recoleta", "Caballito", "Villa Urquiza", 
            "Villa Devoto", "San Telmo", "Almagro", "Flores", "Villa Crespo", 
            "Montserrat", "Balvanera", "Retiro", "Chacarita", "Villa Lugano", 
            "Mataderos", "Nuñez", "Constitución", "Barracas", "La Boca", 
            "Paternal", "Parque Patricios", "Liniers", "Colegiales", "Parque Chacabuco"
        ];
        setZonas(zonasBsAs);
    }, []);

    // Manejar cambios en los filtros
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

  


    return (
        <div className="container mt-5">
            <div className="row">
                {/* Panel lateral de filtros */}
                <div className="col-md-3">
                    <div className="filter-panel p-3 bg-light border">
                        <h4 >Filtrar</h4>

                        {/* Filtro por especie */}
                        <div className="mb-3">
                            <label className="form-label">Tipo de Mascota</label>
                            <select
                                name="species"
                                value={filters.species}
                                onChange={handleFilterChange}
                                className="form-select"
                            >
                                <option value="">Todas</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>

                            </select>
                        </div>

                        {/* Filtro por tamaño */}
                        <div className="mb-3">
                            <label className="form-label">Tamaño</label>
                            <select
                                name="size"
                                value={filters.size}
                                onChange={handleFilterChange}
                                className="form-select"
                            >
                                <option value="">Todos</option>
                                <option value="pequeño">Pequeño</option>
                                <option value="mediano">Mediano</option>
                                <option value="grande">Grande</option>
                            </select>
                        </div>

                        {/* Filtro por color */}
                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <select
                                name="color"
                                value={filters.color}
                                onChange={handleFilterChange}
                                className="form-select"
                            >
                                <option value="">Todos</option>
                                <option value="negro">Negro</option>
                                <option value="blanco">Blanco</option>
                                <option value="marrón">Marrón</option>
                            </select>
                        </div>

                        {/* Filtro por sexo */}
                        <div className="mb-3">
                            <label className="form-label">Sexo</label>
                            <select
                                name="sex"
                                value={filters.sex}
                                onChange={handleFilterChange}
                                className="form-select"
                            >
                                <option value="">Todos</option>
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                        {/* Filtro por ubicacion */}
                        <div className="mb-3">
            <label className="form-label">Ubicación</label>
            <select
                name="ubicacion"
                value={filters.ubicacion}
                onChange={handleFilterChange}
                className="form-select"
            >
                <option value="">Zona</option>
                {zonas.map((zona, index) => (
                    <option key={index} value={zona}>{zona}</option>
                ))}
            </select>
        </div>
                        <button className="custom-button">Aplicar filtros</button>
                    </div>
                </div>

                {/* Sección de tarjetas de mascotas */}
                <div className="col-md-9">
                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-2">
                                <h2>Mascotas Perdidas</h2>
                            </div>

                            {/* Tarjeta 1 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota1} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 1</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota2} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 2</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 3 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota3} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 3</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 4 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota1} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 4</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 5 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota2} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 5</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 6 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota3} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 6</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 7 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota1} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 7</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 8 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota2} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 8</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 9 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota3} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 9</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
