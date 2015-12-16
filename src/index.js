import {toJS} from 'immutable';

import makeStore from './store';
import {GAME} from './model/scenes';
import {begin, pause, resume, start, setSpeed} from './model/actions';
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
            store.dispatch(begin());
            break;
        case KEYS.P:
            store.dispatch(pause());
            break;
        case KEYS.R:
            store.dispatch(resume());
            break;
        case KEYS.ESC:
            store.dispatch(start());
            break;
        case KEYS.LEFT:
            store.dispatch(setSpeed(-5));
            break;
        case KEYS.RIGHT:
            store.dispatch(setSpeed(5));
            break;
    }
});
