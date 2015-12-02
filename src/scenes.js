export const START = "START";
export const GAME = "GAME";
export const GAME_OVER = "GAME_OVER";
export const PAUSE = "PAUSE";

function setScene(state, scene) {
    return state.set('scene', scene);
}

export function start(state) {
    return setScene(state, START);
}

export function gameOver(state) {
    if (state.get('scene') === GAME) {
        return setScene(state, GAME_OVER);
    }
    return state;
}

export function beginGame(state) {
    return setScene(state, GAME);
}

export function pause(state) {
    if(state.get('scene') === GAME) {
        return setScene(state, PAUSE);
    }
    return state;
}

export function resume(state) {
    if (state.get('scene') === PAUSE) {
        return setScene(state, GAME);
    }
    return state;
}
