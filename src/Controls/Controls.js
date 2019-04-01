import React, { Component } from 'react'

import './Controls.css';

class Controls extends Component {
  render() {
    const { onUpload } = this.props;
    return (
      <div className="controls-wrapper">
        <input type="file" onChange={onUpload} />
      </div>
    )
  }
}

export default Controls;