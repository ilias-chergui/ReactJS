import React from 'react';

export default class SecondDiv extends React.Component {
  render() {
    return (
      <div className="SecondDiv">
        {this.props.children}
      </div>
    );
  }
}
