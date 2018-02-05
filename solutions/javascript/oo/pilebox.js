class Box {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.pile = null;
	}

	draw(currentHeight) {
		return new fabric.Rect({
			top: 800 - currentHeight - (this.height * 30),
			left: (1000 / 2) - (this.width * 30 / 2),
			width: this.width * 30,
			height: this.height * 30,
			fill: 'red',
			stroke: 'white',
			strokeWidth: 2
		});
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
		var _height = 0;
		this.boxes.forEach(function (box) {
			if (box.pile) {
				var pileHeight = box.pile.getHeight();
				_height = _height + (box.height > pileHeight ? box.height : pileHeight);
			} else {
				_height = _height + box.height;
			}
		});

		return _height;
	}

	getHeightAt(index) {
		var _pile = new Pile();
		_pile.boxes = this.boxes.filter((box, i) => i < index);
		return _pile.getHeight() * 30;
	}

	draw(canvas, pileStart = 0) {
		this.boxes.forEach((box, i) => {
			var currentHeight = pileStart + this.getHeightAt(i);
			var rect = box.draw(currentHeight);
			canvas.add(rect);

			if (box.pile) {
				box.pile.draw(canvas, currentHeight);
			}
		});
	}
}

var p4 = new Pile();
p4.addBox(new Box(2, 2));
p4.addBox(new Box(1, 1));
p4.addBox(new Box(3, 3));
p4.addBox(new Box(2, 2));
p4.addBox(new Box(2, 2));
p4.addBox(new Box(1, 1));
p4.addBox(new Box(3, 3));
p4.addBox(new Box(4, 4));
p4.addBox(new Box(3, 3));
p4.addBox(new Box(3, 3));
p4.addBox(new Box(1, 1));
p4.addBox(new Box(2, 2));
p4.addBox(new Box(3, 3));

var canvas = new fabric.Canvas('canvas');
canvas.setBackgroundColor('green', canvas.renderAll.bind(canvas));
p4.draw(canvas);
