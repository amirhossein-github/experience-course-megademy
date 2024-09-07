import { Move, Option } from "./methods.js"
import { board, player } from './data.js';

export function controller(controller){

    // Keyboard Controller
    if (controller.type === 'keydown') {
        switch (controller.code) {

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
                Move.up(player, board)
                break;

            case 'ArrowDown':
                Move.down(player, board)
                break

            case 'ArrowRight':
                Move.right(player, board)
                break;

            case 'ArrowLeft':
                Move.left(player, board)
                break;
                

            // Space Key
            case 'Space':
                Option.musicController(board)
                break


            // Etc
            default:
                console.warn(`Wrong Key: ${controller.key}`)
                break;
        }

    }

    // Mouse:over Controller
    if (controller.target.id === player.id && controller.type === 'mouseover') {
        const temp = player.color
        Option.changeColor(player, 'black')
        player.color = temp
        
    }

    // Mouse:out Controller
    if (controller.target.id === player.id && controller.type === 'mouseout') {
        Option.changeColor(player, player.color)
        
    }
}
