"use strict";

var sum = function sum() {
  for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {
    array[_key] = arguments[_key];
  }
  console.log(array.reduce(function (c, n) {
    return c + n;
  }, 0));
};
sum(1, 2, 3, 4, 5);
