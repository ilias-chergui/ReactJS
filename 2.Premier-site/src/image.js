import React from 'react';
import Logo from './logo';

export default class Image extends React.Component {

  render() {
    return (
      <div className="ImgHead">
        <div className="TextHead">
          <Logo/>
          <h1>Hi, I am <strong>Photon</strong>, another fine <br/>little freebie from <a href="https://html5up.net/photon">HTML5 UP</a>.</h1>
          <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna <br/>bortis feugiat sapien sed etiam volutpat accumsan.</p>
          <button type="submit">Discover</button>
        </div>
      </div>
    );
  }
}
