import {Map, fromJS, toJs} from 'immutable';
import {expect} from 'chai';

import {START, GAME} from '../src/model/scenes';
import makeStore from '../src/store';

describe('testing the store', () => {
    // it('creates the combined store with the initial state', () => {
    //     const store = makeStore();
    //
    //     expect(store.getState()).to.deep.equal({
    //         scene: START,
    //         paddle: Map({
    //             speed: 0,
    //             position: 300
    //         }),
    //         ball: Map({
    //             dx: 2,
    //             dy: 2,
    //             posx: 320,
    //             posy: 100
    //         })
    //     });
    // });
});
