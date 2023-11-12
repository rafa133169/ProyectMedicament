
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import MedicationChart from './Pages/Medicamentos';
import API from './Pages/Pruebas';
import Manana from './Components/Manana';
import Tarde from './Components/Tarde';
import Final from './Pages/MedicamentosFinal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MedicationChart/>}></Route>
        <Route path='/api' element={<API/>}></Route>
        <Route path='manana' element={<Manana/>}></Route>
        <Route path='tarde' element={<Tarde/>}></Route>
        <Route path='final' element={<Final/>}></Route>

      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
