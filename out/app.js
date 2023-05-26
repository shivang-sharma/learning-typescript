var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// String Arrays
var stringArray;
stringArray = ['a', 'b', '2', '1'];
/**
 * Functions with optional and required parameter
 * we can define default value as parameter:type=defaultvalue
 * we can define an optional param as paramter?:type
 * Optional Parameter needs to be in the last.
 * A required param cannot follow optional param
 * There can be multiple optional param but only after the required parameter
 *  A param with default value can follow an optional param.
 */
function calculateVolumeSingleOptional(width, length, height) {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeMultipleOptional(width, length, height) {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeSingleDefaultValue(width, length, height) {
    if (height === void 0) { height = 3; }
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeOptionalWithDefaultValue(width, length, height) {
    if (height === void 0) { height = 3; }
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeMultipleOptionalWithMultipleDefaultValue(width, length, height, area, perimeter) {
    if (height === void 0) { height = 3; }
    if (perimeter === void 0) { perimeter = 2; }
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
calculateVolumeSingleOptional(1, 2);
calculateVolumeSingleOptional(1, 2, 3);
calculateVolumeMultipleOptional(1);
calculateVolumeMultipleOptional(1, 2);
calculateVolumeMultipleOptional(1, 2, 3);
calculateVolumeSingleDefaultValue(1, 2);
calculateVolumeSingleDefaultValue(1, 2, 3);
/**
 * Arrow Functions
 * same as in javascript
 *
 */
var volume = function () { return 23 * 23; };
/**
 * Custom Objects in TypeScripts
 */
var car1 = {
    id: 2,
    make: 'Hona',
    model: 'city',
    sayHey: function () {
        console.log('Say Hey');
    },
    sayHello: function () {
        console.log("Say Hello");
    }
};
car1.sayHey();
car1.sayHello();
var cuboid = {
    height: 23,
    width: 10,
    length: 19,
    volume: function () {
        return this.height * this.width * this.length;
    },
    area: function () {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
};
var cuboid = {
    width: 10,
    length: 19,
    volume: function () {
        return this.height * this.width * this.length;
    },
    area: function () {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
};
/**
 * Creating classes
 */
var Greeter = /** @class */ (function () {
    function Greeter(name, message) {
        this.name = name;
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "".concat(this.message, ", ").concat(this.name);
    };
    Greeter.prototype.greeting = function () {
        console.log(Greeter.id, " ", this.greet());
    };
    Greeter.id = '10';
    return Greeter;
}());
/**
 * class inheritance
 */
var Shoe = /** @class */ (function () {
    function Shoe(type, price, isOnSale) {
        this.displayInfo = function () {
            console.log(this.type, this.price, this.isOnSale);
        };
        this.type = type;
        this.price = price;
        this.isOnSale = isOnSale;
    }
    return Shoe;
}());
var Boots = /** @class */ (function (_super) {
    __extends(Boots, _super);
    function Boots(type, price, isOnSale, hasLeatherUpper) {
        var _this = _super.call(this, type, price, isOnSale) || this;
        _this.displayInfo = function () {
            console.log(_this.price, _this.type, _this.isOnSale, _this.hasLeatherUpper);
        };
        _this.hasLeatherUpper = hasLeatherUpper;
        return _this;
    }
    return Boots;
}(Shoe));
var Cuboid = /** @class */ (function () {
    function Cuboid(height, width, length) {
        this.volume = function () {
            return this.width * this.length * this.height;
        };
        this.area = function () {
            return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
        };
        this.height = height;
        this.width = width;
        this.length = length;
    }
    return Cuboid;
}());
var Shoes = /** @class */ (function () {
    function Shoes(data) {
        this.type = data.type;
        this.price = data.price;
        this.isOnSale = data.isOnSale;
    }
    return Shoes;
}());
var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot(data) {
        var _this = _super.call(this, data) || this;
        _this.hasLeatherUpper = data.hasLeatherUpper;
        _this.isWaterProof = data.isWaterProof;
        _this.tread = data.tread;
        return _this;
    }
    return Boot;
}(Shoes));
/**
 * Making internal modules externally available
 */
var shapesModule;
(function (shapesModule) {
    var Cuboids = /** @class */ (function () {
        function Cuboids(height, width, length) {
            this.volume = function () {
                return this.width * this.length * this.height;
            };
            this.area = function () {
                return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
            };
            this.height = height;
            this.width = width;
            this.length = length;
        }
        return Cuboids;
    }());
    shapesModule.Cuboids = Cuboids;
})(shapesModule || (shapesModule = {}));
var myCuboid = new shapesModule.Cuboids(10, 12, 11);
//# sourceMappingURL=app.js.map