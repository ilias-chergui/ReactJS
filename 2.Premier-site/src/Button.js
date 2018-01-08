import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <button>{this.props.txtBtn}</button>
      </div>
    );
  }
}
