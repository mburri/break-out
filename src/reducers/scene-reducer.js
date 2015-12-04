import {start, begin, pause, resume, gameOver, START} from '../../src/model/scenes.js';

const INITIAL_STATE = START;

export function scene(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'START':
            return start(state);
        case 'START_GAME':
            return begin(state);
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
