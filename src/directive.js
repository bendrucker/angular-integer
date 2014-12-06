'use strict';

module.exports = function () {
  return {
    require: 'ngModel',
    scope: {
      bits: '@'
    },
    link: function (scope, element, attributes, ngModelController) {
      ngModelController.$validators.integer = function (modelValue, viewValue) {
        return isInteger(viewValue);
      };
      ngModelController.$validators.integerBits = function (modelValue, viewValue) {
        var bits = parseInt(scope.bits);
        return isInteger(viewValue, modelValue, bits);
      };
      scope.$watch('bits', function () {
        ngModelController.$validate();
      });
    }
  };
};

function isInteger (string, number, bits) {
  var isInt = (/^\-?\d+$/).test(string);
  var hasBits = !isNaN(bits);
  if (!hasBits || !isInt) return isInt;
  var spread = Math.pow(2, bits - 1);
  if (number < 0) {
    return number > (-1 * spread);
  }
  else {
    return number < (spread - 1);
  }
}
