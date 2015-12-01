import {expect} from 'chai';
import {Map} from 'immutable';

import {start, beginGame, gameOver, pause, resume, START, GAME, PAUSE, GAME_OVER} from '../src/scenes.js';

describe('scenes', () => {
    it('should create start-scene on empty state', () => {
        const state = Map();
        const nextState = start(state);
        expect(nextState).to.equal(Map({
            scene: START
        }));
    });

    it('should change to start-scene', () => {
        const state = Map({
            scene: 'ANY'
        });
        const nextState = start(state);
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

    it('should change to game scene (from start scene)', () => {
        const state = Map({
            scene: START
        });
        const nextState = beginGame(state);
        expect(nextState).to.equal(Map({
            scene: GAME
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

    it('should only pause when game is running', () => {
        const state = Map({
            scene: START
        });
        const nextState = pause(state);
        expect(nextState).to.equal(state);
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

    it('should only resume on when paused', () => {
        const state = Map({
            scene: START
        });
        const nextState = resume(state);
        expect(nextState).to.equal(state);
    });
});
