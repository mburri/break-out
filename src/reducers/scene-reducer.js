import {start, beginGame, pause, resume, gameOver, START} from '../../src/scenes.js';
import {Map} from 'immutable';

const INITIAL_STATE = Map({
    scene: START
});

export function scene(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'START':
            return start(state);
        case 'START_GAME':
            return beginGame(state);
        case 'PAUSE_GAME':
            return pause(state);
        case 'RESUME_GAME':
            return resume(state);
        case 'GAME_OVER':
            return gameOver(state);
        default:
            return state;
    }
}
