//toolkit nos auxilia na criação de actions, reducer, etc.
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	showMessage: false,
	typeMessage: ''
};

//actions types:
export const Types = {
	SHOW_MESSAGE: "SHOW_MESSAGE",
	HIDE_MESSAGE: "HIDE_MESSAGE"
}

//forma simplificada de criar actions com o redux toolkit. (o payload é passado quando a action creator for chamada. O payload é passado em formato de parametro)
export const showMessage = createAction(Types.SHOW_MESSAGE)
export const hideMessage = createAction(Types.HIDE_MESSAGE)

//--------formato padrao do uma action creator------------
/* export const showMessage = ()=>{
	return ({
		type: Types.SHOW_MESSAGE,
		payload: true
	})
} */

//reducer criado a partir do toolkit
export default createReducer(INITIAL_STATE, {
	[showMessage]: (state, action)=>({ ...state, showMessage: true, typeMessage: action.payload || '' }),
	[hideMessage]: (state, action)=>({ ...state, showMessage: false })
})
/*------------------ reducer sem o toolkit--------------------
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SHOW_MESSAGE:
			return { ...state, showMessage: true };
		default:
			return state;
	}
}; */




