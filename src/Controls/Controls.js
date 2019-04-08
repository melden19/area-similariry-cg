import React, { Component } from 'react'

import './Controls.css';

class Controls extends Component {
  render() {
    const { onUpload, deviderHandler } = this.props;
    return (
      <div className="controls-wrapper">
        <input type="file" onChange={onUpload} />
        <input type="range" onChange={deviderHandler} />
      </div>
    )
  }
}

export default Controls;