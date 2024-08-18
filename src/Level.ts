//core
import Entity from "./Entity"

export default class Level {
    width: number
    height: number

    content: Entity[][]

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.content = []
    }
}