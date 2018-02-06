import { fabric } from 'fabric';
import Utils from './utils';
import Box from './box.js';

export default class Pile {
	constructor() {
		this.boxes = [];
	}

	addBox(width, height) {
		var box = new Box(width, height);
		if (this.boxes.length) {
			var lastBox = this.boxes[this.boxes.length - 1];
			if (!lastBox.pile || lastBox.height >= lastBox.pile.getHeight()) {
				if (lastBox.width > box.width) {
					if (!lastBox.pile) {
						lastBox.pile = new Pile();
					}

					lastBox.pile.addBox(width, height);
				} else {
					this.boxes.push(box);
				}
			} else {
				lastBox.pile.addBox(width, height);
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
