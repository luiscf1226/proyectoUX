import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './componentes/Login.jsx';
import Bienvenido from './componentes/Bienvenido.jsx';

function App() {
  return (

    <div className="App">
       <Router>
        <Routes>
          <Route  path="/" element={<Bienvenido/>}></Route>
          <Route  path='/login' element={<Login/>}></Route>

        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
