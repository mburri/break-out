import {Map} from 'immutable';
import {expect} from 'chai';
import {bounceY, bounceX, move} from '../../src/model/ball';
import {GAME} from '../../src/const/scene-constants';
describe('ball', () => {
    it('should move the ball to new position', () => {
        const state = Map({
            scene: GAME,
            board: Map({
              heigth: 470,
              width: 640,
            }),
            ball: Map({
                dx: 2,
                dy: -2,
                posx: 100,
                posy: 100
            }),
            paddle: Map({
                position: 320,
                speed: 5
            })
        });

        const nextState = move(state);
        expect(nextState).to.equal(Map({
            scene: GAME,
            board: Map({
              heigth: 470,
              width: 640,
            }),
            ball: Map({
                dx: 2,
                dy: -2,
                posx: 102,
                posy: 98
            }),
            paddle: Map({
                position: 320,
                speed: 5
            }),
        }));
    });
});
