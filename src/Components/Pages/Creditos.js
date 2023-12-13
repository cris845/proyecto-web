import React from 'react';
import './creditos.css'; // Asegúrate de tener un archivo CSS para estilos adicionales
import perfil_foto from "../../assets/img/foto-perfil.jpg"

const Creditos = () => {

    return (
        <div className="creditos-container">
            <div className="photo-column">
                <img
                    src={perfil_foto} // Reemplaza con la URL de tu imagen
                    alt="Foto de perfil"
                    className="profile-photo"
                />
            </div>
            <div className="info-column">
                <h2>CRISTIAN JHONATAN RODRIGUEZ PALACIOS</h2>
                <p>CI: 9938417</p>
                <p>Teléfono: 74530585</p>
            </div>
        </div>
    );
};
export default Creditos;