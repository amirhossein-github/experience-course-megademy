import { Move, Option } from "./methods"
import { board, player } from './data.js';

export function keyboard(event: KeyboardEvent): void{

    // Keyboard Controller
    if (event.type === 'keydown') {
        switch (event.code) {

            // Digit Keys
            case 'Digit1':
                Option.changeColor(player, 'red')
                break;
    
            case 'Digit2':
                Option.changeColor(player, 'green')
                break;
    
            case 'Digit3':
                Option.changeColor(player, 'blue')
                break;


            // Arrow Keys
            case 'ArrowUp':
                Move.up(player)
                break;

            case 'ArrowDown':
                Move.down(player, board)
                break

            case 'ArrowRight':
                Move.right(player, board)
                break;

            case 'ArrowLeft':
                Move.left(player)
                break;
                

            // Space Key
            case 'Space':
                Option.musicController(board)
                break


            // Etc
            default:
                console.warn(`Wrong Key: ${event.key}`)
                break;
        }

    }
}

export function mouse(event: MouseEvent){
    // Mouse:over Controller
    if (event.type === 'mouseover') {
        const temp = player.color
        Option.changeColor(player, 'black')
        player.color = temp
        
    }

    // Mouse:out Controller
    if (event.type === 'mouseout') {
        Option.changeColor(player, player.color)
        
    }
}