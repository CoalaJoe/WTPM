"use strict";

var module = function() {
    var obj = {};

    obj.init = function () {
        console.error("Function 'init' has not been overwritten!");
    };
}();

console.log("Module is loaded!");
