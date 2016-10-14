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
    $rootScope.items = [];
    $rootScope.getTotal = ({
      subtotal: 0,
      tax: 0,
      total: 0
    });

    this.addItem = (camera) => {
      //console.log(camera.quanity);
      // check if camera is in cart, if not push into cart
      //if yes, just increase the qt
      if ($rootScope.items.indexOf(camera) === -1) {
        camera['quanity'] = 1;
        //console.log('item is not in cart');
        $rootScope.items.push(camera)
        //console.log($rootScope.items);
        //console.log('TOTAL:', $rootScope.getTotal);
        var tempSub = camera.price;
        var tempTax = tempSub * 0.08;
        var tempTotal = tempSub + tempTax
        //console.log('TEMP', tempSub, tempTax, tempTotal);
        $rootScope.getTotal = ({
          subtotal: tempSub,
          tax: tempTax,
          total: tempTotal
        });
        //console.log($rootScope.getTotal);
      } else {
        //console.log('item is in cart');
        camera.quanity ++ ;
        var tempSub = camera.price;
        var tempTax = tempSub * 0.08;
        var tempTotal = tempSub + tempTax;
        $rootScope.getTotal.subtotal += tempSub;
        $rootScope.getTotal.tax += tempTax;
        $rootScope.getTotal.total += tempTotal;
        //console.log($rootScope.getTotal);
      }
    }

    this.deleteItem = (product) => {
      console.log('You clicked on the trash button');
      //if there is only one item of its kind in the cart, delete it
      // if there are multiple items of the same kind in the cart, sub 1
      console.log(product);
      if (product.quanity === 1) {
        console.log('There is only one if this item in the cart!');
        console.log(product);
        console.log(product.name);
        //splice the item out of the array!
        $rootScope.getTotal.subtotal = 0;
        $rootScope.getTotal.tax = 0;
        $rootScope.getTotal.total =0;
        let item = $rootScope.items.indexOf(product.name);
        console.log('item to delete', item);
        $rootScope.items.splice(item, 1);
      } else {
        console.log('There are multple items in the cart!');
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
    //console.log($rootScope)
    // console.log($parentScope);
    this.shoppingCart = $rootScope.items;
    //console.log(this.shoppingCart);
  };


})();
