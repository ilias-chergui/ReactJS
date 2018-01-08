// Import de la librairie react installé dans le dossier node_modules
import React, { Component } from 'react';

// Import du 2e Component
import Hello from './Hello.js';

// Crée et exporte la classe pour l'imbriquer dans d'autres composants
export default class Welcome extends Component {
  render() { // Fonction dans react qui renvoi la vue
    return (
      <div className="App">
        Welcome
        <Hello text={'HelloWorld'}/>
      </div>
    );
  }
}
