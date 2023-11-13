
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import MedicationChart from './Pages/Medicamentos';
import API from './Pages/Pruebas';
import Manana from './Components/Manana';
import Tarde from './Components/Tarde';
import Final from './Pages/MedicamentosFinal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Register from './Pages/Register';


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

      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
