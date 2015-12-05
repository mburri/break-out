export function setSpeed(paddleState, newSpeed) {
    return paddleState.set('speed', newSpeed);
}

export function move(paddleState) {
    let speed = paddleState.get('speed');
    const currentPosition = paddleState.get('position');
    if (speed + currentPosition <= 0 || speed + currentPosition + 75 >= 640) {
        speed = 0;
    }
    return paddleState.set('position', currentPosition + speed)
                      .set('speed', speed);
}
