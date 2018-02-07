import {
  fabric
} from 'fabric'
import Box from './box.js';
import Pile from './pile.js';
import Utils from './utils.js';

import angular from 'angular';
import 'angular-route';
import 'angular-sanitize'
import 'angular-messages'

var app = angular.module('PileApp', ['ngRoute'])
  .controller('PileController', ['$scope', function($scope) {
    $scope.batata = "cenoura";
    console.log($scope.batata);
  }])
  .directive('minValue', function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function($scope, $elm, $attrs, ctrl) {

        const validate = (value) => {
          var minValue = $attrs.minValue;

          if (!value || !minValue) {
            ctrl.$setValidity('minValue', true);
          } else {
            ctrl.$setValidity('minValue', parseInt(value) >= parseInt(minValue));
          }

          return value;
        }

        ctrl.$parsers.unshift(validate);
        ctrl.$formatters.push(validate);

        $attrs.$observe('minValue', function() {
          return validate(ctrl.$viewValue);
        });
      }
    };
  });

var pile = new Pile();
var cv = new fabric.Canvas('canvas');
var heightGroup = null;

global.addBox = () => {
  pile.addBox(getWidth(), getHeight());
  pile.draw(cv);
  generateLine();
}

global.reset = () => {
  pile.clear(cv);
  pile = new Pile();
  cv.remove(heightGroup);
}

const generateLine = () => {
  cv.remove(heightGroup);
  heightGroup = new fabric.Group([
    new fabric.Line([cv.width - 15, cv.height, cv.width - 15, cv.height - Utils.toPixelsSize(pile.getHeight())], {
      strokeWidth: 2,
      stroke: 'black',
    }),
    new fabric.Line([cv.width - 25, cv.height - Utils.toPixelsSize(pile.getHeight()), cv.width - 5, cv.height - Utils.toPixelsSize(pile.getHeight())], {
      strokeWidth: 2,
      stroke: 'black',
    }),
    new fabric.Line([cv.width - 25, cv.height - 2, cv.width - 5, cv.height - 2], {
      strokeWidth: 2,
      stroke: 'black',
    }),
    new fabric.Text(Utils.toPixelsSize(pile.getHeight()) + 'px', {
      fontFamily: 'Arial',
      fontSize: 25,
      left: cv.width - 90,
      top: (cv.height - (Utils.toPixelsSize(pile.getHeight()) / 2) - 15)
    })
  ]);

  cv.add(heightGroup);
}

const getWidth = () => {
  return parseInt(document.getElementById("width").value);
}

const getHeight = () => {
  return parseInt(document.getElementById("height").value);
}
