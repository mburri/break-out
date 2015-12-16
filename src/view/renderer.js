import {START, GAME, PAUSE, GAME_OVER} from './../model/scenes';

export default function render(state, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(state.get('scene')) {
        case START:
            startScene(ctx);
            break;
        case GAME:
            gameScene(state, ctx);
            break;
        case PAUSE:
            pauseScene(state, ctx);
            break;
        case GAME_OVER:
            gameOverScene(state, ctx);
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

function gameScene(state, ctx) {
    drawPaddle(state, ctx);
    drawBall(state, ctx);
    drawBricks(state, ctx);
}

function drawPaddle(state, ctx) {
    const paddle = state.get('paddle').toJS();
    ctx.fillStyle = "#0095DD";
    ctx.beginPath();
    ctx.rect(paddle.position, canvas.height-10, paddle.width, 10);
    ctx.fill();
    ctx.closePath();
}

function drawBall(state, ctx) {
    let ball = state.get('ball').toJS();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(ball.posx, ball.posy, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function drawBricks(state, ctx) {
  const bricks = state.getIn(['board', 'bricks']).toJS();
  bricks.forEach( brick => {
    if(brick.hitsLeft > 0) {
        ctx.fillStyle = "#000000";
        ctx.rect(brick.posx, brick.posy, brick.width, brick.heigth);
        ctx.fill();
        ctx.closePath();
    }
  });
}

function pauseScene(state, ctx) {
    ctx.fillStyle = "darkgrey";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Game is Paused", 100, 100);
    gameScene(state, ctx);
}

function gameOverScene(state, ctx) {
    ctx.fillStyle = "red";
    ctx.font = "bold 32px Arial";
    ctx.fillText("Game Over", 100, 100);
    gameScene(state, ctx);
}
