
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import API from './pages/Pruebas';
import Manana from './Components/Manana';
import Tarde from './Components/Tarde';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Mediodia from './Components/Mediodia';
import Noche from './Components/Noche';
import Necesario from './Components/Necesario';
import Medstabla from './pages/Medstabla';
import Formulario from './pages/nuevaReceta';


function App() {
  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />}></Route>
        
        <Route path='/registro' element={<Register />}></Route>
        <Route path='/newReceta/:id_usuario' element={<Formulario />}></Route>
        <Route path='/tabla/:id_usuario' element={<Medstabla />}></Route>
      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
