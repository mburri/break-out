import {Map} from 'immutable';
import {expect} from 'chai';

import {start, begin, gameOver, pause, resume, START, GAME, PAUSE, GAME_OVER} from '../../src/model/scenes.js';

describe('scenes', () => {
    it('should change to game scene from start scene', () => {
        const state = Map({
          scene: START
        });
        const nextState = begin(state);
        expect(nextState).to.equal(Map({
          scene: GAME
        }));
    });

    it('should finish game', () => {
        const state = Map({
          scene: GAME
        });
        const nextState = gameOver(state);
        expect(nextState).to.equal(Map({
          scene: GAME_OVER
        }));
    });

    it('should pause the game', () => {
        const state = Map({
          scene: GAME
        });

        const nextState = pause(state);
        expect(nextState).to.equal(Map({
          scene: PAUSE
        }));
    });

    it('should resume the game', () => {
        const state = Map({
          scene: PAUSE
        });
        const nextState = resume(state);
        expect(nextState).to.equal(Map({
          scene: GAME
        }));
    });
});
