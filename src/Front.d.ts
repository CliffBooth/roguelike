import { GameState } from "./GameState"

// Implementation of this interface should be passed into the global Game() object
export interface Front {
    draw(gameState: GameState): void
}

