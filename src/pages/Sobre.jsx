import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div style={{ color: 'white', padding: '50px' }}>
      <h1>Sobre Mim</h1>
      <Link to="/" style={{ color: '#8b5cf6' }}>Voltar para Home</Link>
    </div>
  );
}
export default Sobre;