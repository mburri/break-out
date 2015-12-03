import {setSpeed, move} from '../paddle';

export function paddle(state, action) {
    switch(action.type) {
        case 'SPEED':
            return state.update('paddle', paddleState => setSpeed(paddleState, action.value));
        case 'MOVE':
            return state.update('paddle', paddleState => move(paddleState));
        default:
            return state;
    }
}
