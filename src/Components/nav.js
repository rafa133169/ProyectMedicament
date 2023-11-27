import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import '../pages/prueba.css'

function NavLateral() {
  const id_usuario = window.location.href.split("/")[4];
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Agregar el enlace al archivo de estilos de Tailwind CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      {/* Agregar el enlace al archivo de la biblioteca FontAwesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />

      {/* Navegación lateral */}
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <br/><br/><br/><br/>
            <li className="opcion-con-desplegable">
              <Link to = {`/tabla/${id_usuario}`}>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2" />
                    <span className="titulomini">Ver Control de Medicamentos</span>
                  </div>
                </div>
              </Link>
            </li>
            <br/><br/>
            <li className="opcion-con-desplegable">
            <Link to={`/newReceta/${id_usuario}`}>
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2" />
                  <span className="titulomini">Agregar Nueva Receta</span>
                </div>
                <i className="fas fa-chevron-down text-xs" />
              </div>
              
              </Link>
            </li>
            {/* <li className="opcion-con-desplegable">
                <Link to="/AdminUsuarios" >
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-chart-bar mr-2" />
                  <span>Administrar Usuarios</span>
                </div>
                <i className="fas fa-chevron-down text-xs" />
              </div>
              </Link>
            </li> */}
            
            {/* Agrega más enlaces para la navegación lateral */}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default NavLateral;
