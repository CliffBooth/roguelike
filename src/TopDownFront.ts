import { Front } from "./Front";
import GameRunner from "./GameRunner";

class TopDownFront implements Front {
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    draw(game: GameRunner) {
        const ctx = this.canvas.getContext("2d")!
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = Math.random() > .5 ? 'black' : 'red'
        console.log('sytle = ', ctx.fillStyle)
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default TopDownFront