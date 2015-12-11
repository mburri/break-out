import {Map, toJS} from 'immutable';
import {GAME, GAME_OVER} from '../const/scene-constants.js';
import {isGameOver} from './game';

export function move(state) {
    const ball = state.get('ball').toJS();
    const paddle = state.get('paddle').toJS();
    const newDeltaY = bounceOfTopOrPaddle(ball, paddle);
    const newDeltaX = inverseDeltaOnCollision(ball.posx, ball.dx, 640, 0);

    if(isGameOver(state)) {
      return state.set('scene', GAME_OVER);
    }

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
        }
    }
    return ball.dy;
}
