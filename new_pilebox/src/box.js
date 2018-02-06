import { fabric } from 'fabric';
import Utils from './utils';

export default class Box {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.pile = null;
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
		const rect = new fabric.Rect({
			top: canvas.height - currentHeight - Utils.toPixelsSize(this.height),
			left: (canvas.width / 2) - (Utils.toPixelsSize(this.width) / 2),
			width: Utils.toPixelsSize(this.width),
			height: Utils.toPixelsSize(this.height),
			fill: Utils.getMaterialColor(),
			stroke: 'white',
			strokeWidth: 2
		});

		canvas.add(rect);
	}
}
