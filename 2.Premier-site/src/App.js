import React, { Component } from 'react';
import './App.css';
import Image from './image';
import SecondDiv from './SecondDiv';
import ThirdDiv from './ThirdDiv';
import FourthDiv from './FourthDiv';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ImageHead">
          <Image/>
        </div>
        <div className="SecondCompo">
          <SecondDiv>
            <div className="Text">
              <h2>Lorem ipsum dolor adipiscing amet dolor consequat</h2>
              <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
            </div>
            <div className="Img">
              <img src="https://html5up.net/uploads/demos/photon/images/pic01.jpg" alt="Homme devant l'horizon"/>
            </div>
          </SecondDiv>
        </div>
        <div className="ThirdCompo">
          <ThirdDiv/>
        </div>
        <div className="FourthCompo">
          <FourthDiv/>
        </div>
      </div>
    );
  }
}

export default App;
