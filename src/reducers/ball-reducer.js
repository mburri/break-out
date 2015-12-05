import {Map} from 'immutable';
import * as Ball from '../model/ball';

const INITIAL_STATE = Map({
    dx: 2,
    dy: 2,
    posx: 320,
    posy: 100
});

export function ball(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'BOUNCE_X':
            return Ball.bounceX(state);
        case 'BOUNCE_Y':
            return Ball.bounceY(state);
        case 'NEXT':
            return Ball.move(state);
        default:
            return state;
    }
}
