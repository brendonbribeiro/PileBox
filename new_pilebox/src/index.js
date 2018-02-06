import { fabric } from 'fabric'
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


var cv = new fabric.Canvas('canvas');
cv.setBackgroundColor("white", cv.renderAll.bind(cv));
p4.draw(cv);
