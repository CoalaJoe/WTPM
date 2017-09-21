"use strict";

requirejs(['module'], function () {
    var app = function app(module) {
        console.log(module);
        var obj = module || {};

        return obj;
    } (module);

    app.init();
});
