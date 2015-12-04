export function bounceY(state) {
    return state.set('dy', -1 * state.get('dy'));
}

export function bounceX(state) {
    return state.set('dx', -1 * state.get('dx'));
}

export function move(state) {
    return state.set('posx', state.get('posx') + state.get('dx'))
                .set('posy', state.get('posy') + state.get('dy'))
}
