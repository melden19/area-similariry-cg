import React, { Component, Fragment } from 'react'

import { CanvasWithSelectArea, CanvasWithImg } from './canvasController';

class Canvas extends Component {
  state = {
    imgToDraw: null,
  }

  componentDidMount() {
    this.canvasWithControls = new CanvasWithSelectArea(this.editableCanvas);
    this.canvasWithControls.initListners();

    this.canvasWithImg = new CanvasWithImg(this.resultedCanvas);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.img.name !== this.props.img.name) {
      this.readImg(this.props.img);
    // }
  }

  readImg(img) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.canvasWithImg.drawImage(reader.result);
      
      this.setState({
        canvasBG: reader.result
      });
    };
    reader.readAsDataURL(img);
  }

  render() {
    const { width, height } = this.props;
    const { canvasBG } = this.state;

    return (
      <Fragment>
        <canvas
          ref={(node) => { this.editableCanvas = node; }}
          style={{
            background: 'white',
            marginTop: '100px',
          }}
          width={width}
          height={height}
        />
        <canvas
          ref={(node) => { this.resultedCanvas = node; }}
          style={{
            background: canvasBG,
            marginTop: '100px',
            display: 'none',
          }}
          width={width}
          height={height}
        />
      </Fragment>
    )
  }
}

export default Canvas;