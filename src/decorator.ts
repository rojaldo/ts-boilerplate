function IBlock<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        type = "IBlock";
        shape = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ];
        indexRotation = 0;
        rotations = [
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0]
            ]
        ]
    
        rotate() {
            this.indexRotation = (this.indexRotation + 1) % this.rotations.length;
            this.shape = this.rotations[this.indexRotation];
        }
    }
}
@IBlock
class TetrisPiece {
    x = 0;
    y = 0;
    type = '';
    shape = [];
    constructor() {

    }

    rotate() {
        return "TetrisPiece rotate";
    }

    getShape() {
        return this.shape;
    }
    
}
let tetrisPiece = new TetrisPiece();
console.log(tetrisPiece.getShape());
tetrisPiece.rotate();
console.log(tetrisPiece.getShape());
