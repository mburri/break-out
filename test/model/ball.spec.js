import {Map, List} from 'immutable';
import {expect} from 'chai';
import {bounceY, bounceX, move} from '../../src/model/ball';
import {GAME} from '../../src/const/scene-constants';
describe('ball', () => {
    it('should move the ball to new position', () => {
        const bricks = [
          { posx: 10, posy: 10, width: 50, heigth: 10 },
          { posx: 70, posy: 10, width: 50, heigth: 10 },
          { posx: 130, posy: 10, width: 50, heigth: 10 },
          { posx: 190, posy: 10, width: 50, heigth: 10 }
        ];
        const state = Map({
            scene: GAME,
            board: Map({
              heigth: 470,
              width: 640,
              bricks: List.of(bricks),
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
              bricks: List.of(bricks),
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
