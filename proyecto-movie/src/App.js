import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './componentes/Login.jsx';
import Bienvenido from './componentes/Bienvenido.jsx';
import Terminos from './componentes/Terminos.jsx';
import NuevaCuenta from './componentes/NuevaCuenta';

function App() {
  return (

    <div className="App">
       <Router>
        <Routes> 
          <Route path="/" element={<Terminos/>}></Route>
          <Route  path="/bienvenido" element={<Bienvenido/>}></Route>
          <Route  path='/login' element={<Login/>}></Route>
          <Route  path='/Crear-cuenta' element={<NuevaCuenta/>}></Route>
        </Routes>

      </Router>
     
    </div> 
  );
}
 
export default App;
