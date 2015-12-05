import {Map, toJS} from 'immutable';

export function bounceY(state) {
    return state.set('dy', -1 * state.get('dy'));
}

export function bounceX(state) {
    return state.set('dx', -1 * state.get('dx'));
}

export function move(state, payload) {
    const ball = state.toJS();
    const paddle = payload.paddle.toJS();
    const newDeltaY = bounceOfTopOrPaddle(ball, paddle);

    if (newDeltaY === 0) {
        return Map({}); // GAME OVER
    }

    const newDeltaX = inverseDeltaOnCollision(ball.posx, ball.dx, 640, 0);
    return state.set('posx', state.get('posx') + newDeltaX)
                .set('posy', state.get('posy') + newDeltaY)
                .set('dx', newDeltaX)
                .set('dy', newDeltaY);
}

function inverseDeltaOnCollision(pos, delta, upper, lower) {
    if(pos + delta > upper || pos + delta < 0) {
        return -delta;
    }
    return delta;
}

function bounceOfTopOrPaddle(ball, paddle) {
    if(ball.posy + ball.dy < 0) {
        return -ball.dy;
    } else if(ball.posy + ball.dy > 470) {
        if(ball.posx > paddle.position && ball.posx < paddle.position + 75) {
            return -ball.dy;
        } else {
            return 0;
        }
    }
    return ball.dy;

}
