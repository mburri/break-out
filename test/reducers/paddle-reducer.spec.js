import {Map} from 'immutable';
import {expect} from 'chai';

import {paddle} from '../../src/reducers/paddle-reducer';

describe('paddle reducer', () => {
    it('should set new paddle speed', () => {
        const state = Map({
            scene: 'not important',
            paddle: Map({
                speed: 0
            })
        });
        const nextState = paddle(state, {type: 'SPEED', value: -5});
        expect(nextState).to.equal(Map({
            scene: 'not important',
            paddle: Map({
                speed: -5
            })
        }));
    });

    it('should move the paddle', () => {
        const state = Map({
            scene: 'not important',
            paddle: Map({
                speed: -10,
                position: 100
            })
        });
        const nextState = paddle(state, {type: 'MOVE'});
        expect(nextState).to.equal(Map({
            scene: 'not important',
            paddle: Map({
                speed: -10,
                position: 90
            })
        }));
    });
});
