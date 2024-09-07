export let player = {
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

export let board = {
    id: 'board',
    color: 'darkgrey',
    size:{
        width: 500,
        height: 500
    },
    music: {
        id: 'sound',
        path: '../assets/sounds/sound.mp3',
        isActive: false
    }
}