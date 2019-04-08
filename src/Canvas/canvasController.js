import { preloadImage } from '../utils';

class CanvasWithSelectArea {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.mouseStartX = 0;
    this.mouseStartY = 0;

    this.mouseX = 0;
    this.mouseY = 0;

    this.isMouseDown = false;
  }

  initListners() {
    this.canvas.addEventListener("mousedown", this.onMouseDown(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove(this));
  }

  onMouseMove(context) {
    const _this = context;
    return function (e) {
      _this.mouseX = e.layerX;
      _this.mouseY = e.layerY;
      if (_this.isMouseDown) {
        _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height); //clear canvas
        _this.ctx.beginPath();
        var width = _this.mouseX - _this.mouseStartX;
        var height = _this.mouseY - _this.mouseStartY;
        _this.ctx.rect(_this.mouseStartX, _this.mouseStartY, width, height);
        _this.ctx.strokeStyle = "black";
        _this.ctx.lineWidth = 10;
        _this.ctx.stroke();
      }
    }
  }

  onMouseUp(context) {
    const _this = context;
    return function (e) {
      _this.isMouseDown = false;
    }
  }

  onMouseDown(context) {
    const _this = context;
    return function (e) {
      _this.isMouseDown = true;
      _this.mouseStartX = e.layerX;
      _this.mouseStartY = e.layerY;
    }
  }
}

class CanvasWithImg {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  drawImage(url) {
    preloadImage(url, img => {
      this.clear();
      const hRatio = this.canvas.width / img.width;
      // var vRatio =  canvas.height / img.height  ;
      // var ratio  = Math.min ( hRatio, vRatio );
      const ratio = hRatio;
      const centerShift_x = (this.canvas.width - img.width * ratio) / 2;
      const centerShift_y = (this.canvas.height - img.height * ratio) / 2;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    });
  }



  outputPixelsColor() {
    for (let w = 0; w < 10; w++) {
      for (let h = this.canvas.height; h > this.canvas.height - 10; h--) {
        const res = this.ctx.getImageData(w, h, 1, 1).data;
        console.log(`${res[0]} ${res[1]} ${res[2]}`);
      }
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export {
  CanvasWithSelectArea,
  CanvasWithImg,
};
