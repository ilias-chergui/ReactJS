import React from 'react';
import Button from './Button';

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.url} alt={this.props.alt}/>
        <h3>Magna feugiat lorem</h3>
        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
        <Button txtBtn={this.props.txtBtn}/>
      </div>
    );
  }
}
