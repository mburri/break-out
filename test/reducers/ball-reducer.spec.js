import {Map} from 'immutable';
import {expect} from 'chai';

import {ball} from '../../src/reducers/ball-reducer';

describe('ball reducer', () => {
    it('should set initial state', () => {
        const nextState = ball(undefined, {});
        expect(nextState).to.equal(Map({
            dx: 2,
            dy: 2,
            posx: 320,
            posy: 100
        }));
    });

    it('should bounce the ball horizontally', () => {
        const state = Map({
            dx: 2,
            dy: 2,
            posx: 320,
            posy: 100
        });
        const nextState = ball(state, {type: 'BOUNCE_X'});
        expect(nextState).to.equal(Map({
            dx: -2,
            dy: 2,
            posx: 320,
            posy: 100
        }));
    });

    it('should bounce the ball vertically', () => {
        const state = Map({
            dx: 2,
            dy: 2,
            posx: 320,
            posy: 100
        });
        const nextState = ball(state, {type: 'BOUNCE_Y'});
        expect(nextState).to.equal(Map({
            dx: 2,
            dy: -2,
            posx: 320,
            posy: 100
        }));
    });

    it('should move the ball', () => {
        const state = Map({
            dx: -2,
            dy: 2,
            posx: 320,
            posy: 100
        });
        const payload = {
            paddle: Map({
            position: 320,
            speed: 5
        })};
        const nextState = ball(state, {type: 'NEXT', payload: payload});
        expect(nextState).to.equal(Map({
            dx: -2,
            dy: 2,
            posx: 318,
            posy: 102
        }));
    });
});
