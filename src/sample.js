"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var subject_test = new rxjs_1.Subject();
subject_test.subscribe({
    next: function (v) { return console.log("From Subject 1 : ".concat(v)); }
});
subject_test.subscribe({
    next: function (v) { return console.log("From Subject 2: ".concat(v)); }
});
subject_test.next("A");
