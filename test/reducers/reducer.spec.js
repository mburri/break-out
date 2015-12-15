import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { reduce } from '../../src/reducers/reducer';
import { START, GAME } from '../../src/const/scene-constants';

describe('reducer', () => {
    it('should start the game with the initial state', () => {
        const bricks = fromJS([
          { posx: 10, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 70, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 130, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 190, posy: 10, width: 50, heigth: 10, hitsLeft: 2 }
        ]);

        const nextState = reduce(undefined, {
            type: 'START_GAME'
        });
        expect(nextState).to.equal(Map({
            scene: START,
            board: Map({
              bricks : bricks,
              heigth: 480,
              width: 640
            }),
            ball: Map({
                dx: 4,
                dy: 4,
                posx: 320,
                posy: 100
            }),
            paddle: Map({
                speed: 0,
                position: 300,
                width: 75
            })
        }));
    });

    it('should return state on unknown action', () => {
        const state = 'a state';
        const nextState = reduce(state, {
            type: 'unknown'
        });
        expect(nextState).to.equal(state);
    });

    it('should begin the game', () => {
        const state = Map({
            scene: START,
            ball: Map({
                dx: 2,
                dy: 2,
                posx: 320,
                posy: 100
            }),
            paddle: Map({
                speed: 0,
                position: 300
            })
        });
        const nextState = reduce(state, {type: 'BEGIN_GAME'});
        expect(nextState).to.equal(Map({
            scene: GAME,
            ball: Map({
                dx: 2,
                dy: 2,
                posx: 320,
                posy: 100
            }),
            paddle: Map({
                speed: 0,
                position: 300
            })
        }));
    });

    it('should update the game state', () => {
        const bricks = fromJS([
          { posx: 10, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 70, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 130, posy: 10, width: 50, heigth: 10, hitsLeft: 1 },
          { posx: 190, posy: 10, width: 50, heigth: 10, hitsLeft: 2 }
        ]);
        const state = Map({
            scene: GAME,
            board: Map({
              heigth: 480,
              width: 640,
              bricks: bricks
            }),
            ball: Map({
                dx: 2,
                dy: 2,
                posx: 320,
                posy: 100
            }),
            paddle: Map({
                speed: 5,
                position: 300
            })
        });
        const nextState = reduce(state, {type: 'UPDATE'});
        expect(nextState).to.equal(
            Map({
                scene: GAME,
                board: Map({
                  heigth: 480,
                  width: 640,
                  bricks : bricks
                }),
                ball: Map({
                    dx: 2,
                    dy: 2,
                    posx: 322,
                    posy: 102
                }),
                paddle: Map({
                    speed: 5,
                    position: 305
                })
            })
        );
    });
});
