import {expect} from 'chai';
import {Map} from 'immutable';

import {setScene, startScene, gameOver, START, GAME, GAME_OVER} from '../src/scenes.js';

describe('scenes', () => {
    it('should create start-scene on empty state', () => {
        const state = Map();
        const nextState = startScene(state);
        expect(nextState).to.equal(Map({
            scene: START
        }));
    });
    it('should change to start-scene', () => {
        const state = Map({
            scene: 'ANY'
        });
        const nextState = startScene(state);
        expect(nextState).to.equal(Map({
            scene: START
        }));
    });

    it('should change to game-over scene (from game scene)', () => {
        const state = Map({
            scene: GAME
        });
        const nextState = gameOver(state);
        expect(nextState).to.equal(Map({
            scene: GAME_OVER
        }));
    });

    it('should not change to game-over scene (if not in game scene)', () => {
        const state = Map({
            scene: START
        });
        const nextState = gameOver(state);
        expect(nextState).to.equal(state);
    });
});
