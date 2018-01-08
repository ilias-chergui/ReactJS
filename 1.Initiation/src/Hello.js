// Import de la librairie react installé dans le dossier node_modules
import React, { Component } from 'react';

// Crée et exporte la classe pour l'imbriquer dans d'autres composants
export default class Hello extends Component {
  render() { // Fonction dans react qui renvoi la vue
    return (
      <div className="App">
        {this.props.text}
      </div>
    );
  }
}
