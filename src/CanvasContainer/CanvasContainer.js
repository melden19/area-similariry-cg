import React, { Component } from 'react';

import Canvas from '../Canvas';
import Controls from '../Controls';
import Devider from '../Devider';

import './CanvasContainer.css';

class CanvasContainer extends Component {
  state = {
    uploadedImg: {},
    deviderPosition: 50,
  }

  onFileUpload = e => {
    console.log(e.target.files[0]);
    this.setState({
      uploadedImg: e.target.files[0],
    });
  }

  deviderHandler = e => {
    this.setState({
      deviderPosition: e.target.value,
    });
  }

  render() {
    const { uploadedImg, deviderPosition } = this.state;
    return (
      <div className="canvas-wrapper">
        <Canvas
          height="400"
          width="500"
          img={uploadedImg}
          deviderPosition={deviderPosition}
        />
        <Controls
          onUpload={this.onFileUpload}
          deviderHandler={this.deviderHandler}
        />
      </div>
    )
  }
}

export default CanvasContainer;
