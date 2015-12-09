import {Map, toJS} from 'immutable';

export function bounceY(state) {
    return state.setIn(['ball', 'dy'], -1 * state.getIn(['ball', 'dy']));
}

export function bounceX(state) {
    return state.setIn(['ball', 'dx'], -1 * state.getIn(['ball','dx']));
}

export function move(state, payload) {
    const ball = state.get('ball').toJS();
    const paddle = payload.paddle.get('paddle').toJS();
    const newDeltaY = bounceOfTopOrPaddle(ball, paddle);

    if (newDeltaY === 0) {
        return Map({}); // GAME OVER
    }

    const newDeltaX = inverseDeltaOnCollision(ball.posx, ball.dx, 640, 0);
    return state.setIn(['ball', 'posx'], state.getIn(['ball', 'posx']) + newDeltaX)
                .setIn(['ball', 'posy'], state.getIn(['ball', 'posy']) + newDeltaY)
                .setIn(['ball', 'dx'], newDeltaX)
                .setIn(['ball', 'dy'], newDeltaY);
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
