export class Move{
    static up(player, board){
        if (player.coordinate.y > 0){
            player.coordinate.y -= player.speed;
            document.getElementById(player.id).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static down(player, board){
        if (player.coordinate.y < board.size.width - player.size.width){
            player.coordinate.y += player.speed;
            document.getElementById(player.id).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static right(player, board){
        if (player.coordinate.x < board.size.width - player.size.width){
            player.coordinate.x += player.speed;
            document.getElementById(player.id).style.left = `${player.coordinate.x}px`;
            
        }
    }
    
    static left(player, board){
        if (player.coordinate.x > 0){
            player.coordinate.x -= player.speed;
            document.getElementById(player.id).style.left = `${player.coordinate.x}px`;

        }
    }
}

export class Option{

    static changeColor(actor, color){
        actor.color = color
        document.getElementById(actor.id).style.backgroundColor = actor.color;
    }

    static musicController(board){
        if (board.music.isActive){
            board.music.object.pause()
            board.music.isActive = false

        } else {
            board.music.object.play()
            board.music.isActive = true
           
        }

    }
}