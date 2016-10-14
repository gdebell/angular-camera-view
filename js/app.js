(function() {
  'use strict';
  var app = angular.module('cameraApp', []);
  $('select').material_select();
  app.filter('makeStars', function() {
    return function (input) {
      return Array(input).join("*");
    };
  });
  app.controller('CartController', CartController);
  app.controller('ProductController', ProductController);

  function CartController ($rootScope) {
    var shoppingCart;
    $rootScope.items = [];
    $rootScope.getTotal = ({
      subtotal: 10,
      tax: 0,
      total: 0
    });

    this.addItem = (camera) => {
      // check if camera is in cart, if not push into cart
      //if yes, just increase the qt
      if ($rootScope.items.indexOf(camera) === -1) {
        camera['quanity'] = 1;
        $rootScope.items.push(camera)
        var tempSub = camera.price;
        var tempTax = tempSub * 0.08;
        var tempTotal = tempSub + tempTax;
        $rootScope.getTotal.subtotal += tempSub;
        $rootScope.getTotal.tax += tempTax;
        $rootScope.getTotal.total += tempTotal;
      } else {
        var tempSub = camera.price;
        var tempTax = tempSub * 0.08;
        var tempTotal = tempSub + tempTax;
        camera.quanity ++ ;
        $rootScope.getTotal.subtotal += tempSub;
        $rootScope.getTotal.tax += tempTax;
        $rootScope.getTotal.total += tempTotal;
      }
    }

    this.deleteItem = (product) => {
      //if there is only one item of its kind in the cart, delete it
      // if there are multiple items of the same kind in the cart, sub 1
      if (product.quanity === 1) {
        //splice the item out of the array!
        $rootScope.getTotal.subtotal = 0;
        $rootScope.getTotal.tax = 0;
        $rootScope.getTotal.total =0;
        let item = $rootScope.items.indexOf(product.name);
        $rootScope.items.splice(item, 1);
      } else {
        product.quanity --;
        var tempSub = product.price;
        var tempTax = tempSub * 0.08;
        var tempTotal = tempSub + tempTax;
        $rootScope.getTotal.subtotal -= tempSub;
        $rootScope.getTotal.tax -= tempTax;
        $rootScope.getTotal.total -= tempTotal;
      }
    }
  }

  function ProductController ($rootScope) {
    this.shoppingCart = $rootScope.items;
  };
})();
