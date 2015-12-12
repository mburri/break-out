import {Map, List, toJS} from 'immutable';
import {GAME, GAME_OVER} from '../const/scene-constants.js';
import {isGameOver} from './game';

const collidesWithRoof = (ball) => {
    return ball.posy + ball.dy < 0;
};

const collidesWithPaddle = (ball, paddle) => {
    return ball.posy + ball.dy > 470  && // TODO: add property for paddle.posy
           ball.posx > paddle.position &&
           ball.posx < paddle.position + paddle.width;
};

const collidesWithSides = (ball, board) => {
    return ball.posx + ball.dx > board.width || ball.posx + ball.dx < 0;
};

const inverse = (val) => val * -1;

const handleCollisionWithBricks = (state) => {
    let ball = state.get('ball').toJS();
    let bricks = state.getIn(['board', 'bricks']);
    let collided = false;
    bricks.forEach(brick => {
        if (brick.hitsLeft > 0 &&
            ball.posx > brick.posx &&
            ball.posx < brick.posx + brick.width &&
            ball.posy > brick.posy &&
            ball.posy < brick.posy + brick.heigth) {
                collided = true;
                brick.hitsLeft--;
            }
    });
    if (collided) {
        ball.dy = -ball.dy;
        return state.mergeIn(['ball'], ball)
                    .setIn(['board', 'bricks'], List(bricks));
    }
    return state;
};

const handleCollisions = (state) => {
    const ball = state.get('ball').toJS();
    const paddle = state.get('paddle').toJS();
    const board = state.get('board').toJS();

    if(collidesWithRoof(ball)) {
        return state.updateIn(['ball', 'dy'], 0, inverse);
    }
    if(collidesWithPaddle(ball, paddle)) {
        // todo: calculate new dx based on friction or collision point
        const collisionPoint = ball.posx - paddle.position;
        const acceleration = Math.cos((collisionPoint - paddle.width / 2) / (paddle.width / 2));

        return state.updateIn(['ball', 'dy'], 0, inverse)
                    .updateIn(['ball', 'dx'], 0, val => val * acceleration);
    }
    if(collidesWithSides(ball, board)) {
        return state.updateIn(['ball', 'dx'], 0, inverse);
    }

    return handleCollisionWithBricks(state);
};

export const move = (state) => {
    const collisionState = handleCollisions(state);

    if(isGameOver(state)) {
      return collisionState.set('scene', GAME_OVER);
    }
    return collisionState.setIn(['ball', 'posx'], state.getIn(['ball', 'posx']) + state.getIn(['ball', 'dx']))
                .setIn(['ball', 'posy'], state.getIn(['ball', 'posy']) + state.getIn(['ball', 'dy']));
};
