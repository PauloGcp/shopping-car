import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout';

// maneira de criar a store substituindo o combineReducer e o createStore: *deprecated*
// configureStore possui o redux-thunk por padrao
export default configureStore({
	reducer: {
		cars: carsReducer,
		layout: layoutReducer
	}
});