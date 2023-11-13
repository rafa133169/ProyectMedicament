import React from 'react';
import Manana from '../Components/Manana';
import Mediodia from '../Components/Mediodia';
import Tarde from '../Components/Tarde';
import Noche from '../Components/Noche';
import Necesario from '../Components/Necesario';
// import './Medstabla.css'; // Archivo CSS para estilos adicionales

function Medstabla() {
  return (
    <div className="medstabla-container">
      <Manana />
      <Mediodia />
      <Tarde />
      <Noche />
      <Necesario />
    </div>
  );
}

export default Medstabla;
