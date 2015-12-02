import {createStore} from 'redux';
import {scene} from './reducers/scene-reducer';

export default function makeStore() {
    return createStore(scene);
}
