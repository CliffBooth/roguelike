import GameRunner from "./GameRunner"
import TopDownFront from "./TopDownFront"

console.log("starting")

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = 500
canvas.height = 500

/*
sort of like dependancy injection
*/
const front = new TopDownFront(canvas)
const game = new GameRunner(front)

game.run()
