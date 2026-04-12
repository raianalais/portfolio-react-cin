import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importação das páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal (Home) */}
        <Route path="/" element={<Home />} />
        
        {/* Rota para a página Sobre Mim */}
        <Route path="/sobre" element={<Sobre />} />
        
        {/* Rota para a página de Portfólio/Projetos */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Rota de fallback (Opcional: redireciona para Home se digitar algo errado) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;