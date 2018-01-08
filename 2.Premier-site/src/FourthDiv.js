import React from 'react';
import Card from './Card';

export default class FourthDiv extends React.Component {
  render() {
    return (
      <div className="FourthDiv">
        <div className="Title">
          <h2>Adipiscing amet consequat</h2>
          <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
        </div>
        <div className ='Info'>
          <Card url='https://html5up.net/uploads/demos/photon/images/pic02.jpg' alt='Balade' txtBtn='MORE'/>
          <Card url='https://html5up.net/uploads/demos/photon/images/pic03.jpg' alt='Route' txtBtn='MORE'/>
          <Card url='https://html5up.net/uploads/demos/photon/images/pic04.jpg' alt='Cabane' txtBtn='MORE'/>
        </div>
      </div>
    );
  }
}
