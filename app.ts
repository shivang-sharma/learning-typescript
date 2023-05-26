// String Arrays
var stringArray:String[];
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

function calculateVolumeSingleOptional(width:number, length:number, height?:number): number {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
} 
function calculateVolumeMultipleOptional(width:number, length?:number, height?:number): number {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
} 
function calculateVolumeSingleDefaultValue(width:number, length:number, height:number=3): number {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeOptionalWithDefaultValue(width:number, length?:number, height:number=3): number {
    if (height != undefined) {
        return length * width * height;
    }
    return length * width;
}
function calculateVolumeMultipleOptionalWithMultipleDefaultValue(width:number, length?:number, height:number=3, area?:number, perimeter:number=2): number {
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

var volume  = () => 23*23;

/**
 * Custom Objects in TypeScripts
 */
var car1 = {
    id: 2,
    make: 'Hona',
    model: 'city',
    sayHey: function() {
        console.log('Say Hey');
    },
    sayHello() {
        console.log("Say Hello");
    }

}
car1.sayHey();
car1.sayHello();


/**
 * Using Interfaces to create custom objects
 */
interface Shape {
    height?:number,
    width:number,
    length:number,
    volume: () => number,
    area: () => number
}

var cuboid:Shape = {
    height: 23,
    width: 10,
    length: 19,
    volume: function (): number {
        return this.height * this.width * this.length;
    },
    area: function (): number {
        return 2*(this.length*this.width + this.width*this.height + this.height*this.length);
    }
}

var cuboid:Shape = {
    width: 10,
    length: 19,
    volume: function (): number {
        return this.height * this.width * this.length;
    },
    area: function (): number {
        return 2*(this.length*this.width + this.width*this.height + this.height*this.length);
    }
}

/**
 * Creating classes
 */

class Greeter {
    static id: string = '10';
    public name: string
    private message: string
    constructor(name:string, message:string) {
        this.name = name;
        this.message = message;
    }
    private greet() {
        return `${this.message}, ${this.name}`;
    }
    public greeting() {
        console.log(Greeter.id, " ", this.greet());
    }
}

/**
 * class inheritance
 */

class Shoe {
    type: string;
    price: number;
    isOnSale: boolean;
    constructor(type:string, price:number, isOnSale:boolean) {
        this.type = type;
        this.price = price;
        this.isOnSale = isOnSale;
    }
    displayInfo = function () {
        console.log(this.type, this.price, this.isOnSale);
    }
}

class Boots extends Shoe {
     hasLeatherUpper: boolean;
     constructor(type:string, price:number, isOnSale:boolean, hasLeatherUpper:boolean) {
        super(type, price, isOnSale);
        this.hasLeatherUpper = hasLeatherUpper;
     }
     displayInfo = () => {
        console.log(this.price,this.type, this.isOnSale, this.hasLeatherUpper);
     }
}

/**
 * Implementing interfaces for multiple classes
 */

 interface Shape {
    height?:number,
    width:number,
    length:number,
    volume: () => number,
    area: () => number
}

class Cuboid implements Shape {
    height: number;
    width: number;
    length: number;
    constructor(height:number, width:number, length:number) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
    volume = function () {
        return this.width*this.length*this.height
    }
    area = function {
        return 2*(this.length * this.width + this.width * this.height + this.height * this.length);
    }

}


/**
 * Extending Interface
 */

interface ShoeDetails {
    type:string;
    price:number;
    isOnSale:boolean;
}
interface BootDetails extends ShoeDetails {
    hasLeatherUpper:boolean;
    isWaterProof:boolean;
    tread:string;
}

class Shoes {
    type:string;
    price:number;
    isOnSale:boolean;
    constructor(data: ShoeDetails) {
        this.type = data.type;
        this.price = data.price;
        this.isOnSale = data.isOnSale;
    }
}

class Boot extends Shoes {
    hasLeatherUpper:boolean;
    isWaterProof:boolean;
    tread:string;
    constructor(data: BootDetails) {
        super(data);
        this.hasLeatherUpper = data.hasLeatherUpper;
        this.isWaterProof = data.isWaterProof;
        this.tread = data.tread;
    }
}

/**
 * Making internal modules externally available
 */
module shapesModule {
    interface Shapes {
        height?:number,
        width:number,
        length:number,
        volume: () => number,
        area: () => number
    }
    export class Cuboids implements Shapes {
        height: number;
        width: number;
        length: number;
        constructor(height:number, width:number, length:number) {
            this.height = height;
            this.width = width;
            this.length = length;
        }
        volume = function () {
            return this.width*this.length*this.height
        }
        area = function {
            return 2*(this.length * this.width + this.width * this.height + this.height * this.length);
        }
    }
}

var myCuboid  =  new shapesModule.Cuboids(10, 12, 11);

/**
 * Nested Modules
 */

module sModule {
    export class A {
        x:number;
        constructor(x:number) {
            this.x = x;
        }
    }
    export module displayUtility {
        interface PropDisplay {
            show: (displayMode:number) => void;
        }
        export class PropDisplayer implements PropDisplay {
            show(displayMode:number){
                console.log(displayMode);
            }
            
        }
    }
}
var testObj = new sModule.A(1);
new sModule.displayUtility.PropDisplayer().show(2);