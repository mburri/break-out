import {toJS} from 'immutable';

export function bounceY(state) {
    return state.set('dy', -1 * state.get('dy'));
}

export function bounceX(state) {
    return state.set('dx', -1 * state.get('dx'));
}

export function move(state, previousState) {
    let ball = state.toJS();
    let newDeltaX = inverseDeltaOnCollision(ball.posx, ball.dx, 640, 0);
    let newDeltaY = inverseDeltaOnCollision(ball.posy, ball.dy, 480, 0);

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
