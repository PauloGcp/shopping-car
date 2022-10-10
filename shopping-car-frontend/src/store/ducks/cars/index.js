import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addCar = createAction('ADD_CAR')

export const addCars = createAction("ADD_CARS")

export default createReducer(INITIAL_STATE, {
	[addCar]: (state, action) =>([...state, action.payload]),
	[addCars]: (state, action) => [...action.payload]
})
