import {setSpeed, move} from '../model/paddle';

export function paddle(state, action) {
    switch(action.type) {
        case 'SPEED':
            return setSpeed(state, action.value);
        case 'MOVE':
            return move(state);
        default:
            return state;
    }
}
