import {expect} from 'chai';

import {start, begin, gameOver, pause, resume, START, GAME, PAUSE, GAME_OVER} from '../../src/model/scenes.js';

describe('scenes', () => {
    it('should create start-scene for undefined state', () => {
        const nextState = start(undefined);
        expect(nextState).to.equal(START);
    });

    it('should change to game scene from start scene', () => {
        const nextState = begin(START);
        expect(nextState).to.equal(GAME);
    });

    it('should finish game', () => {
        const nextState = gameOver(GAME);
        expect(nextState).to.equal(GAME_OVER);
    });

    it('should pause the game', () => {
        const nextState = pause(GAME);
        expect(nextState).to.equal(PAUSE);
    });

    it('should resume the game', () => {
        const nextState = resume(PAUSE);
        expect(nextState).to.equal(GAME);
    });
});
