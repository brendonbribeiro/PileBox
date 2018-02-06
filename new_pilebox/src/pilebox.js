import { fabric } from 'fabric';
import Utils from './utils';

class Box {
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

class Pile {
	constructor() {
		this.boxes = [];
	}

	addBox(box) {
		if (this.boxes.length) {
			var lastBox = this.boxes[this.boxes.length - 1];
			if (!lastBox.pile || lastBox.height >= lastBox.pile.getHeight()) {
				if (lastBox.width > box.width) {
					if (!lastBox.pile) {
						lastBox.pile = new Pile();
					}

					lastBox.pile.addBox(box);
				} else {
					this.boxes.push(box);
				}
			} else {
				lastBox.pile.addBox(box);
			}
		} else {
			this.boxes.push(box);
		}
	};

	getHeight() {
		return this.boxes.map(a => a.getHeight()).reduce((a, b) => a + b, 0);
	}

	getHeightAt(index) {
		var pile = new Pile();
		pile.boxes = this.boxes.filter((box, i) => i < index);
		return pile.getHeight();
	}

	draw(canvas, pileStart = 0) {
		this.boxes.forEach((box, i) => {
			var currentHeight = pileStart + (Utils.toPixelsSize(this.getHeightAt(i)));
			box.draw(canvas, currentHeight);

			box.pile && box.pile.draw(canvas, currentHeight);
		});
	}
}

export { Pile, Box }
