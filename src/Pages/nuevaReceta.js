import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import NavLateral from "../Components/nav";

function Formulario() {
  const id_usuario = window.location.href.split("/")[4];
  const [medicamento, setMedicamento] = useState("");
  const [dosis, setDosis] = useState("");
  const [comentarios, setComentarios] = useState("Sin comentarios");
  const [toma, setToma] = useState("");
  const [estatus, setEstatus] = useState(false);
  const [dia, setDia] = useState("");
  const fechaMySQL = new Date().toISOString().slice(0, 10);
  const [viasAdministracion, setViasAdministracion] = useState("");
  const [medida, setMedida] = useState("");
  const [medicamentosNombre, setMedicamentosNombre] = useState([]);
  const [viasNombre, setViasNombre] = useState([]);
  const [medidaNombre, setMedidaNombre] = useState([]);
  let proximaToma = 0;

  useEffect(() => {
    async function fetchvias() {
      try {
        const response = await Axios.get(`http://localhost:4001/verVias`);
        setViasNombre(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchvias();
  }, []);

  useEffect(() => {
    async function fetchMedida() {
      try {
        const response = await Axios.get(`http://localhost:4001/verMedida`);
        setMedidaNombre(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchMedida();
  }, []);

  useEffect(() => {
    async function fetchMedicamentos() {
      try {
        const response = await Axios.get(
          `http://localhost:4001/verMedicamentos`
        );
        setMedicamentosNombre(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchMedicamentos();
  }, []);
  const agregarMedicamento = (e) => {
    e.preventDefault();
    if (estatus) {
      Axios.post("http://localhost:4001/crearReceta", {
        usuario: id_usuario,
        medicamento: medicamento,
        via: viasAdministracion,
        unidad: medida,
        cantidad: dosis,
        dias: dia,
        intervalo: toma,

        comentarios: comentarios,
        estatus: 1,
        
      }).then(() => {
        console.log("receta agregado");
        alert("Receta agregada correctamente");
        window.location.href = `/tabla/${id_usuario}`;
      });
    } else {
      const horaIncremento = parseInt(toma, 10);
      const horaActual = new Date().getHours();
      proximaToma = horaActual + horaIncremento;
      if (proximaToma >= 24) {
        proximaToma -= 24;
      }
      const horaProximaToma = new Date();
      horaProximaToma.setHours(proximaToma);
    
      // Formatea la hora para MySQL (HH:mm:ss)
      const horaFormateada = horaProximaToma.toISOString().slice(11, 19);
      if (proximaToma >= 5 && proximaToma < 12) {
        Axios.post("http://localhost:4001/crearReceta", {
          usuario: id_usuario,
          medicamento: medicamento,
          via: viasAdministracion,
          unidad: medida,
          cantidad: dosis,
          dias: dia,
          intervalo: toma,

          comentarios: comentarios,
          estatus: 2,
          proximaToma: horaFormateada,
        }).then(() => {
          console.log("receta agregado");
          alert("Receta agregada correctamente");
          window.location.href = `/tabla/${id_usuario}`;
        });
      } else if (proximaToma >= 12 && proximaToma < 13) {
        Axios.post("http://localhost:4001/crearReceta", {
          usuario: id_usuario,
          medicamento: medicamento,
          via: viasAdministracion,
          unidad: medida,
          cantidad: dosis,
          dias: dia,
          intervalo: toma,

          comentarios: comentarios,
          estatus: 3,
          proximaToma: horaFormateada,
        }).then(() => {
          console.log("receta agregado");
          alert("Receta agregada correctamente");
          window.location.href = `/tabla/${id_usuario}`;
        });
      } else if (proximaToma >= 13 && proximaToma < 19) {
        Axios.post("http://localhost:4001/crearReceta", {
          usuario: id_usuario,
          medicamento: medicamento,
          via: viasAdministracion,
          unidad: medida,
          cantidad: dosis,
          dias: dia,
          intervalo: toma,

          comentarios: comentarios,
          estatus: 4,
          proximaToma: horaFormateada,
        }).then(() => {
          console.log("receta agregado");
          alert("Receta agregada correctamente");
          window.location.href = `/tabla/${id_usuario}`;
        });
      } else {
        Axios.post("http://localhost:4001/crearReceta", {
          usuario: id_usuario,
          medicamento: medicamento,
          via: viasAdministracion,
          unidad: medida,
          cantidad: dosis,
          dias: dia,
          intervalo: toma,

          comentarios: comentarios,
          estatus: 5,
          proximaToma: horaFormateada,
        }).then(() => {
          console.log("receta agregado");
          alert("Receta agregada correctamente");
          window.location.href = `/tabla/${id_usuario}`;
        });
      }
    }

    setMedicamento("");
    setDosis("");
    setToma("");
    setDia("");
    setComentarios("");
    setEstatus(false);
    setMedida("");
    setViasAdministracion("");
  };

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
            <div style={{ marginTop: 130, marginLeft: 50, marginRight: 50 }}>
              <h1 style={{ marginBottom: 20, fontSize: "44px" }}>
                Agregar una Receta Medica
              </h1>
              <form onSubmit={agregarMedicamento}>
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Solo cuando lo necesite
                  </label>
                  <input
                    type="checkbox"
                    id="miCheckbox"
                    name="miCheckbox"
                    style={{ marginLeft: 5, width: 20, height: 20 }}
                    checked={estatus}
                    onChange={(e) => setEstatus(e.target.checked)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Medicamento:
                  </label>
                  <select
                    value={medicamento}
                    onChange={(e) => setMedicamento(e.target.value)}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Selecciona un medicamento
                    </option>
                    {medicamentosNombre.map((opcion, index) => (
                      <option key={index} value={opcion.id_medicamento}>
                        {opcion.nombre_medicamento}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Via de Administración:
                  </label>
                  <select
                    value={viasAdministracion}
                    onChange={(e) => setViasAdministracion(e.target.value)}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Selecciona una via de Administración
                    </option>
                    {viasNombre.map((opcion, index) => (
                      <option key={index} value={opcion.id_via}>
                        {opcion.via}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Unidad de medida
                  </label>
                  <select
                    value={medida}
                    onChange={(e) => setMedida(e.target.value)}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Selecciona una Unidad de Medida
                    </option>
                    {medidaNombre.map((opcion, index) => (
                      <option key={index} value={opcion.id_medida}>
                        {opcion.medida}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Dosis:
                  </label>
                  <input
                    type="number"
                    value={dosis}
                    onChange={(e) => setDosis(e.target.value)}
                    className="form-control"
                    placeholder={`Cuantas tiene que consumir`}
                  />
                </div>
                {!estatus ? (
                  <>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontSize: "24px" }}
                      >
                        Días
                      </label>
                      <div style={{ display: "flex" }}>
                        <input
                          type="number"
                          value={dia}
                          onChange={(e) => setDia(e.target.value)}
                          className="form-control"
                          placeholder="Cuantos días se va a tomar"
                          disabled={estatus}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label"
                        style={{ fontSize: "24px" }}
                      >
                        <h1>Frecuencia de consumo</h1>
                      </label>
                      <div style={{ display: "flex" }}>
                        <input
                          type="number"
                          value={toma}
                          onChange={(e) => setToma(e.target.value)}
                          className="form-control"
                          placeholder="Cada cuantas horas se va a ingerir"
                          disabled={estatus}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: "24px" }}>
                    Comentarios:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Opcional"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    fontSize: "24px",
                    backgroundColor: "white",
                    color: "Black",
                    padding: "14px 20px",
                    margin: "8px 0",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Agregar Medicamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Formulario;
