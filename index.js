import React from'react';
import ReactDOM from'react-dom';
// Importamos dependencias de React
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
// Referenciamos un elemento con ID app

//const holaMundo = <h1>Hola Mundo!</h1>;
// Insertamos en una constante lo que queremos renderizar

ReactDOM.render(<Media title="Titulo del media" author="Matias Campagna" image="./images/covers/bitcoin.jpg" type="audio" />, app);