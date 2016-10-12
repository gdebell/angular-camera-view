(function() {
  'use strict';
  var app = angular.module('cameraApp', []);
  $('select').material_select();
  app.filter('makeStars', function() {
    return function (input) {
      console.log(input);
      return Array(input).join("*");
    };
  });

app.controller('ManageCart', ManageCart);

function ManageCart() {
  this.camera = {
    name: '',
    price: 0
  };
}

})();
