export const START = "START";
export const GAME = "GAME";
export const GAME_OVER = "GAME_OVER";

function setScene(state, scene) {
    return state.set('scene', scene);
}

export function startScene(state) {
    return setScene(state, START);
}

export function gameOver(state) {
    if (state.get('scene') === GAME) {
        return setScene(state, GAME_OVER);
    }
    return state;
}
