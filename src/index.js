import {
  fabric
} from 'fabric'
import Box from './box.js';
import Pile from './pile.js';
import Utils from './utils.js';

var pile = new Pile();
var cv = new fabric.Canvas('canvas');

var pileHeightText = new fabric.Text('Tamanho da pilha: 0', {
  fontFamily: 'Arial',
  left: 10,
  top: 10
});

cv.add(pileHeightText);


const setPileHeightText = () => {
  console.log(pileHeightText);
  pileHeightText.text = "Tamanho da pila: " + pile.getHeight();
  pileHeightText.bringForward();
}

global.addBox = () => {
  pile.addBox(getWidth(), getHeight());

  //cv.clear();
  pile.draw(cv);
  setPileHeightText();

  var line = new fabric.Line([cv.width - 10, cv.height, cv.width - 10, cv.height - Utils.toPixelsSize(pile.getHeight())],{
    strokeWidth:2,
    stroke: 'black',
  });

  cv.add(line);
}



global.reset = () => {
  pile.clear(cv);
  pile = new Pile();
}

const getWidth = () => {
  return parseInt(document.getElementById("width").value);
}

const getHeight = () => {
  return parseInt(document.getElementById("height").value);
}
