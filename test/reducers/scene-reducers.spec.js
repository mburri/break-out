import {expect} from 'chai';
import {Map} from 'immutable';

import {scene} from '../../src/reducers/scene-reducer';
import {START, GAME, PAUSE, GAME_OVER} from '../../src/model/scenes';
describe('scene-reducer', () => {
    it('should change from start scene to game scene', () => {
        const state = START;
        const nextState = scene(state, {type: 'START_GAME'});
        expect(nextState).to.equal(GAME);
    });

    it('should pause the game', () => {
        const state = GAME;
        const nextState = scene(state, {type: 'PAUSE_GAME'});
        expect(nextState).to.equal(PAUSE);
    });

    it('should resume the game', () => {
        const state = PAUSE;
        const nextState = scene(state, {type: 'RESUME_GAME'});
        expect(nextState).to.equal(GAME);
    });

    it('should end the game', () => {
        const state = GAME;
        const nextState = scene(state, {type: 'GAME_OVER'});
        expect(nextState).to.equal(GAME_OVER);
    });

    it('initial state', () => {
        const nextState = scene(undefined, {});
        expect(nextState).to.equal(START);
    });

    it('can be used with reduce', () => {
      const actions = [
        {type: 'START_GAME'},
        {type: 'PAUSE' },
        {type: 'RESUME_GAME'},
        {type: 'GAME_OVER'}
      ];
      const finalState = actions.reduce(scene, Map());

      expect(finalState).to.equal(GAME_OVER);
    });
});