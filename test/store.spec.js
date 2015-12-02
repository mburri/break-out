import {Map} from 'immutable';
import {expect} from 'chai';

import {START, GAME} from '../src/scenes';
import makeStore from '../src/store';

describe('testing the store', () => {
    it('creates the store with the scene-reducer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map({
            scene: START
        }));

        store.dispatch({
            type: 'START_GAME'
        });

        expect(store.getState()).to.equal(Map({
            scene: GAME
        }));
    });
});
