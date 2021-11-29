"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Line = /** @class */ (function () {
    function Line() {
    }
    Object.defineProperty(Line.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (value) {
            this._start = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (value) {
            this._end = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        validate,
        __metadata("design:type", Point),
        __metadata("design:paramtypes", [Point])
    ], Line.prototype, "start", null);
    __decorate([
        validate,
        __metadata("design:type", Point),
        __metadata("design:paramtypes", [Point])
    ], Line.prototype, "end", null);
    return Line;
}());
function validate(target, propertyKey, descriptor) {
    var set = descriptor.set;
    descriptor.set = function (value) {
        var type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError("Invalid type, got ".concat(typeof value, " not ").concat(type.name, "."));
        }
        set.call(this, value);
    };
}
var line = new Line();
line.start = new Point(0, 0);
