import { fabric } from 'fabric'
//import { Pile, Box } from './pilebox.js';
import Box from './box.js';
import Pile from './pile.js';

var p4 = new Pile();
p4.addBox(2, 3);
p4.addBox(1, 1);
p4.addBox(3, 3);
p4.addBox(2, 2);
p4.addBox(2, 2);
p4.addBox(1, 1);
p4.addBox(3, 3);
p4.addBox(4, 4);
p4.addBox(3, 3);
p4.addBox(3, 3);
p4.addBox(1, 1);
p4.addBox(2, 2);
p4.addBox(3, 3);

console.log(p4.getHeight());

var cv = new fabric.Canvas('canvas');
//cv.setBackgroundColor("#F44336", cv.renderAll.bind(cv));
cv.setBackgroundColor("white", cv.renderAll.bind(cv));

global.cv = cv;
p4.draw(cv);
//console.log(canvas);
