import React, { useState } from 'react';

function App() {

  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

 
  const handleInputChange = (e) => {
    setTexto(e.target.value);
  };

  const analizarTexto = () => {
    const textoNormalizado = texto.replace(/[\W_]/g, '').toLowerCase();
    const esCapicua = textoNormalizado === textoNormalizado.split('').reverse().join('');
    setResultado(esCapicua ? 'El texto es capicúa' : 'El texto no es capicúa');
  };

  return (
    <div>
      <h1>Analizador de Capicúa</h1>
      <input 
        type="text" 
        value={texto} 
        onChange={handleInputChange} 
        placeholder="Escribe algo"
      />
        <p>
         <strong>{texto}</strong>
        </p>
      <button onClick={analizarTexto}>Analizar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default App;