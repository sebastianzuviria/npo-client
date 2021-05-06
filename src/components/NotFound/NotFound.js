import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Página No Encontrada</h2>
        <p>
          Es posible que la página que está buscando se haya eliminado o no esté
          disponible temporalmente.
        </p>
        <a href="/">Inicio</a>
      </div>
    </div>
  );
};

export default NotFound;
