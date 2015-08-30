'use strict';

describe('Controller: ProgressionCtrl', function () {

  // load the controller's module
  beforeEach(module('caretakerApp'));

  var ProgressionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgressionCtrl = $controller('ProgressionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProgressionCtrl.awesomeThings.length).toBe(3);
  });
});
