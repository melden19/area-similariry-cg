import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import { CanvasWithSelectArea, CanvasWithImg } from './canvasController';
import Devider from '../Devider';

import './Canvas.css';

class Canvas extends Component {
  state = {

  }

  componentDidMount() {
    this.canvasWithControls = new CanvasWithSelectArea(this.editableCanvas);
    this.canvasWithControls.initListners();

    this.canvasWithImg = new CanvasWithImg(this.resultedCanvas);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.img.name !== this.props.img.name) {
      this.readImg(this.props.img);
    }
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
    const { width, height, deviderPosition: dpPercents } = this.props;
    const { canvasBG } = this.state;

    const deviderPosition = 500 * dpPercents / 100;

    return (
      <Fragment>
        <div className="canvas-area">
          <canvas
            ref={(node) => { this.editableCanvas = node; }}
            className="canvas-with-controls"
            style={{
              backgroundImage: `url(${canvasBG})`,
              position: 'relative'
            }}
            width={width}
            height={height}
          />
          <Devider deviderPosition={deviderPosition}/>
        </div>
        <canvas
          ref={(node) => { this.resultedCanvas = node; }}
          style={{
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