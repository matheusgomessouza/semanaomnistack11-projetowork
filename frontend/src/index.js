//IMPORTAÇÕES
import React from 'react';
import ReactDOM from 'react-dom'; //D.O.M SIGNIFICA ÁRVORE DE ELEMENTOS, integração do Rect com o navegador
import App from './App'; //IMPORTANDO O App.js dentro de uma variável

// '<App />' é um componente (função no JavaScript que retorna HTML), onde fica o HTML 
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

