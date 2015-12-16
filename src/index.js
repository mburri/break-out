import makeStore from './store';
import {GAME} from './model/scenes';
import {toJS} from 'immutable';
import * as KEYS from './const/key-codes';
import render from './view/renderer';

const store = makeStore();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var stateView = document.getElementById('state');

function step() {
    if(store.getState().get('scene') === GAME) {
        store.dispatch({type: 'UPDATE'});
    }
    window.requestAnimationFrame(step);
}

const showState = (element) => {
    element.innerHTML = JSON.stringify(store.getState().toJS(), null, 4);
};

store.subscribe(() => {
    render(store.getState(), ctx);
    showState(stateView);
});
render(store.getState(), ctx);
showState(stateView);

window.requestAnimationFrame(step);

document.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
        case KEYS.SPACE:
            store.dispatch({type: 'BEGIN_GAME'});
            break;
        case KEYS.P:
            store.dispatch({type: 'PAUSE_GAME'});
            break;
        case KEYS.R:
            store.dispatch({type: 'RESUME_GAME'});
            break;
        case KEYS.ESC:
            store.dispatch({type: 'START_GAME'});
            break;
        case KEYS.LEFT:
            store.dispatch({type: 'SPEED', value: -5});
            break;
        case KEYS.RIGHT:
            store.dispatch({type: 'SPEED', value: 5});
            break;
    }
});
