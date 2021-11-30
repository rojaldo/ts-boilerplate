class Sprite {
    name = "";
    x = 0;
    y = 0;

    constructor(name: string) {
        this.name = name;
    }
}

// Mixin
type Constructor = new (...args: any[]) => {};

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1;

        setScale(scale: number) {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    };
}

function MyLog<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {

        writeLog() {
            console.log('log ' + Base.name);
            
        }

    };
}


const EightBitSprite = Scale(Sprite);
const EightBitSpriteWithLog = MyLog(EightBitSprite);
 
const flappySprite = new EightBitSpriteWithLog("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
flappySprite.writeLog();