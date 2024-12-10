import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="container newsletter-info">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">DigitalEvolution S.A</h1>

          <h2 className="card-subtitle text-center mb-4">
            Tu solución en diseño y desarrollo web
          </h2>

          <div className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/company-photo.jpg`}
              alt="Nuestra Empresa"
              className="card-image"
            />
          </div>

          <p className="card-text mt-4">
            Mi equipo y yo ofrecemos una amplia gama de servicios diseñados para ayudarte a alcanzar tus
            objetivos:
          </p>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Diseño de sitios web responsive</li>
            <li className="list-group-item">Aplicaciones web personalizadas</li>
            <li className="list-group-item">Consultoría tecnológica</li>
            <li className="list-group-item">Mantenimiento y soporte técnico</li>
          </ul>

          <p className="card-text mt-4">
            Únete a nosotros y descubre cómo podemos ayudarte a llevar tu presencia digital al siguiente nivel.
          </p>

          {/* Botón de suscripción */}
          <div className="text-center mt-4">
            <button className="btn btn-primary subscribe-button">
              Suscríbete a nuestra newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
