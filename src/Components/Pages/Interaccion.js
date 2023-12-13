import React, { useState } from 'react';
import '../Pages/interaccion.css';

const Interaccion = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Puedes hacer algo con los datos aquí, como enviarlos a un servidor
    
        // Simulamos una solicitud de éxito después de 1 segundo (puedes reemplazar esto con tu lógica de envío real)
        setTimeout(() => {
          setFormSubmitted(true);
        }, 1000);
      };
    
      return (
        <div className="interaccion-container">
          <h1>Formulario de Interacción</h1>
          {formSubmitted ? (
            <div className="success-message">¡Formulario Enviado!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
    
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
    
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
    
              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      );
    };
    
    export default Interaccion;