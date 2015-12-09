import {setSpeed, move} from '../model/paddle';
import {Map} from 'immutable';
const INITIAL_STATE = Map({
  paddle: Map({
    speed: 0,
    position: 300
  })
});

export function paddle(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'START':
            return state.set('paddle', INITIAL_STATE);
        case 'SPEED':
            return state.set('paddle', setSpeed(state.get('paddle'), action.value));
        case 'NEXT':
            return state.set('paddle', move(state.get('paddle')));
        default:
            return state;
    }
}
