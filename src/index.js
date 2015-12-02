import makeStore from './store';
import {START, GAME, PAUSE} from './scenes';

const store = makeStore();

function render() {
    console.log('render it because state changed to ' + store.getState().get('scene'));
    document.body.innerText = store.getState().get('scene');
}
store.subscribe(render);
render();

document.addEventListener('click', () => {
    switch(store.getState().get('scene')) {
        case START:
            store.dispatch({type: 'START_GAME'});
            break;
        case GAME:
            store.dispatch({type: 'PAUSE_GAME'});
            break;
        case PAUSE:
            store.dispatch({type: 'RESUME_GAME'});
            break;
        default:
            store.dispatch({type: 'START'});
            break;
    }
});

document.addEventListener('keydown', (event) => {
    if(event.keyCode === 27) {
        store.dispatch({type: 'GAME_OVER'});
    }
});
