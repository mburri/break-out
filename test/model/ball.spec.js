import {Map} from 'immutable';
import {expect} from 'chai';
import {bounceY, bounceX, move} from '../../src/model/ball';

describe('ball', () => {
    it('should bounce in y direction', () => {
        const state = Map({
            dx: 2,
            dy: 2
        });

        const nextState = bounceY(state);
        expect(nextState).to.equal(Map({
            dx: 2,
            dy: -2
        }));
    });

    it('should bounce in x direction', () => {
        const state = Map({
            dx: 2,
            dy: 2
        });

        const nextState = bounceX(state);
        expect(nextState).to.equal(Map({
            dx: -2,
            dy: 2
        }));
    });

    it('should move the ball to new position', () => {
        const state = Map({
            dx: 2,
            dy: -2,
            posx: 100,
            posy: 100
        });
        const nextState = move(state);
        expect(nextState).to.equal(Map({
            dx: 2,
            dy: -2,
            posx: 102,
            posy: 98
        }));
    });
});
