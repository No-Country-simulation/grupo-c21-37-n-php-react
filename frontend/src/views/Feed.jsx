import usePetgram from "../hooks/usePetgram";
import SidebarFeed from "../components/SidebarFeed";
import { useEffect, useState } from "react";
import mascota1 from "../../public/img/mascota1.jpg";

export default function Feed() {
    const { mascotas } = usePetgram();

    if (!mascotas) return 'Cargando...';

    return (
        <div className="container mt-5">
            <div className="col-12 text-center mb-2">
                <h2>Mascotas Perdidas</h2>
            </div>
            <div className="row">
                
                {/* Panel lateral de filtros */}

                <SidebarFeed />

                {/* Sección de tarjetas de mascotas */}
                <div className="col-md-9">
                    <section className="mt-5">
                        <div className="row">
                        {mascotas && mascotas.length > 0 ? (
                                mascotas.map((mascota) => (
                                <div className="col-md-4 mb-4" key={mascota.id}>
                                    <div className="card h-100">
                                        <img src={mascota.fotos_mascotas && mascota.fotos_mascotas.length > 0 ? mascota.fotos_mascotas[0].url : '/img/imagen1.jpg'} className="card-img-top" alt={`Imagen de ${mascota.nombre}`} style={{ objectFit: 'cover', height: '200px' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{mascota.nombre}</h5>
                                            <p className="card-text">{mascota.descripcion}</p>
                                            <a href="#" className="card-link mt-auto">Ver detalles</a>
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
    )
}