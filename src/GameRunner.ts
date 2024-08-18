import { Front } from "./Front"
import { GameState } from "./GameState";

class GameRunner implements GameState {
    private front

    constructor(front: Front) {
        this.front = front
    }

    // run runs the game loop. 
    // Read user input, calculate new state, draw screen every frame.
    //FIXME: for now we draw after every user's input
    public run() {
        this.front.draw(this);

        // gameloop
        document.addEventListener('keypress', () => {
            console.log('keypress!')
            this.front.draw(this);
        })
    }
}

export default GameRunner