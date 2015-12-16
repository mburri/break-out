import makeStore from './store';
import {START, GAME, PAUSE, GAME_OVER} from './model/scenes';
import {toJS} from 'immutable';
import * as KEYS from './const/key-codes';

const store = makeStore();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var stateView = document.getElementById('state');

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
    ctx.fillStyle = "#0000ff";
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
    drawPaddle(ctx);
    drawBall(ctx);
    drawBricks(ctx);
}

function drawPaddle(ctx) {
    const paddle = store.getState().get('paddle').toJS();
    ctx.fillStyle = "#0095DD";
    ctx.beginPath();
    ctx.rect(paddle.position, canvas.height-10, paddle.width, 10);
    ctx.fill();
    ctx.closePath();
}

function drawBall(ctx) {
    let ball = store.getState().get('ball').toJS();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(ball.posx, ball.posy, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function drawBricks(ctx) {
  const bricks = store.getState().getIn(['board', 'bricks']).toJS();
  bricks.forEach( brick => {
    if(brick.hitsLeft > 0) {
        ctx.fillStyle = "#000000";
        ctx.rect(brick.posx, brick.posy, brick.width, brick.heigth);
        ctx.fill();
        ctx.closePath();
    }
  });
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

function step() {
    if(store.getState().get('scene') === GAME) {
        store.dispatch({type: 'UPDATE'});
    }
    window.requestAnimationFrame(step);
}

const showState = (element) => {
    element.innerHTML = JSON.stringify(store.getState().toJS(), null, 4);
};

store.subscribe(() => {
    render(ctx);
    showState(stateView);
});
render(ctx);
showState(stateView);

window.requestAnimationFrame(step);

document.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
        case KEYS.SPACE:
            store.dispatch({type: 'BEGIN_GAME'});
            break;
        case KEYS.P:
            store.dispatch({type: 'PAUSE_GAME'});
            break;
        case KEYS.R:
            store.dispatch({type: 'RESUME_GAME'});
            break;
        case KEYS.ESC:
            store.dispatch({type: 'START_GAME'});
            break;
        case KEYS.LEFT:
            store.dispatch({type: 'SPEED', value: -5});
            break;
        case KEYS.RIGHT:
            store.dispatch({type: 'SPEED', value: 5});
            break;
    }
});
