
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import MedicationChart from './pages/Medicamentos';
import API from './pages/Pruebas';
import Manana from './Components/Manana';
import Tarde from './Components/Tarde';
import Final from './pages/MedicamentosFinal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Mediodia from './Components/Mediodia';
import Noche from './Components/Noche';
import Necesario from './Components/Necesario';
import Medstabla from './pages/Medstabla';


function App() {
  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MedicationChart/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/api' element={<API/>}></Route>
        <Route path='/Manana' element={<Manana/>}></Route>
        <Route path='/Tarde' element={<Tarde/>}></Route>
        <Route path='/Final' element={<Final/>}></Route>
        <Route path='/registro' element={<Register />}></Route>
        <Route path='/mediodia' element={<Mediodia />}></Route>
        <Route path='/noche' element={<Noche />}></Route>
        <Route path='/necesario' element={<Necesario />}></Route>
        <Route path='/tabla/:id_usuario' element={<Medstabla />}></Route>
      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
