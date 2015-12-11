import {Map} from 'immutable';
import {expect} from 'chai';

import {isGameOver} from '../../src/model/game';

describe('basic game logic', () => {
  it('should return true if the ball was missed', () => {
    const state = Map({
        board: Map({
          heigth: 480,
        }),
        ball: Map({
            posy: 480
        })
    });
    const result = isGameOver(state);
    expect(result).to.equal(true);
  });
});
