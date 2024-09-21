import * as controller from "./controller.js";
import { board, player } from './data.js';
export function render() {
    let divPlayer = document.createElement('div');
    divPlayer.id = player.id;
    divPlayer.style.backgroundColor = player.color;
    divPlayer.style.width = `${player.size.width}px`;
    divPlayer.style.height = `${player.size.height}px`;
    divPlayer.style.position = 'absolute';
    divPlayer.addEventListener('mouseover', controller.mouse);
    divPlayer.addEventListener('mouseout', controller.mouse);
    let divBoard = document.createElement('div');
    divBoard.id = board.id;
    divBoard.style.backgroundColor = board.color;
    divBoard.style.width = `${board.size.width}px`;
    divBoard.style.height = `${board.size.height}px`;
    divBoard.style.margin = '50px auto';
    divBoard.style.position = 'relative';
    divBoard.appendChild(divPlayer);
    document.body.appendChild(divBoard);
    document.body.addEventListener('keydown', controller.keyboard);
}
