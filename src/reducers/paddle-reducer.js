import {setSpeed, move} from '../model/paddle';
import {Map} from 'immutable';
const INITIAL_STATE = Map({
    speed: 0,
    position: 300
});
export function paddle(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'START':
            return INITIAL_STATE;
        case 'SPEED':
            return setSpeed(state, action.value);
        case 'NEXT':
            return move(state);
        default:
            return state;
    }
}
