import {createStore} from 'redux';
import {reduce} from './reducers/reducer';

export default function makeStore() {
    return createStore(reduce);
}
