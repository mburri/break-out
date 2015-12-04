import {createStore, combineReducers} from 'redux';
import {scene} from './reducers/scene-reducer';
import {paddle} from './reducers/paddle-reducer';

export default function makeStore() {
    return createStore(combineReducers({scene, paddle }));
}
