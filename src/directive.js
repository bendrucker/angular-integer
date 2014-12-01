'use strict';

module.exports = function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attributes, ngModelController) {
      ngModelController.$validators.integer = function (modelValue, viewValue) {
        return (/^\-?\d+$/).test(viewValue);
      };
    }
  };
};
