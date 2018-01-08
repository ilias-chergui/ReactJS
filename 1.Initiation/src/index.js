import React from 'react'; // importe la librairie sans Component
import ReactDOM from 'react-dom'; // Va gérer l'affichage dans le DOM
// import './index.css'; // importe du Css
import Welcome from './Welcome.js'; // importe le Component créé

// Fonction d'affichage avec 2 paramètres
// -> 1° Component à rendre, 2° Endroit où le rendre
// Dossier public possède un index.html avec uniquement une <div class="root">
ReactDOM.render(<Welcome/>, document.getElementById('root'));
