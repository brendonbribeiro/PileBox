const cv = document.getElementById("canvas");
const CANVAS_WIDTH = cv.width;
const CANVAS_HEIGHT = cv.height;
const CANVAS_SCALE = 30;
const getMaterialColor = () => {
	const colors = ["F44336", "E91E63", "9C27B0", "673AB7", "3F51B5", "2196F3", "03A9F4", "00BCD4"
		, "009688", "4CAF50", "8BC34A", "CDDC39", "FFEB3B", "FFC107", "FF9800", "FF5722", "795548"
		, "9E9E9E", "607D8B"];
	//https://stackoverflow.com/a/5915122
	return '#' + colors[Math.floor(Math.random() * colors.length)];
}

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

	draw(currentHeight) {
		return new fabric.Rect({
			top: CANVAS_HEIGHT - currentHeight - (this.height * CANVAS_SCALE),
			left: (CANVAS_WIDTH / 2) - (this.width * CANVAS_SCALE / 2),
			width: this.width * CANVAS_SCALE,
			height: this.height * CANVAS_SCALE,
			fill: getMaterialColor(),
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
		return this.boxes.map(a => a.getHeight()).reduce((a, b) => a + b, 0);
	}

	getHeightAt(index) {
		var pile = new Pile();
		pile.boxes = this.boxes.filter((box, i) => i < index);
		return pile.getHeight();
	}

	draw(canvas, pileStart = 0) {
		this.boxes.forEach((box, i) => {
			var currentHeight = pileStart + (this.getHeightAt(i) * CANVAS_SCALE);
			canvas.add(box.draw(currentHeight));
			box.pile && box.pile.draw(canvas, currentHeight);
		});
	}
}

var p4 = new Pile();
p4.addBox(new Box(2, 3));
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
canvas.setBackgroundColor("#F44336", canvas.renderAll.bind(canvas));

p4.getHeight();
p4.draw(canvas);
