import React from "react";
import "../index.css";
import animal2 from "../assets/animal2.svg";
import mascota1 from "../assets/images/mascota1.jpg";
import Footer from "../components/Footer/Footer";


export default function LandingPage() {
    return (
        <div className="container">

            <section>
                <div className="row">
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={animal2} alt="animal2" style={{ marginRight: '10px' }} />
                    <div className="container">
                    <h1>Te Ayudamos a encontrar <br />a tu mascota</h1>
                    <button className="custom-button">Perdí una mascota</button>
                    </div>
                    <img src={animal2} alt="animal2" style={{ marginLeft: "0px" }} />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>Mascotas Perdidas</h2>

                    <div className="card" style={{ width: '18rem' }}>
                        <img src={mascota1} className="card-img-top" alt="Imagen de mascota perdida" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>

                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
