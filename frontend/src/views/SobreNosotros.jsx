import Imagen from '../assets/images/nos.png'; // Imagen que usas en la página
import Logo from '../assets/Logo.svg';

function SobreNosotros() {
    return (
        <div>

            {/* Sección principal */}
            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-column">
                            <img src={Imagen} alt="Sobre Nosotros" className="img-fluid" />
                            <h2>Sobre Nosotros</h2>
                        </div>
                        <div className="col-md-6 right-column">
                            <h1>En <img src={Logo} alt="Logo" style={{ width: '160px' }} /> entendemos lo que significa perder una mascota.</h1>
                            <p>
                                Sabemos que las mascotas son parte de la familia, y su pérdida puede ser una experiencia muy dolorosa y angustiante. Por eso, hemos creado una plataforma dedicada a conectar personas que han perdido a sus compañeros de cuatro patas con aquellas que los han encontrado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de iconos */}
            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 feature-item" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: "var(--primario)"}}><path fill="var(--primario)" d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.25.25 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.94.94 0 0 1-.663.275"/><path fill="var(--primario)" d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.4 9.4 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12"/><path fill="var(--primario)" d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12"/></svg>
                            <p>Nuestro objetivo es proporcionar una solución rápida, sencilla y efectiva para ayudar a las familias a reunirse con sus mascotas perdidas.</p>
                        </div>

                        <div className="col-md-4 feature-item" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 15 16" style={{fill: "var(--primario)"}}><path fill="var(--primario)" d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"/><path fill="var(--primario)" d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"/></svg>
                            <p>En <img src={Logo} alt="Logo" style={{ width: '80px' }} />, creemos en la colaboración de la comunidad para lograr grandes cosas.</p>
                        </div>

                        <div className="col-md-4 feature-item" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={{fill: "var(--primario)"}}><path fill="var(--primario)" d="m21 3.031l-.656.719c-1.469 1.617-2.68 2.34-3.688 2.813c-1.008.472-1.855.613-2.687 1.25c-.887.68-2.176 1.984-2.719 4.312c-1.164.254-2.016.7-2.688 1.281c-.664.574-1.164 1.227-1.78 1.938c-.005.008.003.023 0 .031c-.884 1.016-1.657 2.11-3.157 2.688l-.625.25V29h19.063c1.093-.059 1.851-.816 2.312-1.563c.46-.746.715-1.554.844-2.218c.332-1.692.937-6.563.937-6.563l.032-.093v-.094c-.032-.676-.31-1.25-.657-1.782l1.125-3.343l1.782-2.688l.5-.719l-.657-.593l-6.562-5.688zm.063 2.75l5.218 4.532l-1.375 2.03l-.093.095l-.032.156l-.906 2.687c-.473-.195-.96-.332-1.5-.312h-.063L16 15h-1v3.875c-.14 1.09-.746 1.512-1.5 1.813c-.25.101-.281.046-.5.093V14.97c-.164-3.707 1.156-4.774 2.188-5.563c.285-.219 1.12-.472 2.312-1.031c.996-.469 2.234-1.309 3.563-2.594zm-10 8.594c-.004.227-.075.387-.063.625v8h1s1.07-.012 2.219-.469s2.535-1.527 2.781-3.406V17l5.375-.031h.031a1.66 1.66 0 0 1 1.75 1.562c-.004.016-.05.387-.062.469H20v2h3.844c-.106.773-.203 1.258-.313 2H20v2h3.219a5 5 0 0 1-.563 1.375c-.273.445-.508.613-.718.625H5v-7.469c1.621-.86 2.629-2.097 3.281-2.843c.676-.774 1.14-1.36 1.594-1.75c.297-.254.762-.399 1.188-.563"/></svg>
                            <p>Ya sea que estés buscando a tu mascota perdida o quieras ayudar a otros a reunirse con las suyas, aquí encontrarás el apoyo que necesitas.</p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default SobreNosotros;
