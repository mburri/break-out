import {expect} from 'chai';
import {Map} from 'immutable';

import {scene} from '../../src/reducers/scene-reducer';
import {START, GAME, PAUSE, GAME_OVER} from '../../src/scenes';
describe('scene-reducer', () => {
    it('should change from start scene to game scene', () => {
        const state = Map({
            scene: START
        });
        const nextState = scene(state, {type: 'START_GAME'});
        expect(nextState).to.equal(Map({
            scene: GAME
        }));
    });

    it('should pause the game', () => {
        const state = Map({
            scene: GAME
        });
        const nextState = scene(state, {type: 'PAUSE_GAME'});
        expect(nextState).to.equal(Map({
            scene: PAUSE
        }));
    });

    it('should resume the game', () => {
        const state = Map({
            scene: PAUSE
        });
        const nextState = scene(state, {type: 'RESUME_GAME'});
        expect(nextState).to.equal(Map({
            scene: GAME
        }));
    });

    it('should end the game', () => {
        const state = Map({
            scene: GAME
        });
        const nextState = scene(state, {type: 'GAME_OVER'});
        expect(nextState).to.equal(Map({
            scene: GAME_OVER
        }));
    });

    it('initial state', () => {
        const nextState = scene(undefined, {type: 'RESUME_GAME'})
        expect(nextState).to.equal(Map({
            scene: START
        }));
    });
});
