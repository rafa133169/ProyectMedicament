import React from 'react';

const Login = () => {
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
                    <form>
                      <p>Inicia sesión con tu cuenta de usuario</p>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Ingresa tu nombre de usuario"
                        /> <br />
                        
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder='Ingresa tu contraseña'
                        /> <br />
                        
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                          type="button"
                        >
                          Iniciar sesión
                        </button> <br />
                        
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">No tienes una cuenta?</p>
                        <button type="button" className="btn btn-outline-danger">
                          Registrarse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Inicia sesión para administrar los medicamentos</h4>
                    <p className="small mb-0">
                      Manten el control total de tus medicamentos con MediCrono! 
                      MediCrono simplifica el manejo de tu medicación, garantizando que tomes tus medicamentos a tiempo y manteniendo un registro detallado de tu salud. 
                      ¡Únete a nuestra comunidad y disfruta de una vida más saludable!
                    </p>
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

export default Login;