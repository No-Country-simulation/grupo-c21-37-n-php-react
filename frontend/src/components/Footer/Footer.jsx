import React from 'react';
import "../../index.css";

export default function Footer() {
    return (
        <footer className="footer">
            <nav className="custom-button" data-bs-theme="dark">
                <h6>Contáctanos</h6>
            </nav>
            <nav className="custom-button" data-bs-theme="dark">
                <h6>Correo</h6>
            </nav>
            <nav className="custom-button" data-bs-theme="dark">
                <h6>Teléfono</h6>
            </nav>
        </footer>
    );
}
