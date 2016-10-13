(function() {
  'use strict';
  var app = angular.module('cameraApp', []);
  $('select').material_select();
  app.filter('makeStars', function() {
    return function (input) {
      //console.log(input);
      return Array(input).join("*");
    };
  });
  app.controller('CartController', CartController);
  app.controller('ProductController', ProductController);

  function CartController ($rootScope) {
    this.items = [];
    this.item = {
      name:'',
      price: 0
    }

    this.addItem = (camera) => {
      const newCamera = {
        id: camera.id,
        name: camera.name,
        cost: camera.price
      }
      //console.log('clicked addItem btn!!');
      console.log(newCamera);
      const name = newCamera.name;
      const cost = newCamera.cost;
      const id = newCamera.id;
      this.items.push(newCamera)
      $rootScope.shoppingCart = `${name}    ${cost}`
    }
  }

  function ProductController ($rootScope) {
    $rootScope.shoppingCart = ''
  }

})();
