import { board, player } from './data.js';

export function render(){

    // Player
    let divPlayer = document.createElement('div')
    divPlayer.id = player.id
    divPlayer.style.backgroundColor = player.color
    divPlayer.style.width = `${player.size.width}px`
    divPlayer.style.height = `${player.size.height}px`
    divPlayer.style.position = 'absolute'

    // Board
    let divBoard = document.createElement('div')
    divBoard.id = board.id

    divBoard.style.backgroundColor = board.color;
    divBoard.style.width =`${board.size.width}px`
    divBoard.style.height = `${board.size.height}px`
    divBoard.style.margin = '50px auto';
    divBoard.style.position = 'relative';

    // HTML injection
    divBoard.appendChild(divPlayer)
    document.body.appendChild(divBoard)
}