import usePetgram from "../hooks/usePetgram";
import SidebarFeed from "../components/SidebarFeed";

export default function Feed() {
    const { mascotas } = usePetgram();

    if (!mascotas) return 'Cargando...';

    return (
        <div className="container mt-5">
            <div className="row">
                <SidebarFeed />

                <div className="col-md-9">
                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-2">
                                <h2>Mascotas Perdidas</h2>
                            </div>
                            {/* Verificación condicional */}
                            {mascotas && mascotas.length > 0 ? (
                                mascotas.map((mascota) => (
                                    <div className="col-md-4" key={mascota.id}>
                                        <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                            <img
                                                src={mascota.fotos_mascotas && mascota.fotos_mascotas.length > 0 ? mascota.fotos_mascotas[0].url : '/img/imagen1.jpg'}
                                                className="card-img-left"
                                                alt={`Imagen de ${mascota.nombre}`}
                                                style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                            <div className="card-body" style={{ flex: '1' }}>
                                                <h5 className="card-title">{mascota.nombre}</h5>
                                                <p className="card-text">{mascota.descripcion}</p>
                                                <a href="#" className="card-link">Ver detalles</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No hay mascotas disponibles</p>
                            )}
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}