import React, {useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasena2, setContrasena2] = useState("");

    const Register = async () => {
        if(contrasena === contrasena2){
        const response = await axios.post("http://localhost:4001/agregarUsuario", {
            nombre_usuario: nombre,
            correo_electronico: correo,
            contrasena: contrasena,
            
        });
        
        if (response.status === 200) {
            window.location.href = "/";
          alert('Usuario registrado correctamente')
        } else{
          console.log('Fallo en agregar usuario')
        }
      }else{
        alert("Las contraseñas no coinciden, Vuelve a intentarlo")
      }
    };
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#DEF7FF' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://sismedica.com.mx/wp-content/uploads/2020/02/medicamento-png-3.png"
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">MediCrono</h4>
                    </div>
                    <form onSubmit={Register}>
                      <h2>Registrate con los siguientes datos</h2>
                      <div className="form-outline mb-4">
                        <p>¿Como te llamas?</p>
                        <input
                        
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Ingresa tu nombre"
                          onChange={(e) =>{
                            setNombre(e.target.value)
                          }}
                        /> <br />
                        
                      </div>
                      <div className="form-outline mb-4">
                        <p>¿Cual es tu correo?</p>
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Ingresa tu Correo Electronico"
                          onChange={(e)=>{
                            setCorreo(e.target.value)
                          }}
                        /> <br />
                        
                      </div>
                      <div className="form-outline mb-4">
                        <p>Nueva Contraseña</p>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder='Ingresa tu nueva contraseña'
                          onChange={(e)=>{
                            setContrasena(e.target.value)
                          }}
                        /> <br />
                        
                      </div>
                      <div className="form-outline mb-4">
                        <p>Confirma tu Nueva contraseña</p>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder='Confirma la contraseña anterior'
                          onChange={(e)=>{
                            setContrasena2(e.target.value)
                          }}
                        /> <br />
                        
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                          type="submit"
                        >
                          Registrarse
                        </button> <br />
                        
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Ya tienes una cuenta?</p>
                        <Link to='/'>
                        <button type="button" className="btn btn-outline-danger">
                          Iniciar Sesion
                        </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;