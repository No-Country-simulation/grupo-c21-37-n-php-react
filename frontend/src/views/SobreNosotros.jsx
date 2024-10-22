import React from 'react';
import "../App.css";
import Nav from '../components/Nav/Nav';
import Footer from "../components/Footer/Footer";
import mascotaImg from "../assets/images/mascota3.jpg"; // Importa una imagen de tu elección


export default function SobreNosotros() {
    return (
        <div>
            <Nav />
            <div className='container mt-5'>
                <div className="text-center mb-4">
                    <h1 className="col-12">Sobre Nosotros</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    {/* Contenedor de la imagen */}
                    <div className="col-md-4 text-center">
                        <img
                            src={mascotaImg}
                            alt="Mascota"
                            className="img-fluid rounded"
                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Contenedor del texto */}
                    <div className="col-md-8 text-center">
                        <p className="lead">
                            En <strong>Petgram</strong>, entendemos lo que significa perder una mascota. Sabemos que las mascotas son parte de la familia, y su pérdida puede ser una experiencia muy dolorosa y angustiante. Por eso, hemos creado una plataforma dedicada a conectar personas que han perdido a sus compañeros de cuatro patas con aquellas que los han encontrado.
                        </p>
                        <p className="lead">
                            Nuestro objetivo es proporcionar una solución rápida, sencilla y efectiva para ayudar a las familias a reunirse con sus mascotas perdidas. A través de nuestra página, cualquier persona puede publicar información sobre su mascota perdida o reportar el avistamiento de una mascota extraviada, facilitando el proceso de búsqueda y aumentando las posibilidades de un final feliz.
                        </p>
                        <p className="lead">
                            En <strong>Petgram</strong>, creemos en la colaboración de la comunidad para lograr grandes cosas. Al compartir reportes, fotos e información relevante, trabajamos juntos para devolverles a nuestros amigos peludos el calor de su hogar.
                        </p>
                        <p className="lead">
                            Ya sea que estés buscando a tu mascota perdida o quieras ayudar a otros a reencontrarse con las suyas, aquí encontrarás las herramientas y el apoyo que necesitas.
                        </p>
                    </div>
                </div>
            </div>

            <section className="contacto mt-5">
                <div id="contacto" className="container text-center">
                    <h4 className="mb-4">Contacto</h4>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
                            <div className="contact-box p-4 border rounded shadow-sm">
                                <i className="fa-solid fa-envelope fa-2x mb-3 text-primary"></i>
                                <h5>Email</h5>
                                <p>petgram@tusitio.com</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
                            <div className="contact-box p-4 border rounded shadow-sm">
                                <i className="fab fa-whatsapp fa-2x mb-3 text-success"></i>
                                <h5>WhatsApp</h5>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    +54 11 9999 9999
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
                            <div className="contact-box p-4 border rounded shadow-sm">
                                <i className="fa-solid fa-location-dot fa-2x mb-3 text-danger"></i>
                                <h5>Ubicación</h5>
                                <p>Ciudad Autonoma de Bs As</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
