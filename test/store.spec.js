import {Map} from 'immutable';
import {expect} from 'chai';

import {START, GAME} from '../src/model/scenes';
import makeStore from '../src/store';

describe('testing the store', () => {
    it('creates the store with the scene-reducer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(START);

        store.dispatch({
            type: 'START_GAME'
        });

        expect(store.getState()).to.equal(GAME);
    });
});
