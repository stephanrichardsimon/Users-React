import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom"
import './App.css';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada/PaginaNaoEncontrada';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
            </li>
            <li>
              <NavLink to="/adicionar">Adicionar Usuários</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/usuarios/:id' element={<DetalhesUsuario/>} />
          <Route path='/adicionar' element={<AdicionarUsuario />} />
          <Route path='*' element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
