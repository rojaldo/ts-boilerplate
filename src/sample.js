"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var isLeapYear = function (year) {
    return (0, rxjs_1.of)(year).pipe((0, rxjs_1.map)(function (y) { return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0; }));
};
var doSomething = function (d) {
    var christmas = new Date(d.getFullYear(), 11, 25);
    return Math.floor((christmas.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
};
var daysToChristmas = function () {
    return (0, rxjs_1.of)(new Date()).pipe((0, rxjs_1.map)(function (d) {
        return doSomething(d);
    }));
};
var countCharacter = function (myString, char) {
    return (0, rxjs_1.from)(myString).pipe((0, rxjs_1.filter)(function (c) { return c === char; }), (0, rxjs_1.count)());
};
countCharacter('Hello Worllld', 'l').subscribe(function (res) { return console.log(res); });
