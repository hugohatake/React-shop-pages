import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="error-container">
        <div className="error-message">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, la página que estás buscando no se encuentra disponible. Por favor, revisa la URL o intenta buscar algo más.</p>
            <a href="#">Volver al inicio</a>
        </div>
    </div>
    );
}

export default NotFound;