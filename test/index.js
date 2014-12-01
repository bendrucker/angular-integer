'use strict';

var angular = require('angular');

describe('angular-integer', function () {

  var controller, scope;
  beforeEach(angular.mock.module(require('../')));
  beforeEach(angular.mock.inject(function ($injector) {
    scope      = $injector.get('$rootScope').$new();
    controller = $injector.get('$compile')('<input ng-model="int" integer />')(scope).controller('ngModel');
  }));

  it('accepts an integer', function () {
    scope.int = 1;
    scope.$digest();
    expect(controller.$valid).to.be.true;
  });

  it('accepts a negative integer', function () {
    scope.int = -1;
    scope.$digest();
    expect(controller.$valid).to.be.true;
  });

  it('rejects a non-integer', function () {
    scope.int = 1.1;
    scope.$digest();
    expect(controller.$error.integer).to.be.true;
  });

});
