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
    var pile = new Pile();
    var cv = new fabric.Canvas('canvas');
    var heightGroup = null;

    $scope.addBox = () => {
      pile.addBox($scope.width, $scope.height);
      pile.draw(cv);
      generateLine();
    }

    $scope.reset = () => {
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

    $scope.getFieldState = (field) => {
      if (field && field.$touched) {
        return field.$invalid ? 'is-danger' : 'is-success';
      } else {
        return 'is-info';
      }
    }

    $scope.showFieldError = (field, error) => {
      if (field && field.$touched) {
        return field.$error[error];
      } else {
        return false;
      }
    }
  }]);
