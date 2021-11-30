// Tetris piece class
class TetrisPiece {
    rotation = 0;
    shape: number[][] = [[], [], [], []];
    color = '#0095DD';
    constructor(public type: number, public x:  number, public y: number) {
    }
    // Rotate the piece
    rotate() {
        this.rotation++;
        if (this.rotation == 4)
            this.rotation = 0;
    }
    // Move the piece left
    moveLeft() {
        this.x--;
    }
    // Move the piece right
    moveRight() {
        this.x++;
    }
    // Move the piece down
    moveDown() {
        this.y++;
    }
    draw(context) {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                if (this.shape[i][j] == 1) {
                    context.fillStyle = this.color;
                    context.fillRect(this.x + j, this.y + i, 1, 1);
                }
            }
        }
    }
}

class TetrisPieceBuilder {
    piece: TetrisPiece;
    constructor(public type: number) {
        this.piece = new TetrisPiece(type, 0, 0);
    }
    // Set the color of the piece
    setColor(color: string) {
        this.piece.color = color;
    }
    // Set the shape of the piece
    setShape(shape: number[][]) {
        this.piece.shape = shape;
    }
    // Get the piece
    getPiece() {
        return this.piece;
    }
}

const tb = new TetrisPieceBuilder(0);
tb.setColor('#0095DD');
tb.setShape([
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0]]);
const piece = tb.getPiece();