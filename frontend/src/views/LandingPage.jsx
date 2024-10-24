import animal2 from "../assets/animal2.svg";
import mascota1 from "../assets/images/mascota1.jpg";
import mascota2 from "../assets/images/mascota2.jpg";
import mascota3 from "../assets/images/mascota3.jpg";

export default function LandingPage() {
    return (
        <div className="landingpage" >
            {/* Primera Sección */}
            <section className="hero-section mt-5" style={{
                backgroundImage: `url(${animal2}), url(${animal2})`,
                backgroundPosition: 'left top, right top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain', // Cambiamos a "contain" para que la imagen no se corte
                paddingTop: '200px', // Ajusta el valor según cuánto quieres bajar el texto
                paddingBottom: '50px', // Un poco de espacio inferior para que quede más elegante
                minHeight: '400px' // Asegura que la sección tenga una altura mínima adecuada
            }}>
                <div className="container">
                    <div className="row" style={{ textAlign: 'center' }}>
                        <h1>Te ayudamos a encontrar <br />a tu mascota</h1>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="custom-button">Perdí una mascota</button>
                </div>
            </section>

            {/* Segunda Sección con tarjetas */}
            <div className="container mt-5">

                {/* Sección de Mascotas Perdidas */}
                <section className="mt-5">
                    <div className="container">
                        <div className="row">

                        </div>

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
                                        <p className="card-text">Descripción breve de la mascota perdida. Aquí puede ir información relevante acerca de la mascota y detalles de contacto.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota3} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 2</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida. Aquí puede ir información relevante acerca de la mascota y detalles de contacto.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 3 */}
                            <div className="col-md-4">
                                <div className="card d-flex flex-row" style={{ width: '100%' }}>
                                    <img src={mascota2} className="card-img-left" alt="Imagen de mascota perdida" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ flex: '1' }}>
                                        <h5 className="card-title">Mascota 3</h5>
                                        <p className="card-text">Descripción breve de la mascota perdida. Aquí puede ir información relevante acerca de la mascota y detalles de contacto.</p>
                                        <a href="#" className="card-link">Ver más detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
