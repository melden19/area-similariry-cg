import React, { Component } from 'react';

import Canvas from '../Canvas';
import Controls from '../Controls';

import './CanvasContainer.css';

class CanvasContainer extends Component {
  state = {
    uploadedImg: null,
  }

  onFileUpload = e => {
    console.log(e.target.files[0]);
    this.setState({
      uploadedImg: e.target.files[0],
    });
  }

  render() {
    const { uploadedImg } = this.state;
    return (
      <div className="canvas-wrapper">
        <Canvas
          height="400"
          width="500"
          img={uploadedImg}
        />
        <Controls
          onUpload={this.onFileUpload}
        />
      </div>
    )
  }
}

export default CanvasContainer;
