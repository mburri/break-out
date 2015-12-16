export const begin = () => {
    return {type: 'BEGIN_GAME'};
};

export const pause = () => {
    return {type: 'PAUSE_GAME'};
};

export const resume = () => {
    return {type: 'RESUME_GAME'};
};

export const start = () => {
    return {type: 'START_GAME'};
};

export const setSpeed = (speed) => {
    return {
        type: 'SPEED',
        value: speed
    };
};
