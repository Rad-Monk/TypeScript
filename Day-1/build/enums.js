"use strict";
var virginStatus;
(function (virginStatus) {
    virginStatus[virginStatus["yes"] = 0] = "yes";
    virginStatus[virginStatus["no"] = 1] = "no";
    virginStatus[virginStatus["POWER"] = 2] = "POWER";
})(virginStatus || (virginStatus = {}));
let vergil = virginStatus.POWER;
console.log(vergil); // this give the index corresponding to the value assigned, index from virginstatus
console.log(virginStatus[vergil]); // this prints the value of that index
