import makeStore from './store';
import {START, GAME, PAUSE, GAME_OVER} from './scenes';

const store = makeStore();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function render(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(store.getState().get('scene')) {
        case START:
            startScene(ctx);
            break;
        case GAME:
            gameScene(ctx);
            break;
        case PAUSE:
            pauseScene(ctx);
            break;
        case GAME_OVER:
            gameOverScene(ctx);
    }
}

function startScene(ctx) {
    ctx.fillStyle = "#0000ff"
    ctx.font = "bold 32px Arial";
    ctx.fillText("Breakout!", 100, 100);
    ctx.fillStyle = "#0099ff";
    ctx.font = "bold 24px Arial";
    ctx.fillText("space - begin game", 100, 130);
    ctx.fillText("p - pause", 100, 160);
    ctx.fillText("r - resume game", 100, 190);
    ctx.fillText("esc - return to start screen", 100, 220);
}

function gameScene(ctx) {
    ctx.fillStyle = "darkgrey";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Game will run in this scene", 100, 100);
}

function pauseScene(ctx) {
    ctx.fillStyle = "darkgrey";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Game is Paused", 100, 100);
}

function gameOverScene(ctx) {
    ctx.fillStyle = "red";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Game Over", 100, 100);
}

store.subscribe(() => {
    render(ctx);
});
render(ctx);

document.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
        case 32: // space
            store.dispatch({type: 'START_GAME'});
            break;
        case 80: // p
            store.dispatch({type: 'PAUSE_GAME'});
            break;
        case 82: /// r
            store.dispatch({type: 'RESUME_GAME'});
            break;
        case 27: // esc
            store.dispatch({type: 'START'});
            break;
    }
});
