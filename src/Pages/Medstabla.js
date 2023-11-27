import React, { useState } from "react";
import { useEffect } from "react";
import Manana from "../Components/Manana";
import Mediodia from "../Components/Mediodia";
import Tarde from "../Components/Tarde";
import Noche from "../Components/Noche";
import Necesario from "../Components/Necesario";
import Axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Home from "../Components/Home";
import NavLateral from "../Components/nav";
import "./prueba.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import './Medstabla.css';


function Medstabla() {
  const id_usuario = window.location.href.split("/")[4];
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await Axios.get(
          `http://localhost:4001/verReceta/${id_usuario}`
        );
        setRecetas(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchRecetas();
    console.log(recetas);
  }, []);
  
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            'url("https://fotografias.lasexta.com/clipping/cmsimages01/2017/03/04/F3170CF9-3571-4883-8972-6CF310CE4793/98.jpg?crop=1000,563,x0,y0&width=1900&height=1069&optimize=low&format=webply")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <NavLateral />
          </div>
          <div className="col-md-9">
            <br />
            <br />
            
            <div className="medstabla-container">
             

              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item" style={{
                        backgroundColor: "rgba(72, 68, 234, 0.22)"
                      }} >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed titulo "
                      style={{
                        backgroundColor: "rgba(72, 68, 234, 0.22)"
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Mañana
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        backgroundColor: "rgba(72, 68, 234, 0.22)"
                      }}
                    >
                      <Manana></Manana>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: "rgba(202, 172, 18, 0.44)" }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed titulo"
                      style={{ backgroundColor: "rgba(202, 172, 18, 0.44)" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Medio Día
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" style={{ backgroundColor: "rgba(202, 172, 18, 0.44)" }}>
                      <Mediodia></Mediodia>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: "rgba(249, 187, 92, 0.35)" }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed customAccordionHeader titulo "
                      style={{ backgroundColor: "rgba(249, 187, 92, 0.35)" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Tarde
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" style={{ backgroundColor: "rgba(249, 187, 92, 0.25)" }}>
                      <Tarde></Tarde>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{
                      backgroundColor: "rgba(212, 183, 235, 0.67)",
                    }}>
                  <h2 className="accordion-header" >
                    <button
                      className="accordion-button collapsed customAccordionHeader titulo"
                      style={{
                        backgroundColor: "rgba(212, 183, 235, 0.67)",
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Noche
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse "
                    
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body " style={{
                      backgroundColor: "rgba(212, 183, 235, 0.37)",
                    }}>
                     <Noche></Noche>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{
                      backgroundColor: "rgba(36, 41, 34, 0.41)",
                    }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed titulo"
                      style={{
                        backgroundColor: "rgba(36, 41, 34, 0.41)",
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      En el caso que sea necesario
                      
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body ">
                      <Necesario></Necesario>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medstabla;
