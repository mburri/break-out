import {Map} from 'immutable';
import {START} from '../const/scene-constants';
import * as Ball from '../model/ball';
import * as Paddle from '../model/paddle';
import * as Scene from '../model/scenes';

const INITIAL_STATE = Map({
    scene: START,
    ball: Map({
        dx: 2,
        dy: 2,
        posx: 320,
        posy: 100
    }),
    paddle: Map({
      speed: 0,
      position: 300
    })
});

export function reduce(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'START_GAME':
            return INITIAL_STATE;
        case 'BEGIN_GAME':
            return Scene.begin(state);
        case 'PAUSE_GAME':
            return Scene.pause(state);
        case 'RESUME_GAME':
            return Scene.resume(state);
        case 'UPDATE':
            return Ball.move(state)
                       .update('paddle', paddleState => Paddle.move(paddleState));
        case 'SPEED':
            return state.update(
                'paddle', paddleState =>
                    Paddle.setSpeed(paddleState, action.value));
        default:
            return state;

    }
}
