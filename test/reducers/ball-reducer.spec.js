import {Map} from 'immutable';
import {expect} from 'chai';
import {GAME} from '../../src/const/scene-constants';
import {ball} from '../../src/reducers/ball-reducer';

describe('ball reducer', () => {
    it('should set initial state', () => {
        const nextState = ball(undefined, {});
        expect(nextState).to.equal(Map({
            ball: Map({
              dx: 2,
              dy: 2,
              posx: 320,
             posy: 100
           })
        }));
    });

    it('should bounce the ball horizontally', () => {
        const state = Map({
            ball: Map({
              dx: 2,
              dy: 2,
              posx: 320,
              posy: 100
            })
        });
        const nextState = ball(state, {type: 'BOUNCE_X'});
        expect(nextState).to.equal(Map({
            ball: Map({
              dx: -2,
              dy: 2,
              posx: 320,
              posy: 100
            })
        }));
    });

    it('should bounce the ball vertically', () => {
        const state = Map({
            ball: Map({
              dx: 2,
              dy: 2,
              posx: 320,
              posy: 100
            })
        });
        const nextState = ball(state, {type: 'BOUNCE_Y'});
        expect(nextState).to.equal(Map({
          ball: Map({
              dx: 2,
              dy: -2,
              posx: 320,
              posy: 100
            })
        }));
    });

    it('should move the ball', () => {
        const state = Map({
            ball: Map({
                dx: -2,
                dy: 2,
                posx: 320,
                posy: 100
            }),
            paddle: Map({
                position: 320,
                speed: 5
            })
        });
        const nextState = ball(state, {type: 'NEXT'});
        expect(nextState).to.equal(Map({
            ball: Map({
              dx: -2,
              dy: 2,
              posx: 318,
              posy: 102
            }),
            paddle: Map({
                position: 320,
                speed: 5
            }),
            scene: GAME
        }));
    });
});
