"use strict";
var assertion_lib_1 = require("@santi100/assertion-lib");
var PHI = (1 + Math.pow(5, 0.5)) / 2;
module.exports = function (n) {
    (0, assertion_lib_1.assertTypeOf)(n, 'number', 'n');
    (0, assertion_lib_1.assertInteger)(n, 'n');
    (0, assertion_lib_1.assertMin)(n, 'n', 0);
    return (Math.pow(PHI, n) - 1 / Math.pow(-PHI, n)) / Math.sqrt(5);
};
