export function isGameOver(state) {
    const {ball, board} = state.toJS();
    return ball.posy >= board.heigth;
}
