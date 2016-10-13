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
    var shoppingCart;
    this.items = [];
    this.item = {
      name:'',
      price: 0
    }

    this.addItem = (camera) => {
      const newCamera = {
        id: camera.id,
        name: camera.name,
        price: camera.price
      }
      //console.log('clicked addItem btn!!');
      //console.log(newCamera);
      const name = newCamera.name;
      const price = newCamera.price;
      const id = newCamera.id;
      this.items.push(newCamera)
      console.log('ITEMS', this.items);
      console.log(this.items.length);
      for (var i = 0; i < this.items.length; i++){
        shoppingCart = this.items[i].name;
              console.log(shoppingCart)
      }

    }
  }

  function ProductController ($rootScope) {
    //console.log($rootScope)
    $rootScope.shoppingCart += ''
    $rootScope.price =+ ''
  }

})();
