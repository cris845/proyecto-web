import React from 'react';
import '../Components/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Contacto</h3>
              <p>Dirección: Calle , Ciudad</p>
              <p>Teléfono: 9999999</p>
              <p>Email: cristian@pagina.com</p>
            </div>
            <div className="footer-credits">
              <p>&copy; 2023 Mi Pagina. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;