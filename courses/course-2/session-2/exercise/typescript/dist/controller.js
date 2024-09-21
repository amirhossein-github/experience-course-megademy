import { Move, Option } from "./methods.js";
import { board, player } from './data.js';
export function keyboard(event) {
    if (event.type === 'keydown') {
        switch (event.code) {
            case 'Digit1':
                Option.changeColor(player, 'red');
                break;
            case 'Digit2':
                Option.changeColor(player, 'green');
                break;
            case 'Digit3':
                Option.changeColor(player, 'blue');
                break;
            case 'ArrowUp':
                Move.up(player);
                break;
            case 'ArrowDown':
                Move.down(player, board);
                break;
            case 'ArrowRight':
                Move.right(player, board);
                break;
            case 'ArrowLeft':
                Move.left(player);
                break;
            case 'Space':
                Option.musicController(board);
                break;
            default:
                console.warn(`Wrong Key: ${event.key}`);
                break;
        }
    }
}
export function mouse(event) {
    if (event.type === 'mouseover') {
        const temp = player.color;
        Option.changeColor(player, 'black');
        player.color = temp;
    }
    if (event.type === 'mouseout') {
        Option.changeColor(player, player.color);
    }
}
