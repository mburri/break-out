import {toJS} from 'immutable';

export function bounceY(state) {
    return state.set('dy', -1 * state.get('dy'));
}

export function bounceX(state) {
    return state.set('dx', -1 * state.get('dx'));
}

export function move(state, previousState) {
    let ball = state.toJS();
    let next_dy = ball.dy;
    let next_dx = ball.dx;
    if(ball.posy + ball.dy > 480 || ball.posy + ball.dy < 0) {
        next_dy = -ball.dy;
    }

    if(ball.posx + ball.dx > 640 || ball.posx + ball.dx < 0) {
        next_dx = -ball.dx;
    }

    return state.set('posx', state.get('posx') + next_dx)
                .set('posy', state.get('posy') + next_dy)
                .set('dy', next_dy)
                .set('dx', next_dx);
}
