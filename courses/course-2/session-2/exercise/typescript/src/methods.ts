import * as data from './data.js';


export class Move{
    static up(player: data.Player): void{
        if (player.coordinate.y > 0){
            player.coordinate.y -= player.speed;
            (document.getElementById(player.id) as  HTMLFormElement).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static down(player: data.Player, board: data.Board): void{
        if (player.coordinate.y < board.size.width - player.size.width){
            player.coordinate.y += player.speed;
           (document.getElementById(player.id) as  HTMLFormElement).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static right(player: data.Player, board: data.Board): void{
        if (player.coordinate.x < board.size.width - player.size.width){
            player.coordinate.x += player.speed;
           (document.getElementById(player.id) as  HTMLFormElement).style.left = `${player.coordinate.x}px`;
            
        }
    }
    
    static left(player: data.Player): void{
        if (player.coordinate.x > 0){
            player.coordinate.x -= player.speed;
           (document.getElementById(player.id) as  HTMLFormElement).style.left = `${player.coordinate.x}px`;

        }
    }
}

export class Option{

    static changeColor(actor: data.Player, color: string): void{
        actor.color = color;
        (document.getElementById(actor.id) as  HTMLFormElement).style.backgroundColor = actor.color;
    }

    static musicController(board: data.Board){
        if (board.music.isActive){
            board.music.object.pause()
            board.music.isActive = false

        } else {
            board.music.object.play()
            board.music.isActive = true
           
        }

    }
}