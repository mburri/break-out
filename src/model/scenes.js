export const START = "START";
export const GAME = "GAME";
export const GAME_OVER = "GAME_OVER";
export const PAUSE = "PAUSE";

export function start(state) {
    return state.set('scene', START);
}
export function gameOver(state) {
    return state.set('scene', GAME_OVER);
}

export function begin(state) {
    return state.set('scene', GAME);
}

export function pause(state) {
    return state.set('scene', PAUSE);
}

export function resume(state) {
    return state.set('scene', GAME);
}
