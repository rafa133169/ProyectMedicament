import React, {useState} from 'react';
import { useEffect } from 'react';
import Manana from '../Components/Manana';
import Mediodia from '../Components/Mediodia';
import Tarde from '../Components/Tarde';
import Noche from '../Components/Noche';
import Necesario from '../Components/Necesario';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
// import './Medstabla.css'; // Archivo CSS para estilos adicionales

function Medstabla() {
  const id_usuario = window.location.href.split("/")[4];
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await axios.get(
          `http://localhost:4001/verReceta/${id_usuario}`
        );
        setRecetas(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchRecetas()
    console.log(recetas);
  }, []);
  return (
    <div className="medstabla-container">
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Mañana</Accordion.Header>
        <Accordion.Body>
        <Manana />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Medio Dia</Accordion.Header>
        <Accordion.Body>
        <Mediodia />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Tarde</Accordion.Header>
        <Accordion.Body>
        <Tarde />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Noche</Accordion.Header>
        <Accordion.Body>
        <Noche />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>En el caso que sea necesario</Accordion.Header>
        <Accordion.Body>
        <Necesario />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     
    
      
      
      
    </div>
  );
}

export default Medstabla;
