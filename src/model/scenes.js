export const START = "START";
export const GAME = "GAME";
export const GAME_OVER = "GAME_OVER";
export const PAUSE = "PAUSE";

export function start(state) {
    return START;
}
export function gameOver(state) {
    return GAME_OVER;
}

export function begin(state) {
    return GAME;
}

export function pause(state) {
    return PAUSE;
}

export function resume(state) {
    return GAME;
}
