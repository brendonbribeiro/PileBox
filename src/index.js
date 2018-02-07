import {
  fabric
} from 'fabric'
import Box from './box.js';
import Pile from './pile.js';

var pile = new Pile();
var cv = new fabric.Canvas('canvas');

global.addBox = () => {
  pile.addBox(getWidth(), getHeight());

  cv.clear();
  pile.draw(cv);
}

global.reset = () => {
  cv.clear();
  pile = new Pile();
}

const getWidth = () => {
  return parseInt(document.getElementById("width").value);
}

const getHeight = () => {
  return parseInt(document.getElementById("height").value);
}
