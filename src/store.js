import { createStore } from 'redux';
import RootReducer from './Reducers/RootReduser';

const store = createStore(RootReducer);

export default store;