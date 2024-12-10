import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus({ type: 'success', message: '¡Mensaje enviado correctamente!' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus({ type: 'error', message: 'Por favor, completa todos los campos.' });
    }
  };

  return (
    <div className="row">
      {/* form. contacto */}
      <div className="col-md-6">
        <h2>¡¡Contáctame!!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Tu nombre"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Tu correo electrónico"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              rows="7"
              placeholder="Escribe tu mensaje"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn custom-btn">Enviar</button>
        </form>

        {/* mensaje exito/error */}
        {formStatus && (
          <div
            className={`mt-3 alert alert-${formStatus.type === 'success' ? 'success' : 'danger'}`}
            role="alert"
          >
            {formStatus.message}
          </div>
        )}
      </div>

      {/* mapa */}
      <div className="col-md-6">
        <h2>Encuéntrame</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.906960155482!2d2.6300670761009277!3d39.58424720588576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792897cb4adfd%3A0x2ae3087f5b4b21a2!2sIES%20Emili%20Darder!5e0!3m2!1ses!2ses!4v1733678471806!5m2!1ses!2ses"
            title="Ubicación en el mapa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
