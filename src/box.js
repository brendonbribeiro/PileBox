import {
  fabric
} from 'fabric';
import Utils from './utils';

export default class Box {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pile = null;
    //this.drew = false;
		this.rect = null;
  }

  getHeight() {
    if (this.pile) {
      var pileHeight = this.pile.getHeight();
      return this.height > pileHeight ? this.height : pileHeight;
    } else {
      return this.height;
    }
  }

  draw(canvas, currentHeight) {
    var rect = new fabric.Rect({
      top: 0,
      left: (canvas.width / 2) - (Utils.toPixelsSize(this.width) / 2),
      width: Utils.toPixelsSize(this.width),
      height: Utils.toPixelsSize(this.height),
      fill: Utils.getMaterialColor(),
      stroke: 'white',
      strokeWidth: 2
    });

    canvas.add(rect);

    rect.animate('top', canvas.height - currentHeight - Utils.toPixelsSize(this.height), {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      easing: fabric.util.ease['easeOutQuint']
    });

		this.rect = rect;
    //this.drew = true;
  }

  clear(canvas, direction) {
		this.rect.animate('left', direction == 'left' ? (0 - Utils.toPixelsSize(this.width)) : canvas.width, {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      easing: fabric.util.ease['easeOutQuint']
    });
  }
}
