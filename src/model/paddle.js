export function setSpeed(paddleState, newSpeed) {
    return paddleState.set('speed', newSpeed);
}

export function move(paddleState) {
    const speed = paddleState.get('speed');
    const currentPosition = paddleState.get('position');
    return paddleState.set('position', currentPosition + speed);
}
