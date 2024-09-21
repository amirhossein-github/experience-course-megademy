export let player: Player = {
    id: 'player',
    speed: 10,
    color: 'gray',
    coordinate: {
        x: 0,
        y: 0
    },
    size:{
        width: 50,
        height: 50
    }
}

export let board: Board = {
    id: 'board',
    color: 'darkgrey',
    size:{
        width: 500,
        height: 500
    },
    music: {
        object: new Audio('./assets/sounds/sound.mp3'),
        isActive: false
    }
}

export type Board = {
    id: string,
    color: string,
    size:{
        width: number,
        height: number
    },
    music: {
        object: HTMLAudioElement
        isActive: boolean
    }

}

export type Player = {
    id: string,
    speed: number,
    color: string,
    coordinate: {
        x: number,
        y: number
    },
    size:{
        width: number,
        height: number
    }
}