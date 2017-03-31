class Box {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pile = null;
  }
}

class Pile {
  constructor() {
    this.boxes = [];
  }

  addBox(box){
    if(this.boxes.length) {
      var lastBox = this.boxes[this.boxes.length-1];
      if(lastBox.width > box.width){
        if(!lastBox.pile){
          lastBox.pile = new Pile();
        }

        lastBox.pile.addBox(box);
      }else{
        this.boxes.push(box);
      }
    }else {
      this.boxes.push(box);
    }
  };

  getHeight(){
    var _height = 0;
    this.boxes.forEach(function(box){
      if(box.pile){
        var pileHeight = box.pile.getHeight();
        _height = _height + (box.height > pileHeight ? box.height : pileHeight);
      }else{
        _height = _height + box.height;
      }
    });

    return _height;
  }
}

var p1 = new Pile();
p1.addBox(new Box(2, 2));
p1.addBox(new Box(1, 1));
p1.addBox(new Box(1, 2));
p1.addBox(new Box(2, 1));
var h1 = p1.getHeight();

var p2 = new Pile();
p2.addBox(new Box(5, 7));
p2.addBox(new Box(3, 4));
p2.addBox(new Box(1, 2));
p2.addBox(new Box(2, 3));
p2.addBox(new Box(4, 2));
p2.addBox(new Box(4, 4));
var h2 = p2.getHeight();

var p3 = new Pile();
p3.addBox(new Box(3, 1));
p3.addBox(new Box(2, 2));
p3.addBox(new Box(1, 3));
p3.addBox(new Box(6, 9));
p3.addBox(new Box(5, 8));
p3.addBox(new Box(3, 7));
p3.addBox(new Box(4, 2));
p3.addBox(new Box(3, 1));
p3.addBox(new Box(2, 2));
p3.addBox(new Box(1, 4));
var h3 = p3.getHeight();

console.log(h1 == 4 && h2 == 11 && h3 == 14);
