import usePetgram from "../hooks/usePetgram";
import SidebarFeed from "../components/SidebarFeed";
import { useEffect, useState } from "react";

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
            <div className="col-12 text-center mb-2">
                <h2>Mascotas Perdidas</h2>
            </div>
            <div className="row">
                
                {/* Panel lateral de filtros */}

                <div className="col-md-3">
                    <div className="filter-panel p-3 bg-light border">
                        <h4>Filtrar</h4>
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
                        {/* Filtro por ubicación */}
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
                        <div className="row">
                            {[...Array(9)].map((_, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card h-100">
                                        <img src={mascota1} className="card-img-top" alt="Imagen de mascota perdida" style={{ objectFit: 'cover', height: '200px' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">Mascota {i + 1}</h5>
                                            <p className="card-text">Descripción breve de la mascota perdida.</p>
                                            <a href="#" className="card-link mt-auto">Ver más detalles</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}