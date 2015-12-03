import {Map} from 'immutable';
import {expect} from 'chai';

import {setSpeed, move} from '../src/paddle';

describe('paddle', () => {
    it('should set paddle speed given value', () => {
        const state = Map({
            speed: 0
        });
        var nextState = setSpeed(state, 5);
        expect(nextState).to.equal(Map({
            speed: 5
        }));
    });

    it('should move paddle', () => {
        const state = Map({
            speed: 5,
            position: 100
        });
        const nextState = move(state);
        expect(nextState).to.equal(Map({
            speed: 5,
            position: 105
        }));
    });
});
